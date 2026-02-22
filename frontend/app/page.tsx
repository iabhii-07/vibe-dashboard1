"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ItemCard, { Item } from "../components/ItemCard";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/items?search=${search}`);
      setItems(res.data.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  return (
    <main className="dashboard-bg p-6 md:p-12 overflow-hidden min-h-screen">
      <header className="max-w-7xl mx-auto mb-12">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
            <span className="text-gradient">Vibe Dashboard</span>
          </h1>
          <p className="text-slate-400 text-lg font-light max-w-2xl">
            A modern approach to data visualization and full-stack architecture.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="glass-input w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchItems()}
          />
          <button onClick={fetchItems} className="glass-button w-full sm:w-auto">
            Search
          </button>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="glass-card p-6 h-48 animate-pulse flex flex-col gap-4">
                  <div className="h-6 bg-white/10 rounded w-3/4"></div>
                  <div className="h-4 bg-white/5 rounded w-1/2"></div>
                  <div className="mt-auto h-8 bg-white/10 rounded w-full"></div>
                </div>
              ))}
            </motion.div>
          ) : items.length > 0 ? (
            <motion.div key="grid" variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <motion.div key={item.id} variants={cardVariants} layoutId={`card-${item.id}`} whileHover={{ y: -5 }} className="glass-card p-6 h-full">
                  <ItemCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 glass-card">
              <p className="text-slate-400 text-xl">No products found matching "{search}".</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}