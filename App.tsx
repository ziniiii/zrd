import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DesignPortfolio } from './components/DesignPortfolio';
import { Photography } from './components/Photography';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CalendlyModal } from './components/CalendlyModal';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Hero setPage={setCurrentPage} />;
      case Page.DESIGN:
        return <DesignPortfolio />;
      case Page.PHOTOGRAPHY:
        return <Photography />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />

      {/* Global footer for copyright */}
      {currentPage !== Page.HOME && (
        <footer className="bg-[#1A1A1A] text-[#FFFAFA] py-6 text-center font-pixel border-t-4 border-[#FF90B3]">
           <p>&copy; {new Date().getFullYear()} Z-DESIGN. ALL RIGHTS RESERVED. CHAOS CONTROLLED.</p>
        </footer>
      )}
    </div>
  );
};

export default App;