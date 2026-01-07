
import React, { useState } from 'react';
import { APP_LIST } from './constants';
import AppCard from './components/AppCard';
import { NavItem } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
  const [selectedApp, setSelectedApp] = useState<NavItem | null>(null);

  const filteredApps = APP_LIST.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const closeModal = () => setSelectedApp(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 selection:bg-indigo-500/30 relative">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-3 group cursor-default">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-indigo-900/40 shadow-lg group-hover:scale-105 transition-transform">
                O
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter text-white">OohCode Hub</span>
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6 text-sm font-semibold text-slate-400">
              <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">
                <i className="fa-brands fa-github text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Search & Controls Section */}
        <section className="pt-10 pb-8 md:pt-16 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl md:text-4xl font-black text-white mb-8 text-center tracking-tight">
                发现极简之美
              </h1>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search Bar */}
                <div className="relative flex-grow w-full group">
                  <input 
                    type="text"
                    placeholder="搜索应用或标签..."
                    className="w-full pl-12 pr-6 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-white placeholder:text-slate-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 transition-colors group-focus-within:text-indigo-400"></i>
                </div>

                {/* Layout Toggle */}
                <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-xl shadow-lg self-end md:self-auto">
                  <button 
                    onClick={() => setLayoutMode('grid')}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${layoutMode === 'grid' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-500 hover:text-slate-300'}`}
                    title="网格布局"
                  >
                    <i className="fa-solid fa-grip-vertical"></i>
                  </button>
                  <button 
                    onClick={() => setLayoutMode('list')}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all ${layoutMode === 'list' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40' : 'text-slate-500 hover:text-slate-300'}`}
                    title="列表布局"
                  >
                    <i className="fa-solid fa-list-ul"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App List/Grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredApps.length > 0 ? (
              <div className={
                layoutMode === 'grid' 
                ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8" 
                : "flex flex-col gap-4 max-w-4xl mx-auto"
              }>
                {filteredApps.map(app => (
                  <AppCard 
                    key={app.id} 
                    item={app} 
                    layoutMode={layoutMode} 
                    onClick={() => setSelectedApp(app)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-900/20 rounded-[2rem] border border-dashed border-slate-800">
                <i className="fa-solid fa-search text-4xl text-slate-800 mb-4"></i>
                <p className="text-slate-500">未找到匹配的内容</p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  显示全部
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
          <div 
            className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 bg-gradient-to-r ${selectedApp.color}`}></div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedApp.color} flex items-center justify-center text-white text-3xl shadow-xl shadow-indigo-900/20`}>
                  <i className={selectedApp.icon}></i>
                </div>
                <button 
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-black text-white">{selectedApp.title}</h2>
                  <span className="px-2 py-0.5 bg-slate-800 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">
                    {selectedApp.category}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {selectedApp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedApp.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-950 text-slate-500 text-xs font-bold rounded-lg border border-slate-800 uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              {selectedApp.url !== '#' ? (
                <a 
                  href={selectedApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-black rounded-2xl shadow-lg shadow-indigo-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  立即访问应用
                  <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-sm opacity-70"></i>
                </a>
              ) : (
                <div className="w-full py-4 bg-slate-800 text-slate-500 text-center font-bold rounded-2xl border border-slate-700">
                  开发中，敬请期待
                </div>
              )}
            </div>
          </div>
          {/* Backdrop Closer */}
          <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
        </div>
      )}

      <footer className="py-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-slate-600">
            <p>&copy; {new Date().getFullYear()} OOHCODE. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-indigo-400 transition-colors">ABOUT</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">FEEDBACK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
