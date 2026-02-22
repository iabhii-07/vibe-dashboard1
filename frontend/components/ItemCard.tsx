"use client";

export interface Item {
  id: number;
  name: string;
  category: string;
  price?: number;
  description?: string;
}

export default function ItemCard({ item }: { item: Item }) {
  return (
    <div className="flex flex-col h-full justify-between group cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full transition-colors duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/40">
          {item.category}
        </span>
        <span className="text-slate-300 font-medium bg-white/5 px-2 py-1 rounded-md border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
          {item.price ? `$${item.price.toLocaleString()}` : 'TBA'}
        </span>
      </div>

      <div className="mb-6 relative flex-grow">
        <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
          {item.name}
        </h3>
        <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-purple-400 mt-3 mb-3 rounded-full transition-all duration-300 group-hover:w-16 opacity-70 group-hover:opacity-100"></div>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
          {item.description || 'Details coming soon.'}
        </p>
      </div>

      <div className="flex justify-between items-center text-sm mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300">
        <span className="text-slate-600 font-mono text-xs">
          ID: {item.id ? item.id.toString().padStart(4, '0') : '0000'}
        </span>
        <div className="flex items-center font-medium text-slate-400 transition-colors duration-300 group-hover:text-blue-400">
          <span>View Product</span>
          <svg className="ml-1.5 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}