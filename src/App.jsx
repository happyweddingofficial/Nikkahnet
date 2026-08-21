import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileDirectory } from './components/ProfileDirectory';
import { PostAdWizard } from './components/PostAdWizard';
import { CouplesShowcase } from './components/CouplesShowcase';
import { ServiceAreas } from './components/ServiceAreas';
import { PrivacyEthics } from './components/PrivacyEthics';
import { BiodataModal } from './components/BiodataModal';
import { ShortlistDrawer } from './components/ShortlistDrawer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';

import { profilesData } from './data/profilesData';
import { translations } from './data/translations';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nikah_theme') || 'light';
  });

  // Language state
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('nikah_lang') || 'en';
  });

  // Shortlist state
  const [shortlist, setShortlist] = useState(() => {
    try {
      const saved = localStorage.getItem('nikah_shortlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active viewing biodata modal
  const [activeBiodataProfile, setActiveBiodataProfile] = useState(null);

  // Shortlist drawer open state
  const [isShortlistDrawerOpen, setIsShortlistDrawerOpen] = useState(false);

  // Quick search criteria passed to directory
  const [quickFilter, setQuickFilter] = useState(null);

  const t = translations[lang] || translations.en;

  // Persist theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nikah_theme', theme);
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('nikah_lang', lang);
  }, [lang]);

  // Persist shortlist
  useEffect(() => {
    localStorage.setItem('nikah_shortlist', JSON.stringify(shortlist));
  }, [shortlist]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleToggleShortlist = (profile) => {
    setShortlist(prev => {
      const exists = prev.some(p => p.id === profile.id);
      if (exists) {
        return prev.filter(p => p.id !== profile.id);
      } else {
        return [...prev, profile];
      }
    });
  };

  const handleRemoveShortlist = (id) => {
    setShortlist(prev => prev.filter(p => p.id !== id));
  };

  const handleClearShortlist = () => {
    setShortlist([]);
  };

  const handleQuickSearch = (criteria) => {
    setQuickFilter(criteria);
    const directoryEl = document.getElementById('profiles');
    if (directoryEl) {
      directoryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Navbar 
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        shortlistCount={shortlist.length}
        openShortlist={() => setIsShortlistDrawerOpen(true)}
        onNavigate={scrollToSection}
        t={t}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero 
          onSearch={handleQuickSearch}
          onPostAdClick={() => scrollToSection('post-ad')}
          t={t}
          lang={lang}
        />

        {/* Featured Profiles Directory */}
        <ProfileDirectory 
          profiles={profilesData}
          shortlist={shortlist}
          onToggleShortlist={handleToggleShortlist}
          onViewBiodata={(profile) => setActiveBiodataProfile(profile)}
          initialFilter={quickFilter}
          t={t}
          lang={lang}
        />

        {/* Success Stories & Couples Gallery */}
        <CouplesShowcase 
          t={t}
          lang={lang}
        />

        {/* Post Matrimonial Ad Wizard */}
        <PostAdWizard 
          t={t}
          lang={lang}
        />

        {/* Primary Service Areas (Malappuram & Kozhikode) */}
        <ServiceAreas 
          t={t}
          lang={lang}
        />

        {/* Privacy, Respect & AI Image Disclosure */}
        <PrivacyEthics 
          t={t}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={scrollToSection}
        t={t}
        lang={lang}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloating 
        t={t}
        lang={lang}
      />

      {/* Full Biodata Modal Sheet */}
      <BiodataModal 
        profile={activeBiodataProfile}
        onClose={() => setActiveBiodataProfile(null)}
        t={t}
        lang={lang}
      />

      {/* Shortlist Drawer */}
      <ShortlistDrawer 
        isOpen={isShortlistDrawerOpen}
        onClose={() => setIsShortlistDrawerOpen(false)}
        shortlist={shortlist}
        onRemove={handleRemoveShortlist}
        onClearAll={handleClearShortlist}
        onViewBiodata={(profile) => setActiveBiodataProfile(profile)}
        t={t}
        lang={lang}
      />
    </div>
  );
}
