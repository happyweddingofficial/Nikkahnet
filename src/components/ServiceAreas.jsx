import React from 'react';
import { MapPin, Building2, CheckCircle2, Globe2 } from 'lucide-react';
import { serviceAreasData } from '../data/profilesData';

export function ServiceAreas({ t, lang }) {
  return (
    <section id="service-areas" className="directory-section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="app-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-emerald" style={{ marginBottom: '0.6rem' }}>
            <MapPin size={13} />
            <span>{t.areas_badge}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.6rem' }}>
            <span className="burgundy-gradient-text">{t.areas_title}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {t.areas_subtitle}
          </p>
        </div>

        {/* Service Areas Cards */}
        <div className="areas-grid">
          {serviceAreasData.map((area, index) => (
            <div key={index} className={`area-card ${area.isPrimary ? 'primary-hub' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span className={`badge ${area.isPrimary ? 'badge-burgundy' : 'badge-gold'}`}>
                  {area.badge}
                </span>
                {area.isPrimary ? <Building2 size={20} className="text-gold" /> : <Globe2 size={20} className="text-emerald" />}
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                {area.district}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                {area.description}
              </p>

              <div style={{ fontSize: '0.813rem', fontWeight: 600, color: 'var(--primary-700)', marginBottom: '0.4rem' }}>
                Key Coverage Locations:
              </div>

              <div className="town-chips">
                {area.towns.map((town, tIdx) => (
                  <span key={tIdx} className="town-chip">
                    {town}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
