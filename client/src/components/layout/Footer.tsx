import { Link } from 'wouter';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 px-4 md:px-8">
      {/* Broad & Very Rounded Background with Pink/Purple Glassy Effect */}
      <div 
        className="backdrop-blur-3xl rounded-t-[40px] md:rounded-t-[100px] pt-12 pb-8 px-6 md:px-16 shadow-[0_-30px_80px_rgba(99,103,255,0.25)] border-t border-white/12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.02) 0%, rgba(10, 14, 39, 0.3) 50%, rgba(10, 14, 39, 0.45) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1500px] mx-auto">

          {/* MAIN BROAD GRID: Row wrap layout for better symmetry */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16 pt-6">

            {/* Column 1: Brand & Contact */}
            <div className="col-span-2 lg:col-span-1 space-y-8">
              <div className="flex items-center gap-4 group cursor-default">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #6367FF 0%, #8494FF 100%)',
                    boxShadow: '0 0 24px rgba(99, 103, 255, 0.45)',
                  }}
                >
                  <span className="text-white font-bold text-2xl font-display">H</span>
                </div>
                <span
                  className="font-extrabold text-3xl tracking-[0.01em] uppercase font-display"
                  style={{
                    background: 'linear-gradient(90deg, #6367FF 0%, #8494FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  HodorInfo
                </span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-4">Contact Info</h4>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <MapPin className="text-white/40 mt-1 flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                  <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium group-hover:text-white transition-colors">
                    Innovation Hub, Tech City,<br />
                    Faridabad, HR 121004
                  </p>
                </div>
                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <Phone className="text-white/40 flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                  <span className="text-white/40 text-sm md:text-base font-medium group-hover:text-white transition-colors">+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@hodorinfo.com" className="flex items-center gap-4 group">
                  <Mail className="text-white/40 flex-shrink-0 group-hover:text-white transition-colors" size={18} />
                  <span className="text-white/40 text-sm md:text-base font-medium group-hover:text-white transition-colors">info@hodorinfo.com</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-4">Quick Links</h4>
              <ul className="space-y-4 text-sm md:text-base font-medium">
                {['Home', 'Services', 'Industries', 'About'].map((item) => (
                  <li key={item}>
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-4">Resources</h4>
              <ul className="space-y-4 text-sm md:text-base font-medium text-white/40">
                <li><a href="https://blog.hodorinfo.com" className="hover:text-white transition-all hover:translate-x-1 inline-block">Blog</a></li>
                <li><Link href="/contact" className="hover:text-white transition-all hover:translate-x-1 inline-block">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-all hover:translate-x-1 inline-block">Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-4">Follow Us</h4>
              <div className="flex gap-6 items-center">
                <a href="#" className="text-white/40 hover:text-white transition-all hover:-translate-y-2"><Linkedin size={22} /></a>
                <a href="#" className="text-white/40 hover:text-white transition-all hover:-translate-y-2"><Twitter size={22} /></a>
                <a href="#" className="text-white/40 hover:text-white transition-all hover:-translate-y-2"><Github size={22} /></a>
              </div>
            </div>
          </div>

          {/* BOTTOM COPYRIGHT - COMPACT & BALANCED */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p
                className="uppercase tracking-[0.3em]"
                style={{ fontSize: '13px', lineHeight: '1.2', color: 'rgba(255, 255, 255, 0.6)' }}
              >
                © {currentYear} HodorInfo. All rights reserved.
              </p>
              <p
                className="uppercase tracking-[0.15em] hidden md:block"
                style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.4)' }}
              >
                Crafting Digital Excellence for Enterprise Innovation
              </p>
            </div>
            <div className="flex gap-6 items-center">
               <Link href="/privacy" className="text-[11px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy</Link>
               <Link href="/terms" className="text-[11px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
