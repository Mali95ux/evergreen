
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  // --- ELECTRONICS (12) ---
  {
    id: 'e1',
    name: 'Aura Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with 40-hour battery life and spatial audio.',
    price: 299.99,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 124,
    features: ['Active Noise Cancellation', 'Spatial Audio', '40h Battery', 'USB-C Charging']
  },
  {
    id: 'e2',
    name: 'Quantum Mechanical Keyboard',
    description: 'Hot-swappable tactile mechanical keyboard with RGB and wireless connectivity.',
    price: 159.99,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 342,
    features: ['Hot-swappable', 'Tri-mode Wireless', 'Gasket Mount', 'PBT Keycaps']
  },
  {
    id: 'e3',
    name: 'Pro 14 Ultrabook',
    description: 'Ultra-thin magnesium alloy laptop with 4K OLED display and the latest silicon.',
    price: 1499.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 89,
    features: ['M3 Pro Chip', '32GB RAM', '2TB SSD', '120Hz ProMotion']
  },
  {
    id: 'e4',
    name: 'Studio Master Monitor',
    description: '32-inch 6K reference monitor for creative professionals requiring color accuracy.',
    price: 1299.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 45,
    features: ['99% DCI-P3', '1600 nits Peak', 'Thunderbolt 4', 'Factory Calibrated']
  },
  {
    id: 'e5',
    name: 'Zenith Mouse Pro',
    description: 'Ergonomic wireless mouse with zero-latency sensor and silent click tech.',
    price: 89.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 512,
    features: ['25k DPI Sensor', 'Magnetic Scrolling', '80h Battery', 'Recycled Plastics']
  },
  {
    id: 'e6',
    name: 'Vortex VR System',
    description: 'Standalone 8K VR headset with full-body tracking and haptic feedback.',
    price: 799.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 210,
    features: ['8K Resolution', '120° FOV', 'Eye Tracking', 'Haptic Controllers']
  },
  {
    id: 'e7',
    name: 'Sonic Soundbar Elite',
    description: '7.1.4 Dolby Atmos soundbar with wireless subwoofer and satellite speakers.',
    price: 899.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 167,
    features: ['Dolby Atmos', 'HDMI eARC', 'WiFi 6 Streaming', 'Room Calibration']
  },
  {
    id: 'e8',
    name: 'Nova Smart Speaker',
    description: 'High-fidelity smart speaker with integrated AI and lossless audio support.',
    price: 199.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.4,
    reviews: 432,
    features: ['360° Audio', 'AirPlay 2', 'Voice Control', 'Matter Compatible']
  },
  {
    id: 'e9',
    name: 'Capture X Camera',
    description: 'Full-frame mirrorless camera with AI-enhanced autofocus and 8K video.',
    price: 2499.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 76,
    features: ['45MP Sensor', 'IBIS Stabilization', 'Dual Card Slots', 'Weather Sealed']
  },
  {
    id: 'e10',
    name: 'Aero G Desktop',
    description: 'Professional workstation designed for heavy rendering and data science.',
    price: 3499.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 5.0,
    reviews: 24,
    features: ['RTX 4090', '128GB RAM', 'Liquid Cooled', 'Brushed Aluminum']
  },
  {
    id: 'e11',
    name: 'Lumen Tablet Pro',
    description: 'Powerful 13-inch tablet with paper-like matte display and low-latency stylus.',
    price: 899.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 312,
    features: ['Matte OLED', 'Pencil Included', '5G Connectivity', 'Thunderbolt Port']
  },
  {
    id: 'e12',
    name: 'Titan Power Bank',
    description: '100W PD portable charger with 40,000mAh capacity and digital display.',
    price: 129.00,
    category: Category.Electronics,
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 843,
    features: ['100W Output', 'OLED Display', 'Triple USB-C', 'TSA Approved']
  },

  // --- FASHION (12) ---
  {
    id: 'f1',
    name: 'Linen Blend Blazer',
    description: 'Breathable linen-blend blazer perfect for smart-casual summer events.',
    price: 145.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 56,
    features: ['Breathable Fabric', 'Slim Fit', 'Multiple Pockets', 'Eco-Friendly']
  },
  {
    id: 'f2',
    name: 'Merino Wool Sweater',
    description: 'Ultra-soft ethically sourced merino wool sweater for everyday comfort.',
    price: 89.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 178,
    features: ['100% Merino Wool', 'Odor Resistant', 'Temperature Regulating', 'Pre-shrunk']
  },
  {
    id: 'f3',
    name: 'Tailored Wool Coat',
    description: 'Double-breasted navy coat made from Italian virgin wool.',
    price: 450.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1539533377285-a92cc802299a?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 32,
    features: ['Virgin Wool', 'Satin Lining', 'Peak Lapels', 'Handmade Finishing']
  },
  {
    id: 'f4',
    name: 'Silk Evening Gown',
    description: 'Elegant floor-length gown crafted from 100% mulberry silk.',
    price: 320.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 19,
    features: ['Mulberry Silk', 'Hidden Zipper', 'Open Back', 'Biodegradable Dye']
  },
  {
    id: 'f5',
    name: 'Heritage Denim Jacket',
    description: 'Classic fit denim jacket made from 14oz Japanese selvedge denim.',
    price: 180.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1576905341935-4ef21b73c14d?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 88,
    features: ['Selvedge Denim', 'Copper Buttons', 'Reinforced Seams', 'Raw Finish']
  },
  {
    id: 'f6',
    name: 'Performance Chinos',
    description: 'Technical trousers with 4-way stretch and water-repellent finish.',
    price: 110.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.4,
    reviews: 245,
    features: ['Stretch Cotton', 'DWR Coating', 'Secret Phone Pocket', 'Wrinkle Free']
  },
  {
    id: 'f7',
    name: 'Cashmere Scarf',
    description: 'Ultra-lightweight cashmere scarf for seasonal transitions.',
    price: 95.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 112,
    features: ['Grade A Cashmere', 'Fringe Edges', 'Hypoallergenic', 'Sustainably Sourced']
  },
  {
    id: 'f8',
    name: 'Leather Chelsea Boots',
    description: 'Minimalist boots with premium grain leather and Goodyear welt.',
    price: 240.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 67,
    features: ['Full Grain Leather', 'Goodyear Welted', 'Crepe Sole', 'Easy Pull-on']
  },
  {
    id: 'f9',
    name: 'Oversized Cotton Tee',
    description: 'Heavyweight organic cotton t-shirt with a structured boxy fit.',
    price: 45.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 567,
    features: ['Organic Cotton', '300 GSM', 'Drop Shoulder', 'Garment Dyed']
  },
  {
    id: 'f10',
    name: 'Silk Tie (Geometric)',
    description: 'Hand-finished silk necktie with subtle geometric patterns.',
    price: 65.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1598565793131-263413cb328e?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.3,
    reviews: 45,
    features: ['100% Woven Silk', '7cm Width', 'Wool Interlining', 'Hand-rolled']
  },
  {
    id: 'f11',
    name: 'Utility Field Jacket',
    description: 'Modern interpretation of the military M-65 with recycled nylon.',
    price: 210.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 93,
    features: ['Recycled Nylon', 'Packable Hood', 'Adjustable Waist', 'Windproof']
  },
  {
    id: 'f12',
    name: 'Velvet Evening Blazer',
    description: 'Deep emerald velvet blazer for formal winter gatherings.',
    price: 280.00,
    category: Category.Fashion,
    image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 21,
    features: ['Cotton Velvet', 'Silk Lapels', 'Slim Tailored', 'Inner Pockets']
  },

  // --- HOME & LIVING (12) ---
  {
    id: 'h1',
    name: 'Smart Ceramic Planter',
    description: 'Self-watering planter with integrated moisture sensors and minimalist design.',
    price: 49.99,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 210,
    features: ['Self-Watering', 'Moisture Sensor', 'Handmade Ceramic', 'UV Resistant']
  },
  {
    id: 'h2',
    name: 'Modernist Table Lamp',
    description: 'Adjustable LED table lamp with touch controls and warm light spectrum.',
    price: 75.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed657f9971?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.4,
    reviews: 112,
    features: ['Dimmable LED', 'Eye Care Tech', 'Aluminium Body', 'Adjustable Arm']
  },
  {
    id: 'h3',
    name: 'Ergonomic Task Chair',
    description: 'Fully adjustable office chair designed for long-term spinal support.',
    price: 599.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1505797149-43b007662c21?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 456,
    features: ['Breathable Mesh', '4D Armrests', 'Lumbar Support', 'Synchro-tilt']
  },
  {
    id: 'h4',
    name: 'Walnut Coffee Table',
    description: 'Solid walnut table with mid-century modern tapered legs.',
    price: 420.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 34,
    features: ['Solid Walnut', 'FSC Certified', 'Eco-friendly Wax', 'No Tools Assembly']
  },
  {
    id: 'h5',
    name: 'Linen Bed Set',
    description: 'Luxurious stonewashed French linen sheets for the perfect night sleep.',
    price: 210.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 189,
    features: ['French Linen', 'Breathable', 'Antimicrobial', 'Gets Softer with Age']
  },
  {
    id: 'h6',
    name: 'Ultrasonic Humidifier',
    description: 'Silent mist humidifier with essential oil tray and ambient light.',
    price: 65.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1585837222824-743a1251e626?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 1240,
    features: ['Large 4L Tank', 'Auto Shut-off', 'Essential Oil Safe', 'Smart App Sync']
  },
  {
    id: 'h7',
    name: 'Minimalist Wall Clock',
    description: 'Brushed metal clock with silent sweeping movement.',
    price: 45.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.3,
    reviews: 87,
    features: ['Silent Movement', 'Brushed Aluminum', 'Glass Lens', 'AA Battery Included']
  },
  {
    id: 'h8',
    name: 'Weighted Blanket',
    description: '15lb glass-bead weighted blanket for deep pressure stimulation.',
    price: 135.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 742,
    features: ['Nano-glass Beads', 'Cotton Cover', 'Even Weight', 'Machine Washable']
  },
  {
    id: 'h9',
    name: 'Electric Pour-over Kettle',
    description: 'Precision gooseneck kettle with variable temperature control.',
    price: 155.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1544787210-2211d7c309c7?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 212,
    features: ['Gooseneck Spout', 'Temp LCD Display', 'Keep Warm Mode', 'Built-in Timer']
  },
  {
    id: 'h10',
    name: 'Bamboo Bath Mat',
    description: 'Water-resistant natural bamboo mat for a spa-like bathroom feel.',
    price: 35.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 98,
    features: ['Natural Bamboo', 'Non-slip Feet', 'Eco-friendly', 'Fast Drying']
  },
  {
    id: 'h11',
    name: 'Geometric Wool Rug',
    description: 'Hand-tufted area rug with minimalist geometric patterns.',
    price: 280.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 54,
    features: ['NZ Wool Blend', 'Hand-tufted', 'Low Pile', 'Stain Resistant']
  },
  {
    id: 'h12',
    name: 'Floating Shelf Set',
    description: 'Three-piece set of solid oak floating shelves with hidden brackets.',
    price: 110.00,
    category: Category.Home,
    image: 'https://images.unsplash.com/photo-1594420111666-41910609652a?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.4,
    reviews: 132,
    features: ['Solid Oak', 'Hidden Mounting', 'Holds up to 20kg', 'Sanded Finish']
  },

  // --- ACCESSORIES (12) ---
  {
    id: 'a1',
    name: 'Minimalist Leather Watch',
    description: 'Elegant timepiece with a genuine Italian leather strap and Swiss movement.',
    price: 185.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 88,
    features: ['Genuine Leather', 'Water Resistant', 'Sapphire Glass', 'Minimalist Dial']
  },
  {
    id: 'a2',
    name: 'Obsidian Tote Bag',
    description: 'Waterproof urban tote bag with 15-inch laptop compartment.',
    price: 120.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 95,
    features: ['Waterproof', 'Laptop Sleeve', 'YKK Zippers', 'Sustainable Nylon']
  },
  {
    id: 'a3',
    name: 'Polarized Aviators',
    description: 'Classic aviator frames with polarized glass lenses and titanium frame.',
    price: 155.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1511499767390-903390e6fbc1?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 167,
    features: ['Titanium Frame', 'Polarized Lenses', 'UV400 Protected', 'Microfiber Case']
  },
  {
    id: 'a4',
    name: 'Slim Bifold Wallet',
    description: 'Ultra-slim wallet crafted from vegetable-tanned leather with RFID blocking.',
    price: 55.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 432,
    features: ['RFID Blocking', 'Vegetable Tanned', 'Holds 12 Cards', 'Coin Pocket']
  },
  {
    id: 'a5',
    name: 'Silk Pocket Square',
    description: 'Hand-rolled silk pocket square with hand-painted patterns.',
    price: 35.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1621335829175-95f437384d7c?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 28,
    features: ['100% Silk', 'Hand-rolled Edge', '33x33cm', 'Unique Prints']
  },
  {
    id: 'a6',
    name: 'Leather Belt (Tan)',
    description: 'Single piece full-grain leather belt with solid brass buckle.',
    price: 75.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb8cd8835?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 145,
    features: ['Full-grain Leather', 'Solid Brass', 'Burnished Edges', 'Lifetime Warranty']
  },
  {
    id: 'a7',
    name: 'Silver Cufflinks',
    description: 'Sterling silver cufflinks with mother-of-pearl inlays.',
    price: 110.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 42,
    features: ['925 Sterling Silver', 'Mother of Pearl', 'T-Bar Fastening', 'Polishing Cloth']
  },
  {
    id: 'a8',
    name: 'Merino Wool Beanie',
    description: 'Fine-knit merino wool beanie for understated warmth.',
    price: 40.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 210,
    features: ['100% Merino', 'Ribbed Knit', 'Odor Resistant', 'Washable']
  },
  {
    id: 'a9',
    name: 'Tech Organizer',
    description: 'Padded leather organizer for cables, drives, and accessories.',
    price: 65.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 89,
    features: ['Padded Walls', 'Elastic Loops', 'Compact Size', 'Splash Proof']
  },
  {
    id: 'a10',
    name: 'Canvas Weekender',
    description: 'Durable waxed canvas bag with leather handles and removable strap.',
    price: 195.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 56,
    features: ['Waxed Canvas', 'Leather Accents', '45L Capacity', 'Shoes Compartment']
  },
  {
    id: 'a11',
    name: 'Brass Bottle Opener',
    description: 'Heirloom quality bottle opener forged from solid brass.',
    price: 25.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.2,
    reviews: 34,
    features: ['Solid Brass', 'Ages Gracefully', 'Minimalist Shape', 'Heavyweight']
  },
  {
    id: 'a12',
    name: 'Key Organizer',
    description: 'Modular leather key organizer that stops keys from jingling.',
    price: 45.00,
    category: Category.Accessories,
    image: 'https://images.unsplash.com/photo-1510168015900-247d65377041?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 1205,
    features: ['Holds 7 Keys', 'D-Ring included', 'Premium Leather', 'Stainless Hardware']
  },

  // --- MOBILE PHONES (12) ---
  {
    id: 'p1',
    name: 'Nebula X25 Flagship',
    description: 'Next-generation smartphone with a stunning 6.9-inch OLED display and pro-grade triple camera system.',
    price: 1199.99,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 432,
    features: ['200MP Main Camera', 'Snapdragon Gen 4', '5000mAh Battery', '120Hz LTPO Display']
  },
  {
    id: 'p2',
    name: 'Zenith Fold Pro',
    description: 'The ultimate foldable experience with a zero-gap hinge and immersive 7.6-inch inner screen.',
    price: 1799.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1556656793-062ff9878273?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 156,
    features: ['Dynamic AMOLED 2X', 'Under-display Camera', 'S-Pen Support', 'Water Resistant']
  },
  {
    id: 'p3',
    name: 'Echo S-Lite',
    description: 'A compact powerhouse that fits perfectly in your hand without compromising on performance.',
    price: 699.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.6,
    reviews: 289,
    features: ['Compact Design', 'AI Portrait Mode', 'Fast Wireless Charging', 'Clean OS']
  },
  {
    id: 'p4',
    name: 'Titan Rugged Ultra',
    description: 'Built for the boldest adventurers. Military-grade durability meets advanced satellite connectivity.',
    price: 849.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1533228891704-62491deb5ecd?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 94,
    features: ['IP69K Rated', 'Thermal Camera', '7-day Battery Life', 'Satellite SOS']
  },
  {
    id: 'p5',
    name: 'Prism 15 Pro',
    description: 'Creative-focused device with a unique physical scroll wheel for photo editing.',
    price: 1099.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1536846840956-300cb219c58b?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 82,
    features: ['Dial Interface', 'RAW Support', 'Titanium Chassis', 'Dual Speakers']
  },
  {
    id: 'p6',
    name: 'Atlas Prime V',
    description: 'The world\'s fastest charging phone. Full battery in just 12 minutes.',
    price: 899.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.5,
    reviews: 124,
    features: ['240W Charging', 'Vapor Chamber', '144Hz Screen', 'Game Mode']
  },
  {
    id: 'p7',
    name: 'Lumina G2',
    description: 'An eco-friendly smartphone with a fully modular design for easy repair.',
    price: 599.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1565849906461-0de2c8942515?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.4,
    reviews: 67,
    features: ['Fairtrade Gold', 'Modular Parts', '7yr Updates', 'Ozone OS']
  },
  {
    id: 'p8',
    name: 'Stellar Max',
    description: 'Massive 7.2-inch display phone designed for media consumption and gaming.',
    price: 1299.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1550029330-8dbccaade873?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.8,
    reviews: 212,
    features: ['7.2" OLED', 'Dual Front Speakers', 'X-axis Motor', 'Large 6000mAh']
  },
  {
    id: 'p9',
    name: 'Nova Flip',
    description: 'The most stylish clamshell phone with a full-size outer touch display.',
    price: 999.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.7,
    reviews: 187,
    features: ['3.6" Cover Screen', 'Tear-drop Hinge', 'Selfie Preview', 'Designer Colors']
  },
  {
    id: 'p10',
    name: 'Core One (Pure)',
    description: 'Minimalist phone with a monochromatic e-ink display for digital detox.',
    price: 399.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.3,
    reviews: 312,
    features: ['E-ink Display', '2-week Battery', 'Focus Mode', 'Tactile Buttons']
  },
  {
    id: 'p11',
    name: 'Zenith Note Ultra',
    description: 'The ultimate productivity tool with integrated stylus and desktop mode.',
    price: 1399.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 45,
    features: ['BT Stylus', 'Desktop Mode', 'Secure Folder', 'Anti-reflective']
  },
  {
    id: 'p12',
    name: 'Ocular Photo Pro',
    description: 'Smartphone with a 1-inch sensor and variable aperture lens.',
    price: 1599.00,
    category: Category.Phones,
    image: 'https://images.unsplash.com/photo-1520189123429-6a76ab978bb5?q=80&w=600&h=600&auto=format&fit=crop',
    rating: 4.9,
    reviews: 23,
    features: ['1-inch Sensor', 'f/1.8-f/4.0 Aperture', 'Leica Optics', 'Log Video']
  }
];
