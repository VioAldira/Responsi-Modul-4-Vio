import React from 'react';

export default function MobileNavbar({ currentPage, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t flex justify-around py-2">
      <button onClick={() => onNavigate('home')} className={`text-sm ${currentPage==='home' ? 'text-blue-600' : 'text-gray-600'}`}>Home</button>
      <button onClick={() => onNavigate('koleksi')} className={`text-sm ${currentPage==='koleksi' ? 'text-blue-600' : 'text-gray-600'}`}>Koleksi</button>
      <button onClick={() => onNavigate('profile')} className={`text-sm ${currentPage==='profile' ? 'text-blue-600' : 'text-gray-600'}`}>Profile</button>
    </nav>
  );
}
