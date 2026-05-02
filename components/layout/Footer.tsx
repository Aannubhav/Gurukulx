"use client";

import { Zap, X, Globe, Mail } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

const footerLinks = {
  Platform: ["Full LMS Portal", "Android App", "iOS App", "AI Learning Engine", "White-label Branding"],
  Resources: ["Documentation", "Feature Roadmap", "Blog", "Case Studies", "Status Page"],
  Company: ["About Us", "Our Team", "Careers", "Partners", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy", "Security", "Data Policy"],
};

const socialLinks = [
  { icon: X, label: "X (Twitter)", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#F0EBE3]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B00] flex items-center justify-center shadow-[0_4px_16px_rgba(255,107,0,0.3)]">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span
                className="font-[family-name:var(--font-syne)] text-xl text-[#1A1209]"
                style={{ fontWeight: 800 }}
              >
                {COMPANY_NAME}
              </span>
            </a>
            <p className="text-sm text-[#6B6058] leading-relaxed max-w-xs mb-6">
              Full LMS, mobile apps, and AI learning engine — all under your brand. Built for India&apos;s coaching institutes and EdTech startups.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-black/[0.08] bg-white flex items-center justify-center text-[#6B6058] hover:text-[#FF6B00] hover:border-[rgba(255,107,0,0.3)] hover:shadow-[0_2px_12px_rgba(255,107,0,0.15)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-[#6B6058] mb-2 font-medium">Stay in the loop</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@institute.com"
                  className="flex-1 min-w-0 bg-white border border-black/[0.08] rounded-lg px-3 py-2 text-sm text-[#1A1209] placeholder-[#6B6058]/60 focus:outline-none focus:border-[rgba(255,107,0,0.5)] transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#FF6B00] text-white text-xs font-bold rounded-lg hover:bg-[#FF8C21] transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#6B6058] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#6B6058] hover:text-[#FF6B00] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/[0.05]">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B6058]/70">
            © {new Date().getFullYear()} {COMPANY_NAME} · Nexus Micro Technologies. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6058]/50">
            Built with ♥ for India&apos;s EdTech builders
          </p>
        </div>
      </div>
    </footer>
  );
}
