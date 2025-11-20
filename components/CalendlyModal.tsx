import React from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-[#FFFAFA] w-full max-w-4xl h-[80vh] border-4 border-[#1A1A1A] flex flex-col hard-shadow animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#80FFDB] border-b-4 border-[#1A1A1A] p-4 flex justify-between items-center">
          <h3 className="font-pixel text-xl font-bold uppercase flex items-center gap-2">
            <span className="animate-pulse">●</span> Schedule_Meeting.exe
          </h3>
          <button 
            onClick={onClose}
            className="p-2 bg-[#FF90B3] border-2 border-black hover:bg-red-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Calendly Embed Placeholder (Since we can't load actual Calendly script dynamically safely in this env without external script tags in HTML, we simulate the iframe container or use a placeholder link) */}
        <div className="flex-grow bg-white relative overflow-hidden flex flex-col items-center justify-center p-8 text-center">
           {/* In a real app, you would embed the iframe here: 
               <iframe src="https://calendly.com/your-link" width="100%" height="100%" frameBorder="0"></iframe> 
           */}
           <div className="border-2 border-dashed border-gray-300 p-12 rounded-lg bg-gray-50">
              <h4 className="text-2xl font-bold mb-4">Calendly Integration</h4>
              <p className="mb-6 text-gray-600">
                This is where the scheduling widget would load. <br/>
                Ready to connect?
              </p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#1A1A1A] text-white px-6 py-3 font-bold hover:bg-[#FF90B3] hover:text-black border-2 border-transparent hover:border-black transition-all"
              >
                Open Calendar External
              </a>
           </div>
        </div>
        
        <div className="bg-[#1A1A1A] text-[#FFFAFA] p-2 text-center font-pixel text-xs">
           SECURE CONNECTION ESTABLISHED
        </div>
      </div>
    </div>
  );
};