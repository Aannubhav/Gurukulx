export const COMPANY_NAME = "GurukulamX";
export const COMPANY_FULL = "GurukulamX — Nexus Micro Technologies";
export const COMPANY_TAGLINE = "Launch. Teach. Scale.";

export const NAV_LINKS = [
  { label: "Platform", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const TRUSTED_COMPANIES = [
  "Byju's", "Unacademy", "PhysicsWallah", "Vedantu", "Testbook",
  "PrepLadder", "Skill India", "NIIT", "Simplilearn", "UpGrad",
  "Byju's", "Unacademy", "PhysicsWallah", "Vedantu", "Testbook",
  "PrepLadder", "Skill India", "NIIT", "Simplilearn", "UpGrad",
];

export const PRODUCTS = [
  {
    id: "web",
    name: "Full LMS Platform",
    tagline: "Everything to run your ed-tech business.",
    description:
      "A complete web-based learning management system — course builder, student dashboard, live classes, assessments, and deep analytics. White-label ready from day one.",
    features: [
      { icon: "LayoutDashboard", text: "Course & Batch Builder" },
      { icon: "BarChart3", text: "Revenue Analytics" },
      { icon: "GitBranch", text: "Adaptive Learning Paths" },
      { icon: "Plug", text: "Payment Gateway Integration" },
    ],
    color: "#FF8547",
  },
  {
    id: "android",
    name: "Mobile Learning App",
    tagline: "Your brand. On every device.",
    description:
      "Fully white-labeled iOS and Android apps delivered under your brand. Students get offline downloads, push notifications, and a native learning experience — all yours.",
    features: [
      { icon: "Bell", text: "Push Notifications" },
      { icon: "WifiOff", text: "Offline Downloads" },
      { icon: "Palette", text: "Full White-label" },
      { icon: "Fingerprint", text: "Biometric Login" },
    ],
    color: "#FF8547",
  },
  {
    id: "ios",
    name: "AI Learning Engine",
    tagline: "Intelligence built into every lesson.",
    description:
      "Adaptive MCQ automation, AI-driven recommendations, performance prediction, and personalised revision plans. Your platform gets smarter as your students learn more.",
    features: [
      { icon: "Zap", text: "MCQ Auto-generation" },
      { icon: "CreditCard", text: "Performance Prediction" },
      { icon: "Layers", text: "Adaptive Revision Plans" },
      { icon: "Mic", text: "AI Doubt Resolution" },
    ],
    color: "#FF8547",
  },
];

export const FEATURES = [
  {
    icon: "BookOpen",
    title: "Course & Batch Builder",
    description: "Build unlimited courses, live batches, and recorded content with a drag-and-drop editor in minutes.",
    highlight: true,
  },
  {
    icon: "Brain",
    title: "MCQ Automation Engine",
    description: "Auto-generate, shuffle, and evaluate MCQs with AI. Reduce manual test-paper effort by 90%.",
    highlight: true,
  },
  {
    icon: "BarChart3",
    title: "Revenue Analytics",
    description: "Real-time GMV, enrollment funnels, drop-off tracking, and student LTV — all in one dashboard.",
  },
  {
    icon: "Palette",
    title: "White-label Branding",
    description: "Your logo, colors, domain, and app name. Students never see 'GurukulamX' — they see your brand.",
  },
  {
    icon: "Zap",
    title: "Adaptive Learning AI",
    description: "AI that personalises every student's learning path based on performance and behavioral data.",
  },
  {
    icon: "Shield",
    title: "DRM Content Protection",
    description: "Watermarking, screen-recording block, and encrypted streaming to protect your premium content.",
  },
  {
    icon: "Users",
    title: "Student CRM",
    description: "Full student lifecycle management — leads, onboarding, progress, renewals, and re-engagement.",
  },
  {
    icon: "Globe",
    title: "Multi-language Support",
    description: "Serve students in Hindi, Tamil, Telugu, Kannada, and 10+ regional languages out of the box.",
  },
];

// Pricing uses INR and a hybrid billing model (not simple monthly/annual)
export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: null,
    tagline: "Start with zero upfront risk.",
    annualFee: 20000,
    revenueShare: 8,
    revenueShareBreakdown: [
      { label: "Payment & Infra handling", pct: 2 },
      { label: "GurukulamX platform margin", pct: 6 },
    ],
    oneTime: false,
    priceDisplay: "₹20,000 / year",
    subDisplay: "+ 8% of GMV",
    description:
      "Pay a small annual fee and share 8% of every sale. We grow when you grow — perfect if you're just starting out.",
    features: [
      "Full LMS + mobile apps",
      "AI & MCQ automation engine",
      "White-label branding",
      "Unlimited students",
      "Payment gateway integration",
      "12-month email support",
      "Customisation @ ₹699/hr",
    ],
    cta: "Start for ₹20K/yr",
    highlighted: false,
    insight: "Best when GMV < ₹25L/yr",
  },
  {
    id: "professional",
    name: "Professional",
    badge: "Most Popular",
    tagline: "One payment. Zero revenue share. Forever.",
    annualFee: 0,
    revenueShare: 0,
    oneTime: true,
    priceDisplay: "₹2,00,000",
    subDisplay: "One-time · No revenue share",
    description:
      "Buy out of the revenue share permanently. Predictable cost, full feature access, and no per-sale deduction ever again.",
    features: [
      "Everything in Starter",
      "Zero revenue share — forever",
      "No annual renewal fee",
      "Priority support queue",
      "Advanced analytics suite",
      "Custom domain + SSL",
      "Customisation @ ₹699/hr",
    ],
    cta: "Buy Now — ₹2L",
    highlighted: true,
    insight: "Pays back vs Starter at ~₹25–30L GMV/yr",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: null,
    tagline: "Full source code. Total independence.",
    annualFee: 0,
    revenueShare: 0,
    oneTime: true,
    priceDisplay: "₹5,00,000",
    subDisplay: "One-time · Includes source code",
    description:
      "Own the entire codebase. Modify, extend, and build your own product on top of it. From SaaS to product company in one step.",
    features: [
      "Everything in Professional",
      "Full source code ownership",
      "Deploy on your own servers",
      "Modify & extend freely",
      "Build your own product on top",
      "Tech transfer + documentation",
      "Customisation @ ₹599/hr",
    ],
    cta: "Talk to Us — ₹5L",
    highlighted: false,
    insight: "For large institutes, corporates & funded startups",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We launched our coaching institute's platform in 3 weeks on the Starter plan. Once our GMV crossed ₹30L, switching to Professional was a no-brainer.",
    author: "Rajiv Sharma",
    title: "Founder",
    company: "ClearIAS Academy",
    avatar: "RS",
  },
  {
    quote:
      "The MCQ automation engine alone saves us 40 hours a month. Our teachers focus on teaching — GurukulamX handles the rest.",
    author: "Priya Menon",
    title: "Head of Academics",
    company: "MathPro Coaching",
    avatar: "PM",
  },
  {
    quote:
      "We took the Enterprise plan and built our own product on top of the source code. GurukulamX's tech became our competitive moat.",
    author: "Ankit Gupta",
    title: "CTO",
    company: "EduVerse Technologies",
    avatar: "AG",
  },
  {
    quote:
      "White-labeling was seamless — students think it's fully our product. Brand equity stayed with us from day one.",
    author: "Sunita Rao",
    title: "Director",
    company: "Shiksha Pro Institute",
    avatar: "SR",
  },
  {
    quote:
      "Revenue analytics changed how we run our business. We can see exactly where students drop off and fix it immediately.",
    author: "Vikram Nair",
    title: "CEO",
    company: "Catalyst Learning",
    avatar: "VN",
  },
];

export const COST_STRUCTURE = [
  { item: "Hosting / Server", range: "₹5,000 – ₹20,000 / month", bearer: "Client" },
  { item: "Domain + CDN", range: "₹500 – ₹2,000 / month", bearer: "Client" },
  { item: "SMS / Email", range: "₹500 – ₹3,000 / month", bearer: "Client" },
  { item: "Platform development", range: "Covered by GurukulamX", bearer: "Nexus" },
  { item: "Feature updates", range: "Covered by GurukulamX", bearer: "Nexus" },
];

export const GMV_BREAKEVEN = {
  crossoverGMV: 2500000, // ₹25L
  starterAnnualAt25L: 220000, // ₹20K + 8% of ₹25L
  professionalCost: 200000,
};
