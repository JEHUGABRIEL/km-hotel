import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Amenities } from './components/Amenities';
import { Rooms } from './components/Rooms';
import { Dining } from './components/Dining';
import { Contact } from './components/Contact';
import { ChambresPage } from './pages/ChambresPage';
import { RestaurantBarPage } from './pages/RestaurantBarPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Dining />
      <Contact />
    </main>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-200 selection:text-brand-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chambres" element={<ChambresPage />} />
          <Route path="/restaurant-bar" element={<RestaurantBarPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}