import React from 'react';
import { HERO_TEXT } from '../constants';

export const Hero: React.FC = () => {
  return (
    <>
        {/* Full Width Image Banner */}
        <div className="w-full overflow-hidden leading-[0]">
            <img 
                src="https://cloudsplash.co.za/wp/wp-content/uploads/2025/12/One-on-One-website-banner.png"
                alt="Rina Broomberg Banner"
                className="w-full h-[45vh] md:h-[60vh] min-h-[300px] object-cover object-top shadow-sm"
            />
        </div>

        {/* Text Content Section */}
        <div className="max-w-3xl mx-auto text-center px-6 pt-16 pb-8">
            <h1 className="text-sm sm:text-base font-sans font-medium tracking-[0.25em] text-accent mb-4 uppercase">
                From the desk of
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium text-ink mb-12">
                Rina Broomberg
            </h2>

            <div className="space-y-6 text-lg sm:text-xl leading-relaxed font-serif text-stone-600">
                <p className="font-semibold text-ink">
                    {HERO_TEXT.greeting}
                </p>
                <p>
                    {HERO_TEXT.intro}
                </p>
                <div className="w-16 h-px bg-accent/40 mx-auto my-8"></div>
                
                <div className="text-base sm:text-lg text-stone-500 max-w-2xl mx-auto space-y-6 text-left">
                    {(HERO_TEXT.context as string[]).map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
};