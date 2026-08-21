import React from 'react';
import { 
  X, 
  Printer, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Users, 
  HeartHandshake, 
  Sparkles,
  Info,
  Building2
} from 'lucide-react';

export function BiodataModal({ profile, onClose, t, lang }) {
  if (!profile) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppEnquiry = () => {
    const message = `Assalamu Alaikum Nikah.Net Team,\n\nI am contacting regarding matrimonial advertisement ID *${profile.id}*.\n\n*Profile Overview:*\n• Gender: ${profile.gender === 'Female' ? 'Bride' : 'Groom'}\n• Age & Height: ${profile.age} Yrs, ${profile.height}\n• Location: ${profile.town}, ${profile.district}\n• Education: ${profile.education}\n• Profession: ${profile.occupation} (${profile.workplace})\n• Sect: ${profile.sect}\n\nOur family would like to obtain the verified family contact details to proceed with proposal discussions.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/918075913098?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header no-print">
          <div className="modal-header-info">
            <span className="card-id-badge">{profile.id}</span>
            <span className="badge badge-emerald modal-badge-text">
              <ShieldCheck size={14} />
              <span>Verified Matrimonial Ad</span>
            </span>
          </div>

          <div className="modal-header-actions">
            <button 
              className="btn btn-outline btn-sm modal-print-btn"
              onClick={handlePrint}
              title="Print Biodata for Family Discussion"
            >
              <Printer size={15} />
              <span className="hidden-mobile">Print Biodata</span>
            </button>
            <button 
              className="btn btn-outline btn-icon modal-close-btn"
              onClick={onClose}
              title="Close modal"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Biodata Content */}
        <div className="biodata-sheet">
          {/* Header */}
          <div className="biodata-header-print" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <img 
                src="/assets/images/logo.jpeg" 
                alt="Nikah.Net" 
                style={{ width: '36px', height: '36px', borderRadius: '8px' }} 
              />
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--primary-800)' }}>
                Nikah.Net Matrimonial Biodata
              </h2>
            </div>
            <p style={{ fontSize: '0.813rem', color: 'var(--text-subtle)' }}>
              Official Matrimonial Advertising & Profile Sharing Platform • WhatsApp: <strong>+91 80759 13098</strong>
            </p>
            <div style={{ 
              display: 'inline-block', 
              marginTop: '0.5rem', 
              padding: '0.25rem 0.85rem', 
              borderRadius: '999px', 
              background: 'var(--bg-subtle)', 
              fontSize: '0.813rem',
              fontWeight: 600,
              border: '1px solid var(--border-light)'
            }}>
              Profile Reference ID: <strong style={{ color: 'var(--primary-700)' }}>{profile.id}</strong> ({profile.gender === 'Female' ? 'Bride' : 'Groom'})
            </div>
          </div>

          {/* AI Image Privacy Notice */}
          <div style={{
            background: 'var(--bg-subtle)',
            borderLeft: '4px solid var(--gold-500)',
            padding: '0.75rem 1rem',
            borderRadius: '0 8px 8px 0',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}>
            <Info size={16} className="text-gold" style={{ flexShrink: 0 }} />
            <div>
              <strong>Privacy & Image Policy:</strong> Profile images are illustrative / AI-generated for family privacy protection. Full family identity & photographs can be shared directly between families upon mutual consent.
            </div>
          </div>

          {/* Section 1: Basic Details */}
          <div className="biodata-section-title">
            <Sparkles size={18} />
            <span>1. Basic Personal Information</span>
          </div>
          <table className="biodata-table">
            <tbody>
              <tr>
                <td>Gender / Status</td>
                <td><strong>{profile.gender === 'Female' ? 'Bride (പെൺകുട്ടി)' : 'Groom (ആൺകുട്ടി)'}</strong> — {profile.maritalStatus}</td>
              </tr>
              <tr>
                <td>Age & Date of Birth</td>
                <td>{profile.age} Years</td>
              </tr>
              <tr>
                <td>Height & Complexion</td>
                <td>{profile.height} • {profile.complexion || 'Fair'}</td>
              </tr>
              <tr>
                <td>Religion & Sect</td>
                <td><strong>{profile.religion}</strong> — {profile.sect}</td>
              </tr>
              <tr>
                <td>District & Native Town</td>
                <td><strong>{profile.district}</strong> ({profile.town})</td>
              </tr>
              <tr>
                <td>Languages Known</td>
                <td>{profile.additional?.languages || 'Malayalam, English'}</td>
              </tr>
            </tbody>
          </table>

          {/* Section 2: Education & Profession */}
          <div className="biodata-section-title">
            <GraduationCap size={18} />
            <span>2. Education & Professional Details</span>
          </div>
          <table className="biodata-table">
            <tbody>
              <tr>
                <td>Educational Qualification</td>
                <td><strong>{profile.education}</strong></td>
              </tr>
              <tr>
                <td>Current Occupation / Job</td>
                <td><strong>{profile.occupation}</strong></td>
              </tr>
              <tr>
                <td>Workplace & Location</td>
                <td>{profile.workplace}</td>
              </tr>
              <tr>
                <td>Financial / Income Grade</td>
                <td>{profile.incomeRange || 'Comfortable / Well Settled'}</td>
              </tr>
            </tbody>
          </table>

          {/* Section 3: Family Details */}
          <div className="biodata-section-title">
            <Users size={18} />
            <span>3. Family Background</span>
          </div>
          <table className="biodata-table">
            <tbody>
              <tr>
                <td>Father's Information</td>
                <td>{profile.family.father}</td>
              </tr>
              <tr>
                <td>Mother's Information</td>
                <td>{profile.family.mother}</td>
              </tr>
              <tr>
                <td>Brothers</td>
                <td>{profile.family.brothers}</td>
              </tr>
              <tr>
                <td>Sisters</td>
                <td>{profile.family.sisters}</td>
              </tr>
              <tr>
                <td>Native Place</td>
                <td>{profile.family.nativePlace}</td>
              </tr>
              <tr>
                <td>Family Type & Values</td>
                <td>{profile.family.familyStatus}</td>
              </tr>
            </tbody>
          </table>

          {/* Section 4: Matrimonial Preferences */}
          <div className="biodata-section-title">
            <HeartHandshake size={18} />
            <span>4. Partner Expectations & Preferences</span>
          </div>
          <table className="biodata-table">
            <tbody>
              <tr>
                <td>Preferred Age Range</td>
                <td>{profile.preferences.ageRange}</td>
              </tr>
              <tr>
                <td>Preferred Location / District</td>
                <td>{profile.preferences.district}</td>
              </tr>
              <tr>
                <td>Educational Expectation</td>
                <td>{profile.preferences.education}</td>
              </tr>
              <tr>
                <td>Occupation Preference</td>
                <td>{profile.preferences.occupation}</td>
              </tr>
              <tr>
                <td>Marital Status Preference</td>
                <td>{profile.preferences.maritalStatus}</td>
              </tr>
              <tr>
                <td>Specific Expectations</td>
                <td style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>
                  "{profile.preferences.notes}"
                </td>
              </tr>
            </tbody>
          </table>

          {/* Contact Verification Action Bar */}
          <div className="modal-cta-box no-print">
            <h4 className="modal-cta-title">
              Interested in this matrimonial proposal?
            </h4>
            <p className="modal-cta-desc">
              Connect with Nikah.Net's official coordinator in Malappuram to obtain verified guardian contact details.
            </p>
            <div className="modal-cta-actions">
              <button 
                className="btn btn-whatsapp modal-enquire-btn"
                onClick={handleWhatsAppEnquiry}
              >
                <MessageCircle size={17} />
                <span>WhatsApp Enquiry ({profile.id})</span>
              </button>
              <button 
                className="btn btn-outline modal-back-btn"
                onClick={onClose}
              >
                <span>Back to Directory</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
