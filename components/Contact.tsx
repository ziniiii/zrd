import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFFAFA] flex flex-col items-center justify-center p-4 pattern-grid">
      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info */}
        <div className="space-y-8">
           <div>
             <h2 className="text-7xl font-black mb-4 text-stroke text-transparent bg-clip-text bg-gradient-to-br from-[#FF90B3] to-[#80FFDB]">
               SAY<br/>HELLO
             </h2>
             <p className="text-xl font-mono border-l-4 border-[#1A1A1A] pl-4">
               Have a crazy idea? Let's build it. Available for freelance projects and collaborations.
             </p>
           </div>

           <div className="flex gap-4">
              <a href="#" className="p-4 bg-[#1A1A1A] text-white hover:bg-[#FF90B3] hover:text-black border-2 border-black hard-shadow transition-all hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href="#" className="p-4 bg-[#1A1A1A] text-white hover:bg-[#80FFDB] hover:text-black border-2 border-black hard-shadow transition-all hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 bg-[#1A1A1A] text-white hover:bg-[#C7CEEA] hover:text-black border-2 border-black hard-shadow transition-all hover:-translate-y-1">
                <Instagram size={24} />
              </a>
           </div>

           <div className="bg-[#FFFFE0] border-2 border-black p-4 font-pixel text-sm">
              <p>LOCATION: WORLD WIDE WEB</p>
              <p>STATUS: ONLINE</p>
              <p>PING: 12ms</p>
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#C0C0C0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black p-1 hard-shadow">
           <div className="bg-[#000080] text-white px-2 py-1 font-bold font-pixel flex justify-between items-center mb-4">
             <span>Mail_Composer.exe</span>
             <button className="bg-[#C0C0C0] text-black border border-white border-b-black border-r-black px-2 text-xs">X</button>
           </div>

           <form onSubmit={handleSubmit} className="p-4 space-y-4">
              
              <div>
                <label className="block font-bold mb-1 text-sm">TO: (YOUR NAME)</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white border-2 border-[#808080] border-b-white border-r-white p-2 font-mono text-sm focus:outline-none focus:bg-yellow-50"
                  placeholder="Guest User"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-sm">FROM: (EMAIL)</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white border-2 border-[#808080] border-b-white border-r-white p-2 font-mono text-sm focus:outline-none focus:bg-yellow-50"
                  placeholder="guest@internet.com"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-sm">MESSAGE_BODY:</label>
                <textarea 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white border-2 border-[#808080] border-b-white border-r-white p-2 font-mono text-sm focus:outline-none focus:bg-yellow-50"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                 <button 
                   type="submit" 
                   disabled={status !== 'idle'}
                   className="flex items-center gap-2 px-6 py-2 bg-[#C0C0C0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:translate-y-1"
                 >
                    {status === 'idle' && <><Send size={16} /> SEND</>}
                    {status === 'sending' && <span className="animate-pulse">SENDING...</span>}
                    {status === 'sent' && <span className="text-green-700 font-bold">SENT!</span>}
                 </button>
              </div>
           </form>
        </div>

      </div>
    </div>
  );
};