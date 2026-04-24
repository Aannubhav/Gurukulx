export const COMPANY_NAME = "NexStack";
export const COMPANY_TAGLINE = "Your Complete Digital Product Suite";

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const TRUSTED_COMPANIES = [
  "Vercel", "Stripe", "Notion", "Linear", "Figma",
  "Loom", "Retool", "Segment", "Amplitude", "Mixpanel",
  "Vercel", "Stripe", "Notion", "Linear", "Figma",
  "Loom", "Retool", "Segment", "Amplitude", "Mixpanel",
];

export const PRODUCTS = [
  {
    id: "web",
    name: "Web Application",
    tagline: "Build for the browser, built to scale.",
    description:
      "A fully-featured web platform with real-time analytics, custom workflows, and API integrations. Deploy in minutes, scale infinitely.",
    features: [
      { icon: "LayoutDashboard", text: "Responsive Dashboard" },
      { icon: "BarChart3", text: "Real-time Analytics" },
      { icon: "GitBranch", text: "Custom Workflows" },
      { icon: "Plug", text: "API Integrations" },
    ],
    color: "#FF8C21",
  },
  {
    id: "android",
    name: "Android Application",
    tagline: "Native performance, delivered fast.",
    description:
      "Reach billions of Android users with push notifications, offline mode, and biometric security baked in from day one.",
    features: [
      { icon: "Bell", text: "Push Notifications" },
      { icon: "WifiOff", text: "Offline Mode" },
      { icon: "Palette", text: "Material Design" },
      { icon: "Fingerprint", text: "Biometric Auth" },
    ],
    color: "#FF8C21",
  },
  {
    id: "ios",
    name: "iOS Application",
    tagline: "Premium experience for Apple users.",
    description:
      "Native iOS performance with Apple Pay, widget support, and Siri shortcuts. The smoothest app your users have ever touched.",
    features: [
      { icon: "Zap", text: "Native Performance" },
      { icon: "CreditCard", text: "Apple Pay" },
      { icon: "Layers", text: "Widget Support" },
      { icon: "Mic", text: "Siri Shortcuts" },
    ],
    color: "#FF8C21",
  },
];

export const FEATURES = [
  {
    icon: "Shield",
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and role-based access control.",
    highlight: true,
  },
  {
    icon: "Zap",
    title: "Blazing Fast",
    description: "Sub-100ms response times globally with edge-optimized CDN delivery.",
  },
  {
    icon: "Globe",
    title: "Global Scale",
    description: "Auto-scaling infrastructure that handles millions of concurrent users.",
    highlight: true,
  },
  {
    icon: "Code2",
    title: "Developer First",
    description: "Comprehensive REST and GraphQL APIs with SDKs in 12+ languages.",
  },
  {
    icon: "BarChart3",
    title: "Deep Analytics",
    description: "Real-time dashboards, custom reports, and AI-powered insights.",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description: "Built-in collaboration tools with comments, mentions, and activity feeds.",
  },
  {
    icon: "RefreshCw",
    title: "Automated Backups",
    description: "Continuous backups with one-click restore and 99.99% uptime SLA.",
  },
  {
    icon: "Puzzle",
    title: "200+ Integrations",
    description: "Connects to Slack, Salesforce, HubSpot, and 200+ tools out of the box.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 5 users",
      "Web Application",
      "10K API calls / month",
      "Basic analytics",
      "Email support",
      "99.9% uptime SLA",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Professional",
    monthlyPrice: 149,
    annualPrice: 119,
    description: "For growing teams that need all three products.",
    features: [
      "Up to 25 users",
      "Web + Android + iOS apps",
      "500K API calls / month",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "99.95% uptime SLA",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: 399,
    annualPrice: 319,
    description: "Full power for large organizations.",
    features: [
      "Unlimited users",
      "All products + white-label",
      "Unlimited API calls",
      "Custom analytics + BI",
      "Dedicated support",
      "SSO + SAML",
      "99.99% uptime SLA",
      "Custom SLA",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "NexStack cut our go-to-market time by 60%. We launched on all three platforms in 8 weeks instead of 6 months.",
    author: "Sarah Chen",
    title: "CTO",
    company: "Foundry Labs",
    avatar: "SC",
  },
  {
    quote:
      "The analytics alone are worth the price. We finally understand how users move through our product.",
    author: "Marcus Rivera",
    title: "Head of Product",
    company: "Axiom Data",
    avatar: "MR",
  },
  {
    quote:
      "Best decision we made was consolidating our three separate dev teams onto NexStack. The API consistency is incredible.",
    author: "Priya Nair",
    title: "VP Engineering",
    company: "Orbis Finance",
    avatar: "PN",
  },
  {
    quote:
      "Our mobile retention went up 40% after switching to NexStack's iOS app framework. The native performance is unmatched.",
    author: "James Whitmore",
    title: "CEO",
    company: "Pulse Metrics",
    avatar: "JW",
  },
  {
    quote:
      "Customer support is extraordinary. Issues resolved in minutes, not days. The team genuinely cares.",
    author: "Aiko Tanaka",
    title: "Director of Operations",
    company: "Shibuya Systems",
    avatar: "AT",
  },
];
