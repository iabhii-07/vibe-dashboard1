const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

const mockItems = [
  { id: 1, name: "MacBook Pro 16\"", category: "Mac", price: 2499, description: "M3 Max chip, 36GB RAM, 1TB SSD. The ultimate pro machine." },
  { id: 2, name: "iPhone 15 Pro", category: "iPhone", price: 999, description: "Forged in titanium. Features the game-changing A17 Pro chip." },
  { id: 3, name: "iPad Pro 12.9\"", category: "iPad", price: 1099, description: "Mind-blowing Apple Pencil hover and Liquid Retina XDR display." },
  { id: 4, name: "Apple Watch Ultra 2", category: "Watch", price: 799, description: "Rugged titanium case, precision dual-frequency GPS." },
  { id: 5, name: "AirPods Pro 2", category: "Audio", price: 249, description: "Next-level Active Noise Cancellation and Adaptive Audio." },
  { id: 6, name: "Mac Studio", category: "Mac", price: 1999, description: "Empower your workflow with the M2 Max. Desktop powerhouse." },
  { id: 7, name: "Apple Vision Pro", category: "Vision", price: 3499, description: "The era of spatial computing is here. Blend digital and physical." },
  { id: 8, name: "Studio Display", category: "Displays", price: 1599, description: "27-inch 5K Retina display with a 12MP Ultra Wide camera." },
];

app.get('/api/items', (req, res) => {
  const searchQuery = req.query.search?.toLowerCase() || "";

  const filteredItems = mockItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery) ||
    item.category.toLowerCase().includes(searchQuery) ||
    item.description.toLowerCase().includes(searchQuery)
  );

  // Simulated delay to showcase frontend loading states
  setTimeout(() => {
    res.status(200).json({
      success: true,
      count: filteredItems.length,
      data: filteredItems
    });
  }, 800);
});

app.listen(PORT, () => {
  console.log(`🚀 Vibe API running on http://localhost:${PORT}`);
});