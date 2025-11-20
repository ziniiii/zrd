import React, { useState } from 'react';
import { Photo } from '../types';
import { X, Maximize2, Aperture, Download, Share2, Info } from 'lucide-react';

// Extended data with Japanese translations and more detail
const photos: Photo[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/800/1000?random=10", 
    title: "NEON_RAIN // ネオンの雨", 
    category: "URBAN",
    date: "2023.10.12",
    exif: { iso: 800, aperture: "f/1.8", shutter: "1/125", camera: "Sony A7III" },
    glitchColor: "#FF0055",
    description: "Captured in the back alleys of Shinjuku during a typhoon. The reflection of neon lights creates a cyberpunk atmosphere."
  },
  { 
    id: 2, 
    src: "https://picsum.photos/800/600?random=11", 
    title: "DIGITAL_FLORA // デジタル植物", 
    category: "NATURE",
    date: "2023.09.01",
    exif: { iso: 100, aperture: "f/4.0", shutter: "1/500", camera: "Fujifilm X-T4" },
    glitchColor: "#00FFAA",
    description: "A study of organic forms processed through digital filters to enhance the surreal qualities of everyday nature."
  },
  { 
    id: 3, 
    src: "https://picsum.photos/800/800?random=12", 
    title: "CONCRETE_DREAMS // 具体的な夢", 
    category: "ABSTRACT",
    date: "2023.11.15",
    exif: { iso: 400, aperture: "f/8.0", shutter: "1/250", camera: "Ricoh GR III" },
    glitchColor: "#0055FF",
    description: "Architectural geometry found in the brutalist structures of downtown."
  },
  { 
    id: 4, 
    src: "https://picsum.photos/600/800?random=13", 
    title: "GHOST_PORTRAIT // 幽霊の肖像画", 
    category: "PORTRAIT",
    date: "2023.12.05",
    exif: { iso: 1600, aperture: "f/1.4", shutter: "1/60", camera: "Canon AE-1" },
    glitchColor: "#FFFF00",
    description: "Long exposure portrait exploring the concept of digital identity and anonymity."
  },
  { 
    id: 5, 
    src: "https://picsum.photos/800/600?random=14", 
    title: "GLITCH_CITY // グリッチシティ", 
    category: "URBAN",
    date: "2024.01.20",
    exif: { iso: 3200, aperture: "f/2.8", shutter: "1/100", camera: "Sony A7III" },
    glitchColor: "#FF00FF",
    description: "The city never sleeps, it just buffers. A night walk through the electric district."
  },
  { 
    id: 6, 
    src: "https://picsum.photos/700/900?random=15", 
    title: "STATIC_NOISE // 静的ノイズ", 
    category: "ABSTRACT",
    date: "2024.02.14",
    exif: { iso: 800, aperture: "f/5.6", shutter: "1/60", camera: "Fujifilm X100V" },
    glitchColor: "#00FFFF",
    description: "Textures of decaying technology found in an abandoned arcade."
  },
];

const categories = ['ALL', 'URBAN', 'NATURE', 'ABSTRACT', 'PORTRAIT'];

