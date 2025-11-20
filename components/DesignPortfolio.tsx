
import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { Maximize2, GripHorizontal, RefreshCcw, X, ArrowRight, Layers, Zap, Layout } from 'lucide-react';

// Detailed Data
const initialProjects: Project[] = [
  { 
    id: 1, 
    title: "NEON_GENESIS", 
    category: "Brand Identity", 
    image: "https://picsum.photos/600/400?random=1", 
    color: "#FF90B3", 
    x: 50, y: 50, rotation: -2,
    client: "CyberSystems Inc.",
    year: "2023",
    role: "Art Direction & Branding",
    description: "A complete visual identity overhaul for a Tokyo-based cybernetics startup. The brand needed to communicate 'organic technology'—the fusion of biology and machine. We used fluid gradients juxtaposed with rigid, brutalist typography to achieve this tension.",
    challenge: "The client wanted to avoid typical 'blue sci-fi' tropes. They needed warmth and humanity in a cold industry.",
    solution: "We introduced a palette of warm pinks and electric greens (referencing bio-luminescence) and created a dynamic logo system that mutates based on context.",
    gallery: [
      "https://picsum.photos/800/600?random=101",
      "https://picsum.photos/800/600?random=102",
      "https://picsum.photos/800/600?random=103"
    ]
  },
  { 
    id: 2, 
    title: "CYBER_CAFE", 
    category: "Web Design", 
    image: "https://picsum.photos/600/400?random=2", 
    color: "#80FFDB", 
    x: 300, y: 120, rotation: 3,
    client: "Brew & Byte",
    year: "2023",
    role: "UI/UX Design",
    description: "An immersive web experience for a chain of internet cafes. The site functions as a virtual desktop, allowing users to 'log in' to order coffee or reserve gaming stations.",
    challenge: "Making a complex booking system feel like a playful, retro operating system without sacrificing usability.",
    solution: "We utilized drag-and-drop interfaces (like this portfolio!) and retro-sound effects to create a tactile feeling. The checkout process was gamified to increase conversion.",
    gallery: [
      "https://picsum.photos/800/600?random=104",
      "https://picsum.photos/800/600?random=105"
    ]
  },
  { 
    id: 3, 
    title: "GLITCH_MAG", 
    category: "Editorial", 
    image: "https://picsum.photos/600/400?random=3", 
    color: "#C7CEEA", 
    x: 100, y: 350, rotation: -1,
    client: "Self-Initiated",
    year: "2024",
    role: "Editorial Design",
    description: "A print and digital publication exploring the aesthetics of error in the digital age. 'Glitch' isn't just a mistake; it's a feature of modern existence.",
    challenge: "Translating digital artifacts (screen tearing, pixelation) into high-quality print layouts.",
    solution: "We used custom-coded scripts to corrupt image files systematically, then overlaid these on pristine Swiss grid layouts. The result is 'controlled chaos'.",
    gallery: [
      "https://picsum.photos/800/600?random=106",
      "https://picsum.photos/800/600?random=107",
      "https://picsum.photos/800/600?random=108"
    ]
  },
  { 
    id: 4, 
    title: "VAPOR_WAVE", 
    category: "Packaging", 
    image: "https://picsum.photos/600/400?random=4", 
    color: "#E2F0CB", 
    x: 500, y: 250, rotation: 4,
    client: "Aura Drinks",
    year: "2022",
    role: "Packaging Design",
    description: "Packaging design for a line of sparkling waters infused with adaptogens. The target audience was Gen Z consumers looking for nostalgia and health.",
    challenge: "Standing out in a saturated beverage market dominated by minimalism.",
    solution: "We went maximalist. Holographic foils, 90s 3D renders, and ironic serif fonts. Each flavor has a unique 'mood' character.",
    gallery: [
      "https://picsum.photos/800/600?random=109",
      "https://picsum.photos/800/600?random=110"
    ]
  },
  { 
    id: 5, 
    title: "RETRO_UI", 
    category: "Component Lib", 
    image: "https://picsum.photos/600/400?random=5", 
    color: "#FFFFE0", 
    x: 200, y: 50, rotation: 1,
    client: "Open Source",
    year: "2023",
    role: "Development",
    description: "A React component library for building Neo-Brutalist interfaces. Features hard shadows, bold borders, and accessible high-contrast themes by default.",
    challenge: "Creating components that look 'rough' but perform smoothly and adhere to modern accessibility standards.",
    solution: "We used CSS variables for theming and rigorous aria-label testing. The library is now used by over 500 developers.",
    gallery: [
      "https://picsum.photos/800/600?random=111"
    ]
  },
  { 
    id: 6, 
    title: "KAWAII_SHOP", 
    category: "E-Commerce", 
    image: "https://picsum.photos/600/400?random=6", 
    color: "#FFB7B2", 
    x: 600, y: 500, rotation: -3,
    client: "Tokyo Pop",
    year: "2024",
    role: "Full Stack Dev",
    description: "An e-commerce platform for imported Japanese stationary. Focus on micro-interactions and cheerful animations.",
    challenge: "Reducing cart abandonment through delight.",
    solution: "We implemented a 'mascot' that reacts to user actions. Adding items to the cart triggers a confetti explosion. Checkout is a chat-style conversation.",
    gallery: [
      "https://picsum.photos/800/600?random=112",
      "https://picsum.photos/800/600?random=113"
    ]
  },
];

