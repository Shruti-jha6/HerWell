// src/components/SideMenu/SideMenu.js

import React from 'react';

const SideMenu = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="fixed top-20 left-0 h-full bg-white shadow-lg p-5 w-64"> {/* Added `top-20` to move it downwards */}
      <h2 className="text-xl font-semibold mb-4">Find Your Doctor</h2>
      
      <input 
        type="text" 
        placeholder="Enter your location" 
        className="p-2.5 rounded-lg w-full mb-4 border border-red-300 bg-red-50 shadow-md" 
      />
      
      <input
        type="text"
        placeholder="Search for a doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2.5 rounded-lg w-full mb-4 border border-red-300 bg-red-50 shadow-md"
      />

      <select
        onChange={(e) => setCategory(e.target.value)}
        className="py-2.5 border border-purple-700 rounded-lg w-full mb-4 text-sm text-center text-black border-red-300 bg-red-50 shadow-md"
      >
        <option value="">All Specialties</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Gynecologist">Gynecologist</option>
      </select>
    </div>
  );
};

export default SideMenu;
