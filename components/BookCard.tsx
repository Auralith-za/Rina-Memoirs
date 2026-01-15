import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Memoir } from '../types';

interface BookCardProps {
  memoir: Memoir;
  onClick: (memoir: Memoir) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ memoir, onClick }) => {
  return (
    <div 
        onClick={() => onClick(memoir)}
        className="group cursor-pointer flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-200"
    >
      <div className="p-8 sm:p-12 flex flex-col flex-grow text-center">
        
        {/* Header Section */}
        <div className="mb-6 flex justify-center">
             <span className="inline-block px-3 py-1 bg-stone-100 text-stone-500 text-xs font-bold tracking-widest uppercase rounded-full">
                {memoir.year}
            </span>
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl font-medium text-ink mb-4 group-hover:text-accent transition-colors leading-tight">
            {memoir.title}
        </h3>
        <h4 className="font-sans text-xs sm:text-sm text-stone-400 mb-8 uppercase tracking-widest font-semibold">
            {memoir.subtitle}
        </h4>

        {/* Divider */}
        <div className="w-16 h-px bg-stone-200 mx-auto mb-8"></div>

        {/* Description */}
        <p className="text-stone-600 leading-relaxed flex-grow font-serif text-base text-left sm:text-justify">
            {memoir.description}
        </p>
        
        {/* CTA Footer */}
        <div className="mt-10 pt-8 border-t border-stone-100 flex items-center justify-center text-accent font-sans text-sm font-bold tracking-widest uppercase">
            <span className="group-hover:mr-2 transition-all duration-300">Read Memoir</span> 
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};