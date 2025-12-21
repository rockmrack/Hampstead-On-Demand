import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground/80 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-primary-foreground font-bold text-xl mb-2 font-heading">Hampstead On-Demand</h3>
            <p className="text-xs font-semibold text-accent tracking-[0.15em] uppercase mb-4">PROPERTY MAINTENANCE</p>
            <p className="text-sm mb-6 leading-relaxed font-body opacity-90">
              Professional home services at fixed prices. Book trusted local tradespeople in seconds.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact@hampstead-ondemand.com" className="hover:text-primary-foreground hover:scale-110 transition-all" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <div className="space-y-2">
              <a href="tel:07459345456" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
                <Phone size={16} />
                <span className="font-semibold">07459 345456</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4 font-heading">Services</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <Link href="/services?category=housekeeping" className="hover:text-white transition-colors">
                  Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services?category=plumbing" className="hover:text-white transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link href="/services?category=electrical" className="hover:text-white transition-colors">
                  Electrical
                </Link>
              </li>
              <li>
                <Link href="/services?category=handyman" className="hover:text-white transition-colors">
                  Handyman
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4 font-heading">Company</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <Link href="/#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="hover:text-primary-foreground transition-colors">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-primary-foreground font-bold mb-4 font-heading">Support</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <Link href="/#faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center text-sm opacity-70">
          <p>&copy; {currentYear} Hampstead On-Demand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
