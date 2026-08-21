import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  HeartHandshake, 
  Lock, 
  AlertTriangle, 
  HelpCircle,
  FileCheck2,
  PhoneOff
} from 'lucide-react';

export function PrivacyEthics({ t, lang }) {
  return (
    <section id="privacy-ethics" className="ethics-section">
      <div className="app-container">
        <div className="ethics-card">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2rem' }}>
            <div className="badge badge-burgundy" style={{ marginBottom: '0.6rem' }}>
              <ShieldCheck size={14} />
              <span>{t.ethics_badge}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', marginBottom: '0.6rem' }}>
              <span className="burgundy-gradient-text">{t.ethics_title}</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {t.ethics_subtitle}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="ethics-grid">
            {/* Pillar 1: Customer Respect & Privacy */}
            <div className="ethics-item">
              <div className="ethics-icon-box">
                <HeartHandshake size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Respect for Families & Dignity
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  At Nikah.Net, we respect every individual and family. Our platform handles matrimonial details with strict dignity and does not intend to harm, deceive, or embarrass any individual.
                </p>
              </div>
            </div>

            {/* Pillar 2: AI Image Disclosure */}
            <div className="ethics-item">
              <div className="ethics-icon-box">
                <Eye size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  AI Image & Privacy Disclosure
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  For privacy, presentation, and Islamic modesty, images displayed with certain profiles may be AI-generated or illustrative. Users are encouraged to independently verify identities before proceeding.
                </p>
              </div>
            </div>

            {/* Pillar 3: Advertising Platform (Not Broker) */}
            <div className="ethics-item">
              <div className="ethics-icon-box">
                <FileCheck2 size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Advertising & Sharing Service
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Nikah.Net is a modern matrimonial advertising platform, not a traditional marriage broker or bureau. We facilitate discovery; subsequent interactions occur at the discretion of the families.
                </p>
              </div>
            </div>

            {/* Pillar 4: Anti-Harassment Communication */}
            <div className="ethics-item">
              <div className="ethics-icon-box">
                <PhoneOff size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Respectful Communication Policy
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Contact details obtained via Nikah.Net must strictly be used for genuine matrimonial discussions. Spam, harassment, unwanted marketing, or commercial solicitation are strictly prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Official Support Redressal & Official Media Notice */}
          <div style={{
            marginTop: '2rem',
            padding: '1.25rem',
            background: 'var(--bg-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Official Matrimonial Updates, Privacy Inquiries & Video Guidance on YouTube & WhatsApp:
            </div>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a 
                href="https://youtube.com/@nikkahnett?si=Lo6Q4O-cozVeGY0y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#EF4444' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube (@nikkahnett)</span>
              </a>
              <a 
                href="https://wa.me/918075913098?text=Assalamu%20Alaikum%20Support%20Team%2C%20I%20have%20a%20concern%20regarding%20a%20profile%20on%20Nikah.Net."
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Contact Support: +91 80759 13098</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
