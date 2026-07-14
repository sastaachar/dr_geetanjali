// Vercel serverless function: receives "Book an appointment" form submissions
// and forwards them to a notification webhook (e.g. a Slack incoming webhook)
// configured via the APPOINTMENTS_WEBHOOK_URL environment variable.

const NAME_MAX = 80;
const PHONE_MAX = 20;
const MESSAGE_MAX = 500;
const PHONE_PATTERN = /^[0-9+\-\s()]{6,20}$/;

// Best-effort in-memory rate limit. Serverless instances are ephemeral and may
// be recycled between invocations, so this is a soft limiter, not a guarantee.
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map();

function isRateLimited(key) {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

function isNonEmptyString(value, maxLength) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function validatePayload(body) {
  if (typeof body !== "object" || body === null) {
    return "Invalid request body.";
  }
  // Honeypot: real visitors never populate this hidden field.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return "Invalid request body.";
  }
  if (!isNonEmptyString(body.name, NAME_MAX)) {
    return "Please provide a valid name.";
  }
  if (!isNonEmptyString(body.phone, PHONE_MAX) || !PHONE_PATTERN.test(body.phone.trim())) {
    return "Please provide a valid phone number.";
  }
  if (body.message !== undefined && body.message !== "" && !isNonEmptyString(body.message, MESSAGE_MAX)) {
    return "Message is too long.";
  }
  if (body.preferredDate !== undefined && body.preferredDate !== "" && typeof body.preferredDate !== "string") {
    return "Invalid preferred date.";
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const clientIp = (req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown")
    .toString()
    .split(",")[0]
    .trim();

  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
  }

  const validationError = validatePayload(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { name, phone, preferredDate, message } = req.body;

  const webhookUrl = process.env.APPOINTMENTS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("APPOINTMENTS_WEBHOOK_URL is not configured.");
    return res.status(500).json({ error: "Appointment requests are temporarily unavailable." });
  }

  try {
    const notification = {
      text: [
        "New appointment request",
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        preferredDate ? `Preferred date: ${preferredDate.trim()}` : null,
        message ? `Message: ${message.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notification),
    });

    if (!webhookResponse.ok) {
      console.error(`Webhook responded with status ${webhookResponse.status}`);
      return res.status(502).json({ error: "Could not submit your request. Please call the clinic instead." });
    }
  } catch (err) {
    console.error("Failed to forward appointment request:", err instanceof Error ? err.message : err);
    return res.status(502).json({ error: "Could not submit your request. Please call the clinic instead." });
  }

  return res.status(200).json({ ok: true });
}
