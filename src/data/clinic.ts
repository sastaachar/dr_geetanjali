// Single source of truth for clinic details used across the site.

export const clinic = {
  name: "Dr. Geetanjali’s Dental Care",
  tagline: "Implantology · Wanwadi, Pune",
  fullName: "Dr. Geetanjali’s Dental Care. Implantology",
  doctor: {
    name: "Dr. Geetanjali Shinde",
    role: "Dental Surgeon & Implantologist",
    qualification: "BDS, Nair Hospital Dental College, Mumbai",
  },
  phoneDisplay: "093731 43403",
  phoneE164: "+919373143403",
  whatsapp: "https://wa.me/919373143403",
  instagram: {
    handle: "@dr.geetanjalis_dentalcare",
    url: "https://www.instagram.com/dr.geetanjalis_dentalcare",
  },
  address: {
    lines: [
      "Office No. 205, Aastha Seagull Society,",
      "Jambhulkar Chowk, Wanwadi,",
      "Pune, Maharashtra 411040",
    ],
    mapsUrl: "https://share.google/T87CpfJBVumy9ecPv",
  },
  hours: [
    { days: "Monday – Saturday", time: "10 am – 9 pm" },
    { days: "Sunday", time: "11 am – 5 pm" },
  ],
  hoursShort: "Mon–Sat 10 am – 9 pm · Sun 11 am – 5 pm",
  rating: { value: 4.9, count: 67 },
};

export const services = [
  {
    title: "Dental implants",
    desc: "Single-tooth to full-mouth implant rehabilitation — our specialty, planned and placed in-clinic.",
  },
  {
    title: "Painless root canal",
    desc: "Modern rotary RCT that saves your natural tooth, usually completed comfortably in one or two visits.",
  },
  {
    title: "Check-ups & cleaning",
    desc: "Routine examinations, scaling and polishing to keep gums healthy and problems caught early.",
  },
  {
    title: "Smile makeover",
    desc: "Teeth whitening, reshaping and bonding tailored to your face — subtle, natural-looking results.",
  },
  {
    title: "Braces & alignment",
    desc: "Orthodontic correction for crowded or misaligned teeth, for teens and adults.",
  },
  {
    title: "Kids’ dentistry",
    desc: "Gentle, patient care for children — first check-ups, cavity care, and habits that last a lifetime.",
  },
  {
    title: "Crowns & bridges",
    desc: "Durable, well-matched restorations to rebuild broken or missing teeth.",
  },
  {
    title: "Extractions",
    desc: "Careful, comfortable removal of damaged or wisdom teeth when saving them isn’t possible.",
  },
  {
    title: "Emergency care",
    desc: "Sudden pain, swelling or a broken tooth? Call us — we keep time for same-day emergencies.",
  },
];

export const implantSteps = [
  {
    title: "Consultation & planning",
    desc: "A thorough examination and X-ray assessment to map your bone and plan the exact position of the implant.",
  },
  {
    title: "Implant placement",
    desc: "The titanium post is placed under local anaesthesia in a short, comfortable procedure, then left to fuse with the bone.",
  },
  {
    title: "Your new tooth",
    desc: "Once healed, a custom-matched crown is fixed on the implant — and you eat, speak and smile as before.",
  },
];

export const reviews = [
  {
    quote:
      "The dentist here is so caring and solved all my problems and guided me well throughout the process. The place is very hygienic and in a good area overall.",
    source: "Google review",
  },
  {
    quote: "Exceptional care, friendly staff, clean environment and efficient service.",
    source: "Google review",
  },
  {
    quote: "I consult her for regular checkups as well, the experience overall is very good.",
    source: "Google review",
  },
];
