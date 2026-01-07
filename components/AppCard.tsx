
import React from 'react';
import { NavItem } from '../types';

interface AppCardProps {
  item: NavItem;
  layoutMode: 'grid' | 'list';
}

const AppCard: React.FC<AppCardProps> = ({ item, layoutMode }) => {
  const isAvailable = item.url !== '#';
  const isGrid = layoutMode === 'grid';

  if (isGrid) {
    return (
      <div className={`group relative bg-slate-900 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-800 hover:border-indigo-500/30 hover-lift ${!isAvailable ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
        <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-gradient-to-br ${item.color} text-white text-xl sm:text-2xl md:text-3xl mb-3 md:mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
          <i className={item.icon}></i>
        </div>
        
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-indigo-400 transition-colors truncate">
          {item.title}
        </h3>
        
        <p className="text-slate-400 text-[10px] sm:text-sm md:text-base leading-snug md:leading-relaxed mb-3 md:mb-6 line-clamp-2 min-h-[1.5rem] md:min-h-[2.5rem]">
          {item.description}
        </p>
        
        <div className="hidden sm:flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-8">
          {item.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-1.5 md:px-2.5 py-0.5 md:py-1 bg-slate-950 text-slate-500 md:text-slate-400 text-[8px] md:text-xs font-bold rounded border border-slate-800">
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-[10px] sm:text-sm md:text-base text-indigo-400 font-bold group-hover:text-indigo-300 transition-colors"
        >
          <span className="hidden xs:inline">GO TO APP</span>
          <span className="xs:hidden">访问</span>
          <i className="fa-solid fa-arrow-right-long ml-1.5 md:ml-2 text-[10px] md:text-sm transition-transform group-hover:translate-x-1"></i>
        </a>

        {!isAvailable && (
          <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-slate-950 text-slate-600 text-[7px] md:text-[9px] uppercase tracking-widest font-black px-1.5 py-0.5 rounded border border-slate-800">
            SOON
          </div>
        )}
      </div>
    );
  }

  // List Mode
  return (
    <div className={`group flex items-center gap-4 md:gap-6 bg-slate-900 rounded-2xl p-4 md:p-5 border border-slate-800 hover:border-indigo-500/30 transition-all ${!isAvailable ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
      <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} text-white text-xl md:text-2xl shadow-lg`}>
        <i className={item.icon}></i>
      </div>

      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
            {item.title}
          </h3>
          <div className="hidden sm:flex gap-1">
            {item.tags.slice(0, 2).map(tag => (
              <span key={tag} className="px-1.5 py-0.5 bg-slate-950 text-slate-500 text-[8px] font-bold rounded border border-slate-800">
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <p className="text-slate-500 text-xs md:text-sm line-clamp-1">
          {item.description}
        </p>
      </div>

      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-slate-600 hover:text-indigo-400 bg-slate-950 border border-slate-800 rounded-full transition-all group-hover:scale-110 group-hover:border-indigo-500/50"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </a>

      {!isAvailable && (
        <span className="absolute -top-1 -right-1 bg-slate-800 text-slate-600 text-[8px] px-1.5 py-0.5 rounded border border-slate-700">
          WAITING
        </span>
      )}
    </div>
  );
};

export default AppCard;
