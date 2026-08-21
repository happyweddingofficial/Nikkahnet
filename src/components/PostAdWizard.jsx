import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  UserCheck, 
  GraduationCap, 
  Briefcase,
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Phone,
  Camera
} from 'lucide-react';

export function PostAdWizard({ t, lang }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic
    gender: 'Female',
    age: '24',
    maritalStatus: 'Never Married',
    district: 'Malappuram',
    town: 'Manjeri',
    sect: 'Sunni',
    height: "5' 4\"",
    // Step 2: Education & Job
    education: 'B.Tech / Degree',
    occupation: 'Software Engineer',
    workplace: 'Kochi / Remote',
    incomeRange: 'Independent / Well Settled',
    // Step 3: Family
    father: 'Businessman / Merchant',
    mother: 'Homemaker',
    brothers: '1 (Married)',
    sisters: '1 (Student)',
    familyStatus: 'Upper Middle Class • Religious Family',
    // Step 4: Preferences
    prefAgeRange: '26 - 30 Years',
    prefDistrict: 'Malappuram, Kozhikode or GCC',
    prefEducation: 'Professional Graduate (B.Tech / MBBS / CA)',
    prefOccupation: 'Well Employed in India / GCC',
    prefMaritalStatus: 'Never Married',
    prefNotes: 'Looking for a religious, well-mannered, and caring life partner.',
    // Step 5: Privacy & Contact
    photoPreference: 'AI Illustrative Image (Privacy Protected)',
    contactPerson: 'Father / Guardian',
    contactNumber: '',
    agreedToTerms: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);

    // Format WhatsApp submission payload
    const text = `*NEW MATRIMONIAL ADVERTISEMENT SUBMISSION*\n*Nikah.Net Advertising Portal*\n----------------------------------------\n*1. BASIC DETAILS:*\n• Looking for: ${formData.gender === 'Female' ? 'Bride' : 'Groom'}\n• Age: ${formData.age} Years\n• Height: ${formData.height}\n• Marital Status: ${formData.maritalStatus}\n• District: ${formData.district} (${formData.town})\n• Religion & Sect: Islam — ${formData.sect}\n\n*2. EDUCATION & PROFESSION:*\n• Qualification: ${formData.education}\n• Current Job: ${formData.occupation}\n• Workplace: ${formData.workplace}\n• Financial Status: ${formData.incomeRange}\n\n*3. FAMILY DETAILS:*\n• Father: ${formData.father}\n• Mother: ${formData.mother}\n• Brothers: ${formData.brothers}\n• Sisters: ${formData.sisters}\n• Family Background: ${formData.familyStatus}\n\n*4. PARTNER PREFERENCES:*\n• Preferred Age: ${formData.prefAgeRange}\n• Preferred District: ${formData.prefDistrict}\n• Preferred Education: ${formData.prefEducation}\n• Preferred Job: ${formData.prefOccupation}\n• Notes: ${formData.prefNotes}\n\n*5. CONTACT & PRIVACY:*\n• Contact Person: ${formData.contactPerson}\n• Contact Number: ${formData.contactNumber || 'Provided in chat'}\n• Photo Option: ${formData.photoPreference}\n----------------------------------------\nI confirm that I have the authorization to publish this matrimonial advertisement on Nikah.Net.`;

    const whatsappUrl = `https://wa.me/918075913098?text=${encodeURIComponent(text)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <section id="post-ad" className="post-ad-section">
      <div className="app-container">
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
            {t.post_badge}
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.6rem' }}>
            <span className="burgundy-gradient-text">{t.post_title}</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {t.post_subtitle}
          </p>
        </div>

        {/* Wizard Main Grid */}
        <div className="wizard-layout">
          {/* Left Form Box */}
          <div className="wizard-card">
            {/* Stepper Navigation */}
            <div className="wizard-stepper">
              {[1, 2, 3, 4, 5].map((step) => (
                <div 
                  key={step}
                  className={`step-indicator ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                  onClick={() => setCurrentStep(step)}
                >
                  <div className="step-circle">
                    {currentStep > step ? <CheckCircle2 size={16} /> : step}
                  </div>
                  <span className="step-title-text hidden-mobile">
                    {step === 1 && 'Basic'}
                    {step === 2 && 'Career'}
                    {step === 3 && 'Family'}
                    {step === 4 && 'Partner'}
                    {step === 5 && 'Contact'}
                  </span>
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Basic Details */}
              {currentStep === 1 && (
                <div>
                  <h3 className="wizard-step-title">
                    {t.step1_title}
                  </h3>
                  <div className="wizard-form-grid-2">
                    <div className="search-field">
                      <label className="search-label">Gender (ലിംഗം)</label>
                      <select 
                        className="select-input" 
                        value={formData.gender} 
                        onChange={(e) => handleChange('gender', e.target.value)}
                      >
                        <option value="Female">Bride (പെൺകുട്ടി)</option>
                        <option value="Male">Groom (ആൺകുട്ടി)</option>
                      </select>
                    </div>

                    <div className="search-field">
                      <label className="search-label">Age (പ്രായം)</label>
                      <input 
                        type="number" 
                        className="text-input" 
                        value={formData.age} 
                        onChange={(e) => handleChange('age', e.target.value)}
                        min="18" 
                        max="60" 
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Height (ഉയരം)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. 5' 4&quot; (163 cm)"
                        value={formData.height} 
                        onChange={(e) => handleChange('height', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Marital Status (വിവാഹാവസ്ഥ)</label>
                      <select 
                        className="select-input" 
                        value={formData.maritalStatus} 
                        onChange={(e) => handleChange('maritalStatus', e.target.value)}
                      >
                        <option value="Never Married">Never Married (അവിവാഹിതർ)</option>
                        <option value="Divorced">Divorced (വിവാഹമോചിതർ)</option>
                        <option value="Widowed">Widowed (വിധവ / വിഭാര്യൻ)</option>
                      </select>
                    </div>

                    <div className="search-field">
                      <label className="search-label">District (ജില്ല)</label>
                      <select 
                        className="select-input" 
                        value={formData.district} 
                        onChange={(e) => handleChange('district', e.target.value)}
                      >
                        <option value="Malappuram">Malappuram (മലപ്പുറം)</option>
                        <option value="Kozhikode">Kozhikode (കോഴിക്കോട്)</option>
                        <option value="Kannur">Kannur (കണ്ണൂർ)</option>
                        <option value="Palakkad">Palakkad (പാലക്കാട്)</option>
                        <option value="Wayanad">Wayanad (വയനാട്)</option>
                        <option value="GCC (Native Kerala)">GCC / Abroad (ഗൾഫ്)</option>
                      </select>
                    </div>

                    <div className="search-field">
                      <label className="search-label">Town / Native Place (സ്ഥലം)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Manjeri, Tirur, Calicut"
                        value={formData.town} 
                        onChange={(e) => handleChange('town', e.target.value)}
                      />
                    </div>

                    <div className="search-field grid-col-full">
                      <label className="search-label">Community / Sect (വിഭാഗം)</label>
                      <select 
                        className="select-input" 
                        value={formData.sect} 
                        onChange={(e) => handleChange('sect', e.target.value)}
                      >
                        <option value="Sunni">Sunni (General)</option>
                        <option value="Sunni (EK)">Sunni (EK)</option>
                        <option value="Sunni (AP)">Sunni (AP)</option>
                        <option value="Mujahid">Mujahid</option>
                        <option value="Islam (General)">Islam (Open to all)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Education & Profession */}
              {currentStep === 2 && (
                <div>
                  <h3 className="wizard-step-title">
                    {t.step2_title}
                  </h3>
                  <div className="wizard-form-grid-1">
                    <div className="search-field">
                      <label className="search-label">Educational Qualification (വിദ്യാഭ്യാസം)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. B.Tech Computer Science, MBBS, M.Com, B.Pharm"
                        value={formData.education} 
                        onChange={(e) => handleChange('education', e.target.value)}
                        required
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Current Occupation / Job (തൊഴിൽ)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Software Engineer, Doctor, Accountant, Teacher, Business"
                        value={formData.occupation} 
                        onChange={(e) => handleChange('occupation', e.target.value)}
                        required
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Workplace or Location (ജോലി ചെയ്യുന്ന സ്ഥലം)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Kozhikode, Kochi InfoPark, Dubai UAE, Malappuram"
                        value={formData.workplace} 
                        onChange={(e) => handleChange('workplace', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Income / Financial Status (സാമ്പത്തിക നില)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Upper Middle Class, Decent Independent Income"
                        value={formData.incomeRange} 
                        onChange={(e) => handleChange('incomeRange', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Family Details */}
              {currentStep === 3 && (
                <div>
                  <h3 className="wizard-step-title">
                    {t.step3_title}
                  </h3>
                  <div className="wizard-form-grid-2">
                    <div className="search-field grid-col-full">
                      <label className="search-label">Father's Information (പിതാവിന്റെ വിവരങ്ങൾ)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Businessman in Malappuram / Retired Govt Employee"
                        value={formData.father} 
                        onChange={(e) => handleChange('father', e.target.value)}
                      />
                    </div>

                    <div className="search-field grid-col-full">
                      <label className="search-label">Mother's Information (മാതാവിന്റെ വിവരങ്ങൾ)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Homemaker / School Teacher"
                        value={formData.mother} 
                        onChange={(e) => handleChange('mother', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Brothers (സഹോദരന്മാർ)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. 1 Married (Dubai)"
                        value={formData.brothers} 
                        onChange={(e) => handleChange('brothers', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Sisters (സഹോദരിമാർ)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. 1 Younger Student"
                        value={formData.sisters} 
                        onChange={(e) => handleChange('sisters', e.target.value)}
                      />
                    </div>

                    <div className="search-field grid-col-full">
                      <label className="search-label">Family Background & Values (കുടുംബ പശ്ചാത്തലം)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Religious, Respected Family, Upper Middle Class"
                        value={formData.familyStatus} 
                        onChange={(e) => handleChange('familyStatus', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Partner Preferences */}
              {currentStep === 4 && (
                <div>
                  <h3 className="wizard-step-title">
                    {t.step4_title}
                  </h3>
                  <div className="wizard-form-grid-1">
                    <div className="search-field">
                      <label className="search-label">Preferred Age Range (പ്രായപരിധി)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. 26 - 30 Years"
                        value={formData.prefAgeRange} 
                        onChange={(e) => handleChange('prefAgeRange', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Preferred District / Location (സ്ഥല താല്പര്യം)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Malappuram or Kozhikode / GCC"
                        value={formData.prefDistrict} 
                        onChange={(e) => handleChange('prefDistrict', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Education & Job Preference (വിദ്യാഭ്യാസം & ജോലി)</label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Degree / Professional / Well Employed"
                        value={formData.prefEducation} 
                        onChange={(e) => handleChange('prefEducation', e.target.value)}
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Other Expectations (മറ്റു താല്പര്യങ്ങൾ)</label>
                      <textarea 
                        className="text-input" 
                        rows="3"
                        placeholder="e.g. Religious, Namaz practicing, modest and loving personality"
                        value={formData.prefNotes} 
                        onChange={(e) => handleChange('prefNotes', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Privacy & Contact */}
              {currentStep === 5 && (
                <div>
                  <h3 className="wizard-step-title">
                    {t.step5_title}
                  </h3>
                  <div className="wizard-form-grid-1">
                    <div className="search-field">
                      <label className="search-label">
                        <Camera size={15} className="text-gold" />
                        <span>Photograph Display Preference (ഫോട്ടോ രീതി)</span>
                      </label>
                      <select 
                        className="select-input" 
                        value={formData.photoPreference} 
                        onChange={(e) => handleChange('photoPreference', e.target.value)}
                      >
                        <option value="AI Illustrative Image (Privacy Protected)">
                          AI Illustrative Image (Privacy Protected / സ്വകാര്യതയ്ക്കായി AI ചിത്രം)
                        </option>
                        <option value="Verified Real Photograph with Consent">
                          Display Verified Photograph (യഥാർത്ഥ ഫോട്ടോ സഹിതം)
                        </option>
                        <option value="Without Photograph (Only Biodata)">
                          Without Photograph (ഫോട്ടോ ഇല്ലാതെ വിവരങ്ങൾ മാത്രം)
                        </option>
                      </select>
                    </div>

                    <div className="search-field">
                      <label className="search-label">
                        <Phone size={15} className="text-gold" />
                        <span>Guardian / Submitter Contact Person (ബന്ധപ്പെടേണ്ട ആൾ)</span>
                      </label>
                      <input 
                        type="text" 
                        className="text-input" 
                        placeholder="e.g. Father (Aboobacker) / Brother"
                        value={formData.contactPerson} 
                        onChange={(e) => handleChange('contactPerson', e.target.value)}
                        required
                      />
                    </div>

                    <div className="search-field">
                      <label className="search-label">Phone / WhatsApp Number for Inquiries (ഫോൺ നമ്പർ)</label>
                      <input 
                        type="tel" 
                        className="text-input" 
                        placeholder="e.g. 98470 XXXXX"
                        value={formData.contactNumber} 
                        onChange={(e) => handleChange('contactNumber', e.target.value)}
                      />
                    </div>

                    <div style={{
                      background: 'var(--bg-subtle)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.813rem',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-light)'
                    }}>
                      <label style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                        <input 
                          type="checkbox" 
                          checked={formData.agreedToTerms} 
                          onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
                          style={{ marginTop: '0.2rem' }}
                          required
                        />
                        <span>
                          I confirm that I have lawful authority to submit this profile for matrimonial advertising on Nikah.Net per the Customer Respect & Privacy terms.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', gap: '1rem' }}>
                {currentStep > 1 ? (
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={handlePrev}
                  >
                    <ArrowLeft size={16} />
                    <span>{t.btn_prev}</span>
                  </button>
                ) : <div />}

                {currentStep < 5 ? (
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleNext}
                  >
                    <span>{t.btn_next}</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-whatsapp"
                    style={{ fontWeight: 700 }}
                  >
                    <MessageCircle size={18} />
                    <span>{t.btn_submit_whatsapp}</span>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Live Preview Card */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-600)', fontWeight: 700, fontSize: '0.875rem' }}>
                <Sparkles size={16} />
                <span>{t.preview_heading}</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
                {t.preview_desc}
              </p>
            </div>

            {/* Simulated Live Card */}
            <div className="profile-card" style={{ border: '2px dashed var(--gold-400)' }}>
              <div className="card-header-banner">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="card-id-badge">NK-NEW</span>
                  <span className={`badge ${formData.gender === 'Female' ? 'badge-burgundy' : 'badge-gold'}`}>
                    {formData.gender === 'Female' ? 'Bride' : 'Groom'}
                  </span>
                </div>
                <div className="privacy-badge">
                  <ShieldCheck size={13} className="text-emerald" />
                  <span>{formData.photoPreference.includes('AI') ? 'AI Illustration' : 'Real Photo'}</span>
                </div>
              </div>

              <div className="card-avatar-row">
                <div className="profile-avatar">
                  <span>{formData.gender === 'Female' ? '🧕' : '🤵'}</span>
                </div>
                <div className="profile-hero-info">
                  <div className="profile-title">
                    {formData.age || '24'} Yrs • {formData.height || "5' 4\""}
                  </div>
                  <div className="profile-sub-title">
                    <span style={{ fontWeight: 600, color: 'var(--gold-600)' }}>{formData.sect}</span> • {formData.town || 'Native Town'}, {formData.district}
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="detail-row">
                  <GraduationCap size={16} className="detail-icon" />
                  <div className="detail-text">
                    <strong>Education:</strong> {formData.education || 'Graduate'}
                  </div>
                </div>

                <div className="detail-row">
                  <Briefcase size={16} className="detail-icon" />
                  <div className="detail-text">
                    <strong>Profession:</strong> {formData.occupation || 'Employed'} <span style={{ color: 'var(--text-subtle)', fontSize: '0.8rem' }}>({formData.workplace})</span>
                  </div>
                </div>

                <div className="detail-row">
                  <Users size={16} className="detail-icon" />
                  <div className="detail-text">
                    <strong>Family:</strong> {formData.father} • {formData.familyStatus.split('•')[0]}
                  </div>
                </div>

                <div className="expectation-box">
                  <strong style={{ color: 'var(--primary-700)', display: 'block', marginBottom: '0.15rem' }}>
                    Looking for:
                  </strong>
                  {formData.prefEducation}, {formData.prefDistrict} ({formData.prefAgeRange})
                </div>
              </div>

              <div className="card-footer-actions">
                <button className="btn btn-whatsapp btn-sm" style={{ width: '100%' }} disabled>
                  <MessageCircle size={15} />
                  <span>Verified WhatsApp Enquiries</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
