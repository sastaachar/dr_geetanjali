// Content for the dedicated treatment pages (/treatments/<slug>/).
// Each entry targets one primary search keyword and mentions nearby
// localities naturally, per the local-SEO plan.

export type Treatment = {
  slug: string;
  /** Short name used on cards, breadcrumbs and interlinks. */
  name: string;
  /** <title> tag — primary keyword + locality. */
  title: string;
  metaDescription: string;
  /** One-line card copy for listings and interlinks. */
  short: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  /** "When you need this / what you get" cards. */
  highlights: { title: string; desc: string }[];
  /** Optional what-to-expect steps, rendered like the implant band. */
  steps?: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  /** Slugs of related treatments, for topical interlinking. */
  related: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "root-canal-treatment",
    name: "Root canal treatment",
    title: "Root Canal Treatment in Wanowrie, Pune | Dr. Geetanjali’s Dental Care",
    metaDescription:
      "Painless single-visit root canal treatment in Wanowrie (Wanwadi), Pune. Modern rotary RCT with local anaesthesia by Dr. Geetanjali Shinde. Open all 7 days. Call 093731 43403.",
    short: "Painless rotary RCT that saves your natural tooth, usually done in one or two visits.",
    eyebrow: "Save your natural tooth",
    h1: "Root canal treatment in Wanowrie, Pune",
    intro: [
      "A root canal removes infection from inside the tooth so you can keep your natural tooth instead of extracting it. At our clinic in Wanwadi, just off Jambhulkar Chowk, we use modern rotary endodontics and effective local anaesthesia, so for almost every patient the procedure is completely painless.",
      "Most root canals here are finished in one or two visits, with evening and Sunday slots that suit working patients from Wanowrie, Fatima Nagar, Salunkhe Vihar and NIBM Road.",
    ],
    highlights: [
      {
        title: "Signs you may need one",
        desc: "Lingering toothache, pain on chewing, sensitivity to hot or cold that doesn’t fade, a darkened tooth, or swelling near the gum.",
      },
      {
        title: "Painless, modern technique",
        desc: "Rotary instruments clean and shape the canals quickly and precisely, under local anaesthesia. No drilling marathon, no guesswork.",
      },
      {
        title: "Usually one or two visits",
        desc: "Straightforward cases are often completed in a single sitting; complex infections may need a second short visit.",
      },
      {
        title: "Finished with a crown",
        desc: "A root-canal-treated tooth is usually protected with a crown so it stays strong for years of normal chewing.",
      },
    ],
    steps: [
      {
        title: "Diagnosis & X-ray",
        desc: "We confirm the tooth actually needs a root canal (sometimes a filling is enough) and explain the plan and cost before starting.",
      },
      {
        title: "Cleaning the canals",
        desc: "Under local anaesthesia, the infected pulp is removed and the canals are cleaned, shaped and disinfected.",
      },
      {
        title: "Sealing & crown",
        desc: "The canals are sealed, the tooth is built up, and a crown is fitted so the tooth works like new.",
      },
    ],
    faqs: [
      {
        q: "Is root canal treatment painful?",
        a: "No. With modern rotary technique and proper local anaesthesia, root canal treatment feels similar to getting a filling. Mild soreness for a day or two afterwards is normal and settles with simple painkillers.",
      },
      {
        q: "How much does a root canal cost in Pune?",
        a: "The cost depends on which tooth is involved and how complex the canals are. We examine the tooth first and give you a clear written estimate, including the crown, before any treatment starts.",
      },
      {
        q: "Do I need a root canal or just a filling?",
        a: "If decay hasn’t reached the nerve, a filling is enough, and that’s what we’ll recommend. A root canal is only needed when the pulp inside the tooth is infected or inflamed. An examination and X-ray tells us which one you need.",
      },
      {
        q: "How long does a root canal tooth last?",
        a: "With a well-done root canal and a crown on top, the tooth can last decades, often a lifetime, with normal brushing and regular check-ups.",
      },
    ],
    related: ["crowns-and-bridges", "emergency-dentist", "teeth-cleaning"],
  },
  {
    slug: "dental-implants",
    name: "Dental implants",
    title: "Dental Implants in Wanowrie, Pune | Dr. Geetanjali’s Dental Care",
    metaDescription:
      "Dental implants in Wanowrie (Wanwadi), Pune by implantologist Dr. Geetanjali Shinde. Single tooth to full-mouth rehabilitation, planned and placed in-clinic. Call 093731 43403.",
    short: "Fixed replacement teeth on titanium roots. Our specialty, from one tooth to a full mouth.",
    eyebrow: "Our specialty",
    h1: "Dental implants in Wanowrie, Pune",
    intro: [
      "A dental implant is the closest thing to growing your tooth back: a small titanium post replaces the root, and a custom crown replaces the tooth. It looks, feels and chews like your own.",
      "Implantology is Dr. Geetanjali Shinde’s specialty. From a single missing tooth to full-mouth rehabilitation, the entire treatment (planning, placement and the final crown) is done at our clinic in Wanwadi, minutes from Fatima Nagar, NIBM Road and Pune Camp.",
    ],
    highlights: [
      {
        title: "Fixed, not removable",
        desc: "Unlike dentures, implants are fixed in the jaw. No slipping, no adhesives, no taking them out at night.",
      },
      {
        title: "Protects your jawbone",
        desc: "An implant stimulates the bone the way a natural root does, preventing the bone loss that follows a missing tooth.",
      },
      {
        title: "Neighbouring teeth untouched",
        desc: "A bridge requires grinding the adjacent teeth; an implant stands on its own and leaves healthy teeth alone.",
      },
      {
        title: "Single tooth to full mouth",
        desc: "One implant, multiple implants, or implant-supported full-arch solutions, planned to your bone and budget.",
      },
    ],
    steps: [
      {
        title: "Consultation & planning",
        desc: "A thorough examination and X-ray assessment maps your bone and plans the exact implant position.",
      },
      {
        title: "Implant placement",
        desc: "The titanium post is placed under local anaesthesia in a short, comfortable procedure, then left to fuse with the bone.",
      },
      {
        title: "Your new tooth",
        desc: "Once healed, a custom-matched crown is fixed on the implant, and you eat, speak and smile as before.",
      },
    ],
    faqs: [
      {
        q: "How long do dental implants last?",
        a: "With good oral hygiene and regular check-ups, implants routinely last 15–25 years and often a lifetime. The crown on top may need replacement after 10–15 years of wear.",
      },
      {
        q: "Is implant placement painful?",
        a: "The placement is done under local anaesthesia and most patients are surprised how comfortable it is. Many compare it to a tooth extraction, and manage the next day or two with ordinary painkillers.",
      },
      {
        q: "How much do dental implants cost in Pune?",
        a: "The cost depends on the implant system, how many teeth are being replaced, and whether any bone preparation is needed. After an examination and X-ray we give you a complete written plan with the full cost. No surprises mid-treatment.",
      },
      {
        q: "Am I too old for implants?",
        a: "There is no upper age limit. Bone health matters more than age. We assess your bone with X-rays and plan accordingly; most healthy adults are good candidates.",
      },
    ],
    related: ["crowns-and-bridges", "dentures", "wisdom-tooth-removal"],
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom tooth removal",
    title: "Wisdom Tooth Removal in Wanowrie, Pune | Dr. Geetanjali’s Dental Care",
    metaDescription:
      "Safe, comfortable wisdom tooth extraction in Wanowrie (Wanwadi), Pune. Impacted and painful wisdom teeth removed under local anaesthesia. Same-day emergency slots. Call 093731 43403.",
    short: "Gentle removal of painful or impacted wisdom teeth under effective local anaesthesia.",
    eyebrow: "Comfortable extractions",
    h1: "Wisdom tooth removal in Wanowrie, Pune",
    intro: [
      "Wisdom teeth often arrive without enough room, pushing against the neighbouring tooth, trapping food, or repeatedly inflaming the gum. When a wisdom tooth keeps causing trouble, removing it is usually the kindest option for the rest of your mouth.",
      "At our Wanwadi clinic we remove wisdom teeth under effective local anaesthesia, gently and without rushing. Patients come to us from Wanowrie, Hadapsar, Salunkhe Vihar and Camp, and same-day slots are kept for acute pain.",
    ],
    highlights: [
      {
        title: "When removal is needed",
        desc: "Repeated pain or swelling, food trapping and decay, a partially erupted tooth with inflamed gum, or pressure damaging the tooth in front.",
      },
      {
        title: "When it isn’t",
        desc: "A fully erupted, well-positioned wisdom tooth that you can clean properly can stay. We only recommend removal when keeping it causes harm.",
      },
      {
        title: "Anaesthesia that actually works",
        desc: "We take time to make sure the area is fully numb before starting. The most common feedback we hear is “that was much easier than I feared.”",
      },
      {
        title: "Clear aftercare",
        desc: "You leave with simple written aftercare instructions and direct contact details in case anything worries you while healing.",
      },
    ],
    faqs: [
      {
        q: "When should wisdom teeth be removed?",
        a: "When they repeatedly cause pain, swelling or infection, trap food and decay, damage the neighbouring tooth, or are impacted at an angle that will never let them erupt properly. A check-up and X-ray shows exactly what your wisdom tooth is doing.",
      },
      {
        q: "Is wisdom tooth removal painful?",
        a: "The extraction itself is done under local anaesthesia, so you feel pressure but not pain. Some soreness and swelling for two to three days afterwards is normal and manageable with prescribed medication.",
      },
      {
        q: "How long is recovery after wisdom tooth extraction?",
        a: "Most people are back to work or college the next day. The socket itself heals over one to two weeks; we give you clear dos and don’ts for the first 48 hours, which matter most.",
      },
      {
        q: "What does wisdom tooth removal cost in Pune?",
        a: "It depends on whether the tooth is fully erupted or impacted. After examining the tooth and X-ray we tell you the exact cost before proceeding. Simple extractions cost less than surgical (impacted) ones.",
      },
    ],
    related: ["emergency-dentist", "root-canal-treatment", "dental-implants"],
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth cleaning",
    title: "Teeth Cleaning (Scaling & Polishing) in Wanowrie, Pune | Dr. Geetanjali’s",
    metaDescription:
      "Professional teeth cleaning in Wanowrie (Wanwadi), Pune. Gentle scaling and polishing to remove tartar and stains, keep gums healthy and breath fresh. Call 093731 43403.",
    short: "Scaling and polishing that removes tartar and stains, keeping gums healthy for the long run.",
    eyebrow: "Prevention first",
    h1: "Teeth cleaning in Wanowrie, Pune",
    intro: [
      "Professional cleaning (scaling and polishing) removes the hardened tartar and stains that brushing can’t, keeping gums healthy and catching small problems before they become root canals.",
      "It’s the simplest, cheapest dental treatment there is, and the one that saves you the most money long-term. Our clinic near Jambhulkar Chowk, Wanwadi serves families from Wanowrie, Fatima Nagar, NIBM Road and Salunkhe Vihar, with evening and Sunday appointments.",
    ],
    highlights: [
      {
        title: "What scaling does",
        desc: "An ultrasonic scaler gently vibrates tartar off the teeth and from under the gumline, the deposits that cause bleeding gums and bad breath.",
      },
      {
        title: "What polishing does",
        desc: "A polishing paste smooths the enamel and lifts surface stains from tea, coffee and tobacco, leaving teeth noticeably brighter.",
      },
      {
        title: "Gum disease caught early",
        desc: "Bleeding while brushing is the first sign of gingivitis. Caught at a cleaning visit, it reverses completely; ignored, it progresses to bone loss.",
      },
      {
        title: "A full check-up included",
        desc: "Every cleaning visit includes an examination, so cavities, cracked fillings and other issues are spotted while they’re still small and cheap to fix.",
      },
    ],
    faqs: [
      {
        q: "Does scaling damage or loosen teeth?",
        a: "No. This is the most common teeth-cleaning myth. Scaling removes tartar sitting on the tooth surface. If teeth feel slightly loose or gaps appear afterwards, that space was previously packed with tartar; the cleaning revealed the problem, it didn’t cause it.",
      },
      {
        q: "How often should I get my teeth cleaned?",
        a: "Every six months for most people. If you have gum disease, wear braces, or are a smoker, we may recommend more frequent visits.",
      },
      {
        q: "Is teeth cleaning painful?",
        a: "For most patients it’s completely comfortable: a light vibration and water spray. If your gums are inflamed there can be mild sensitivity, which fades within a day or two.",
      },
      {
        q: "How much does teeth cleaning cost in Pune?",
        a: "Scaling and polishing is one of the most affordable dental treatments. The exact cost depends on how much deposit has built up. We confirm it at the examination before starting.",
      },
    ],
    related: ["smile-designing", "pediatric-dentistry", "root-canal-treatment"],
  },
  {
    slug: "smile-designing",
    name: "Smile designing",
    title: "Smile Designing & Teeth Whitening in Wanowrie, Pune | Dr. Geetanjali’s",
    metaDescription:
      "Smile makeover in Wanowrie (Wanwadi), Pune. Teeth whitening, reshaping, bonding and veneers tailored to your face for natural-looking results. Call 093731 43403.",
    short: "Whitening, bonding and veneers combined into a natural-looking smile designed for your face.",
    eyebrow: "Cosmetic dentistry",
    h1: "Smile designing in Wanowrie, Pune",
    intro: [
      "Smile designing is the art of small, precise changes (whitening, reshaping, bonding, veneers) combined so the result looks natural, not “done”. The goal is a smile that suits your face, in proportion with your lips and features.",
      "Every makeover at our Wanwadi clinic starts with a conversation about what bothers you when you smile, followed by a plan you approve before anything touches your teeth. Patients visit us from Wanowrie, NIBM Road, Fatima Nagar and across Pune.",
    ],
    highlights: [
      {
        title: "Teeth whitening",
        desc: "Professional whitening lifts years of tea, coffee and age-related yellowing in a single visit, several shades brighter, safely.",
      },
      {
        title: "Bonding & reshaping",
        desc: "Chips, small gaps and uneven edges corrected in one sitting with tooth-coloured composite, sculpted and polished to match.",
      },
      {
        title: "Veneers",
        desc: "Thin porcelain facings for more dramatic changes in colour or shape, planned tooth by tooth so the smile stays believable.",
      },
      {
        title: "Designed to your face",
        desc: "We plan the smile against your facial proportions and show you what’s changing before we start. No surprises.",
      },
    ],
    faqs: [
      {
        q: "Does teeth whitening damage teeth?",
        a: "Professionally supervised whitening does not damage enamel. Temporary sensitivity for a day or two is the only common side effect. Unsupervised, overused home kits are where problems arise, which is why we check your teeth first.",
      },
      {
        q: "How long does teeth whitening last?",
        a: "Typically one to three years, depending on tea, coffee, and smoking habits. Good brushing and periodic touch-ups keep the shade bright.",
      },
      {
        q: "How much does a smile makeover cost in Pune?",
        a: "It depends entirely on what your smile needs. Whitening alone costs far less than a full veneer case. After the consultation you get an itemised plan and cost for exactly the changes you want.",
      },
      {
        q: "Will the result look natural?",
        a: "That’s the entire point of designing rather than just treating. We match shape and shade to your face and show you the plan first. The best compliment is people noticing you look great without spotting why.",
      },
    ],
    related: ["teeth-cleaning", "crowns-and-bridges", "dental-implants"],
  },
  {
    slug: "pediatric-dentistry",
    name: "Kids’ dentistry",
    title: "Pediatric Dentist in Wanowrie, Pune | Kids’ Dentistry | Dr. Geetanjali’s",
    metaDescription:
      "Gentle children’s dentist in Wanowrie (Wanwadi), Pune. First check-ups, cavity care, fluoride and habit guidance, delivered so kids leave smiling. Call 093731 43403.",
    short: "First check-ups, cavity care and prevention, delivered gently so kids leave smiling.",
    eyebrow: "Gentle care for children",
    h1: "Kids’ dentistry in Wanowrie, Pune",
    intro: [
      "A child’s first dental visits decide how they feel about dentists for the rest of their life. We keep appointments unhurried, explain everything in kid-language, and never force a frightened child through treatment.",
      "Families from Wanowrie, Wanwadi, Salunkhe Vihar and Hadapsar bring their children to us for first check-ups, cavity care and preventive treatments, with evening and Sunday timings that work around school.",
    ],
    highlights: [
      {
        title: "First check-ups",
        desc: "Short, friendly visits that let your child get comfortable in the chair, ideally starting around their first birthday.",
      },
      {
        title: "Cavity care for milk teeth",
        desc: "Milk teeth matter: they hold space for permanent teeth and infections in them hurt just as much. Small fillings done gently, early.",
      },
      {
        title: "Fluoride & sealants",
        desc: "Preventive treatments that make young enamel more resistant to decay: a few painless minutes that prevent fillings later.",
      },
      {
        title: "Habit guidance",
        desc: "Thumb-sucking, bottle habits, brushing technique and diet advice, practical guidance for parents, without lectures.",
      },
    ],
    faqs: [
      {
        q: "At what age should my child first see a dentist?",
        a: "Around their first birthday, or within six months of the first tooth appearing. Early visits are quick and friendly. The goal is familiarity, so that if treatment is ever needed, the chair is already a known place.",
      },
      {
        q: "Do milk teeth cavities really need filling?",
        a: "Yes. Milk teeth guide the permanent teeth into position and are needed for chewing and speech until age 10–12. An infected milk tooth causes real pain and can damage the permanent tooth developing underneath.",
      },
      {
        q: "What if my child is scared of the dentist?",
        a: "That’s normal and we plan for it. We start with a look-and-count visit, use tell-show-do, and let the child set the pace. Most fearful children are cooperative by their second or third visit.",
      },
      {
        q: "How can I prevent cavities in my child’s teeth?",
        a: "Brush twice daily with a fluoride toothpaste (a smear for toddlers, pea-sized from age three), avoid frequent sugary snacks and bedtime bottles, and keep six-monthly check-ups so anything small is caught early.",
      },
    ],
    related: ["teeth-cleaning", "emergency-dentist", "root-canal-treatment"],
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & bridges",
    title: "Dental Crowns & Bridges in Wanowrie, Pune | Dr. Geetanjali’s Dental Care",
    metaDescription:
      "Natural-looking dental crowns and bridges in Wanowrie (Wanwadi), Pune. Rebuild broken teeth or replace missing ones with durable, well-matched restorations. 093731 43403.",
    short: "Durable, shade-matched restorations that rebuild broken teeth or bridge a gap.",
    eyebrow: "Rebuild & replace",
    h1: "Dental crowns & bridges in Wanowrie, Pune",
    intro: [
      "A crown is a custom-made cap that restores a broken, heavily filled or root-canal-treated tooth to full strength. A bridge uses crowns on neighbouring teeth to hold a replacement tooth in a gap.",
      "At our clinic in Wanwadi we match the shape and shade to your natural teeth, so the restoration disappears into your smile. Patients from Wanowrie, Fatima Nagar, NIBM and Camp typically need just two visits.",
    ],
    highlights: [
      {
        title: "When a crown is needed",
        desc: "After a root canal, for a cracked or badly broken tooth, a tooth worn flat, or a large old filling that keeps fracturing.",
      },
      {
        title: "When a bridge makes sense",
        desc: "To fill a gap of one or two missing teeth when the neighbouring teeth already need crowns, a fixed alternative to a removable denture.",
      },
      {
        title: "Materials that match",
        desc: "From full-ceramic and zirconia for front teeth to metal-ceramic for heavy chewing areas. We recommend based on the tooth’s position and your budget.",
      },
      {
        title: "Bridge or implant?",
        desc: "An implant fills a gap without grinding the neighbouring teeth. We explain both options honestly so you choose what suits your mouth and budget.",
      },
    ],
    faqs: [
      {
        q: "How long do dental crowns last?",
        a: "Typically 10–15 years, often longer with good hygiene. The crown itself doesn’t decay, but the tooth under it can, so brushing at the crown margin and regular check-ups matter.",
      },
      {
        q: "How many visits does a crown or bridge take?",
        a: "Usually two: one to prepare the tooth and take measurements, and one about a week later to fit the final restoration. You wear a temporary in between.",
      },
      {
        q: "What does a crown cost in Pune?",
        a: "It depends on the material: metal-ceramic, full ceramic and zirconia are priced differently. We show you the options and exact costs at the examination so you can choose.",
      },
      {
        q: "Is getting a crown painful?",
        a: "No. The tooth is numbed while it’s shaped, and fitting the final crown usually needs no anaesthesia at all. Mild sensitivity for a few days after preparation is normal.",
      },
    ],
    related: ["root-canal-treatment", "dental-implants", "dentures"],
  },
  {
    slug: "dentures",
    name: "Dentures",
    title: "Dentures in Wanowrie, Pune | Full & Partial | Dr. Geetanjali’s Dental Care",
    metaDescription:
      "Comfortable full and partial dentures in Wanowrie (Wanwadi), Pune. Natural-looking replacements fitted and adjusted until they feel right. Call 093731 43403.",
    short: "Full, partial and implant-supported dentures, fitted and adjusted until they feel right.",
    eyebrow: "Complete your smile",
    h1: "Dentures in Wanowrie, Pune",
    intro: [
      "Well-made dentures restore what missing teeth take away: comfortable chewing, clear speech, and the facial support that keeps you looking like yourself. Badly made ones sit in a drawer, which is why fit and follow-up matter more than anything.",
      "At our Wanwadi clinic we take the time to get the fit right, with adjustment visits included until the denture feels like part of you. We serve patients from Wanowrie, Salunkhe Vihar, Hadapsar and across Pune, with implant-supported options for those who want maximum stability.",
    ],
    highlights: [
      {
        title: "Complete dentures",
        desc: "A full set replacing all upper and/or lower teeth, designed for your face so cheeks and lips get their support back.",
      },
      {
        title: "Partial dentures",
        desc: "Replace a few missing teeth while clasping comfortably onto the ones you have: removable, affordable and quick to make.",
      },
      {
        title: "Implant-supported dentures",
        desc: "Two to four implants can lock a denture firmly in place, with no slipping while eating or speaking. The most life-changing upgrade for loose lower dentures.",
      },
      {
        title: "Adjustments included",
        desc: "New dentures always need fine-tuning. Follow-up visits to relieve sore spots and perfect the bite are part of the treatment, not an extra.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to get used to new dentures?",
        a: "Expect two to four weeks. Speech and eating feel odd at first. Start with soft foods cut small, read aloud to practise speech, and come in for adjustments if any spot stays sore beyond a few days.",
      },
      {
        q: "How long do dentures last?",
        a: "Five to eight years on average. The denture wears and your gums slowly change shape, so the fit loosens over time. Relines and eventual remakes keep them comfortable.",
      },
      {
        q: "What do dentures cost in Pune?",
        a: "It varies with the type (partial, complete, or implant-supported) and the materials used. After examining your mouth we give you the options with exact costs so you can decide.",
      },
      {
        q: "My denture is loose. What are my options?",
        a: "A reline can refit an otherwise good denture to your gums. If looseness keeps returning, two to four implants can hold the denture firmly, worth discussing at a consultation.",
      },
    ],
    related: ["dental-implants", "crowns-and-bridges", "teeth-cleaning"],
  },
  {
    slug: "emergency-dentist",
    name: "Emergency dentist",
    title: "Emergency Dentist in Wanowrie, Pune | Same-Day | Dr. Geetanjali’s Dental Care",
    metaDescription:
      "Dental emergency in Wanowrie or Wanwadi, Pune? Same-day appointments for severe toothache, swelling, broken teeth and knocked-out teeth. Open all 7 days. Call 093731 43403.",
    short: "Same-day slots for severe pain, swelling, broken or knocked-out teeth. Open all 7 days.",
    eyebrow: "Same-day care",
    h1: "Emergency dentist in Wanowrie, Pune",
    intro: [
      "Severe toothache at night, a swollen face, a tooth broken in a fall: dental emergencies don’t wait for a convenient time. We keep same-day slots for emergencies, and we’re open all seven days, until 9 pm on weekdays.",
      "The clinic is at Jambhulkar Chowk, Wanwadi, minutes from Wanowrie, Fatima Nagar, Salunkhe Vihar, NIBM Road and Camp. Call or WhatsApp 093731 43403 and tell us what’s happened; we’ll tell you exactly what to do until you reach us.",
    ],
    highlights: [
      {
        title: "Severe toothache",
        desc: "Relentless throbbing pain usually means the nerve is inflamed or infected. We relieve the pain the same day, then treat the cause.",
      },
      {
        title: "Swelling or abscess",
        desc: "Facial swelling with a bad tooth is an infection that needs prompt attention. Don’t wait for it to “settle”, it rarely does.",
      },
      {
        title: "Broken or chipped tooth",
        desc: "Save any broken fragment in milk or saline and come in. Many broken teeth can be rebuilt the same visit.",
      },
      {
        title: "Knocked-out tooth",
        desc: "Minutes matter. Hold the tooth by the crown (not the root), keep it in milk or inside the cheek, and get here immediately. Reimplantation works best within an hour.",
      },
    ],
    faqs: [
      {
        q: "Can I get a same-day dental appointment?",
        a: "Yes. We keep time in every day’s schedule for emergencies. Call or WhatsApp 093731 43403 first so we can prioritise you and tell you what to do meanwhile.",
      },
      {
        q: "What should I do for severe tooth pain at night?",
        a: "Take an over-the-counter painkiller as per its label, keep your head elevated, avoid very hot or cold food, and never place aspirin against the gum, as it burns the tissue. Message us on WhatsApp; we’ll see you at the earliest slot.",
      },
      {
        q: "A tooth got knocked out. Can it be saved?",
        a: "Often yes, if you act fast. Hold it by the white crown, rinse gently without scrubbing, keep it in milk or tucked in your cheek, and reach us as quickly as possible. The first hour gives the best chance.",
      },
      {
        q: "Is the clinic open on Sundays?",
        a: "Yes. We’re open Sunday 11 am to 5 pm, and Monday to Saturday 10 am to 9 pm. Emergencies are seen the same day whenever possible.",
      },
    ],
    related: ["root-canal-treatment", "wisdom-tooth-removal", "crowns-and-bridges"],
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
