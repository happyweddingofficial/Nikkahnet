import React from 'react';
import { 
  MessageCircle, 
  Eye, 
  Bookmark, 
  Share2, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Heart
} from 'lucide-react';

export function ProfileCard({ 
  profile, 
  isShortlisted, 
  onToggleShortlist, 
  onViewBiodata, 
  t, 
  lang 
}) {
  const handleWhatsAppEnquiry = () => {
    const message = `Assalamu Alaikum Nikah.Net Team,\n\nI am interested in matrimonial advertisement *${profile.id}* (${profile.gender === 'Female' ? 'Bride' : 'Groom'}, Age ${profile.age}, ${profile.district}).\n\n*Education:* ${profile.education}\n*Profession:* ${profile.occupation}\n\nPlease share further family and verified contact details for matrimonial discussion.\n\nJazakallahu Khair.`;
    const whatsappUrl = `https://wa.me/918075913098?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: `Nikah.Net Proposal: ${profile.id}`,
      text: `Matrimonial Profile ${profile.id} (${profile.gender === 'Female' ? 'Bride' : 'Groom'}, Age ${profile.age}, ${profile.district}) - ${profile.education}, ${profile.occupation}. Verified via Nikah.Net WhatsApp: 80759 13098`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(`${shareData.text} \n${shareData.url}`);
        alert('Profile details copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(`${shareData.text} \n${shareData.url}`);
      alert('Profile details copied to clipboard!');
    }
  };

  return (
    <div className="profile-card">
      {/* Top Banner with ID and Privacy Badge */}
      <div className="card-header-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="card-id-badge">{profile.id}</span>
          <span className={`badge ${profile.gender === 'Female' ? 'badge-burgundy' : 'badge-gold'}`}>
            {profile.gender === 'Female' ? (lang === 'ml' ? 'പെൺകുട്ടി' : 'Bride') : (lang === 'ml' ? 'ആൺകുട്ടി' : 'Groom')}
          </span>
        </div>
        <div className="privacy-badge" title="For privacy and presentation per our AI Image Disclosure">
          <ShieldCheck size={13} className="text-emerald" />
          <span>AI Illustration</span>
        </div>
      </div>

      {/* Avatar & Key Overview */}
      <div className="card-avatar-row">
        <div className="profile-avatar">
          <span>{profile.avatarIcon || (profile.gender === 'Female' ? '🧕' : '🤵')}</span>
        </div>
        <div className="profile-hero-info">
          <div className="profile-title">
            {profile.age} Yrs • {profile.height}
          </div>
          <div className="profile-sub-title">
            <span style={{ fontWeight: 600, color: 'var(--gold-600)' }}>{profile.sect}</span> • {profile.town}, {profile.district}
          </div>
        </div>
      </div>

      {/* Body Details */}
      <div className="card-body">
        {/* Education */}
        <div className="detail-row">
          <GraduationCap size={16} className="detail-icon" />
          <div className="detail-text">
            <strong>{t.label_education}:</strong> {profile.education}
          </div>
        </div>

        {/* Profession & Workplace */}
        <div className="detail-row">
          <Briefcase size={16} className="detail-icon" />
          <div className="detail-text">
            <strong>{t.label_profession}:</strong> {profile.occupation} <span style={{ color: 'var(--text-subtle)', fontSize: '0.8rem' }}>({profile.workplace})</span>
          </div>
        </div>

        {/* Family Summary */}
        <div className="detail-row">
          <Users size={16} className="detail-icon" />
          <div className="detail-text">
            <strong>{t.label_family}:</strong> {profile.family.nativePlace} • {profile.family.familyStatus.split('•')[0]}
          </div>
        </div>

        {/* Partner Expectation */}
        <div className="expectation-box">
          <strong style={{ color: 'var(--primary-700)', display: 'block', marginBottom: '0.15rem' }}>
            {t.label_expectation}:
          </strong>
          {profile.preferences.education}, {profile.preferences.district} ({profile.preferences.ageRange})
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div className="card-footer-actions">
        {/* WhatsApp Inquiry Button */}
        <button 
          className="btn btn-whatsapp btn-sm card-btn-whatsapp"
          onClick={handleWhatsAppEnquiry}
          title="Direct WhatsApp Inquiry to Nikah.Net"
        >
          <MessageCircle size={15} />
          <span>{t.btn_whatsapp_enquire}</span>
        </button>

        {/* View Full Biodata */}
        <button 
          className="btn btn-outline btn-sm card-btn-biodata"
          onClick={() => onViewBiodata(profile)}
          title="View Complete Biodata Sheet"
        >
          <Eye size={15} />
          <span>{t.btn_view_biodata}</span>
        </button>

        {/* Shortlist Toggle */}
        <button 
          className={`btn btn-icon card-btn-icon ${isShortlisted ? 'btn-gold' : 'btn-outline'}`}
          onClick={() => onToggleShortlist(profile)}
          title={isShortlisted ? t.btn_shortlisted : t.btn_shortlist}
          aria-label="Bookmark profile"
        >
          <Bookmark size={15} fill={isShortlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Share Button */}
        <button 
          className="btn btn-outline btn-icon card-btn-icon"
          onClick={handleShare}
          title={t.btn_share}
          aria-label="Share profile"
        >
          <Share2 size={15} />
        </button>
      </div>
    </div>
  );
}
