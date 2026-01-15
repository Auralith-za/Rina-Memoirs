import React, { useEffect } from 'react';
import { X, BookOpen, Download, ExternalLink } from 'lucide-react';
import { ModalProps } from '../types';

export const ReaderModal: React.FC<ModalProps> = ({ isOpen, onClose, memoir }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !memoir) return null;

  // Use Google Docs Viewer for reliable cross-browser embedding
  const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(memoir.pdfUrl)}&embedded=true`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-6 transition-opacity duration-300">
      <div className="relative w-full h-full sm:max-w-5xl sm:h-[90vh] bg-paper shadow-2xl rounded-none sm:rounded-sm flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white border-b border-stone-200 shrink-0 z-10">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 bg-stone-100 rounded-full text-stone-600 shrink-0">
                    <BookOpen size={20} />
                </div>
                <div className="min-w-0">
                    <h3 className="font-serif font-semibold text-lg leading-tight text-ink truncate">{memoir.title}</h3>
                    <p className="text-xs text-stone-500 uppercase tracking-wider truncate">{memoir.year} • Rina Broomberg</p>
                </div>
            </div>
            
            <div className="flex items-center gap-2 shrink-0 ml-4">
                <a 
                    href={memoir.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded transition-colors"
                    title="Open in new tab"
                >
                    <ExternalLink size={16} />
                    <span className="opacity-50">Open New Tab</span>
                </a>
                
                <a 
                    href={memoir.pdfUrl} 
                    download
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded transition-colors"
                    title="Download PDF"
                >
                    <Download size={16} />
                    <span className="hidden sm:inline opacity-50">Download PDF</span>
                </a>
                <div className="h-6 w-px bg-stone-200 mx-2 hidden sm:block"></div>
                <button 
                    onClick={onClose}
                    className="p-2 text-stone-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>
            </div>
        </div>

        {/* PDF Viewer Area - Google Docs Viewer */}
        <div className="flex-1 bg-stone-100 relative w-full h-full">
             <iframe 
                src={viewerUrl}
                className="w-full h-full border-0"
                title={`${memoir.title} PDF Viewer`}
                allowFullScreen
             />
        </div>

      </div>
    </div>
  );
};