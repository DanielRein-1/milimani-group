export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  intro: string;
  coverage: string[];
  suitability: string;
  example: string;
  icon: "support" | "network" | "admin" | "security" | "web";
};

export type ProjectItem = {
  title: string;
  summary: string;
  tags: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const company = {
  name: "MLIMANI GROUP",
  shortLabel: "ICT SUPPORT • NETWORKING • WEB",
  description:
    "Practical ICT support, networking, systems administration and web support for everyday business needs.",
  aboutIntro:
    "The website presents ICT support for offices, schools, shops, and small businesses in Busia and surrounding areas.",
  contact: {
    phoneDisplay: "0105668218",
    phoneHref: "https://wa.me/254105668218",
    email: "milimanigroup485@gmail.com",
    location: "Busia, Kenya | P.O. Box 485, Busia",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const serviceHighlights = [
  {
    title: "IT Support & Maintenance",
    description:
      "Reliable troubleshooting and routine checks to keep computers, devices and office systems running smoothly.",
    intro:
      "We help with day-to-day technical issues so teams can keep working without avoidable disruptions.",
    coverage: [
      "Computer and printer troubleshooting",
      "Routine maintenance checks",
      "Device setup and basic repairs guidance",
    ],
    suitability: "Best for offices, schools and small businesses that need practical help when equipment develops issues.",
    example: "A small office with recurring printer and computer startup issues needs a careful review and quick restoration plan.",
    icon: "support",
  },
  {
    title: "Networking & Wi-Fi",
    description:
      "Practical network setup and troubleshooting for reliable connectivity across rooms, office spaces and shared work areas.",
    intro:
      "We review the setup, identify weak points and help improve day-to-day network reliability.",
    coverage: [
      "Ethernet and Wi-Fi setup",
      "Router and switch checks",
      "Basic connectivity troubleshooting",
    ],
    suitability: "Useful for shops, schools and small offices needing stable internet access without complex enterprise assumptions.",
    example: "A classroom and office block need better signal coverage and fewer dropped connections during teaching and work hours.",
    icon: "network",
  },
  {
    title: "Systems Administration",
    description:
      "Careful setup and support for user accounts, devices, updates and day-to-day administration tasks.",
    intro:
      "We handle common administration needs with a focus on safe setup, simple records and responsible access control.",
    coverage: [
      "Windows and Linux device setup",
      "User account checks and updates",
      "Software updates and maintenance routines",
    ],
    suitability: "Suitable for small organizations that need dependable systems administration without heavy overhead.",
    example: "A small office needs user accounts organized and software updates performed in a controlled, documented way.",
    icon: "admin",
  },
  {
    title: "Security & Backups",
    description:
      "Basic security hygiene and backup routines to reduce risk and help protect important information.",
    intro:
      "We focus on practical security habits, checks and backup routines that make a meaningful difference for small teams.",
    coverage: [
      "Antivirus and security checks",
      "Backup scheduling and verification",
      "Basic data protection habits",
    ],
    suitability: "Recommended for businesses that need a straightforward way to protect files and reduce avoidable data loss.",
    example: "A business wants a regular backup routine and a quick security review after repeated issues with unreliable storage practices.",
    icon: "security",
  },
  {
    title: "Web & Database Support",
    description:
      "Support for simple website updates, maintenance and common database-related issues for small business operations.",
    intro:
      "We support the practical needs of organizations that rely on simple online systems and business data tools.",
    coverage: [
      "Basic website maintenance",
      "Simple database support",
      "Content or configuration updates",
    ],
    suitability: "Helpful for small organizations that need ongoing support for simple web or business data workflows.",
    example: "A small business site needs a content refresh and a quick check of a simple database setup that needs attention.",
    icon: "web",
  },
] as const satisfies ServiceItem[];

export const homeServices = [
  "IT Support & Maintenance",
  "Networking & Wi-Fi",
  "Systems Administration",
  "Security & Backups",
  "Web & Database Support",
];

export const approachSteps = [
  {
    title: "Understand",
    description:
      "We discuss the problem, understand the working environment and identify what needs attention.",
  },
  {
    title: "Fix",
    description:
      "We investigate the issue and work toward a practical solution appropriate to the equipment and environment.",
  },
  {
    title: "Follow up",
    description:
      "We explain what was done, identify any remaining concerns and recommend sensible next steps.",
  },
];

export const sampleProjects: ProjectItem[] = [
  {
    title: "Office network and Wi-Fi tidy-up",
    summary:
      "Review of cabling, connectivity points and Wi-Fi layout to improve day-to-day reliability in a shared office environment.",
    tags: ["Network", "Wi-Fi", "Office setup"],
  },
  {
    title: "Staff computer inventory and maintenance log",
    summary:
      "Basic review of local devices, updates and maintenance notes to support more consistent system upkeep.",
    tags: ["Support", "Maintenance", "Systems"],
  },
  {
    title: "Small-office backup and antivirus routine",
    summary:
      "Simple backup schedule and basic security checks to reduce risk of data loss and repeated disruption.",
    tags: ["Backups", "Security", "Routine"],
  },
  {
    title: "Simple business website refresh",
    summary:
      "Small content and structure updates to improve clarity, consistency and day-to-day business communication online.",
    tags: ["Web", "Support", "Content"],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What information should I provide before we discuss a problem?",
    answer:
      "It helps to describe the issue clearly, mention the device or location involved, and share any relevant symptoms or recent changes. If possible, include whether the problem affects one user or a shared system.",
  },
  {
    question: "Can I ask about Wi-Fi problems?",
    answer:
      "Yes. We can discuss poor signal, dropped connections, router placement, and basic network reliability concerns. We will look at the practical setup and likely causes before recommending next steps.",
  },
  {
    question: "Do you support computers, printers and office devices?",
    answer:
      "Yes. Common office technology issues, including computers, printers, basic connectivity, and general maintenance, are within the scope of practical support we provide.",
  },
  {
    question: "Can you help with backups and data safety?",
    answer:
      "We can discuss backup routines, simple security checks, and sensible habits that support safer day-to-day operations for small offices and organizations.",
  },
  {
    question: "Do you support websites and basic database needs?",
    answer:
      "Yes. We can discuss website maintenance, content updates and basic database support for straightforward business systems and small online services.",
  },
  {
    question: "How should I contact you for a new support request?",
    answer:
      "You can use the WhatsApp button or send an inquiry through the Contact page. Please share a brief summary of the problem and the kind of support you need.",
  },
];
