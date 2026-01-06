import { useState } from 'react';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import CategoriesPage from './components/CategoriesPage';
import PartnersPage from './components/PartnersPage';
import SponsorshipPage from './components/SponsorshipPage';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <HomePage key="home" />,
    <ProgramsPage key="programs" />,
    <CategoriesPage key="competition" />,
    <PartnersPage key="partners" />,
    <SponsorshipPage key="sponsorship" />,
    <ContactPage key="contact" />
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {pages[currentPage]}
    </div>
  );
}
