import React from 'react';
import { 
  X, 
  Trash2, 
  MessageCircle, 
  Eye, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  Bookmark
} from 'lucide-react';

export function ShortlistDrawer({ 
  isOpen, 
  onClose, 
  shortlist, 
  onRemove, 
  onClearAll, 
  onViewBiodata, 
  t, 
  lang 
}) {
  if (!isOpen) return null;

  const handleSendAllWhatsApp = () => {
    if (shortlist.length === 0) return;

    const profileList = shortlist.map((p, idx) => 
      `${idx + 1}. *${p.id}* (${p.gender === 'Female' ? 'Bride' : 'Groom'}, Age ${p.age}, ${p.district}) - ${p.education}, ${p.occupation}`
    ).join('\n');

    const message = `Assalamu Alaikum Nikah.Net Team,\n\nOur family has shortlisted the following *${shortlist.length} matrimonial proposal(s)* on Nikah.Net:\n\n${profileList}\n\nPlease share the verified family contact and discussion details for these profiles.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/918075913098?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bookmark size={18} className="text-gold" />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
              {t.shortlist_title} ({shortlist.length})
            </h3>
          </div>
          <button 
            className="btn btn-outline btn-icon"
            onClick={onClose}
            style={{ width: '32px', height: '32px' }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="drawer-body">
          {shortlist.length > 0 ? (
            shortlist.map((profile) => (
              <div 
                key={profile.id} 
                style={{
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span className="card-id-badge">{profile.id}</span>
                    <span className={`badge ${profile.gender === 'Female' ? 'badge-burgundy' : 'badge-gold'}`}>
                      {profile.gender === 'Female' ? 'Bride' : 'Groom'}
                    </span>
                  </div>
                  <button 
                    onClick={() => onRemove(profile.id)}
                    title="Remove from shortlist"
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>

                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {profile.age} Yrs • {profile.height} • {profile.town}, {profile.district}
                </div>

                <div style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>
                  {profile.education} • {profile.occupation}
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => { onClose(); onViewBiodata(profile); }}
                    style={{ flex: 1 }}
                  >
                    <Eye size={13} />
                    <span>View</span>
                  </button>
                  <a 
                    href={`https://wa.me/918075913098?text=${encodeURIComponent(`Assalamu Alaikum Nikah.Net, I want to enquire about shortlisted profile ${profile.id} (${profile.age} Yrs, ${profile.district}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ flex: 1 }}
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <Bookmark size={36} className="text-gold" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                {t.shortlist_empty}
              </p>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {shortlist.length > 0 && (
          <div className="drawer-footer">
            <button 
              className="btn btn-whatsapp"
              onClick={handleSendAllWhatsApp}
              style={{ width: '100%', fontWeight: 700 }}
            >
              <MessageCircle size={16} />
              <span>{t.btn_whatsapp_all}</span>
            </button>
            <button 
              className="btn btn-outline btn-sm"
              onClick={onClearAll}
              style={{ width: '100%' }}
            >
              <Trash2 size={14} />
              <span>{t.btn_clear_all}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