export const DesignPortfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zIndices, setZIndices] = useState<{ [key: number]: number }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset layout
  const resetLayout = () => {
    setProjects(initialProjects);
  };

  // Bring to front on click/drag
  const bringToFront = (id: number) => {
    const maxZ = Math.max(0, ...Object.values(zIndices));
    setZIndices(prev => ({ ...prev, [id]: maxZ + 1 }));
  };

  // Drag Logic
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (draggedId !== null && containerRef.current) {
        const x = e.clientX - offset.x;
        const y = e.clientY - offset.y;

        setProjects(prev => prev.map(p => 
          p.id === draggedId ? { ...p, x, y } : p
        ));
      }
    };

    const handleWindowMouseUp = () => {
      setDraggedId(null);
    };

    if (draggedId !== null) {
      window.addEventListener('mousemove', handleWindowMouseMove);
      window.addEventListener('mouseup', handleWindowMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [draggedId, offset]);

  const onMouseDownCorrect = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); 
    bringToFront(id);
    setDraggedId(id);
    const project = projects.find(p => p.id === id);
    if (project) {
        setOffset({
            x: e.clientX - project.x,
            y: e.clientY - project.y
        });
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-[#f0f0f0] relative overflow-hidden">
       
       {/* Header for this section */}
       <div className="absolute top-5 left-5 z-10 bg-white border-2 border-black p-4 hard-shadow max-w-md pointer-events-none select-none">
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">Work_Desk.exe</h2>
          <p className="font-pixel text-lg text-gray-600">
            Organize the chaos. <br/>
            <span className="bg-[#FF90B3] text-black px-1">DOUBLE CLICK</span> to open case study.
          </p>
       </div>

       <button 
          onClick={resetLayout}
          className="absolute top-5 right-5 z-10 bg-[#1A1A1A] text-[#FFFAFA] border-2 border-white outline outline-2 outline-black p-3 hard-shadow hover:bg-[#FF90B3] hover:text-black transition-all flex items-center gap-2 active:translate-y-1 active:shadow-none"
       >
          <RefreshCcw size={20}/>
          <span className="font-bold font-pixel hidden sm:inline">RESET_DESK</span>
       </button>

      {/* Playground Container */}
      <div 
        ref={containerRef} 
        className="w-full h-[120vh] relative"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseDown={(e) => onMouseDownCorrect(e, project.id)}
            onDoubleClick={() => setSelectedProject(project)}
            style={{
              transform: `translate(${project.x}px, ${project.y}px) rotate(${project.rotation}deg)`,
              backgroundColor: project.color,
              zIndex: zIndices[project.id] || 1,
              position: 'absolute',
              cursor: draggedId === project.id ? 'grabbing' : 'grab',
            }}
            className="w-64 sm:w-80 p-2 border-2 border-black hard-shadow transition-shadow select-none group hover:scale-105 duration-200"
          >
            {/* Window Header */}
            <div className="bg-black text-white px-2 py-1 text-xs font-pixel flex justify-between items-center mb-2">
              <span>{project.title}.prj</span>
              <div className="flex gap-1">
                 <div className="w-2 h-2 bg-white rounded-full hover:bg-red-500"></div>
                 <div className="w-2 h-2 bg-[#FF90B3] rounded-full"></div>
              </div>
            </div>

            {/* Image */}
            <div className="relative border-2 border-black overflow-hidden h-48 bg-white group-hover:grayscale-0 grayscale transition-all duration-300">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover pointer-events-none" 
               />
               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity flex items-center justify-center text-white font-bold">
                  OPEN PROJECT
               </div>
            </div>

            {/* Footer info */}
            <div className="mt-2 bg-white/50 p-2 border border-black/10">
               <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                    <span className="text-xs font-mono uppercase tracking-widest">{project.category}</span>
                  </div>
                  <Maximize2 size={16} className="text-black opacity-50 group-hover:opacity-100" />
               </div>
            </div>
            
            {/* Drag Handle Visual */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-black opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 border border-black text-xs font-pixel">
                DRAG ME
            </div>
          </div>
        ))}
        
        {/* Background Typography */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-0 text-[15vw] leading-none text-gray-200 font-black select-none pointer-events-none opacity-40">
          CREATE
        </div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-[#FFFAFA] overflow-y-auto animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Modal Header */}
          <div className="sticky top-0 z-50 bg-[#FFFAFA]/90 backdrop-blur-md border-b-4 border-[#1A1A1A] flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#1A1A1A] text-white px-3 py-1 font-pixel text-sm">
                FILE_VIEWER.EXE
              </div>
              <span className="font-bold text-xl uppercase hidden sm:block">{selectedProject.title}</span>
            </div>
            <button 
              onClick={() => setSelectedProject(null)}
              className="bg-[#FF90B3] border-2 border-black p-2 hover:bg-red-500 hover:text-white transition-colors hard-shadow active:translate-y-1 active:shadow-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* Hero Section */}
            <div className="mb-16">
               <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none text-stroke-sm">
                 {selectedProject.title}
               </h1>
               <div className="w-full h-[50vh] md:h-[70vh] border-4 border-[#1A1A1A] hard-shadow relative group overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt="Hero" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
                  <div className="absolute bottom-6 left-6 text-white font-pixel text-xl md:text-3xl">
                    {selectedProject.category} // {selectedProject.year}
                  </div>
               </div>
            </div>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y-2 border-black py-8 bg-[#f8f8f8]">
               <div>
                  <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 font-mono">Client</h4>
                  <p className="text-xl font-bold">{selectedProject.client}</p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 font-mono">Role</h4>
                  <p className="text-xl font-bold">{selectedProject.role}</p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 font-mono">Year</h4>
                  <p className="text-xl font-bold">{selectedProject.year}</p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase text-gray-500 mb-2 font-mono">Deliverables</h4>
                  <p className="text-xl font-bold">{selectedProject.category}</p>
               </div>
            </div>

            {/* Main Case Study Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
               
               {/* Left Column: The Narrative */}
               <div className="lg:col-span-4 space-y-12">
                  <div className="bg-[#E2F0CB] p-6 border-2 border-black hard-shadow">
                     <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
                       <Layers size={20} />
                       <h3 className="font-bold uppercase text-lg">The Challenge</h3>
                     </div>
                     <p className="font-mono text-sm leading-relaxed">
                       {selectedProject.challenge}
                     </p>
                  </div>

                  <div className="bg-[#C7CEEA] p-6 border-2 border-black hard-shadow">
                     <div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
                       <Zap size={20} />
                       <h3 className="font-bold uppercase text-lg">The Solution</h3>
                     </div>
                     <p className="font-mono text-sm leading-relaxed">
                       {selectedProject.solution}
                     </p>
                  </div>
               </div>

               {/* Right Column: Description & Gallery */}
               <div className="lg:col-span-8">
                  <h3 className="text-3xl font-bold mb-6 font-pixel">PROJECT_OVERVIEW</h3>
                  <p className="text-2xl md:text-3xl font-light leading-tight mb-12 border-l-8 border-[#FF90B3] pl-6">
                     {selectedProject.description}
                  </p>

                  <div className="space-y-12">
                     {selectedProject.gallery.map((img, idx) => (
                       <div key={idx} className="relative group">
                          <div className="absolute -top-2 -left-2 bg-black text-white px-2 font-pixel z-10">
                            FIG. 0{idx + 1}
                          </div>
                          <img 
                            src={img} 
                            alt={`Gallery ${idx}`} 
                            className="w-full border-2 border-black hard-shadow grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Footer Navigation within Modal */}
            <div className="border-t-4 border-[#1A1A1A] pt-12 flex justify-between items-center">
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="text-xl font-bold hover:text-[#FF90B3] hover:underline decoration-4 underline-offset-4"
               >
                 ← BACK TO DESK
               </button>
               
               <div className="flex gap-2">
                  <div className="w-4 h-4 bg-[#1A1A1A]"></div>
                  <div className="w-4 h-4 bg-[#FF90B3]"></div>
                  <div className="w-4 h-4 bg-[#80FFDB]"></div>
               </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
