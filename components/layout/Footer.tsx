"use client";

import { Zap, X, Globe, Mail } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

const footerLinks = {
  Products: ["Web Application", "Android App", "iOS App", "API Access", "Integrations"],
  Resources: ["Documentation", "API Reference", "Blog", "Changelog", "Status Page"],
  Company: ["About Us", "Careers", "Press Kit", "Partners", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "GDPR"],
};

const socialLinks = [
  { icon: X, label: "X (Twitter)", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,140,33,0.08)] bg-[#0F0E13]">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#FF8C21] flex items-center justify-center shadow-[0_0_20px_rgba(255,140,33,0.4)]">
                <Zap size={16} className="text-[#08080C]" fill="#08080C" />
              </div>
              <span
                className="font-[family-name:var(--font-syne)] text-xl text-[#F5F0E8]"
                style={{ fontWeight: 800 }}
              >
                {COMPANY_NAME}
              </span>
            </a>
            <p className="text-sm text-[#9A8E7F] leading-relaxed max-w-xs mb-6">
              The complete digital product suite for teams that ship fast and scale smart.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[rgba(255,140,33,0.12)] flex items-center justify-center text-[#9A8E7F] hover:text-[#FF8C21] hover:border-[rgba(255,140,33,0.35)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-[#9A8E7F] mb-2 font-medium">Stay in the loop</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 bg-[rgba(255,140,33,0.04)] border border-[rgba(255,140,33,0.1)] rounded-lg px-3 py-2 text-sm text-[#F5F0E8] placeholder-[#9A8E7F]/60 focus:outline-none focus:border-[rgba(255,140,33,0.4)] transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#FF8C21] text-[#08080C] text-xs font-bold rounded-lg hover:bg-[#FFB366] transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#9A8E7F] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#9A8E7F] hover:text-[#FF8C21] transition-colors"
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
      <div className="border-t border-[rgba(255,140,33,0.06)]">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#9A8E7F]/70">
            © {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[#9A8E7F]/50">
            Built with ♥ for teams that ship
          </p>
        </div>
      </div>
    </footer>
  );
}
