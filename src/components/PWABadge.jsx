import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

export default function PWABadge() {
  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

  if (!offlineReady && !needRefresh) return null;

  return (
    <div className="fixed right-4 bottom-20 z-50">
      <div className="bg-white p-3 rounded shadow border">
        <div>{offlineReady ? 'App ready to work offline' : 'New content available'}</div>
        <div className="mt-2 flex gap-2">
          {needRefresh && <button onClick={() => updateServiceWorker(true)} className="px-3 py-1 bg-blue-600 text-white rounded">Reload</button>}
        </div>
      </div>
    </div>
  );
}
