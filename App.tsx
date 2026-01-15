
// Add missing React import
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { BookCard } from './components/BookCard';
import { ReaderModal } from './components/ReaderModal';
import { MEMOIRS, HERO_TEXT } from './constants';
import { Memoir } from './types';

const App: React.FC = () => {
  const [selectedMemoir, setSelectedMemoir] = useState<Memoir | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (memoir: Memoir) => {
    setSelectedMemoir(memoir);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Add small timeout to clear data after animation to prevent flickering
    setTimeout(() => setSelectedMemoir(null), 300);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans selection:bg-accent/20 selection:text-ink">
      
      {/* Full Width Hero */}
      <Hero />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-16">
        
        {/* Memoirs Grid - Updated for 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-24 relative z-20">
            {MEMOIRS.map((memoir) => (
                <BookCard 
                    key={memoir.id} 
                    memoir={memoir} 
                    onClick={handleBookClick} 
                />
            ))}
        </div>

        {/* Footer Section */}
        <div className="max-w-2xl mx-auto text-center pb-20 border-t border-stone-200 pt-12">
             <div className="space-y-2 mb-8 font-serif italic text-stone-600">
                <p>{HERO_TEXT.footer_1}</p>
                <p>{HERO_TEXT.footer_2}</p>
             </div>
             
             <div className="text-4xl font-serif text-accent handwriting-effect">
                {HERO_TEXT.signature}
             </div>
             
             <div className="mt-12 text-xs text-stone-400 font-sans uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Rina Broomberg. All Rights Reserved.
             </div>
        </div>

      </main>

      {/* Reader Modal */}
      <ReaderModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        memoir={selectedMemoir} 
      />
      
    </div>
  );
};

export default App;
