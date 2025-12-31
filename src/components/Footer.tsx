import Link from "next/link";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pb-20 md:pb-0">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-accent-light font-body font-bold text-lg mb-5">Hampstead On-Demand Ltd</h3>
            <address className="not-italic text-white/70 text-sm leading-relaxed mb-4 font-body">
              Office & Service Hub:<br />
              250 Finchley Road<br />
              Hampstead, London NW3 6DN
            </address>
            
            <div className="space-y-2 mb-6 text-sm">
              <div className="text-white/70">
                <strong className="text-white/90">Operating Hours:</strong><br />
                Mon-Fri: 8am - 8pm<br />
                Sat-Sun: 9am - 6pm<br />
                Emergency: 24/7
              </div>
            </div>
            
            <div className="space-y-2 text-xs text-white/70">
              <div><strong className="text-white/90">Company Reg:</strong> 12345678</div>
              <div><strong className="text-white/90">Insurance:</strong> £5M (Aviva)</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-accent-light font-body font-bold text-lg mb-5">Popular Services</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <Link href="/services?category=plumbing" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link href="/services?category=electrical" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link href="/services?category=handyman" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Handyman Services
                </Link>
              </li>
              <li>
                <Link href="/services?category=carpentry" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Carpentry
                </Link>
              </li>
              <li>
                <Link href="/services?category=painting" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Painting & Decorating
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent-light font-body font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <Link href="/" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Create Account
                </Link>
              </li>
              <li>
                <a href="https://hampsteadrenovations.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent-light transition-all hover:translate-x-1 inline-block">
                  Looking for Major Builds? Visit Hampstead Renovations →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent-light font-body font-bold text-lg mb-5">Contact Us</h4>
            <div className="space-y-3 font-body">
              <a 
                href="tel:07459345456" 
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent-light transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">07459 345456</span>
              </a>
              <a 
                href="mailto:contact@hampstead-ondemand.com" 
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent-light transition-colors group break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>contact@hampstead-ondemand.com</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1.5 bg-accent/20 border border-accent rounded text-accent-light text-xs font-semibold">
                FMB Member
              </span>
              <span className="px-3 py-1.5 bg-accent/20 border border-accent rounded text-accent-light text-xs font-semibold">
                Insured
              </span>
              <span className="px-3 py-1.5 bg-accent/20 border border-accent rounded text-accent-light text-xs font-semibold">
                Vetted
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-xs font-body">
          <p>
            © {currentYear} Hampstead On-Demand Ltd. All rights reserved. | {" "}
            <Link href="/privacy" className="text-white/50 hover:text-accent-light transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="text-white/50 hover:text-accent-light transition-colors">
              Terms & Conditions
            </Link>{" "}
            | Property Services Since 2009
          </p>
        </div>
      </div>
    </footer>
  );
}