export const Photography: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState('ALL');

  const filteredPhotos = filter === 'ALL' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#FFFAFA] text-[#1A1A1A] relative pattern-grid">
      {/* Background Elements */}
      <div className="fixed top-20 right-10 text-9xl font-black opacity-5 text-[#E2F0CB] pointer-events-none select-none rotate-90" style={{ writingMode: 'vertical-rl' }}>
        写真撮影
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-[#1A1A1A] pb-6 bg-[#FFFAFA]">
           <div>
             <div className="bg-[#FF90B3] inline-block px-2 py-1 border border-black font-mono text-xs mb-2 hard-shadow">
                ARCHIVE_V.2.0
             </div>
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
               VISUAL<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80FFDB] to-[#0000FF] text-stroke">DIARY</span>
             </h2>
           </div>
           <div className="text-right mt-6 md:mt-0">
              <p className="font-pixel text-xl mb-2">SELECT_CATEGORY:</p>
              <div className="flex flex-wrap gap-2 justify-end">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1 border-2 border-black font-bold text-sm transition-all hard-shadow-hover ${
                      filter === cat 
                        ? 'bg-[#1A1A1A] text-[#80FFDB] hard-shadow' 
                        : 'bg-white text-black hover:bg-[#E2F0CB]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
           </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredPhotos.map((photo) => (
             <div 
                key={photo.id} 
                className="group cursor-pointer relative"
                onClick={() => setSelectedPhoto(photo)}
             >
                {/* Decor elements behind */}
                <div className="absolute -inset-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0 border-2 border-black"></div>
                
                {/* Card */}
                <div className="relative z-10 bg-white border-4 border-[#1A1A1A] h-[450px] flex flex-col hard-shadow transition-transform duration-200 group-hover:-translate-y-2 group-hover:-translate-x-2">
                   
                   {/* Card Header */}
                   <div className="bg-[#1A1A1A] text-white px-3 py-2 flex justify-between items-center">
                      <span className="font-pixel text-sm truncate pr-2">{photo.title.split('//')[0]}</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#FF5555]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#FFFF55]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#55FF55]"></div>
                      </div>
                   </div>

                   {/* Image Container */}
                   <div className="flex-grow relative overflow-hidden bg-gray-200 p-2">
                      <div className="w-full h-full relative overflow-hidden border-2 border-gray-100">
                        <img 
                          src={photo.src} 
                          alt={photo.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                        />
                        {/* Glitch Overlay */}
                        <div 
                          className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-60 pointer-events-none transition-opacity"
                          style={{ backgroundColor: photo.glitchColor }}
                        ></div>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 pointer-events-none"></div>
                      </div>
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                         <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full border-2 border-black">
                            <Maximize2 size={24} />
                         </div>
                      </div>
                   </div>
                   
                   {/* Card Footer */}
                   <div className="p-3 border-t-4 border-[#1A1A1A] bg-[#FFF0F5]">
                      <div className="flex justify-between items-center font-mono text-xs mb-1 text-gray-600">
                        <span>{photo.date}</span>
                        <span>{photo.exif.camera}</span>
                      </div>
                      <div className="font-bold text-lg leading-tight truncate">{photo.title}</div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <div className="inline-block p-4 border-2 border-dashed border-black bg-[#E2F0CB] font-pixel text-lg rotate-1">
              MORE_PHOTOS_LOADING... <span className="animate-pulse">█</span>
           </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
           
           {/* Close overlay click */}
           <div className="absolute inset-0" onClick={() => setSelectedPhoto(null)}></div>

           <div className="bg-[#FFFAFA] max-w-6xl w-full h-[90vh] border-4 border-[#FF90B3] hard-shadow relative z-10 flex flex-col md:flex-row overflow-hidden shadow-[0_0_50px_rgba(255,144,179,0.5)]">
              
              {/* Main Image Area */}
              <div className="flex-grow bg-[#1A1A1A] relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
                 <div className="absolute top-4 left-4 text-white/50 font-pixel z-20 pointer-events-none">
                    VIEWER.EXE // {selectedPhoto.id}
                 </div>
                 
                 <img 
                   src={selectedPhoto.src} 
                   alt={selectedPhoto.title}
                   className="max-w-full max-h-full object-contain shadow-2xl border-2 border-white/20"
                 />

                 {/* Floating Action Buttons */}
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                    <button className="p-3 bg-white text-black rounded-full hover:bg-[#80FFDB] transition-colors border-2 border-transparent hover:border-black">
                       <Download size={20} />
                    </button>
                    <button className="p-3 bg-white text-black rounded-full hover:bg-[#FF90B3] transition-colors border-2 border-transparent hover:border-black">
                       <Share2 size={20} />
                    </button>
                 </div>
              </div>

              {/* Sidebar Details */}
              <div className="w-full md:w-96 bg-[#FFFAFA] border-t-4 md:border-t-0 md:border-l-4 border-[#1A1A1A] flex flex-col h-1/3 md:h-full overflow-y-auto">
                 
                 {/* Header */}
                 <div className="bg-[#1A1A1A] text-white p-4 flex justify-between items-center sticky top-0 z-10">
                    <span className="font-bold font-pixel text-lg tracking-widest">METADATA</span>
                    <button onClick={() => setSelectedPhoto(null)} className="hover:text-[#FF90B3]">
                       <X size={24} />
                    </button>
                 </div>

                 <div className="p-6 space-y-8">
                    
                    {/* Title Section */}
                    <div>
                       <div className="text-xs font-bold text-gray-400 mb-1">FILENAME</div>
                       <h3 className="text-2xl font-black leading-tight mb-2">{selectedPhoto.title}</h3>
                       <p className="font-mono text-sm leading-relaxed border-l-2 border-[#FF90B3] pl-3 bg-gray-50 py-2">
                          {selectedPhoto.description}
                       </p>
                    </div>

                    {/* EXIF Grid */}
                    <div>
                       <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-3">
                          <Aperture size={14} /> EXIF DATA
                       </div>
                       <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                          <div className="bg-[#E2F0CB] p-2 border border-black">
                             <span className="block text-[10px] uppercase opacity-60">Camera</span>
                             {selectedPhoto.exif.camera}
                          </div>
                          <div className="bg-[#E2F0CB] p-2 border border-black">
                             <span className="block text-[10px] uppercase opacity-60">Aperture</span>
                             {selectedPhoto.exif.aperture}
                          </div>
                          <div className="bg-[#E2F0CB] p-2 border border-black">
                             <span className="block text-[10px] uppercase opacity-60">ISO</span>
                             {selectedPhoto.exif.iso}
                          </div>
                          <div className="bg-[#E2F0CB] p-2 border border-black">
                             <span className="block text-[10px] uppercase opacity-60">Shutter</span>
                             {selectedPhoto.exif.shutter}
                          </div>
                       </div>
                    </div>

                    {/* Color Palette Analysis (Fake) */}
                    <div>
                       <div className="text-xs font-bold text-gray-400 mb-3">COLOR_ANALYSIS</div>
                       <div className="flex h-8 border-2 border-black rounded-sm overflow-hidden">
                          <div className="flex-1 bg-[#1A1A1A]"></div>
                          <div className="flex-1 bg-[#FF90B3]"></div>
                          <div className="flex-1 bg-[#80FFDB]"></div>
                          <div className="flex-1" style={{ backgroundColor: selectedPhoto.glitchColor }}></div>
                          <div className="flex-1 bg-[#E2F0CB]"></div>
                       </div>
                       <div className="mt-2 text-[10px] font-mono text-right">Processed by Z-Engine v9.0</div>
                    </div>

                    {/* License Badge */}
                    <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300">
                       <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Info size={14} />
                          <span>© Copyright {selectedPhoto.date.split('.')[0]} Z-Design. <br/>All rights reserved.</span>
                       </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};