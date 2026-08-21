import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  PlusCircle, 
  Moon, 
  Sun, 
  Globe, 
  Bookmark, 
  Menu, 
  X,
  ShieldCheck,
  MapPin
} from 'lucide-react';

export function Navbar({ 
  lang, 
  setLang, 
  theme, 
  toggleTheme, 
  shortlistCount, 
  openShortlist, 
  onNavigate, 
  t 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="navbar">
      <div className="app-container navbar-inner">
        {/* Brand Logo & Tagline */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
          className="brand-logo-container"
        >
          <img 
            src="/assets/images/logo.jpeg" 
            alt="Nikah.Net Logo" 
            className="brand-logo-img" 
          />
          <div className="brand-text-block">
            <div className="brand-title">
              Nikah<span>.Net</span>
            </div>
            <div className="brand-sub">
              {lang === 'ml' ? 'മാട്രിമോണിയൽ പരസ്യങ്ങൾ' : 'Find Your Soulmate'}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <a href="#profiles" onClick={(e) => { e.preventDefault(); handleNavClick('profiles'); }} className="nav-link">
                {t.nav_profiles}
              </a>
            </li>
            <li>
              <a href="#post-ad" onClick={(e) => { e.preventDefault(); handleNavClick('post-ad'); }} className="nav-link">
                {t.nav_post_ad}
              </a>
            </li>
            <li>
              <a href="#couples" onClick={(e) => { e.preventDefault(); handleNavClick('couples'); }} className="nav-link">
                {t.nav_couples}
              </a>
            </li>
            <li>
              <a href="#service-areas" onClick={(e) => { e.preventDefault(); handleNavClick('service-areas'); }} className="nav-link">
                {t.nav_service_areas}
              </a>
            </li>
            <li>
              <a href="#privacy-ethics" onClick={(e) => { e.preventDefault(); handleNavClick('privacy-ethics'); }} className="nav-link">
                {t.nav_privacy}
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Language Toggle */}
          <button 
            className="btn btn-outline btn-sm nav-lang-btn"
            onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
            title="Switch Language / ഭാഷ മാറ്റുക"
          >
            <Globe size={15} />
            <span className="lang-text-desktop">{lang === 'en' ? 'മലയാളം' : 'English'}</span>
            <span className="lang-text-mobile">{lang === 'en' ? 'ML' : 'EN'}</span>
          </button>

          {/* Theme Switcher (Desktop/Tablet) */}
          <button 
            className="btn btn-outline btn-icon nav-theme-btn"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} className="text-gold" />}
          </button>

          {/* Shortlist Badge Button */}
          <button 
            className="btn btn-outline btn-sm nav-shortlist-btn"
            onClick={openShortlist}
            title={t.shortlist_title}
          >
            <Bookmark size={16} className={shortlistCount > 0 ? "text-gold" : ""} />
            <span className="hidden-mobile">{t.shortlist_label}</span>
            {shortlistCount > 0 && (
              <span className="shortlist-counter-badge">
                {shortlistCount}
              </span>
            )}
          </button>

          {/* Post Your Ad CTA (Desktop/Tablet) */}
          <button 
            className="btn btn-primary btn-sm nav-post-ad-btn"
            onClick={() => handleNavClick('post-ad')}
          >
            <PlusCircle size={16} />
            <span className="hidden-tablet">{t.btn_post_free_ad}</span>
            <span className="visible-tablet">Post Ad</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="btn btn-outline btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation if toggled */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-links">
            <button className="mobile-nav-link" onClick={() => handleNavClick('profiles')}>
              <ShieldCheck size={18} className="text-gold" />
              <span>{t.nav_profiles}</span>
            </button>
            <button className="mobile-nav-link" onClick={() => handleNavClick('post-ad')}>
              <PlusCircle size={18} className="text-gold" />
              <span>{t.nav_post_ad}</span>
            </button>
            <button className="mobile-nav-link" onClick={() => handleNavClick('couples')}>
              <Heart size={18} className="text-gold" />
              <span>{t.nav_couples}</span>
            </button>
            <button className="mobile-nav-link" onClick={() => handleNavClick('service-areas')}>
              <MapPin size={18} className="text-gold" />
              <span>{t.nav_service_areas}</span>
            </button>
            <button className="mobile-nav-link" onClick={() => handleNavClick('privacy-ethics')}>
              <ShieldCheck size={18} className="text-gold" />
              <span>{t.nav_privacy}</span>
            </button>
          </div>

          <div className="mobile-menu-actions">
            <button 
              className="btn btn-outline mobile-drawer-btn"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="text-gold" />}
              <span>{theme === 'light' ? 'Dark Mode (ഡാർക്ക് മോഡ്)' : 'Light Mode (ലൈറ്റ് മോഡ്)'}</span>
            </button>

            <button 
              className="btn btn-primary mobile-drawer-btn" 
              onClick={() => handleNavClick('post-ad')}
            >
              <PlusCircle size={16} />
              <span>{t.btn_post_free_ad}</span>
            </button>

            <a 
              href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Nikah.Net%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20matrimonial%20advertising%20services."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp mobile-drawer-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Official Help (80759 13098)</span>
            </a>

            <a 
              href="https://youtube.com/@nikkahnett?si=Lo6Q4O-cozVeGY0y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline mobile-drawer-btn"
              style={{ color: '#EF4444' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Channel (@nikkahnett)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
