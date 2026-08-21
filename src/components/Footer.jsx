import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';

export function Footer({ onNavigate, t, lang }) {
  return (
    <footer id="contact" className="footer">
      <div className="app-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Mission */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <img 
                src="/assets/images/logo.jpeg" 
                alt="Nikah.Net Logo" 
                className="footer-logo-img"
              />
              <div>
                <div className="footer-brand-title">
                  Nikah<span>.Net</span>
                </div>
                <div className="footer-brand-sub">
                  {lang === 'ml' ? 'മാട്രിമോണിയൽ പരസ്യങ്ങൾ' : 'Find Your Soulmate'}
                </div>
              </div>
            </div>

            <p className="footer-brand-desc">
              {t.footer_tagline} Connecting genuine Muslim families across Malappuram, Kozhikode, Kerala, and worldwide GCC Malayali communities.
            </p>

            {/* Social Media Channel Icons */}
            <div className="footer-social-row">
              {/* YouTube Channel Icon */}
              <a 
                href="https://youtube.com/@nikkahnett?si=Lo6Q4O-cozVeGY0y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-yt"
                title="Official YouTube Channel (@nikkahnett)"
                aria-label="Nikah.Net YouTube Channel"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/nikkah.nett?igsh=MWpibTZkYWZqOWNmNg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-ig"
                title="Follow on Instagram (@nikkah.nett)"
                aria-label="Nikah.Net Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook Icon */}
              <a 
                href="https://www.facebook.com/share/1BfzDwduDc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-fb"
                title="Follow on Facebook"
                aria-label="Nikah.Net Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a 
                href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Nikah.Net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-wa"
                title="Chat on WhatsApp (+91 80759 13098)"
                aria-label="Nikah.Net WhatsApp Support"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Quick Navigation
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
                  {t.nav_home}
                </a>
              </li>
              <li>
                <a href="#profiles" onClick={(e) => { e.preventDefault(); onNavigate('profiles'); }}>
                  {t.nav_profiles}
                </a>
              </li>
              <li>
                <a href="#post-ad" onClick={(e) => { e.preventDefault(); onNavigate('post-ad'); }}>
                  {t.nav_post_ad}
                </a>
              </li>
              <li>
                <a href="#couples" onClick={(e) => { e.preventDefault(); onNavigate('couples'); }}>
                  {t.nav_couples}
                </a>
              </li>
              <li>
                <a href="#service-areas" onClick={(e) => { e.preventDefault(); onNavigate('service-areas'); }}>
                  {t.nav_service_areas}
                </a>
              </li>
              <li>
                <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>
                  {t.nav_privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Locations & Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Coverage & Hubs
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href="#service-areas" onClick={(e) => { e.preventDefault(); onNavigate('service-areas'); }}>
                  Malappuram Hub (Manjeri, Tirur)
                </a>
              </li>
              <li>
                <a href="#service-areas" onClick={(e) => { e.preventDefault(); onNavigate('service-areas'); }}>
                  Kozhikode Hub (Calicut, Vadakara)
                </a>
              </li>
              <li>
                <a href="#service-areas" onClick={(e) => { e.preventDefault(); onNavigate('service-areas'); }}>
                  Kannur & Palakkad Districts
                </a>
              </li>
              <li>
                <a href="#service-areas" onClick={(e) => { e.preventDefault(); onNavigate('service-areas'); }}>
                  GCC & Worldwide Malayali NRI
                </a>
              </li>
              <li>
                <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>
                  AI Image & Privacy Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact Details */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              Official Helpdesk
            </h4>
            <div className="footer-contact-block">
              <div className="footer-contact-item">
                <Phone size={16} className="text-gold" />
                <span>+91 80759 13098</span>
              </div>

              <div className="footer-contact-item">
                <MessageCircle size={16} className="text-emerald" />
                <a 
                  href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Nikah.Net%20Helpdesk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-wa-link"
                >
                  WhatsApp: +91 80759 13098
                </a>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} className="text-gold" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <span>Malappuram & Kozhikode, Kerala, India</span>
              </div>

              {/* YouTube Channel Spotlight Button */}
              <a 
                href="https://youtube.com/@nikkahnett?si=Lo6Q4O-cozVeGY0y"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-yt-badge"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Subscribe on YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-disclaimer-box">
          <strong>Matrimonial Advertising Disclaimer:</strong> {t.footer_disclaimer}
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>{t.footer_rights}</div>
          <div className="footer-legal-links">
            <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); onNavigate('privacy-ethics'); }}>AI Image Disclosure</a>
            <span>•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
