export const siteConfig = {
  name: "PulseForge",
  description:
    "Modern gym and fitness website for elite training, recovery, and transformation coaching.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/trainers", label: "Trainers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export const heroStats = [
  { value: "18+", label: "Expert Coaches" },
  { value: "4.9/5", label: "Member Rating" },
  { value: "24/7", label: "Premium Access" }
];

export const services = [
  {
    title: "Personal Training",
    description: "Tailored coaching sessions built around body goals, movement quality, and accountability.",
    icon: "Dumbbell"
  },
  {
    title: "Cardio Conditioning",
    description: "High-energy conditioning blocks that improve endurance, fat loss, and recovery capacity.",
    icon: "HeartPulse"
  },
  {
    title: "Strength Training",
    description: "Progressive strength programs for lifters who want measurable gains and strong technique.",
    icon: "Flame"
  },
  {
    title: "Yoga Flow",
    description: "Mobility-driven yoga sessions designed to improve flexibility, posture, and breath control.",
    icon: "Sparkles"
  },
  {
    title: "CrossFit",
    description: "Explosive hybrid classes mixing strength, cardio, and functional performance challenges.",
    icon: "Target"
  }
];

export const pricingPlans = [
  {
    name: "Basic",
    priceMonthly: 29,
    priceYearly: 299,
    description: "A flexible start for members building consistency.",
    features: ["Gym floor access", "Locker room access", "1 onboarding session"],
    highlight: false
  },
  {
    name: "Standard",
    priceMonthly: 59,
    priceYearly: 599,
    description: "Balanced coaching and facility access for serious progress.",
    features: ["All Basic features", "2 group classes weekly", "Workout programming"],
    highlight: true
  },
  {
    name: "Premium",
    priceMonthly: 99,
    priceYearly: 999,
    description: "Full transformation support with premium perks.",
    features: ["All Standard features", "Personal coaching", "Recovery zone access"],
    highlight: false
  }
];

export const trainers = [
  {
    name: "Maya Brooks",
    role: "Strength Coach",
    bio: "Powerlifting specialist focused on technique, progression, and body recomposition.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "linkedin", "facebook"]
  },
  {
    name: "Noah Carter",
    role: "CrossFit Coach",
    bio: "Builds athletic class experiences that blend speed, grit, and functional power.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "youtube", "linkedin"]
  },
  {
    name: "Ava Simmons",
    role: "Yoga Instructor",
    bio: "Helps members unlock mobility, reduce stress, and recover with smarter movement.",
    image:
      "https://images.unsplash.com/photo-1594737625785-c2a47dce87cb?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "facebook", "linkedin"]
  },
  {
    name: "Ethan Cole",
    role: "Cardio Coach",
    bio: "Designs conditioning sessions that improve stamina without sacrificing strength.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "youtube", "facebook"]
  },
  {
    name: "Sophia Reed",
    role: "Personal Trainer",
    bio: "Works one-on-one with clients on fat loss, confidence, and lifestyle consistency.",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "linkedin", "facebook"]
  },
  {
    name: "Liam Hayes",
    role: "Performance Coach",
    bio: "Combines strength, speed, and recovery planning for athletes and busy professionals.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "youtube", "linkedin"]
  }
];

export const testimonials = [
  {
    quote: "PulseForge feels like a luxury performance lab, not just another gym.",
    author: "Hassan Ali",
    role: "Transformation Member"
  },
  {
    quote: "The trainers pushed me hard, but the environment still feels welcoming and premium.",
    author: "Sarah Thomas",
    role: "Standard Plan Member"
  },
  {
    quote: "I came for better fitness and stayed for the energy, coaching, and consistent results.",
    author: "Daniel Brooks",
    role: "Premium Member"
  }
];

export const storyPoints = [
  "We help members become stronger, healthier, and more confident through elite coaching and premium facilities.",
  "Our vision is to make serious fitness feel motivating, accessible, and sustainable for every lifestyle.",
  "From strength zones to recovery corners, every detail is designed to support performance and consistency."
];

export const facilities = [
  "Luxury strength floor with modern equipment",
  "Dedicated yoga and mobility studio",
  "Premium locker rooms and recovery area",
  "Group training zone with high-energy lighting"
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1594737625785-c2a47dce87cb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80"
];
