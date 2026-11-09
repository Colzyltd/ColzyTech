// Everything you'll want to edit lives in src/data. Change text here, not in components.

export const SITE = {
  brand: "COLZY",
  name: "Columbcille Agbeh Oke",
  nickname: "Colzy",
  role: "Full-Stack Developer",
  company: "Colzy Technologies",
  tagline: "Building the Digital Future, One Pixel at a Time.",
  location: "Abuja, Nigeria",
  email: "contact@colzyltd.com",      
  phone: "+234 817 9620 225",
  formspreeId: "YOUR_FORM_ID",   // TODO: create a free form at formspree.io and paste its ID
  socials: [                     // TODO: replace with your real profile links
    { label: "GitHub",    short: "GH", href: "https://github.com/Colzyltd" },
    { label: "LinkedIn",  short: "IN", href: "https://linkedin.com/" },
    { label: "Instagram", short: "IG", href: "https://instagram.com/" },
    { label: "X",         short: "X",  href: "https://x.com/colzy_tech" },
  ],
};

export const NAV = [
  { id: "home",      label: "Home" },
  { id: "about",     label: "About" },
  { id: "services",  label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact",   label: "Contact" },
];
export const NAV_IDS = NAV.map((n) => n.id);
