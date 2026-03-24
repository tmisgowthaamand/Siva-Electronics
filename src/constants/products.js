export const categories = [
  { id: 'tv', name: 'Televisions' },
  { id: 'refrigerator', name: 'Refrigerators' },
  { id: 'washing-machine', name: 'Washing Machines' },
  { id: 'fan', name: 'Fans' },
  { id: 'stove', name: 'Stoves' },
  { id: 'iron-box', name: 'Iron Box' },
  { id: 'vacuum-cleaner', name: 'Vacuum Cleaners' },
  { id: 'air-purifier', name: 'Air Purifiers' },
  { id: 'blender', name: 'Blenders' }
];

export const brands = [
  'LG', 'Samsung', 'Sony', 'TCL', 'Hisense', 'VU', 'Bosch', 'Panasonic', 'Siemens', 'Whirlpool',
  'Godrej', 'Havells', 'Bajaj', 'Orient', 'Crompton', 'Usha', 'Atomberg', 'Prestige', 'Preethi',
  'Lifelong', 'Pigeon', 'Kaff', 'Philips', 'Eureka Forbes', 'AGARO', 'BLACK+DECKER', 'Inalsa',
  'Amazon Basics', 'Honeywell', 'Symphony', 'Voltas', 'Balzano', 'NutriBullet', 'Cookwell', 'Wonderchef'
];

