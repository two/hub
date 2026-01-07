
import React from 'react';
import { NavItem } from '../types';

interface AppCardProps {
  item: NavItem;
  layoutMode: 'grid' | 'list';
  onClick: () => void;
}

const AppCard: React.FC<AppCardProps> = ({ item, layoutMode, onClick }) => {
  const isAvailable = item.url !== '#';
  const isGrid = layoutMode === 'grid';

  const handleLaunch = (e: React.MouseEvent) => {
    if (isAvailable) {
      e.stopPropagation();
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  if (isGrid) {
    return (
      <div 
        onClick={onClick}
        className={`group relative bg-slate-900 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-800 hover:border-indigo-500/30 cursor-pointer hover-lift ${!isAvailable ? 'opacity-50 grayscale' : ''}`}
      >
        <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-2xl bg-gradient-to-br ${item.color} text-white text-xl sm:text-2xl md:text-3xl mb-3 md:mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
          <i className={item.icon}></i>
        </div>
        
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-indigo-400 transition-colors truncate">
          {item.title}
        </h3>
        
        <p className="text-slate-400 text-[10px] sm:text-sm md:text-base leading-snug md:leading-relaxed mb-4 md:mb-6 line-clamp-2 min-h-[1.5rem] md:min-h-[2.5rem]">
          {item.description}
        </p>
        
        <div className="mt-auto">
          {isAvailable ? (
            <button 
              onClick={handleLaunch}
              className="w-full py-2 md:py-3 bg-indigo-600/10 border border-indigo-500/20 hover:bg-indigo-600 text-indigo-400 hover:text-white text-[10px] sm:text-xs md:text-sm font-black rounded-xl transition-all flex items-center justify-center group/btn"
            >
              <span className="hidden xs:inline">LAUNCH APP</span>
              <span className="xs:hidden">启动</span>
              <i className="fa-solid fa-rocket ml-2 text-[10px] transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"></i>
            </button>
          ) : (
            <div className="w-full py-2 md:py-3 bg-slate-800/50 border border-slate-700/50 text-slate-500 text-[10px] sm:text-xs md:text-sm font-bold rounded-xl text-center">
              COMING SOON
            </div>
          )}
        </div>

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
    <div 
      onClick={onClick}
      className={`group relative flex items-center gap-4 md:gap-6 bg-slate-900 rounded-2xl p-4 md:p-5 border border-slate-800 hover:border-indigo-500/30 transition-all cursor-pointer ${!isAvailable ? 'opacity-50 grayscale' : ''}`}
    >
      <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} text-white text-xl md:text-2xl shadow-lg`}>
        <i className={item.icon}></i>
      </div>

      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
            {item.title}
          </h3>
          <span className="hidden xs:inline px-1.5 py-0.5 bg-slate-950 text-slate-500 text-[8px] font-bold rounded border border-slate-800 uppercase">
            {item.category}
          </span>
        </div>
        <p className="text-slate-500 text-xs md:text-sm line-clamp-1">
          {item.description}
        </p>
      </div>

      <div className="flex-shrink-0 flex items-center gap-3">
        {isAvailable ? (
          <button 
            onClick={handleLaunch}
            className="px-4 md:px-6 py-2 md:py-3 bg-indigo-600 text-white text-[10px] md:text-xs font-black rounded-xl shadow-lg shadow-indigo-900/20 hover:bg-indigo-500 transition-all hover:scale-105 active:scale-95 flex items-center"
          >
            <span className="hidden sm:inline mr-2">OPEN</span>
            <i className="fa-solid fa-play"></i>
          </button>
        ) : (
          <div className="px-3 py-2 bg-slate-800 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-700">
            SOON
          </div>
        )}
      </div>
    </div>
  );
};

export default AppCard;
