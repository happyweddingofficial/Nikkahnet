import React from 'react';
import { Heart, Sparkles, MapPin, Calendar, Quote } from 'lucide-react';
import { couplesData } from '../data/profilesData';

export function CouplesShowcase({ t, lang }) {
  return (
    <section id="couples" className="couples-section pattern-bg">
      <div className="app-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>
            <Heart size={13} fill="currentColor" />
            <span>{t.couples_badge}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.6rem' }}>
            <span className="burgundy-gradient-text">{t.couples_title}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {t.couples_subtitle}
          </p>
        </div>

        {/* Couples Gallery Grid */}
        <div className="couples-grid">
          {couplesData.map((couple) => (
            <div key={couple.id} className="couple-card">
              <div className="couple-img-wrapper">
                <img 
                  src={couple.image} 
                  alt={`Couple ${couple.names}`} 
                  className="couple-img"
                  loading="lazy"
                />
                <div className="couple-overlay-badge">
                  <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  <span>Nikah: {couple.nikahDate}</span>
                </div>
              </div>

              <div className="couple-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <h3 className="couple-names">{couple.names}</h3>
                  <Sparkles size={16} className="text-gold" />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.813rem', color: 'var(--text-subtle)', marginBottom: '0.75rem' }}>
                  <MapPin size={14} className="text-gold" />
                  <span>{couple.location}</span>
                </div>

                <p className="couple-quote">
                  "{couple.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
