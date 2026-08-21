import React, { useState, useMemo } from 'react';
import { ProfileCard } from './ProfileCard';
import { Search, SlidersHorizontal, ArrowUpDown, Filter, RotateCcw } from 'lucide-react';

export function ProfileDirectory({ 
  profiles, 
  shortlist, 
  onToggleShortlist, 
  onViewBiodata, 
  initialFilter,
  t, 
  lang 
}) {
  const [activeTab, setActiveTab] = useState(initialFilter?.gender || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState(initialFilter?.district || 'All');
  const [selectedSect, setSelectedSect] = useState('All');
  const [selectedMarital, setSelectedMarital] = useState(initialFilter?.maritalStatus || 'All');
  const [sortBy, setSortBy] = useState('newest');

  // Filter profiles
  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      // Gender filter
      if (activeTab === 'Bride' && p.gender !== 'Female') return false;
      if (activeTab === 'Groom' && p.gender !== 'Male') return false;
      if (activeTab === 'Malappuram' && p.district !== 'Malappuram') return false;
      if (activeTab === 'Kozhikode' && p.district !== 'Kozhikode') return false;
      if (activeTab === 'GCC' && !p.district.includes('Dubai') && !p.district.includes('Qatar') && !p.workplace.includes('UAE') && !p.workplace.includes('DIFC')) return false;

      // District dropdown filter
      if (selectedDistrict !== 'All' && !p.district.toLowerCase().includes(selectedDistrict.toLowerCase())) {
        return false;
      }

      // Sect filter
      if (selectedSect !== 'All' && !p.sect.toLowerCase().includes(selectedSect.toLowerCase())) {
        return false;
      }

      // Marital status
      if (selectedMarital !== 'All' && p.maritalStatus !== selectedMarital) {
        return false;
      }

      // Text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matches = 
          p.id.toLowerCase().includes(query) ||
          p.education.toLowerCase().includes(query) ||
          p.occupation.toLowerCase().includes(query) ||
          p.town.toLowerCase().includes(query) ||
          p.district.toLowerCase().includes(query) ||
          p.sect.toLowerCase().includes(query);
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'ageAsc') return a.age - b.age;
      if (sortBy === 'ageDesc') return b.age - a.age;
      return 0; // Default order
    });
  }, [profiles, activeTab, searchQuery, selectedDistrict, selectedSect, selectedMarital, sortBy]);

  const handleResetFilters = () => {
    setActiveTab('All');
    setSearchQuery('');
    setSelectedDistrict('All');
    setSelectedSect('All');
    setSelectedMarital('All');
    setSortBy('newest');
  };

  return (
    <section id="profiles" className="directory-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="directory-header">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge badge-burgundy" style={{ marginBottom: '0.5rem' }}>
              {t.tag_verified}
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>
              <span className="burgundy-gradient-text">{t.dir_title}</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {t.dir_subtitle}
            </p>
          </div>

          {/* Tab Filters */}
          <div className="filter-tabs-wrapper">
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${activeTab === 'All' ? 'active' : ''}`}
                onClick={() => setActiveTab('All')}
              >
                {t.filter_all}
              </button>
              <button 
                className={`filter-tab ${activeTab === 'Bride' ? 'active' : ''}`}
                onClick={() => setActiveTab('Bride')}
              >
                {t.filter_brides}
              </button>
              <button 
                className={`filter-tab ${activeTab === 'Groom' ? 'active' : ''}`}
                onClick={() => setActiveTab('Groom')}
              >
                {t.filter_grooms}
              </button>
              <button 
                className={`filter-tab ${activeTab === 'Malappuram' ? 'active' : ''}`}
                onClick={() => setActiveTab('Malappuram')}
              >
                {t.filter_malappuram}
              </button>
              <button 
                className={`filter-tab ${activeTab === 'Kozhikode' ? 'active' : ''}`}
                onClick={() => setActiveTab('Kozhikode')}
              >
                {t.filter_kozhikode}
              </button>
              <button 
                className={`filter-tab ${activeTab === 'GCC' ? 'active' : ''}`}
                onClick={() => setActiveTab('GCC')}
              >
                {t.filter_gcc}
              </button>
            </div>
          </div>

          {/* Sub Controls: Search Bar, Dropdowns, Sort */}
          <div className="filter-controls">
            {/* Search Input */}
            <div className="search-bar-inline">
              <Search size={16} className="search-icon-inside" />
              <input 
                type="text"
                placeholder={t.filter_search_ph}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Dropdown Filters */}
            <div className="filter-dropdowns-row">
              {/* Sect Dropdown */}
              <select 
                className="select-input filter-select" 
                value={selectedSect}
                onChange={(e) => setSelectedSect(e.target.value)}
                aria-label="Filter by sect"
              >
                <option value="All">{t.filter_sect_all}</option>
                <option value="Sunni">Sunni (General / EK / AP)</option>
                <option value="Mujahid">Mujahid</option>
              </select>

              {/* Marital Status */}
              <select 
                className="select-input filter-select" 
                value={selectedMarital}
                onChange={(e) => setSelectedMarital(e.target.value)}
                aria-label="Filter by marital status"
              >
                <option value="All">{t.all_marital}</option>
                <option value="Never Married">{t.never_married}</option>
                <option value="Divorced">{t.divorced}</option>
                <option value="Widowed">{t.widowed}</option>
              </select>

              {/* Sort By */}
              <select 
                className="select-input filter-select" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort matrimonial ads"
              >
                <option value="newest">{t.sort_newest}</option>
                <option value="ageAsc">{t.sort_age_asc}</option>
                <option value="ageDesc">{t.sort_age_desc}</option>
              </select>

              {/* Reset Filter Button */}
              {(searchQuery || selectedDistrict !== 'All' || selectedSect !== 'All' || selectedMarital !== 'All' || activeTab !== 'All') && (
                <button 
                  className="btn btn-outline btn-sm filter-reset-btn"
                  onClick={handleResetFilters}
                  title="Reset all filters"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Results count text */}
          <div className="results-count-text">
            {t.showing_results.replace('{count}', filteredProfiles.length)}
          </div>
        </div>

        {/* Profile Grid */}
        {filteredProfiles.length > 0 ? (
          <div className="profiles-grid">
            {filteredProfiles.map((profile) => (
              <ProfileCard 
                key={profile.id}
                profile={profile}
                isShortlisted={shortlist.some(s => s.id === profile.id)}
                onToggleShortlist={onToggleShortlist}
                onViewBiodata={onViewBiodata}
                t={t}
                lang={lang}
              />
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--border-light)',
            marginTop: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              {t.no_profiles_found}
            </p>
            <button className="btn btn-primary btn-sm" onClick={handleResetFilters}>
              <RotateCcw size={15} />
              <span>Show All Matrimonial Ads</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
