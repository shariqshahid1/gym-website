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
    description: "One-on-one sessions tailored to your specific body type, fitness level, and goals. Your coach builds a custom plan and stays with you through every rep.",
    icon: "Dumbbell",
    details: [
      "Custom workout plan built for your body",
      "Weekly progress tracking and adjustments",
      "Nutrition guidance included",
      "Flexible scheduling — train when it works for you"
    ],
    schedule: "Mon–Sat | By appointment",
    price: "Starting at $45/session"
  },
  {
    title: "Cardio Conditioning",
    description: "High-energy sessions using rowing, cycling, battle ropes, and plyometrics. Designed to burn fat, build endurance, and keep your heart strong.",
    icon: "HeartPulse",
    details: [
      "Heart-rate monitored training zones",
      "Fat burn and endurance focused blocks",
      "Beginner-friendly modifications available",
      "Classes capped at 15 people"
    ],
    schedule: "Mon, Wed, Fri | 6:00 AM & 6:00 PM",
    price: "Included in Standard & Premium"
  },
  {
    title: "Strength Training",
    description: "Progressive overload programs for people who want to get stronger, not just bigger. Proper form coaching on every compound lift.",
    icon: "Flame",
    details: [
      "Squat, bench, deadlift, and overhead press coaching",
      "Periodized 8–12 week programs",
      "Form video analysis every 2 weeks",
      "Open gym access for accessory work"
    ],
    schedule: "Daily | 5:00 AM – 11:00 PM",
    price: "Included in all plans"
  },
  {
    title: "Yoga & Mobility",
    description: "Active recovery sessions that improve flexibility, reduce injury risk, and help you move better outside the gym too.",
    icon: "Sparkles",
    details: [
      "Vinyasa and restorative flow classes",
      "Mobility drills for lifters",
      "Breathwork and stress management",
      "Post-workout cool-down sessions"
    ],
    schedule: "Tue, Thu, Sat | 7:00 AM & 5:30 PM",
    price: "Included in Standard & Premium"
  },
  {
    title: "CrossFit WODs",
    description: "Constantly varied functional movements at high intensity. If you like competition and community, this is your lane.",
    icon: "Target",
    details: [
      "Daily programmed WODs with scaling options",
      "Competition prep for local events",
      "Team workouts every Friday",
      "Whiteboard tracking for PRs"
    ],
    schedule: "Mon–Fri | 6:30 AM, 12:00 PM, 5:30 PM",
    price: "Included in Standard & Premium"
  }
];

export const pricingPlans = [
  {
    name: "Basic",
    priceMonthly: 29,
    priceYearly: 299,
    description: "For people who just need a clean gym and solid equipment.",
    features: [
      "Full gym floor access",
      "Locker room and showers",
      "1 free onboarding session",
      "PulseForge app access",
      "Free WiFi"
    ],
    highlight: false
  },
  {
    name: "Standard",
    priceMonthly: 59,
    priceYearly: 599,
    description: "The most popular plan. Coaching + classes + everything in Basic.",
    features: [
      "Everything in Basic",
      "2 group classes per week",
      "Custom workout programming",
      "Monthly progress check-in",
      "Nutrition tips via app",
      "Priority class booking"
    ],
    highlight: true
  },
  {
    name: "Premium",
    priceMonthly: 99,
    priceYearly: 999,
    description: "Full transformation support with 1-on-1 coaching and recovery.",
    features: [
      "Everything in Standard",
      "Unlimited group classes",
      "Weekly personal training session",
      "Recovery zone access (sauna, cold plunge)",
      "Detailed meal plan",
      "24/7 coach messaging",
      "Guest passes (2/month)"
    ],
    highlight: false
  }
];

export const trainers = [
  {
    name: "Maya Brooks",
    role: "Strength Coach",
    bio: "Powerlifting specialist with 8+ years coaching. CSCS certified. Helped 200+ members hit their first bodyweight squat and deadlift.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "linkedin", "facebook"],
    experience: "8 years",
    certifications: ["CSCS", "USAW Level 1"]
  },
  {
    name: "Noah Carter",
    role: "CrossFit Coach",
    bio: "Competitive CrossFit athlete and L2 trainer. Runs the 6:30 AM crew. Known for making hard workouts feel like a game.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "youtube", "linkedin"],
    experience: "6 years",
    certifications: ["CrossFit L2", "First Aid/CPR"]
  },
  {
    name: "Ava Simmons",
    role: "Yoga & Mobility Coach",
    bio: "RYT-500 certified yoga instructor. Teaches members how to recover properly, breathe better, and move without pain.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "facebook", "linkedin"],
    experience: "5 years",
    certifications: ["RYT-500", "FRC Mobility Specialist"]
  },
  {
    name: "Ethan Cole",
    role: "Cardio & Conditioning",
    bio: "Former college track athlete. Designs conditioning programs that build real stamina without burning you out.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "youtube", "facebook"],
    experience: "7 years",
    certifications: ["ACE-CPT", "TRX Certified"]
  },
  {
    name: "Sophia Reed",
    role: "Personal Trainer",
    bio: "Specializes in fat loss and lifestyle coaching. Works with busy professionals who want results without spending 3 hours a day in the gym.",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "linkedin", "facebook"],
    experience: "4 years",
    certifications: ["NASM-CPT", "Precision Nutrition L1"]
  },
  {
    name: "Liam Hayes",
    role: "Performance Coach",
    bio: "Works with athletes and executives on strength, speed, and recovery. Combines data-driven programming with hands-on coaching.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    socials: ["instagram", "youtube", "linkedin"],
    experience: "10 years",
    certifications: ["CSCS", "FMS Level 2", "EXOS Performance"]
  }
];

export const testimonials = [
  {
    quote: "I tried 4 gyms before PulseForge. This is the first one where I actually kept going past month two. The coaching makes the difference.",
    author: "Hassan Ali",
    role: "Premium Member — 8 months"
  },
  {
    quote: "The trainers here don't just count reps. They actually watch your form, adjust your program, and check in between sessions. That's rare.",
    author: "Sarah Thomas",
    role: "Standard Member — 1 year"
  },
  {
    quote: "Lost 15kg in 6 months. The combination of strength training and nutrition guidance from Sophia changed everything for me.",
    author: "Daniel Brooks",
    role: "Premium Member — 6 months"
  }
];

export const storyPoints = [
  "We started PulseForge because we were tired of gyms that look good but don't deliver. Our focus is on coaching quality, clean equipment, and an atmosphere that keeps you coming back.",
  "Our goal is simple: make serious fitness feel accessible. Whether you're a beginner or an athlete, you should feel like this space was built for you.",
  "Every corner of our gym — from the strength floor to the recovery lounge — was designed with one question: does this actually help members get results?"
];

export const facilities = [
  "10,000 sq ft strength floor with Rogue and Eleiko equipment",
  "Dedicated yoga and mobility studio with mirror walls",
  "Recovery lounge with sauna and cold plunge tubs",
  "Private locker rooms with showers and towels",
  "Group training zone with sound system and whiteboard wall",
  "Smoothie bar at the entrance",
  "Free parking for all members"
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    label: "Strength Floor"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    label: "Free Weights Zone"
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    label: "Cardio Deck"
  },
  {
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=80",
    label: "Group Classes"
  },
  {
    src: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80",
    label: "CrossFit Arena"
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    label: "Recovery Lounge"
  }
];
