
const products = [
  {
    id: 1,
    name: "Sona Masuri Paddy Seeds",
    variety: "Sona Masuri",
    category: "Paddy",
    price: 1200,
    unit: "10 kg bag",
    emoji: "🌾",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    description: "Popular fine-grain rice variety."
  },
  {
    id: 2,
    name: "BPT Paddy Seeds",
    variety: "BPT",
    category: "Paddy",
    price: 1350,
    unit: "10 kg bag",
    emoji: "🌾",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    description: "BPT variety for suitable growing conditions."
  },
  {
    id: 3,
    name: "IR64 Paddy Seeds",
    variety: "IR64",
    category: "Paddy",
    price: 1100,
    unit: "10 kg bag",
    emoji: "🌾",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    description: "IR64 rice variety."
  },
  {
    id: 4,
    name: "Hybrid Maize Seeds",
    variety: "Maize",
    category: "Seeds",
    price: 850,
    unit: "1 kg pack",
    emoji: "🌽",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    description: "Maize seeds; check regional suitability."
  },
  {
    id: 5,
    name: "Wheat Seeds",
    variety: "Wheat",
    category: "Seeds",
    price: 650,
    unit: "5 kg bag",
    emoji: "🌾",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    description: "Wheat seed pack."
  },
  {
    id: 6,
    name: "Ragi Seeds",
    variety: "Finger Millet",
    category: "Seeds",
    price: 400,
    unit: "2 kg pack",
    emoji: "🌱",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    description: "Finger millet seeds."
  },
  {
    id: 7,
    name: "Green Gram Seeds",
    variety: "Moong",
    category: "Pulses",
    price: 500,
    unit: "2 kg pack",
    emoji: "🫘",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
    description: "Green gram seeds."
  },
  {
    id: 8,
    name: "Red Gram Seeds",
    variety: "Tur",
    category: "Pulses",
    price: 600,
    unit: "2 kg pack",
    emoji: "🫘",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
    description: "Red gram pigeon pea seeds."
  },
  {
    id: 9,
    name: "Chickpea Seeds",
    variety: "Bengal Gram",
    category: "Pulses",
    price: 550,
    unit: "2 kg pack",
    emoji: "🫘",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
    description: "Chickpea seed pack."
  },
  {
    id: 10,
    name: "Tomato Seeds",
    variety: "Tomato",
    category: "Vegetable Seeds",
    price: 180,
    unit: "10 g pack",
    emoji: "🍅",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    description: "Vegetable seeds; variety subject to stock."
  },
  {
    id: 11,
    name: "Chilli Seeds",
    variety: "Chilli",
    category: "Vegetable Seeds",
    price: 220,
    unit: "10 g pack",
    emoji: "🌶️",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80",
    description: "Chilli seed pack."
  },
  {
    id: 12,
    name: "Okra Seeds",
    variety: "Bhindi",
    category: "Vegetable Seeds",
    price: 150,
    unit: "50 g pack",
    emoji: "🥬",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    description: "Okra vegetable seeds."
  },
  {
    id: 13,
    name: "Brinjal Seeds",
    variety: "Brinjal",
    category: "Vegetable Seeds",
    price: 160,
    unit: "10 g pack",
    emoji: "🍆",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    description: "Brinjal vegetable seeds."
  },
  {
    id: 14,
    name: "Compost",
    variety: "Organic Compost",
    category: "Fertilizers",
    price: 350,
    unit: "10 kg bag",
    emoji: "🌿",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    description: "Compost for soil improvement."
  },
  {
    id: 15,
    name: "Vermicompost",
    variety: "Vermicompost",
    category: "Fertilizers",
    price: 400,
    unit: "10 kg bag",
    emoji: "🪴",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    description: "Earthworm-produced compost."
  },
  {
    id: 16,
    name: "Garden Sprayer",
    variety: "Hand Sprayer",
    category: "Tools",
    price: 550,
    unit: "1 piece",
    emoji: "🚿",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    description: "Hand sprayer for garden use."
  },
  {
    id: 17,
    name: "Hand Cultivator",
    variety: "Farm Tool",
    category: "Tools",
    price: 300,
    unit: "1 piece",
    emoji: "🧑‍🌾",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    description: "Manual soil cultivation tool."
  },
  {
    id: 18,
    name: "Garden Gloves",
    variety: "Protective Gloves",
    category: "Tools",
    price: 120,
    unit: "1 pair",
    emoji: "🧤",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    description: "Reusable gardening gloves."
  },
  {
    id: 19,
    name: "Jowar Seeds",
    variety: "Sorghum",
    category: "Seeds",
    price: 450,
    unit: "2 kg pack",
    emoji: "🌾",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    description: "Sorghum seeds; check regional suitability."
  },
  {
    id: 20,
    name: "Sunflower Seeds",
    variety: "Sunflower",
    category: "Seeds",
    price: 350,
    unit: "500 g pack",
    emoji: "🌻",
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=600&q=80",
    description: "Sunflower seed listing."
  },
  {
    id: 21,
    name: "Groundnut Seeds",
    variety: "Groundnut",
    category: "Seeds",
    price: 700,
    unit: "2 kg pack",
    emoji: "🥜",
    image: "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=600&q=80",
    description: "Groundnut seeds; verify the variety before planting."
  },
  {
    id: 22,
    name: "Cucumber Seeds",
    variety: "Cucumber",
    category: "Vegetable Seeds",
    price: 160,
    unit: "10 g pack",
    emoji: "🥒",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80",
    description: "Cucumber seed listing."
  },
  {
    id: 23,
    name: "Watermelon Seeds",
    variety: "Watermelon",
    category: "Vegetable Seeds",
    price: 200,
    unit: "10 g pack",
    emoji: "🍉",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=600&q=80",
    description: "Watermelon seed listing."
  },
  {
    id: 24,
    name: "Spinach Seeds",
    variety: "Spinach",
    category: "Vegetable Seeds",
    price: 100,
    unit: "25 g pack",
    emoji: "🥬",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    description: "Spinach seed listing."
  }
];

if (typeof module !== "undefined") {
  module.exports = products;
}