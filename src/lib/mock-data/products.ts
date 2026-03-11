import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "agri-t15-sprayer",
    name: "Agri T15 Sprayer",
    category: "Drones",
    price: 40450,
    originalPrice: 43450,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80",
    ],
    isNew: true,
    badge: "New",
    shortDescription:
      "Precision drone designed to help farmers monitor crops, optimize yields, and make data-driven decisions—fast, efficient, and reliable.",
    description:
      "Engineered for precision and durability, this drone delivers high-resolution aerial imaging, enabling you to identify crop stress, monitor irrigation, and detect pest infestations before they impact your yield. Its advanced sensors and AI-powered analytics transform raw data into actionable insights, saving you time and resources.\n\nThe Agri T15 Sprayer is built to withstand the demands of agricultural environments. With extended flight time, easy deployment, and robust weather resistance, it's perfect for both small farms and large-scale operations. Whether you need regular crop surveys or seasonal monitoring, this drone ensures consistent performance and accurate results.\n\nEquipped with smart mapping and GPS capabilities, the Agri T15 Sprayer allows for automated flight paths and repeatable surveys, giving you a complete overview of your fields with minimal effort. Its intuitive interface makes data collection simple, while cloud integration allows you to analyze and share results on the go.",
    specs: {
      "Flight Time": "Up To 3 Hours",
      Camera: "48 MP Multispectral + RGB",
      "Coverage Per Flight": "Up To 120 Hectares",
      "Max Speed": "18 m/s",
      Battery: "Quick-Swap Li-Ion",
      "Operating Temp": "-10°C To 45°C",
      Weight: "12.5 Kg",
    },
    features: [
      { icon: "ndvi", label: "NDVI Sensor" },
      { icon: "irrigation", label: "10L irrigation", sublabel: "capacity" },
      { icon: "coverage", label: "120 ha/", sublabel: "flight" },
    ],
    colors: [
      { name: "Black", hex: "#1a1a2e" },
      { name: "Red", hex: "#c0392b" },
      { name: "Gray", hex: "#7f8c8d" },
      { name: "Orange", hex: "#e67e22" },
      { name: "Yellow", hex: "#f1c40f" },
      { name: "White", hex: "#ffffff" },
    ],
    configurations: [
      "Multispectral + RGB",
      "RGB Only",
      "Thermal + RGB",
      "LIDAR + RGB",
    ],
    inStock: 18,
    volumeDiscounts: [
      { minQty: 5, pricePerUnit: 38430, discount: 10 },
      { minQty: 10, pricePerUnit: 36400, discount: 15 },
      { minQty: 15, pricePerUnit: 34380, discount: 20 },
      { minQty: 30, pricePerUnit: 32360, discount: 25 },
      { minQty: 50, pricePerUnit: 30340, discount: 30 },
      { minQty: 51, pricePerUnit: 28315, discount: 35 },
    ],
    relatedProducts: [
      "high-capacity-spray-tank",
      "i37-intellimax-drone-battery",
      "drone-carrying-case",
      "propeller-replacement-kit",
    ],
  },
  {
    id: "agripro-a6",
    name: "AgriPro A6",
    category: "Drones",
    price: 12000,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    shortDescription: "High-performance agricultural drone for professional use.",
    description:
      "The AgriPro A6 is a versatile agricultural drone designed for demanding field operations. Its robust build and advanced sensors deliver reliable data collection across all terrains.",
    specs: {
      "Flight Time": "Up To 2 Hours",
      Camera: "32 MP RGB",
      "Coverage Per Flight": "Up To 80 Hectares",
      "Max Speed": "15 m/s",
      Battery: "Standard Li-Ion",
      "Operating Temp": "-5°C To 40°C",
      Weight: "9.8 Kg",
    },
    inStock: 12,
    volumeDiscounts: [
      { minQty: 5, pricePerUnit: 11400, discount: 5 },
      { minQty: 10, pricePerUnit: 10800, discount: 10 },
      { minQty: 20, pricePerUnit: 10200, discount: 15 },
    ],
    colors: [
      { name: "Black", hex: "#1a1a2e" },
      { name: "White", hex: "#ffffff" },
    ],
    configurations: ["RGB Only", "Multispectral + RGB"],
    relatedProducts: [
      "agri-t15-irrigation-attachment",
      "ertc-700-controller",
      "drone-carrying-case",
    ],
  },
  {
    id: "agri-t15-sprayer-body",
    name: "Agri T15 Sprayer Body",
    category: "Accessories",
    price: 18000,
    originalPrice: 19000,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    shortDescription: "Replacement body for the Agri T15 Sprayer drone.",
    inStock: 8,
    relatedProducts: ["agri-t15-sprayer", "agri-t15-irrigation-attachment"],
  },
  {
    id: "fieldmapper-h10",
    name: "FieldMapper H10",
    category: "Drones",
    price: 14000,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80",
    isNew: true,
    shortDescription:
      "Advanced field mapping drone with precision GPS and multi-sensor integration.",
    description:
      "The FieldMapper H10 is designed for professionals who demand accuracy. With its advanced GPS and multi-sensor integration, it delivers precise field maps and data.",
    specs: {
      "Flight Time": "Up To 4 Hours",
      Camera: "64 MP Multispectral",
      "Coverage Per Flight": "Up To 200 Hectares",
      "Max Speed": "20 m/s",
      Battery: "Dual Quick-Swap",
      "Operating Temp": "-15°C To 50°C",
      Weight: "14.2 Kg",
    },
    inStock: 5,
    volumeDiscounts: [
      { minQty: 3, pricePerUnit: 13300, discount: 5 },
      { minQty: 5, pricePerUnit: 12600, discount: 10 },
      { minQty: 10, pricePerUnit: 11900, discount: 15 },
    ],
    colors: [
      { name: "Black", hex: "#1a1a2e" },
      { name: "Gray", hex: "#7f8c8d" },
    ],
    configurations: ["Multispectral", "RGB + Multispectral", "LIDAR"],
    relatedProducts: [
      "i37-intellimax-drone-battery",
      "drone-carrying-case",
      "propeller-replacement-kit",
    ],
  },
  {
    id: "owl-n10-surveillance",
    name: "Owl N10 - Surveillance",
    category: "Drones",
    price: 22000,
    originalPrice: 25000,
    image: "https://images.unsplash.com/photo-1546817174-e03eb441cf74?w=600&q=80",
    isNew: true,
    shortDescription:
      "Advanced surveillance drone with AI-powered object detection and night vision.",
    inStock: 6,
    colors: [
      { name: "Black", hex: "#1a1a2e" },
      { name: "Gray", hex: "#7f8c8d" },
    ],
    relatedProducts: ["ertc-700-controller", "drone-carrying-case"],
  },
  {
    id: "sgrx-310-controller",
    name: "Sgrx 310 Controller",
    category: "Controllers",
    price: 3200,
    originalPrice: 3800,
    image: "https://images.unsplash.com/photo-1596566791891-695c72c98ce0?w=600&q=80",
    isNew: true,
    shortDescription: "Professional remote controller with 10km range and HD display.",
    inStock: 25,
    relatedProducts: ["agri-t15-sprayer", "agripro-a6", "fieldmapper-h10"],
  },
  {
    id: "agri-t15-irrigation-attachment",
    name: "Agri T15 Irrigation Attachment",
    category: "Accessories",
    price: 311.98,
    originalPrice: 433.5,
    image: "https://images.unsplash.com/photo-1581093804475-577d72e35a2f?w=600&q=80",
    shortDescription: "Compatible with Agri T and Pro Series drones.",
    compatibility: "Agri T and Pro Series",
    flowRate: "~1.5–3L/min (adjustable)",
    inStock: 42,
    relatedProducts: ["agri-t15-sprayer", "high-capacity-spray-tank"],
  },
  {
    id: "ertc-700-controller",
    name: "ERTC-700 Controller",
    category: "Controllers",
    price: 19000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1596566791891-695c72c98ce0?w=600&q=80",
    shortDescription:
      "Professional controller compatible with all AgriScout A6 Series drones.",
    compatibility: "Agri T and Pro Series",
    inStock: 15,
    relatedProducts: ["agripro-a6", "agri-t15-sprayer", "fieldmapper-h10"],
  },
  {
    id: "ertc-700-controller-dual",
    name: "ERTC-700 Controller Dual With Touchscreen",
    category: "Controllers",
    price: 190,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1596566791891-695c72c98ce0?w=600&q=80",
    shortDescription:
      "Dual controller with touchscreen. Compatible with AgriScout A6 Series.",
    compatibility: "AgriScout A6 Series",
    inStock: 30,
    relatedProducts: ["agripro-a6", "agri-t15-sprayer"],
  },
  {
    id: "high-capacity-spray-tank",
    name: "High-Capacity Spray Tank",
    category: "Accessories",
    price: 18000,
    originalPrice: 20000,
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80",
    shortDescription: "10L high-capacity spray tank for Agri series drones.",
    inStock: 50,
  },
  {
    id: "i37-intellimax-drone-battery",
    name: "I37 IntelliMax Drone Battery",
    category: "Batteries",
    price: 850,
    originalPrice: 1000,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
    shortDescription: "High-capacity smart battery with 3-hour flight time.",
    inStock: 75,
  },
  {
    id: "drone-carrying-case",
    name: "Drone Carrying Case",
    category: "Accessories",
    price: 450,
    originalPrice: 550,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=600&q=80",
    shortDescription: "Rugged waterproof carrying case for drone transport.",
    inStock: 60,
  },
  {
    id: "propeller-replacement-kit",
    name: "Propeller Replacement Kit",
    category: "Maintenance",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    shortDescription: "OEM replacement propellers for Agri and FieldMapper series.",
    inStock: 120,
  },
  {
    id: "agri-light-t15-sprayer",
    name: "Agri Light T15 Sprayer",
    category: "Drones",
    price: 28000,
    originalPrice: 32000,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80",
    shortDescription: "Lightweight version of the T15 Sprayer for smaller operations.",
    inStock: 10,
    relatedProducts: ["agri-t15-sprayer", "high-capacity-spray-tank"],
  },
  {
    id: "sentry-duo",
    name: "Sentry Duo",
    category: "Drones",
    price: 35000,
    originalPrice: 42000,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    shortDescription: "Dual-camera surveillance and monitoring drone.",
    inStock: 7,
    relatedProducts: ["ertc-700-controller", "drone-carrying-case"],
  },
  {
    id: "raven-h16",
    name: "Raven H16",
    category: "Drones",
    price: 48000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&q=80",
    shortDescription: "Long-range industrial drone for heavy-payload operations.",
    inStock: 3,
    relatedProducts: ["drone-carrying-case", "i37-intellimax-drone-battery"],
  },
  {
    id: "lrp-490-controller",
    name: "LRP-490 Controller",
    category: "Controllers",
    price: 2800,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1596566791891-695c72c98ce0?w=600&q=80",
    shortDescription: "Long-range professional controller with 15km range.",
    inStock: 20,
  },
  {
    id: "agri-t15-irrigation-set",
    name: "Agri T15 Irrigation Set",
    category: "Accessories",
    price: 40000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1581093804475-577d72e35a2f?w=600&q=80",
    shortDescription: "Complete irrigation set for the Agri T15 Sprayer drone.",
    inStock: 15,
  },
  {
    id: "airparcel-c12",
    name: "AirParcel C12",
    category: "Drones",
    price: 52000,
    originalPrice: 60000,
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80",
    shortDescription:
      "Built to transport medium-sized packages quickly and safely across urban and industrial environments.",
    inStock: 4,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product?.relatedProducts) return [];
  return product.relatedProducts
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isNew).slice(0, 3);
};

export const getBestSellers = (): Product[] => {
  return [
    getProductById("sentry-duo"),
    getProductById("raven-h16"),
    getProductById("agri-light-t15-sprayer"),
    getProductById("lrp-490-controller"),
  ].filter((p): p is Product => p !== undefined);
};

export const getAgricultureProducts = (): Product[] => {
  return products.filter((p) =>
    [
      "agri-t15-sprayer",
      "agri-t15-sprayer-body",
      "fieldmapper-h10",
      "agri-t15-irrigation-attachment",
      "ertc-700-controller-dual",
      "agri-t15-irrigation-set",
      "high-capacity-spray-tank",
      "agripro-a6",
      "agri-light-t15-sprayer",
    ].includes(p.id)
  );
};