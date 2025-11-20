import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  onOpenCalendly: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, onOpenCalendly }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Page.DESIGN, label: 'DESIGN' },
    { id: Page.PHOTOGRAPHY, label: 'PHOTOGRAPHY' },
    { id: Page.ABOUT, label: 'ABOUT' },
    { id: Page.CONTACT, label: 'CONTACT' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FFFAFA] border-b-4 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => setPage(Page.HOME)}
          >
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#FFFAFA] flex items-center justify-center font-pixel text-4xl border-2 border-transparent group-hover:bg-[#FF90B3] group-hover:text-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors hard-shadow">
              Z
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`font-bold text-lg tracking-tighter hover:text-[#FF90B3] hover:underline decoration-4 underline-offset-4 transition-all ${
                  currentPage === item.id ? 'text-[#FF90B3] underline' : 'text-[#1A1A1A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={onOpenCalendly}
              className="flex items-center gap-2 bg-[#80FFDB] px-4 py-2 border-2 border-[#1A1A1A] font-bold text-sm uppercase tracking-wide hard-shadow hard-shadow-hover transition-all active:translate-y-1 active:shadow-none"
            >
              <Calendar size={16} />
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-[#1A1A1A] bg-[#E2F0CB] text-[#1A1A1A] hard-shadow active:translate-y-1 active:shadow-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFAFA] border-b-4 border-[#1A1A1A] absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-xl font-pixel font-bold border-b-2 border-dashed border-gray-300 hover:bg-[#FF90B3] hover:text-white hover:border-black transition-colors"
              >
                {item.label}
              </button>
            ))}
             <button
              onClick={() => {
                onOpenCalendly();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 mb-4 flex items-center justify-center gap-2 bg-[#80FFDB] px-4 py-4 border-2 border-[#1A1A1A] font-bold text-lg uppercase tracking-wide hard-shadow"
            >
              <Calendar size={20} />
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};