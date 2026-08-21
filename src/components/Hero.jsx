import React from 'react';
import { QuickSearch } from './QuickSearch';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function Hero({ onSearch, onPostAdClick, t, lang }) {
  return (
    <section id="home" className="hero-section pattern-bg">
      <div className="app-container">
        {/* Hero Top Content */}
        <div className="hero-content">
          <div className="badge badge-gold" style={{ marginBottom: '0.85rem' }}>
            {t.hero_badge}
          </div>
          
          <h1 className="hero-heading">
            <span className="burgundy-gradient-text">
              {lang === 'ml' ? 'വിശ്വാസ്യതയോടും ആദരവോടും' : 'Connecting Hearts with'}
            </span>
            <br />
            <span className="gold-gradient-text">
              {lang === 'ml' ? 'അനുയോജ്യമായ ജീവിതപങ്കാളി' : 'Dignity, Respect & Trust'}
            </span>
          </h1>

          <p className="hero-desc">
            {t.hero_desc}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Nikah.Net%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20matrimonial%20advertising%20services."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>{t.btn_whatsapp_help} (80759 13098)</span>
            </a>

            <button 
              className="btn btn-gold"
              onClick={onPostAdClick}
            >
              <span>{t.btn_post_free_ad}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Search Widget Bar */}
        <QuickSearch onSearch={onSearch} t={t} lang={lang} />
      </div>
    </section>
  );
}
