import React from 'react';
import { User, Code, Palette, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#E2F0CB] pattern-grid">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Avatar / Character Card */}
        <div className="md:col-span-4 flex flex-col">
           <div className="bg-[#FFFAFA] border-4 border-black hard-shadow p-4 h-full">
              <div className="bg-[#C7CEEA] aspect-square border-2 border-black mb-4 flex items-center justify-center overflow-hidden relative group">
                 <img src="https://picsum.photos/400/400?random=99" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                 <div className="absolute bottom-2 right-2 bg-white px-2 border border-black font-pixel text-xs animate-bounce">LVL 99</div>
              </div>
              <h2 className="text-3xl font-black uppercase text-center mb-1 bg-black text-white">Designer_Z</h2>
              <div className="text-center font-mono text-sm mb-4">Class: Creative Technologist</div>
              
              <div className="space-y-2 font-pixel text-lg">
                 <div className="flex justify-between border-b border-dashed border-gray-400">
                    <span>STR (Design)</span>
                    <span>★★★★★</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-400">
                    <span>INT (Code)</span>
                    <span>★★★★☆</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-400">
                    <span>DEX (Coffee)</span>
                    <span>★★★★★</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-400">
                    <span>LUK (Bugs)</span>
                    <span>★★☆☆☆</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Bio & Stats */}
        <div className="md:col-span-8 flex flex-col gap-6">
            
            {/* Main Bio Window */}
            <div className="bg-[#FFFAFA] border-4 border-black hard-shadow relative">
               <div className="bg-[#FF90B3] border-b-4 border-black p-2 flex justify-between items-center">
                  <span className="font-bold font-pixel text-white drop-shadow-md">BIO.txt</span>
                  <div className="flex gap-2">
                     <div className="w-3 h-3 bg-white border border-black"></div>
                     <div className="w-3 h-3 bg-white border border-black"></div>
                  </div>
               </div>
               <div className="p-6 font-mono leading-relaxed">
                  <p className="mb-4">
                     <span className="text-3xl font-bold float-left mr-2 mt-[-10px]">H</span>ello! I'm a multidisciplinary designer based in the digital void. I bridge the gap between aesthetic chaos and functional structure.
                  </p>
                  <p className="mb-4">
                     My philosophy is <strong>Anti-Boring</strong>. I believe websites should feel like places, not just pages. I specialize in React ecosystems but think in pure color and typography.
                  </p>
                  <div className="bg-yellow-100 border-l-4 border-yellow-400 p-2 italic text-sm">
                     "Make it pop, but make it work."
                  </div>
               </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-[#80FFDB] border-4 border-black hard-shadow p-4">
                  <div className="flex items-center gap-2 mb-3">
                     <Code className="w-6 h-6" />
                     <h3 className="font-bold uppercase text-xl">Tech Stack</h3>
                  </div>
                  <ul className="list-disc list-inside font-mono text-sm space-y-1">
                     <li>React / Next.js</li>
                     <li>TypeScript (My beloved)</li>
                     <li>Tailwind CSS</li>
                     <li>Three.js / WebGL</li>
                     <li>Gemini API Integration</li>
                  </ul>
               </div>

               <div className="bg-[#C7CEEA] border-4 border-black hard-shadow p-4">
                   <div className="flex items-center gap-2 mb-3">
                     <Palette className="w-6 h-6" />
                     <h3 className="font-bold uppercase text-xl">Artistic</h3>
                  </div>
                  <ul className="list-disc list-inside font-mono text-sm space-y-1">
                     <li>Brand Identity Systems</li>
                     <li>UI/UX Prototyping</li>
                     <li>Motion Graphics</li>
                     <li>Digital Illustration</li>
                     <li>Chaos Management</li>
                  </ul>
               </div>
            </div>
            
            {/* Likes Ticker */}
            <div className="bg-black text-white p-2 font-pixel overflow-hidden whitespace-nowrap border-4 border-white outline outline-2 outline-black">
                <span className="animate-[marquee_10s_linear_infinite] inline-block">
                   ♥ LIKES: VINTAGE SYNTHS | CAT VIDEOS | BRUTALISM | MATCHA LATTE | MECHANICAL KEYBOARDS | 
                   ♥ LIKES: VINTAGE SYNTHS | CAT VIDEOS | BRUTALISM | MATCHA LATTE | MECHANICAL KEYBOARDS |
                </span>
            </div>

        </div>
      </div>
    </div>
  );
};