
import React from 'react';
import { NavItem } from '../types';

interface AppCardProps {
  item: NavItem;
}

const AppCard: React.FC<AppCardProps> = ({ item }) => {
  const isAvailable = item.url !== '#';

  return (
    <div className={`group relative bg-slate-900 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-800 hover:border-indigo-500/30 hover-lift ${!isAvailable ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
      <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} text-white text-2xl md:text-3xl mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
        <i className={item.icon}></i>
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {item.title}
      </h3>
      
      <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 min-h-[2.5rem]">
        {item.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {item.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 bg-slate-950 text-slate-400 text-[10px] md:text-xs font-bold rounded-md border border-slate-800">
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
      
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm md:text-base text-indigo-400 font-bold group-hover:text-indigo-300 transition-colors"
      >
        GO TO APP
        <i className="fa-solid fa-arrow-right-long ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
      </a>

      {!isAvailable && (
        <div className="absolute top-4 right-4 bg-slate-950 text-slate-600 text-[9px] uppercase tracking-widest font-black px-2 py-1 rounded border border-slate-800">
          STAY TUNED
        </div>
      )}
    </div>
  );
};

export default AppCard;