export const products = [
  // Televisions
  {
    id: 1,
    name: 'LG 55" 4K Smart OLED TV',
    brand: 'LG',
    category: 'tv',
    price: 89999,
    originalPrice: 99999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500'
    ],
    description: 'Experience stunning picture quality with LG OLED technology. Perfect blacks, infinite contrast, and vibrant colors.',
    features: ['4K Ultra HD', 'HDR10 Pro', 'Smart webOS', 'Dolby Vision', 'AI ThinQ'],
    rating: 4.8,
    reviews: 245,
    inStock: true,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Display Technology': 'OLED',
      'Smart TV': 'Yes (webOS)',
      'HDR': 'HDR10 Pro, Dolby Vision'
    }
  },
  {
    id: 2,
    name: 'Samsung 43" Crystal 4K UHD Smart TV',
    brand: 'Samsung',
    category: 'tv',
    price: 32999,
    originalPrice: 39999,
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500',
    images: [
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500',
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500'
    ],
    description: 'Crystal clear 4K resolution with Samsung\'s advanced processing technology.',
    features: ['Crystal 4K', 'Smart Tizen OS', 'HDR', 'Voice Control'],
    rating: 4.5,
    reviews: 189,
    inStock: true,
    specifications: {
      'Screen Size': '43 inches',
      'Resolution': '4K Ultra HD',
      'Smart TV': 'Yes (Tizen OS)',
      'HDR': 'HDR10+'
    }
  },
  {
    id: 13,
    name: 'Sony Bravia 55" 4K Ultra HD Smart TV',
    brand: 'Sony',
    category: 'tv',
    price: 65999,
    originalPrice: 75999,
    image: '/Tv/Sony tv.jpg',
    images: ['/Tv/Sony tv.jpg'],
    description: 'Premium Sony Bravia TV with X1 processor and Triluminos display for exceptional picture quality.',
    features: ['X1 4K HDR Processor', 'Triluminos Display', 'Android TV', 'Voice Remote', 'Dolby Vision'],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Smart TV': 'Yes (Android TV)',
      'HDR': 'HDR10, Dolby Vision',
      'Warranty': '1 Year'
    }
  },
  {
    id: 14,
    name: 'TCL 50" 4K QLED Smart TV',
    brand: 'TCL',
    category: 'tv',
    price: 42999,
    originalPrice: 49999,
    image: '/Tv/TCL.jpg',
    images: ['/Tv/TCL.jpg'],
    description: 'Stunning QLED display with quantum dot technology for vibrant colors and sharp details.',
    features: ['QLED Display', 'Quantum Dot Technology', 'Android TV', 'Dolby Atmos', 'Game Mode'],
    rating: 4.6,
    reviews: 178,
    inStock: true,
    specifications: {
      'Screen Size': '50 inches',
      'Resolution': '4K Ultra HD',
      'Smart TV': 'Yes (Android TV)',
      'HDR': 'HDR10+',
      'Warranty': '1 Year'
    }
  },
  {
    id: 15,
    name: 'Hisense 43" Full HD Smart TV',
    brand: 'Hisense',
    category: 'tv',
    price: 24999,
    originalPrice: 28999,
    image: '/Tv/Hisense.jpg',
    images: ['/Tv/Hisense.jpg'],
    description: 'Affordable smart TV with Full HD display and built-in streaming apps for entertainment.',
    features: ['Full HD Display', 'VIDAA Smart OS', 'Built-in WiFi', 'Multiple HDMI Ports', 'USB Media Player'],
    rating: 4.3,
    reviews: 145,
    inStock: true,
    specifications: {
      'Screen Size': '43 inches',
      'Resolution': 'Full HD (1920 x 1080)',
      'Smart TV': 'Yes (VIDAA OS)',
      'HDR': 'HDR10',
      'Warranty': '1 Year'
    }
  },
  {
    id: 25,
    name: 'VU 55" 4K Ultra HD Smart LED TV',
    brand: 'VU',
    category: 'tv',
    price: 34999,
    originalPrice: 42999,
    image: '/Tv/VU.jpg',
    images: ['/Tv/VU.jpg'],
    description: 'Premium VU Smart TV with 4K Ultra HD display, HDR10+ support and advanced picture processing for exceptional viewing experience.',
    features: ['4K Ultra HD Display', 'HDR10+ Support', 'Smart Android TV', 'Dolby Audio', 'Voice Remote Control', 'Multiple Connectivity Options'],
    rating: 4.5,
    reviews: 189,
    inStock: true,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Smart TV': 'Yes (Android TV)',
      'HDR': 'HDR10+',
      'Audio': 'Dolby Audio',
      'Connectivity': 'Wi-Fi, Bluetooth, HDMI, USB',
      'Warranty': '1 Year Comprehensive'
    }
  },

  // Refrigerators
  {
    id: 3,
    name: 'LG 260L Double Door Refrigerator',
    brand: 'LG',
    category: 'refrigerator',
    price: 28999,
    originalPrice: 32999,
    image: '/Refrig/lg ref.jpg',
    images: ['/Refrig/lg ref.jpg'],
    description: 'Energy efficient double door refrigerator with advanced cooling technology and smart inverter compressor.',
    features: ['Inverter Compressor', 'Smart Diagnosis', 'Multi Air Flow', 'Door Cooling+', 'Frost Free'],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    specifications: {
      'Capacity': '260 Liters',
      'Type': 'Double Door',
      'Energy Rating': '3 Star',
      'Defrosting Type': 'Frost Free',
      'Warranty': '1 Year Comprehensive + 9 Years on Compressor'
    }
  },
  {
    id: 4,
    name: 'Samsung 253L Frost Free Double Door Refrigerator',
    brand: 'Samsung',
    category: 'refrigerator',
    price: 26999,
    originalPrice: 30999,
    image: '/Refrig/samsung ref.jpg',
    images: ['/Refrig/samsung ref.jpg'],
    description: 'Stylish double door refrigerator with digital inverter technology for energy efficiency.',
    features: ['Digital Inverter', 'All Around Cooling', 'Stabilizer Free Operation', 'Toughened Glass Shelves'],
    rating: 4.5,
    reviews: 142,
    inStock: true,
    specifications: {
      'Capacity': '253 Liters',
      'Type': 'Double Door',
      'Energy Rating': '2 Star',
      'Defrosting Type': 'Frost Free',
      'Warranty': '1 Year + 9 Years on Compressor'
    }
  },
  {
    id: 5,
    name: 'Bosch 288L Double Door Refrigerator',
    brand: 'Bosch',
    category: 'refrigerator',
    price: 35999,
    originalPrice: 39999,
    image: '/Refrig/bosch ref.jpg',
    images: ['/Refrig/bosch ref.jpg'],
    description: 'Premium German engineering with VitaFresh technology to keep food fresh longer.',
    features: ['VitaFresh Technology', 'Multi Airflow System', 'LED Lighting', 'Anti-Bacterial Door Seal'],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    specifications: {
      'Capacity': '288 Liters',
      'Type': 'Double Door',
      'Energy Rating': '4 Star',
      'Defrosting Type': 'Frost Free',
      'Warranty': '2 Years Comprehensive + 10 Years on Compressor'
    }
  },
  {
    id: 22,
    name: 'Panasonic 296L Double Door Refrigerator',
    brand: 'Panasonic',
    category: 'refrigerator',
    price: 31999,
    originalPrice: 36999,
    image: '/Refrig/panasonic ref.jpg',
    images: ['/Refrig/panasonic ref.jpg'],
    description: 'Advanced refrigerator with Econavi technology for intelligent energy saving and optimal cooling performance.',
    features: ['Econavi Technology', 'Prime Fresh Freezing', 'Ag Clean Technology', 'LED Light', 'Tempered Glass Shelves'],
    rating: 4.5,
    reviews: 134,
    inStock: true,
    specifications: {
      'Capacity': '296 Liters',
      'Type': 'Double Door',
      'Energy Rating': '3 Star',
      'Defrosting Type': 'Frost Free',
      'Warranty': '1 Year + 9 Years on Compressor'
    }
  },
  {
    id: 23,
    name: 'Siemens 347L Double Door Refrigerator',
    brand: 'Siemens',
    category: 'refrigerator',
    price: 42999,
    originalPrice: 48999,
    image: '/Refrig/siemens ref.jpg',
    images: ['/Refrig/siemens ref.jpg'],
    description: 'Premium German technology with noFrost system and hyperFresh plus for extended freshness and convenience.',
    features: ['noFrost Technology', 'hyperFresh Plus', 'LED Interior Light', 'Easy Access Shelf', 'Door Alarm'],
    rating: 4.6,
    reviews: 87,
    inStock: true,
    specifications: {
      'Capacity': '347 Liters',
      'Type': 'Double Door',
      'Energy Rating': '4 Star',
      'Defrosting Type': 'Frost Free',
      'Warranty': '2 Years Comprehensive + 12 Years on Compressor'
    }
  },
  {
    id: 24,
    name: 'Whirlpool 235 L 2 Star Frost Free Double Door Refrigerator',
    brand: 'Whirlpool',
    category: 'refrigerator',
    price: 24999,
    originalPrice: 28999,
    image: '/Refrig/whirlpool ref.jpg',
    images: ['/Refrig/whirlpool ref.jpg'],
    description: 'Whirlpool NEO DF278 PRM Titan Steel refrigerator with advanced cooling technology and spacious storage for modern Indian families.',
    features: ['Frost Free Technology', 'Stabilizer Free Operation', 'Toughened Glass Shelves', 'Large Vegetable Crisper', 'Door Cooling Technology', 'Anti-Bacterial Gasket'],
    rating: 4.5,
    reviews: 156,
    inStock: true,
    specifications: {
      'Model': 'WP REF NEO DF278 PRMTITAN STL2S-TL-22099',
      'Capacity': '235 Liters',
      'Type': 'Double Door',
      'Energy Rating': '2 Star',
      'Defrosting Type': 'Frost Free',
      'Color': 'Titan Steel',
      'Compressor': 'Reciprocating',
      'Warranty': '1 Year Comprehensive + 10 Years on Compressor'
    }
  },

  // Washing Machines
  {
    id: 6,
    name: 'LG 7kg Front Load Washing Machine',
    brand: 'LG',
    category: 'washing-machine',
    price: 35999,
    originalPrice: 39999,
    image: '/WM/lg washing.jpg',
    images: ['/WM/lg washing.jpg'],
    description: 'Advanced front load washing machine with AI Direct Drive technology for superior cleaning.',
    features: ['AI Direct Drive', 'Steam Wash', 'Smart Diagnosis', '6 Motion DD', 'Inverter Direct Drive'],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    specifications: {
      'Capacity': '7 kg',
      'Type': 'Front Load',
      'Energy Rating': '5 Star',
      'Wash Programs': '14',
      'Warranty': '2 Years + 10 Years on Motor'
    }
  },
  {
    id: 7,
    name: 'Samsung 6.5kg Top Load Washing Machine',
    brand: 'Samsung',
    category: 'washing-machine',
    price: 18999,
    originalPrice: 21999,
    image: '/WM/samsung washing.jpg',
    images: ['/WM/samsung washing.jpg'],
    description: 'Efficient top load washing machine with Wobble technology for gentle yet effective cleaning.',
    features: ['Wobble Technology', 'Digital Inverter Motor', 'Magic Filter', 'Diamond Drum', 'Smart Check'],
    rating: 4.3,
    reviews: 167,
    inStock: true,
    specifications: {
      'Capacity': '6.5 kg',
      'Type': 'Top Load',
      'Energy Rating': '4 Star',
      'Wash Programs': '12',
      'Warranty': '2 Years + 20 Years on Motor'
    }
  },
  {
    id: 8,
    name: 'Godrej 6kg Top Load Washing Machine',
    brand: 'Godrej',
    category: 'washing-machine',
    price: 16999,
    originalPrice: 19999,
    image: '/WM/Godrej washing.jpg',
    images: ['/WM/Godrej washing.jpg'],
    description: 'Reliable top load washing machine with advanced wash programs and energy efficiency.',
    features: ['Allergy Protect', 'Tub Clean', 'Child Lock', 'Spin Shower', 'Auto Balance System'],
    rating: 4.2,
    reviews: 134,
    inStock: true,
    specifications: {
      'Capacity': '6 kg',
      'Type': 'Top Load',
      'Energy Rating': '3 Star',
      'Wash Programs': '10',
      'Warranty': '2 Years'
    }
  },
  {
    id: 16,
    name: 'Panasonic 6.5kg Top Load Washing Machine',
    brand: 'Panasonic',
    category: 'washing-machine',
    price: 19999,
    originalPrice: 23999,
    image: '/WM/panasonic washing.jpg',
    images: ['/WM/panasonic washing.jpg'],
    description: 'Efficient washing machine with StainMaster technology for superior stain removal and fabric care.',
    features: ['StainMaster Technology', 'Eco Aqua Beat Wash', 'Active Foam System', 'Rust Proof Body', 'Auto Restart'],
    rating: 4.3,
    reviews: 128,
    inStock: true,
    specifications: {
      'Capacity': '6.5 kg',
      'Type': 'Top Load',
      'Energy Rating': '4 Star',
      'Wash Programs': '11',
      'Warranty': '2 Years + 5 Years on Motor'
    }
  },
  {
    id: 17,
    name: 'Siemens 7kg Front Load Washing Machine',
    brand: 'Siemens',
    category: 'washing-machine',
    price: 42999,
    originalPrice: 47999,
    image: '/WM/siemens washing.jpg',
    images: ['/WM/siemens washing.jpg'],
    description: 'Premium German engineering with iQdrive motor and varioPerfect technology for efficient washing.',
    features: ['iQdrive Motor', 'varioPerfect Technology', 'Anti-Vibration Design', 'SpeedPerfect', 'EcoPerfect'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    specifications: {
      'Capacity': '7 kg',
      'Type': 'Front Load',
      'Energy Rating': '5 Star',
      'Wash Programs': '15',
      'Warranty': '2 Years + 10 Years on Motor'
    }
  },
  {
    id: 18,
    name: 'Whirlpool 6.5kg Top Load Washing Machine',
    brand: 'Whirlpool',
    category: 'washing-machine',
    price: 17999,
    originalPrice: 20999,
    image: '/WM/Whirlpool.jpg',
    images: ['/WM/Whirlpool.jpg'],
    description: 'Reliable top load washing machine with ZPF technology for hard water wash and superior fabric care.',
    features: ['ZPF Technology', 'Hard Water Wash', 'Express Wash', 'Lint Filter', 'Auto Tub Clean', 'Spiro Wash Action'],
    rating: 4.5,
    reviews: 187,
    inStock: true,
    specifications: {
      'Capacity': '6.5 kg',
      'Type': 'Top Load',
      'Energy Rating': '4 Star',
      'Wash Programs': '12',
      'Motor': 'Universal Motor',
      'Warranty': '2 Years Comprehensive + 10 Years on Motor'
    }
  },

  // Fans
  {
    id: 9,
    name: 'Havells Stealth Air 1200mm Ceiling Fan',
    brand: 'Havells',
    category: 'fan',
    price: 3299,
    originalPrice: 3799,
    image: '/Fan/havells fan.jpg',
    images: ['/Fan/havells fan.jpg'],
    description: 'Premium ceiling fan with aerodynamically designed blades for superior air delivery and silent operation.',
    features: ['Aerodynamic Design', 'High Air Delivery', 'Energy Efficient', 'Silent Operation', '400mm Sweep'],
    rating: 4.5,
    reviews: 89,
    inStock: true,
    specifications: {
      'Sweep': '1200mm',
      'Speed': '380 RPM',
      'Air Delivery': '230 CMM',
      'Power Consumption': '75W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 10,
    name: 'Bajaj Maxima 1200mm Ceiling Fan',
    brand: 'Bajaj',
    category: 'fan',
    price: 2499,
    originalPrice: 2899,
    image: '/Fan/bajaj fan.jpg',
    images: ['/Fan/bajaj fan.jpg'],
    description: 'High performance ceiling fan with ribbed blades for enhanced air delivery and durability.',
    features: ['Ribbed Blades', 'High Speed Motor', 'Rust Resistant', 'Double Ball Bearing', 'ISI Marked'],
    rating: 4.2,
    reviews: 156,
    inStock: true,
    specifications: {
      'Sweep': '1200mm',
      'Speed': '350 RPM',
      'Air Delivery': '210 CMM',
      'Power Consumption': '70W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 11,
    name: 'Orient Electric Aeroquiet 1200mm Fan',
    brand: 'Orient',
    category: 'fan',
    price: 2799,
    originalPrice: 3199,
    image: '/Fan/orient fan.jpg',
    images: ['/Fan/orient fan.jpg'],
    description: 'Ultra-quiet ceiling fan with aerodynamic blade design for maximum comfort and energy efficiency.',
    features: ['Ultra Quiet Operation', 'Aerodynamic Blades', 'Energy Efficient', 'Premium Finish', 'Balanced Motor'],
    rating: 4.4,
    reviews: 112,
    inStock: true,
    specifications: {
      'Sweep': '1200mm',
      'Speed': '370 RPM',
      'Air Delivery': '220 CMM',
      'Power Consumption': '68W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 19,
    name: 'Crompton Greaves Aura Prime 1200mm Fan',
    brand: 'Crompton',
    category: 'fan',
    price: 2199,
    originalPrice: 2599,
    image: '/Fan/crompton fan.jpg',
    images: ['/Fan/crompton fan.jpg'],
    description: 'Stylish ceiling fan with decorative design and efficient motor for optimal air circulation in modern homes.',
    features: ['Decorative Design', 'High Speed Motor', 'Rust Resistant Coating', 'Balanced Blades', 'Easy Installation'],
    rating: 4.1,
    reviews: 143,
    inStock: true,
    specifications: {
      'Sweep': '1200mm',
      'Speed': '340 RPM',
      'Air Delivery': '200 CMM',
      'Power Consumption': '72W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 20,
    name: 'Usha Technix 1200mm Ceiling Fan',
    brand: 'Usha',
    category: 'fan',
    price: 2899,
    originalPrice: 3299,
    image: '/Fan/usha fan.jpg',
    images: ['/Fan/usha fan.jpg'],
    description: 'Premium ceiling fan with advanced motor technology and elegant design for superior performance and durability.',
    features: ['Advanced Motor Technology', 'Elegant Design', 'High Air Delivery', 'Energy Efficient', 'Dust Resistant'],
    rating: 4.3,
    reviews: 167,
    inStock: true,
    specifications: {
      'Sweep': '1200mm',
      'Speed': '360 RPM',
      'Air Delivery': '215 CMM',
      'Power Consumption': '70W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 21,
    name: 'Atomberg Renesa Enzel 1200mm BLDC Ceiling Fan with Remote Control',
    brand: 'Atomberg',
    category: 'fan',
    price: 4999,
    originalPrice: 5999,
    image: '/Fan/atomberg.jpg',
    images: ['/Fan/atomberg.jpg'],
    description: 'Smart BLDC ceiling fan with remote control, app connectivity, and superior energy efficiency for modern smart homes.',
    features: ['BLDC Motor Technology', 'Remote Control Included', 'App Connectivity', 'Variable Speed Control', 'Energy Efficient', 'Boost Mode'],
    rating: 4.7,
    reviews: 298,
    inStock: true,
    specifications: {
      'Sweep': '1200mm',
      'Speed': 'Variable (100-400 RPM)',
      'Air Delivery': '240 CMM',
      'Power Consumption': '28W (Ultra Energy Efficient)',
      'Motor Type': 'BLDC (Brushless DC)',
      'Remote Control': 'Yes with Timer Function',
      'Warranty': '2 Years + 10 Years on Motor'
    }
  },

  // Stoves
  {
    id: 26,
    name: 'Prestige Royale Plus 3 Burner Gas Stove',
    brand: 'Prestige',
    category: 'stove',
    price: 8999,
    originalPrice: 12999,
    image: '/Stove/prestige.jpg',
    images: ['/Stove/prestige.jpg'],
    description: 'Premium 3 burner gas stove with toughened glass top, brass burners and advanced safety features for modern Indian kitchens.',
    features: ['Toughened Glass Top', 'Brass Burners', 'Auto Ignition', 'Spill Proof Design', 'ISI Certified', 'Heat Resistant Knobs'],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    specifications: {
      'Burners': '3 Burners',
      'Material': 'Toughened Glass Top',
      'Ignition': 'Auto Ignition',
      'Gas Type': 'LPG',
      'Dimensions': '76 x 46 x 9 cm',
      'Warranty': '2 Years'
    }
  },
  {
    id: 27,
    name: 'Preethi Blu Flame Zeal 3 Burner Gas Stove',
    brand: 'Preethi',
    category: 'stove',
    price: 7000,
    originalPrice: 9999,
    image: '/Stove/Preethi.jpg',
    images: ['/Stove/Preethi.jpg'],
    description: 'Efficient 3 burner gas stove with stainless steel body and high thermal efficiency burners for faster cooking.',
    features: ['Stainless Steel Body', 'High Efficiency Burners', 'Manual Ignition', 'Drip Tray', 'Anti Skid Feet', 'Easy to Clean'],
    rating: 4.3,
    reviews: 187,
    inStock: true,
    specifications: {
      'Burners': '3 Burners',
      'Material': 'Stainless Steel',
      'Ignition': 'Manual',
      'Gas Type': 'LPG',
      'Dimensions': '65 x 36 x 8 cm',
      'Warranty': '1 Year'
    }
  },
  {
    id: 28,
    name: 'Lifelong 4 Burner Toughened Glass Gas Stove',
    brand: 'Lifelong',
    category: 'stove',
    price: 6999,
    originalPrice: 9999,
    image: '/Stove/Lifelong.jpg',
    images: ['/Stove/Lifelong.jpg'],
    description: 'Affordable 4 burner gas stove with toughened glass top and brass burners, perfect for daily cooking needs.',
    features: ['Toughened Glass Top', 'Brass Burners', 'Manual Ignition', 'Heat Resistant Body', 'Easy Maintenance', 'Compact Design'],
    rating: 4.5,
    reviews: 112,
    inStock: true,
    specifications: {
      'Burners': '4',
      'Material': 'Toughened Glass',
      'Ignition': 'Auto',
      'Gas Type': 'LPG/PNG',
      'Warranty': '2 Years'
    }
  },
  {
    id: 29,
    name: 'Crompton Greaves 4 Burner Gas Stove',
    brand: 'Crompton',
    category: 'stove',
    price: 15499,
    originalPrice: 18999,
    image: '/Stove/crompton.jpg',
    images: ['/Stove/crompton.jpg'],
    description: 'Reliable 4 burner gas stove with sturdy construction and efficient flame distribution for uniform cooking.',
    features: ['Sturdy Construction', 'Efficient Burners', 'Manual Ignition', 'Non-Slip Base', 'Easy to Clean', 'Rust Resistant'],
    rating: 4.2,
    reviews: 143,
    inStock: true,
    specifications: {
      'Burners': '4 Burners',
      'Material': 'Stainless Steel',
      'Ignition': 'Manual',
      'Gas Type': 'LPG',
      'Dimensions': '75 x 45 x 8 cm',
      'Warranty': '1 Year'
    }
  },
  {
    id: 30,
    name: 'Pigeon Favourite 3 Burner Gas Stove',
    brand: 'Pigeon',
    category: 'stove',
    price: 2999,
    originalPrice: 4999,
    image: '/Stove/pigeon.jpg',
    images: ['/Stove/pigeon.jpg'],
    description: 'Budget-friendly 3 burner gas stove with stainless steel body and high efficiency burners for everyday cooking.',
    features: ['Stainless Steel Body', 'High Efficiency Burners', 'Manual Ignition', 'Drip Tray Included', 'Compact Size', 'Easy Installation'],
    rating: 4.0,
    reviews: 198,
    inStock: true,
    specifications: {
      'Burners': '3 Burners',
      'Material': 'Stainless Steel',
      'Ignition': 'Manual',
      'Gas Type': 'LPG',
      'Dimensions': '58 x 32 x 7 cm',
      'Warranty': '1 Year'
    }
  },
  {
    id: 31,
    name: 'Kaff 4 Burner Premium Gas Stove',
    brand: 'Kaff',
    category: 'stove',
    price: 6999,
    originalPrice: 9999,
    image: '/Stove/kaff.jpg',
    images: ['/Stove/kaff.jpg'],
    description: 'Premium 4 burner gas stove with elegant design, toughened glass top and superior build quality for modern kitchens.',
    features: ['Toughened Glass Top', 'Premium Brass Burners', 'Auto Ignition', 'Elegant Design', 'Heat Resistant Knobs', 'ISI Certified'],
    rating: 4.4,
    reviews: 112,
    inStock: true,
    specifications: {
      'Burners': '4 Burners',
      'Material': 'Toughened Glass',
      'Ignition': 'Auto Ignition',
      'Gas Type': 'LPG',
      'Dimensions': '72 x 42 x 8 cm',
      'Warranty': '2 Years'
    }
  },

  // Iron Box
  {
    id: 32,
    name: 'Philips Azur Steam Iron GC4506',
    brand: 'Philips',
    category: 'iron-box',
    price: 3499,
    originalPrice: 4499,
    image: '/Iron/Philips.jpg',
    images: ['/Iron/Philips.jpg'],
    description: 'Advanced steam iron with SteamGlide Plus soleplate and OptimalTEMP technology for safe ironing on all fabrics.',
    features: ['SteamGlide Plus Soleplate', 'OptimalTEMP Technology', 'Continuous Steam', 'Vertical Steam', 'Anti-Calc System', 'Drip Stop'],
    rating: 4.6,
    reviews: 287,
    inStock: true,
    specifications: {
      'Power': '2400W',
      'Steam Output': '50g/min',
      'Steam Boost': '210g/min',
      'Water Tank': '300ml',
      'Soleplate': 'SteamGlide Plus',
      'Warranty': '2 Years'
    }
  },
  {
    id: 33,
    name: 'Bajaj Majesty DX 8 Steam Iron',
    brand: 'Bajaj',
    category: 'iron-box',
    price: 1299,
    originalPrice: 1799,
    image: '/Iron/bajaj.jpg',
    images: ['/Iron/bajaj.jpg'],
    description: 'Reliable steam iron with non-stick coated soleplate and adjustable temperature control for everyday ironing needs.',
    features: ['Non-Stick Soleplate', 'Steam Function', 'Temperature Control', 'Spray Function', 'Self Cleaning', 'Indicator Light'],
    rating: 4.2,
    reviews: 234,
    inStock: true,
    specifications: {
      'Power': '1200W',
      'Steam Output': '15g/min',
      'Water Tank': '200ml',
      'Soleplate': 'Non-Stick Coated',
      'Temperature Settings': 'Variable',
      'Warranty': '2 Years'
    }
  },
  {
    id: 34,
    name: 'Crompton Acgih CG-EI3 Steam Iron',
    brand: 'Crompton',
    category: 'iron-box',
    price: 1899,
    originalPrice: 2499,
    image: '/Iron/crompton.jpg',
    images: ['/Iron/crompton.jpg'],
    description: 'Efficient steam iron with ceramic coated soleplate and powerful steam output for wrinkle-free clothes.',
    features: ['Ceramic Coated Soleplate', 'Powerful Steam', 'Anti-Drip System', 'Self Cleaning', 'Overheat Protection', 'Ergonomic Handle'],
    rating: 4.5,
    reviews: 198,
    inStock: true,
    specifications: {
      'Power': '1400W',
      'Steam Output': '20g/min',
      'Water Tank': '250ml',
      'Soleplate': 'Ceramic Coated',
      'Auto Shut-off': 'Yes',
      'Warranty': '2 Years'
    }
  },
  {
    id: 35,
    name: 'Havells Admire Steam Iron',
    brand: 'Havells',
    category: 'iron-box',
    price: 2199,
    originalPrice: 2899,
    image: '/Iron/havells.jpg',
    images: ['/Iron/havells.jpg'],
    description: 'Premium steam iron with German technology, stainless steel soleplate and advanced safety features.',
    features: ['Stainless Steel Soleplate', 'German Technology', 'Steam Burst', 'Anti-Calc Function', 'Safety Auto Cut-off', 'Precision Tip'],
    rating: 4.5,
    reviews: 167,
    inStock: true,
    specifications: {
      'Power': '1600W',
      'Steam Output': '25g/min',
      'Steam Boost': '120g/min',
      'Water Tank': '280ml',
      'Soleplate': 'Stainless Steel',
      'Warranty': '2 Years'
    }
  },
  {
    id: 36,
    name: 'Orient Electric Fabri Joy Steam Iron',
    brand: 'Orient',
    category: 'iron-box',
    price: 1599,
    originalPrice: 2199,
    image: '/Iron/orient.jpg',
    images: ['/Iron/orient.jpg'],
    description: 'Compact steam iron with non-stick soleplate and multiple temperature settings for different fabric types.',
    features: ['Non-Stick Soleplate', 'Multiple Temperature Settings', 'Steam Function', 'Spray Mist', 'Swivel Cord', 'Lightweight Design'],
    rating: 4.1,
    reviews: 145,
    inStock: true,
    specifications: {
      'Power': '1000W',
      'Steam Output': '12g/min',
      'Water Tank': '180ml',
      'Soleplate': 'Non-Stick',
      'Weight': '1.2kg',
      'Warranty': '1 Year'
    }
  },
  {
    id: 37,
    name: 'Panasonic NI-E200T Steam Iron',
    brand: 'Panasonic',
    category: 'iron-box',
    price: 2799,
    originalPrice: 3599,
    image: '/Iron/panasonic.jpg',
    images: ['/Iron/panasonic.jpg'],
    description: 'Advanced steam iron with titanium coated soleplate and U-shaped design for superior gliding and durability.',
    features: ['Titanium Coated Soleplate', 'U-Shaped Design', 'Continuous Steam', 'Vertical Steam', 'Anti-Calc System', 'Temperature Indicator'],
    rating: 4.5,
    reviews: 189,
    inStock: true,
    specifications: {
      'Power': '1800W',
      'Steam Output': '30g/min',
      'Steam Boost': '150g/min',
      'Water Tank': '320ml',
      'Soleplate': 'Titanium Coated',
      'Warranty': '2 Years'
    }
  },

  // Vacuum Cleaners
  {
    id: 38,
    name: 'Eureka Forbes SuperVac Wet & Dry Vacuum Cleaner',
    brand: 'Eureka Forbes',
    category: 'vacuum-cleaner',
    price: 8999,
    originalPrice: 11999,
    image: '/vaccum/Eureka Forbes SuperVac.jpg',
    images: ['/vaccum/Eureka Forbes SuperVac.jpg'],
    description: 'Powerful wet & dry vacuum cleaner with multi-stage filtration and robust motor for comprehensive cleaning solutions.',
    features: ['Wet & Dry Cleaning', 'Multi-Stage Filtration', 'Powerful Motor', 'Large Capacity Tank', 'Multiple Attachments', 'Auto Cut-off'],
    rating: 4.5,
    reviews: 234,
    inStock: true,
    specifications: {
      'Power': '1600W',
      'Capacity': '20L',
      'Filter': 'Multi-Stage',
      'Cord Length': '6m',
      'Type': 'Wet & Dry',
      'Warranty': '1 Year'
    }
  },
  {
    id: 39,
    name: 'Philips PowerPro FC9352 Bagless Vacuum Cleaner',
    brand: 'Philips',
    category: 'vacuum-cleaner',
    price: 12999,
    originalPrice: 16999,
    image: '/vaccum/philip.jpg',
    images: ['/vaccum/philip.jpg'],
    description: 'Advanced bagless vacuum cleaner with PowerCyclone 5 technology and TriActive+ nozzle for superior dust pickup.',
    features: ['PowerCyclone 5 Technology', 'TriActive+ Nozzle', 'Bagless Design', 'HEPA Filter', 'Compact Storage', 'Easy Empty'],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    specifications: {
      'Power': '1900W',
      'Capacity': '1.5L',
      'Filter': 'HEPA 13',
      'Cord Length': '6m',
      'Noise Level': '76dB',
      'Warranty': '2 Years'
    }
  },
  {
    id: 40,
    name: 'AGARO Ace Wet & Dry Vacuum Cleaner',
    brand: 'AGARO',
    category: 'vacuum-cleaner',
    price: 6999,
    originalPrice: 9499,
    image: '/vaccum/AGARO.jpg',
    images: ['/vaccum/AGARO.jpg'],
    description: 'Versatile wet & dry vacuum cleaner with stainless steel tank and powerful suction for home and car cleaning.',
    features: ['Stainless Steel Tank', 'Wet & Dry Function', 'Powerful Suction', 'Blower Function', 'Multiple Accessories', 'Washable Filter'],
    rating: 4.2,
    reviews: 167,
    inStock: true,
    specifications: {
      'Power': '1600W',
      'Capacity': '21L',
      'Filter': 'Washable',
      'Cord Length': '5m',
      'Material': 'Stainless Steel',
      'Warranty': '1 Year'
    }
  },
  {
    id: 41,
    name: 'BLACK+DECKER Dustbuster Handheld Vacuum',
    brand: 'BLACK+DECKER',
    category: 'vacuum-cleaner',
    price: 4999,
    originalPrice: 6999,
    image: '/vaccum/BLACK+DECKER.jpg',
    images: ['/vaccum/BLACK+DECKER.jpg'],
    description: 'Cordless handheld vacuum cleaner with lithium battery and cyclonic action for quick cleanups and car interiors.',
    features: ['Cordless Design', 'Lithium Battery', 'Cyclonic Action', 'Washable Filter', 'Crevice Tool', 'Quick Charge'],
    rating: 4.1,
    reviews: 145,
    inStock: true,
    specifications: {
      'Power': 'Cordless (Lithium)',
      'Capacity': '0.7L',
      'Battery Life': '15 minutes',
      'Charge Time': '4 hours',
      'Weight': '1.4kg',
      'Warranty': '2 Years'
    }
  },
  {
    id: 42,
    name: 'Inalsa Spruce Wet & Dry Vacuum Cleaner',
    brand: 'Inalsa',
    category: 'vacuum-cleaner',
    price: 7999,
    originalPrice: 10999,
    image: '/vaccum/Inalsa Spruce.jpg',
    images: ['/vaccum/Inalsa Spruce.jpg'],
    description: 'Heavy-duty wet & dry vacuum cleaner with stainless steel body and advanced filtration for industrial-grade cleaning.',
    features: ['Heavy Duty Motor', 'Stainless Steel Body', 'Advanced Filtration', 'Large Wheels', 'Auto Shut-off', 'Professional Grade'],
    rating: 4.3,
    reviews: 198,
    inStock: true,
    specifications: {
      'Power': '1500W',
      'Capacity': '30L',
      'Filter': 'Cloth + Foam',
      'Cord Length': '5m',
      'Material': 'Stainless Steel',
      'Warranty': '1 Year'
    }
  },
  {
    id: 43,
    name: 'Amazon Basics Cylinder Bagless Vacuum Cleaner',
    brand: 'Amazon Basics',
    category: 'vacuum-cleaner',
    price: 5999,
    originalPrice: 7999,
    image: '/vaccum/AmazonBasics.jpg',
    images: ['/vaccum/AmazonBasics.jpg'],
    description: 'Compact bagless vacuum cleaner with cyclonic suction and multiple attachments for efficient home cleaning.',
    features: ['Cyclonic Suction', 'Bagless Design', 'Compact Size', 'Multiple Attachments', 'Easy Maneuverability', 'Washable Filter'],
    rating: 4.0,
    reviews: 156,
    inStock: true,
    specifications: {
      'Power': '1500W',
      'Capacity': '1.5L',
      'Filter': 'Washable HEPA',
      'Cord Length': '5m',
      'Weight': '4.5kg',
      'Warranty': '1 Year'
    }
  },

  // Air Purifiers
  {
    id: 44,
    name: 'Honeywell Air Touch A5 Air Purifier',
    brand: 'Honeywell',
    category: 'air-purifier',
    price: 15999,
    originalPrice: 19999,
    image: '/Air/Honeywall air.jpg',
    images: ['/Air/Honeywall air.jpg'],
    description: 'Advanced HEPA air purifier with 3-stage filtration and smart sensors for comprehensive air cleaning in Indian homes.',
    features: ['True HEPA Filter', '3-Stage Filtration', 'Smart Sensors', 'Auto Mode', 'Filter Change Indicator', 'Touch Panel'],
    rating: 4.7,
    reviews: 298,
    inStock: true,
    specifications: {
      'Coverage Area': '388 sq ft',
      'CADR': '300 m³/h',
      'Filter Life': '12 months',
      'Noise Level': '<48 dB',
      'Power': '55W',
      'Warranty': '3 Years'
    }
  },
  {
    id: 45,
    name: 'Bajaj Platini PX 97 Air Purifier',
    brand: 'Bajaj',
    category: 'air-purifier',
    price: 8999,
    originalPrice: 12999,
    image: '/Air/bajaj platini air.jpg',
    images: ['/Air/bajaj platini air.jpg'],
    description: 'Compact air purifier with HEPA filter and UV sterilization, perfect for bedrooms and small spaces.',
    features: ['HEPA Filter', 'UV Sterilization', 'Activated Carbon', 'Pre-Filter', 'LED Display', 'Remote Control'],
    rating: 4.3,
    reviews: 187,
    inStock: true,
    specifications: {
      'Coverage Area': '200 sq ft',
      'CADR': '180 m³/h',
      'Filter Life': '8-10 months',
      'Noise Level': '<45 dB',
      'Power': '45W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 46,
    name: 'Crompton Tranquil Pro Air Purifier',
    brand: 'Crompton',
    category: 'air-purifier',
    price: 11999,
    originalPrice: 15999,
    image: '/Air/crompton air.jpg',
    images: ['/Air/crompton air.jpg'],
    description: 'Multi-stage air purifier with True HEPA filter and ionizer for effective removal of pollutants and allergens.',
    features: ['True HEPA Filter', 'Ionizer', 'Activated Carbon', 'Pre-Filter', 'Air Quality Indicator', 'Timer Function'],
    rating: 4.4,
    reviews: 234,
    inStock: true,
    specifications: {
      'Coverage Area': '320 sq ft',
      'CADR': '250 m³/h',
      'Filter Life': '10-12 months',
      'Noise Level': '<50 dB',
      'Power': '50W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 47,
    name: 'Orient Electric Aura Air Purifier',
    brand: 'Orient',
    category: 'air-purifier',
    price: 7999,
    originalPrice: 10999,
    image: '/Air/orient air.jpg',
    images: ['/Air/orient air.jpg'],
    description: 'Budget-friendly air purifier with 4-stage filtration and smart features for clean and healthy indoor air.',
    features: ['4-Stage Filtration', 'HEPA Filter', 'Activated Carbon', 'Smart Sensors', 'Sleep Mode', 'Child Lock'],
    rating: 4.2,
    reviews: 156,
    inStock: true,
    specifications: {
      'Coverage Area': '250 sq ft',
      'CADR': '200 m³/h',
      'Filter Life': '6-8 months',
      'Noise Level': '<42 dB',
      'Power': '40W',
      'Warranty': '2 Years'
    }
  },
  {
    id: 48,
    name: 'Symphony AiroChill Air Purifier',
    brand: 'Symphony',
    category: 'air-purifier',
    price: 6999,
    originalPrice: 9999,
    image: '/Air/symphony air.jpg',
    images: ['/Air/symphony air.jpg'],
    description: 'Affordable air purifier with HEPA filtration and cooling function, ideal for Indian climate conditions.',
    features: ['HEPA Filtration', 'Cooling Function', 'Pre-Filter', 'Carbon Filter', 'Multiple Speed Settings', 'Energy Efficient'],
    rating: 4.1,
    reviews: 178,
    inStock: true,
    specifications: {
      'Coverage Area': '180 sq ft',
      'CADR': '150 m³/h',
      'Filter Life': '6 months',
      'Noise Level': '<40 dB',
      'Power': '35W',
      'Warranty': '1 Year'
    }
  },
  {
    id: 49,
    name: 'Voltas Pure Air VAP26TWV Air Purifier',
    brand: 'Voltas',
    category: 'air-purifier',
    price: 13999,
    originalPrice: 17999,
    image: '/Air/voltas air.jpg',
    images: ['/Air/voltas air.jpg'],
    description: 'Premium air purifier with advanced filtration technology and Wi-Fi connectivity for smart home integration.',
    features: ['Advanced HEPA Filter', 'Wi-Fi Connectivity', 'App Control', 'Air Quality Monitor', 'Auto Mode', 'Voice Control'],
    rating: 4.5,
    reviews: 267,
    inStock: true,
    specifications: {
      'Coverage Area': '400 sq ft',
      'CADR': '350 m³/h',
      'Filter Life': '12-15 months',
      'Noise Level': '<52 dB',
      'Power': '60W',
      'Warranty': '3 Years'
    }
  },

  // Blenders
  {
    id: 50,
    name: 'AGARO Imperial Mixer Grinder',
    brand: 'AGARO',
    category: 'blender',
    price: 4999,
    originalPrice: 6999,
    image: '/Blender/Agaro.jpg',
    images: ['/Blender/Agaro.jpg'],
    description: 'Powerful 1000W mixer grinder with 4 stainless steel jars and advanced motor technology for all your grinding needs.',
    features: ['1000W Copper Motor', '4 SS Jars', 'Overload Protection', 'Shock Proof Body', 'Multi-Function Blades', '3 Speed Control'],
    rating: 4.3,
    reviews: 189,
    inStock: true,
    specifications: {
      'Power': '1000W',
      'Jars': '4 (1.75L, 1.5L, 1L, 0.4L)',
      'Speed': '3 Speed + Pulse',
      'Motor': 'Copper Winding',
      'Warranty': '2 Years'
    }
  },
  {
    id: 51,
    name: 'Balzano Mixer Grinder 750W',
    brand: 'Balzano',
    category: 'blender',
    price: 3999,
    originalPrice: 5499,
    image: '/Blender/Balzano.jpg',
    images: ['/Blender/Balzano.jpg'],
    description: 'Compact and efficient 750W mixer grinder with 3 jars, perfect for daily kitchen tasks and small families.',
    features: ['750W Motor', '3 SS Jars', 'Overload Protection', 'Ergonomic Design', 'Sharp Blades', 'Easy Operation'],
    rating: 4.1,
    reviews: 156,
    inStock: true,
    specifications: {
      'Power': '750W',
      'Jars': '3 (1.5L, 1L, 0.3L)',
      'Speed': '3 Speed Settings',
      'Material': 'ABS Plastic',
      'Warranty': '2 Years'
    }
  },
  {
    id: 52,
    name: 'NutriBullet Pro 900W Personal Blender',
    brand: 'NutriBullet',
    category: 'blender',
    price: 8999,
    originalPrice: 12999,
    image: '/Blender/Nutribullet.jpg',
    images: ['/Blender/Nutribullet.jpg'],
    description: 'High-performance personal blender with 900W motor, perfect for smoothies, protein shakes, and nutrient extraction.',
    features: ['900W Motor', 'Nutrient Extraction', 'BPA-Free Cups', 'Extractor Blades', 'Recipe Book', 'Compact Design'],
    rating: 4.6,
    reviews: 298,
    inStock: true,
    specifications: {
      'Power': '900W',
      'Cups': '2 (32oz, 24oz)',
      'Blades': 'Extractor Blades',
      'Material': 'BPA-Free Plastic',
      'Warranty': '1 Year'
    }
  },
  {
    id: 53,
    name: 'Cookwell Mixer Grinder 1000W',
    brand: 'Cookwell',
    category: 'blender',
    price: 5999,
    originalPrice: 7999,
    image: '/Blender/cookwell.jpg',
    images: ['/Blender/cookwell.jpg'],
    description: 'Heavy-duty 1000W mixer grinder with 4 jars and advanced grinding technology for professional-grade performance.',
    features: ['1000W Heavy Motor', '4 Large Jars', 'Advanced Grinding', 'Overload Protection', 'Sturdy Build', 'Multi-Purpose'],
    rating: 4.4,
    reviews: 234,
    inStock: true,
    specifications: {
      'Power': '1000W',
      'Jars': '4 (2L, 1.5L, 1L, 0.5L)',
      'Speed': '3 Speed + Pulse',
      'Build': 'Heavy Duty',
      'Warranty': '3 Years'
    }
  },
  {
    id: 54,
    name: 'Preethi Zodiac MG 218 Mixer Grinder',
    brand: 'Preethi',
    category: 'blender',
    price: 7999,
    originalPrice: 9999,
    image: '/Blender/preethi.jpg',
    images: ['/Blender/preethi.jpg'],
    description: 'Premium 750W mixer grinder with Master Chef jar and unique flow breaker technology for superior grinding.',
    features: ['750W Motor', 'Master Chef Jar', 'Flow Breaker Technology', '3 SS Jars', 'Overload Protection', '5 Year Warranty'],
    rating: 4.7,
    reviews: 345,
    inStock: true,
    specifications: {
      'Power': '750W',
      'Jars': '3 (1.75L, 1L, 0.5L)',
      'Technology': 'Flow Breaker',
      'Motor': 'Titanium Coated',
      'Warranty': '5 Years Motor'
    }
  },
  {
    id: 55,
    name: 'Wonderchef Nutri-Blend CKM Mixer',
    brand: 'Wonderchef',
    category: 'blender',
    price: 6999,
    originalPrice: 8999,
    image: '/Blender/wonderchef.jpg',
    images: ['/Blender/wonderchef.jpg'],
    description: 'Versatile mixer grinder with unique design and powerful motor, ideal for modern Indian kitchens.',
    features: ['400W Motor', 'Unique Design', '2 Jars', 'Compact Size', 'Easy Cleaning', 'Chef Recommended'],
    rating: 4.2,
    reviews: 178,
    inStock: true,
    specifications: {
      'Power': '400W',
      'Jars': '2 (1.2L, 0.8L)',
      'Design': 'Compact',
      'Blades': 'Stainless Steel',
      'Warranty': '2 Years'
    }
  },
  // Test Product with Price 1
  {
    id: 100,
    name: 'Test Product - Price 1',
    brand: 'TEST',
    category: 'blender',
    price: 1,
    originalPrice: 1,
    image: 'https://placehold.co/300x300?text=Test+Product',
    images: ['https://placehold.co/300x300?text=Test+Product'],
    description: 'This is a test product for payment testing with Paytm gateway. Price is 1 rupee for testing purposes only.',
    features: ['Test Feature 1', 'Test Feature 2'],
    rating: 5.0,
    reviews: 1,
    inStock: true,
    shipping: 0,
    tax: 0,
    specifications: {
      'Price': '₹1',
      'Shipping': '₹0',
      'Tax': '₹0',
      'Purpose': 'Payment Gateway Testing'
    }
  }
];

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.rating >= 4.5).slice(0, 8);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};
