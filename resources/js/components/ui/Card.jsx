import React from 'react';

export function Card({ 
    children = "Konten default kartu.", 
    title = "Judul Kartu", 
    footer = "Info Footer", 
    className = ""
 }){
    return (
        <div className={`bg-dark border border-gray/20 rounded-xl overflow-hidden shadow-lg ${className}`}>
            {title && (
                <div className="px-6 py-4 border-b border-gray/10 bg-lidark/50">
                    <h3 className="text-light font-bold text-lg tracking-wide">
                        {title}
                    </h3>
                </div>
            )}
            <div className="px-6 py-5 text-gray leading-relaxed">
                {children}
            </div>
            {footer && (
                <div className="px-6 py-3 bg-gray/30 border-t border-gray/10">
                    {footer}
                </div>
            )}
        </div>
    );
};