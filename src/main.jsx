import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DesktopNavbar from './components/navbar/DesktopNavbar'
import MobileNavbar from './components/navbar/MobileNavbar'
import PWABadge from './components/PWABadge'
import HomePage from './pages/HomePage'
import KoleksiPage from './pages/KoleksiPage'
import ProfilePage from './pages/ProfilePage'

function AppRoot(){
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage){
      case 'home': return <HomePage />;
      case 'koleksi': return <KoleksiPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <DesktopNavbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-6 pb-24">
        {renderPage()}
      </main>
      <MobileNavbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <PWABadge />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>
)
