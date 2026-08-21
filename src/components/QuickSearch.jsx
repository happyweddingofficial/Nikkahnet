import React, { useState } from 'react';
import { Search, UserCheck, MapPin, HeartHandshake, Sparkles } from 'lucide-react';

export function QuickSearch({ onSearch, t, lang }) {
  const [gender, setGender] = useState('All');
  const [district, setDistrict] = useState('All');
  const [maritalStatus, setMaritalStatus] = useState('All');
  const [ageRange, setAgeRange] = useState('All');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({
      gender,
      district,
      maritalStatus,
      ageRange
    });
  };

  return (
    <form className="search-widget" onSubmit={handleSearchSubmit}>
      <div className="search-grid">
        {/* Looking For */}
        <div className="search-field">
          <label className="search-label">
            <UserCheck size={15} className="text-gold" />
            <span>{t.search_looking_for}</span>
          </label>
          <select 
            className="select-input" 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="All">{t.all_genders}</option>
            <option value="Female">{t.bride}</option>
            <option value="Male">{t.groom}</option>
          </select>
        </div>

        {/* Age Range */}
        <div className="search-field">
          <label className="search-label">
            <Sparkles size={15} className="text-gold" />
            <span>{t.search_age}</span>
          </label>
          <select 
            className="select-input" 
            value={ageRange} 
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="All">All Ages (എല്ലാം)</option>
            <option value="18-24">18 - 24 Years</option>
            <option value="25-29">25 - 29 Years</option>
            <option value="30-35">30 - 35 Years</option>
            <option value="36+">36+ Years</option>
          </select>
        </div>

        {/* District */}
        <div className="search-field">
          <label className="search-label">
            <MapPin size={15} className="text-gold" />
            <span>{t.search_district}</span>
          </label>
          <select 
            className="select-input" 
            value={district} 
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="All">{t.all_districts}</option>
            <option value="Malappuram">Malappuram (മലപ്പുറം)</option>
            <option value="Kozhikode">Kozhikode (കോഴിക്കോട്)</option>
            <option value="Kannur">Kannur (കണ്ണൂർ)</option>
            <option value="Palakkad">Palakkad (പാലക്കാട്)</option>
            <option value="GCC">GCC / Abroad (ഗൾഫ്)</option>
          </select>
        </div>

        {/* Marital Status */}
        <div className="search-field">
          <label className="search-label">
            <HeartHandshake size={15} className="text-gold" />
            <span>{t.search_marital}</span>
          </label>
          <select 
            className="select-input" 
            value={maritalStatus} 
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="All">{t.all_marital}</option>
            <option value="Never Married">{t.never_married}</option>
            <option value="Divorced">{t.divorced}</option>
            <option value="Widowed">{t.widowed}</option>
          </select>
        </div>

        {/* Search CTA */}
        <div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '46px' }}>
            <Search size={18} />
            <span>{t.search_btn}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
