import React from 'react';
import { items } from '../data/items';

export default function KoleksiPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Koleksi Proyek</h1>
      <div className="grid gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
