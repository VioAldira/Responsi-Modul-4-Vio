import React from 'react';
import { items } from '../data/items';

export default function HomePage({ onNavigate }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Selamat datang di Katalog Mini</h1>
      <p className="text-gray-600 mb-6">Halo YN, selamat datang di PWA sederhana saya. Gunakan navigasi untuk berpindah halaman.</p>

      <section className="grid gap-4">
        {items.slice(0,3).map(it => (
          <div key={it.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-gray-600">{it.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
