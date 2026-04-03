export const siteConfig = {
  name: "PulseForge",
  description:
    "Premium performance gym for strength, physique, recovery, and modern coaching.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/trainers", label: "Trainers" },
  { href: "/#contact", label: "Contact" },
  { href: "/auth", label: "Login" }
];

export const heroStats = [
  { value: "12+", label: "Elite Trainers" },
  { value: "4.9/5", label: "Member Satisfaction" },
  { value: "24/7", label: "Access & Recovery" }
];

export const services = [
  {
    title: "Strength Systems",
    description: "Structured programming for muscle gain, strength, and athletic output.",
    icon: "Dumbbell"
  },
  {
    title: "Personal Coaching",
    description: "One-on-one trainer support with weekly check-ins and plan adjustments.",
    icon: "ShieldCheck"
  },
  {
    title: "Nutrition Design",
    description: "Diet planning with macro targets, recovery strategy, and accountability.",
    icon: "Apple"
  },
  {
    title: "Recovery Lab",
    description: "Mobility, breathwork, stretching, and guided recovery sessions.",
    icon: "HeartPulse"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    priceMonthly: 39,
    priceYearly: 399,
    description: "Ideal for consistent training with full facility access.",
    features: ["Open gym access", "Intro assessment", "Mobile workout tracker"],
    highlight: false
  },
  {
    name: "Pro",
    priceMonthly: 79,
    priceYearly: 799,
    description: "Best for transformations with coaching and nutrition guidance.",
    features: ["Everything in Starter", "2 PT sessions / month", "Nutrition blueprint"],
    highlight: true
  },
  {
    name: "Elite",
    priceMonthly: 129,
    priceYearly: 1299,
    description: "High-touch performance support for ambitious members.",
    features: ["Everything in Pro", "Weekly coaching", "Priority recovery access"],
    highlight: false
  }
];

export const trainers = [
  {
    name: "Maya Cross",
    role: "Head Performance Coach",
    image: "/trainers/trainer-1.svg",
    socials: ["Instagram", "LinkedIn", "X"]
  },
  {
    name: "Noah Kane",
    role: "Strength Specialist",
    image: "/trainers/trainer-2.svg",
    socials: ["Instagram", "YouTube", "X"]
  },
  {
    name: "Ava Hart",
    role: "Mobility & Recovery",
    image: "/trainers/trainer-3.svg",
    socials: ["Instagram", "TikTok", "LinkedIn"]
  }
];

export const testimonials = [
  {
    quote: "PulseForge feels like a luxury performance lab, not just another gym.",
    author: "Hassan Ali",
    role: "Member for 18 months"
  },
  {
    quote: "The coaching, tracking, and recovery system completely changed my routine.",
    author: "Sarah Thomas",
    role: "Transformation client"
  },
  {
    quote: "Every detail feels premium. Clean, focused, and unbelievably motivating.",
    author: "Daniel Brooks",
    role: "Strength athlete"
  }
];

export const galleryImages = [
  "/gallery/gallery-1.svg",
  "/gallery/gallery-2.svg",
  "/gallery/gallery-3.svg",
  "/gallery/gallery-4.svg"
];

export const storyPoints = [
  "Built for members who want world-class coaching in a refined environment.",
  "Designed around strength training, recovery, and sustainable performance.",
  "Trusted by beginners, busy professionals, and competitive athletes alike."
];
