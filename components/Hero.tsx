import React from 'react';
import { Page } from '../types';
import { MoveRight, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  setPage: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center items-center pattern-grid">
      
      {/* Decorative Floating Elements (Chaotic Background) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF90B3] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#80FFDB] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#C7CEEA] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>

      {/* Main Content */}
      <div className="z-10 text-center px-4 max-w-4xl relative">
        
        {/* Sticker element */}
        <div className="hidden md:block absolute -top-12 -left-12 rotate-[-12deg] bg-yellow-300 border-2 border-black px-3 py-1 font-pixel shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           Welcome to the chaos!
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-6">
          <span className="block transform hover:skew-x-12 transition-transform cursor-default text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-[#4a4a4a] drop-shadow-[4px_4px_0px_#80FFDB]">
            VISUAL
          </span>
          <span className="block transform -rotate-2 hover:rotate-0 transition-transform cursor-default text-[#FFFAFA] text-stroke font-pixel">
            ALCHEMY
          </span>
          <span className="block text-5xl md:text-7xl mt-2 text-[#1A1A1A]">
            FOR THE WEB
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 bg-[#FFFAFA] border-2 border-black p-4 hard-shadow rotate-1">
          Brand Designer & Frontend Engineer crafting <span className="bg-[#FF90B3] px-1">digital kitsch</span> and <span className="bg-[#E2F0CB] px-1">webcore</span> experiences that stick.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => setPage(Page.DESIGN)}
            className="group relative px-8 py-4 bg-[#1A1A1A] text-white font-pixel text-xl border-2 border-transparent hover:bg-[#FF90B3] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all hard-shadow hard-shadow-hover"
          >
            <span className="flex items-center gap-2">
              EXPLORE WORKS <Star className="group-hover:animate-spin" />
            </span>
          </button>
          <button 
            onClick={() => setPage(Page.ABOUT)}
            className="group px-8 py-4 bg-white text-[#1A1A1A] font-bold text-xl border-2 border-[#1A1A1A] hover:bg-[#80FFDB] transition-all hard-shadow hard-shadow-hover"
          >
            <span className="flex items-center gap-2">
              WHO AM I? <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 w-full bg-[#1A1A1A] text-[#FFFAFA] py-3 overflow-hidden border-t-4 border-[#FF90B3]">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] font-pixel text-xl flex gap-8">
          <span>★ UI/UX DESIGN</span>
          <span>★ BRAND IDENTITY</span>
          <span>★ REACT DEVELOPMENT</span>
          <span>★ CHAOTIC GOOD</span>
          <span>★ WEBCORE AESTHETICS</span>
          <span>★ UI/UX DESIGN</span>
          <span>★ BRAND IDENTITY</span>
          <span>★ REACT DEVELOPMENT</span>
          <span>★ CHAOTIC GOOD</span>
          <span>★ WEBCORE AESTHETICS</span>
          <span>★ UI/UX DESIGN</span>
          <span>★ BRAND IDENTITY</span>
          <span>★ REACT DEVELOPMENT</span>
          <span>★ CHAOTIC GOOD</span>
          <span>★ WEBCORE AESTHETICS</span>
        </div>
      </div>

      {/* Global Styles for custom animations defined inline just in case */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};