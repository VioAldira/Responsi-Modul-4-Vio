import React from 'react';

export default function DesktopNavbar({ currentPage, onNavigate }) {
  const itemClass = (p) => (p === currentPage ? 'text-white bg-blue-600 px-3 py-1 rounded' : 'text-gray-700 hover:text-blue-600 px-3 py-1');

  return (
    <header className="hidden md:flex items-center justify-between bg-white shadow px-6 py-4">
      <div className="text-xl font-bold text-blue-600">Katalog Mini</div>
      <nav className="flex gap-2">
        <button className={itemClass('home')} onClick={() => onNavigate('home')}>Home</button>
        <button className={itemClass('koleksi')} onClick={() => onNavigate('koleksi')}>Koleksi</button>
        <button className={itemClass('profile')} onClick={() => onNavigate('profile')}>Profile</button>
      </nav>
    </header>
  );
}
