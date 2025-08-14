export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(8, 8)">
                <rect x="0" y="8" width="16" height="12" fill="white" rx="2"/>
                <path d="M-1.5 8 L8 3 L17.5 8 Z" fill="white"/>
                <rect x="6" y="14" width="4" height="6" fill="#3b82f6" rx="1"/>
                <rect x="1.5" y="9.5" width="3" height="3" fill="#3b82f6" rx="1"/>
                <rect x="11.5" y="9.5" width="3" height="3" fill="#3b82f6" rx="1"/>
              </g>
            </svg>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Estateus
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Your Gateway to Premium Real Estate
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
            Explore Properties
          </button>
          <button className="px-8 py-3 border border-slate-400 hover:bg-slate-800 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
        
        <div className="mt-16 text-slate-400">
          <p className="text-sm">Discover • Invest • Prosper</p>
        </div>
      </div>
    </main>
  )
}
