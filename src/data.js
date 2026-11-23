// Sample content from the Figma file. Swap for real data later.
import heroHalloween from "./assets/photos/hero-halloween.jpg";
import skelly from "./assets/photos/skelly.jpg";
import crawlingGirl from "./assets/photos/crawling-girl.jpg";

import iconHalloween from "./assets/icons/halloween.svg";
import iconAppliances from "./assets/icons/appliances.svg";
import iconBath from "./assets/icons/bath.svg";
import iconBuilding from "./assets/icons/building.svg";
import iconCleaning from "./assets/icons/cleaning.svg";
import iconDecor from "./assets/icons/decor.svg";
import iconElectrical from "./assets/icons/electrical.svg";
import iconFlooring from "./assets/icons/flooring.svg";
import iconGarage from "./assets/icons/garage.svg";
import iconHardware from "./assets/icons/hardware.svg";
import iconKitchen from "./assets/icons/kitchen.svg";
import iconLawn from "./assets/icons/lawn.svg";
import iconLighting from "./assets/icons/lighting.svg";
import iconOutdoor from "./assets/icons/outdoor.svg";
import iconPaint from "./assets/icons/paint.svg";
import iconPlumbing from "./assets/icons/plumbing.svg";
import iconStorage from "./assets/icons/storage.svg";
import iconTools from "./assets/icons/tools.svg";

export const SLIDES = [
  {
    eyebrow: "HALLOWEEN HEADQUARTERS",
    title: "Animatronics & Décor Are Here",
    subtitle: "Life-size skeletons, crawling props & more",
    cta: "Shop Halloween",
    ctaColor: "#591f80",
    image: heroHalloween,
  },
  {
    eyebrow: "FALL SAVINGS EVENT",
    title: "Up to 40% Off Outdoor Power",
    subtitle: "Blowers, trimmers & leaf clean-up gear",
    cta: "Shop Outdoor",
    ctaColor: "#8c470d",
    background:
      "linear-gradient(90deg, rgba(204,128,26,0.55) 0%, rgba(0,0,0,0.15) 100%), #8c470d",
  },
  {
    eyebrow: "STACK YOUR SAVINGS",
    title: "Appliances Starting at $399",
    subtitle: "Free delivery on purchases $998+",
    cta: "Shop Appliances",
    ctaColor: "#0d596b",
    background:
      "linear-gradient(90deg, rgba(26,140,140,0.55) 0%, rgba(0,0,0,0.15) 100%), #0d596b",
  },
];

export const RECENTLY_VIEWED = [
  { name: "12 FT Giant-Sized Skelly", price: "$299.00", image: skelly },
  { name: "10 in. LED Crawling Double Head Girl", price: "$34.98", image: crawlingGirl },
  { name: "Cordless Drill Kit", price: "$129.00" },
];

export const HALLOWEEN_PRODUCTS = [
  {
    name: "12 FT Giant-Sized Skelly with LifeEyes LCD Eyes",
    badge: "Best Seller",
    rating: "4.5 / 5  (3,261)",
    price: "$299.00",
    image: skelly,
  },
  {
    name: "10 in. LED Crawling Double Head Girl Animatronic",
    rating: "4.5 / 5  (2)",
    price: "$34.98",
    image: crawlingGirl,
  },
];

export const FEATURED_SET = {
  name: "Halloween Graveyard Collection",
  detail: "Skeletons, props & lighting",
  cta: "Shop the set",
  image: heroHalloween,
};

export const DEALS = ["Daily Deals", "Special Savings"];

// `highlight` gives the seasonal category the orange promo style
export const CATEGORIES = [
  { name: "Halloween Decorations", icon: iconHalloween, highlight: true },
  { name: "Appliances", icon: iconAppliances },
  { name: "Bath & Faucets", icon: iconBath },
  { name: "Building Materials", icon: iconBuilding },
  { name: "Cleaning", icon: iconCleaning },
  { name: "Decor & Furniture", icon: iconDecor },
  { name: "Electrical", icon: iconElectrical },
  { name: "Flooring & Area Rugs", icon: iconFlooring },
  { name: "Garage", icon: iconGarage },
  { name: "Hardware", icon: iconHardware },
  { name: "Kitchen", icon: iconKitchen },
  { name: "Lawn & Garden", icon: iconLawn },
  { name: "Lighting & Ceiling Fans", icon: iconLighting },
  { name: "Outdoor Living", icon: iconOutdoor },
  { name: "Paint", icon: iconPaint },
  { name: "Plumbing", icon: iconPlumbing },
  { name: "Storage & Organization", icon: iconStorage },
  { name: "Tools", icon: iconTools },
];

export const CHAT = {
  topic: "Fixing a dripping faucet",
  question: "My bathroom faucet keeps dripping. What do I need to fix it?",
  answer: "A steady drip is usually a worn washer or cartridge. Here's a quick way to fix it:",
  steps: [
    "Turn off the water under the sink",
    "Remove the handle and pull out the cartridge",
    "Swap in a matching part and reassemble",
  ],
  parts: [
    { name: "Faucet Cartridge Repair Kit", price: "$14.97" },
    { name: "Adjustable Wrench", price: "$12.98" },
    { name: "Plumber's Tape", price: "$3.48" },
  ],
};

// ─── Services (redesign: all four open inside the app) ─────────────
// `icon` names refer to components/Icon.jsx
export const SERVICES = [
  { id: "rental", name: "Truck & Tool Rental", blurb: "Reserve online, pick up in store", icon: "truck" },
  { id: "installation", name: "Installation Services", blurb: "Book a free measure or consultation", icon: "wrench" },
  { id: "calculators", name: "Project Calculators", blurb: "Estimate materials and cost", icon: "calculator" },
  { id: "workshops", name: "Digital Workshops", blurb: "Free how-to videos", icon: "play" },
];

export const RENTALS = {
  Trucks: [
    { name: "Load 'N Go Pickup Truck", price: "$19 / 75 min", note: "Available today" },
    { name: "Cargo Van", price: "$29 / 75 min", note: "Available today" },
    { name: "Flatbed Truck", price: "$39 / 75 min", note: "Available tomorrow" },
  ],
  Tools: [
    { name: "Log Splitter", price: "$89 / day", note: "Available today" },
    { name: "Pressure Washer", price: "$59 / day", note: "Available today" },
    { name: "Tile Saw", price: "$49 / day", note: "2 left" },
    { name: "Carpet Cleaner", price: "$39 / day", note: "Available today" },
    { name: "Concrete Mixer", price: "$65 / day", note: "Available tomorrow" },
  ],
};

// Each calculator turns a few measurements into a quantity + estimate.
export const CALCULATORS = [
  {
    id: "paint",
    name: "Paint",
    icon: iconPaint,
    fields: [
      { key: "length", label: "Room length (ft)", value: 12 },
      { key: "width", label: "Room width (ft)", value: 10 },
      { key: "height", label: "Wall height (ft)", value: 8 },
      { key: "coats", label: "Coats", value: 2 },
    ],
    // ~350 sq ft per gallon
    calc: ({ length, width, height, coats }) => Math.ceil((2 * (length + width) * height * coats) / 350),
    unit: "gallon",
    product: "Interior Paint & Primer, 1 gal",
    unitPrice: 38.98,
  },
  {
    id: "mulch",
    name: "Mulch & Soil",
    icon: iconLawn,
    fields: [
      { key: "length", label: "Bed length (ft)", value: 20 },
      { key: "width", label: "Bed width (ft)", value: 4 },
      { key: "depth", label: "Depth (in)", value: 3 },
    ],
    // 2 cu ft bags
    calc: ({ length, width, depth }) => Math.ceil((length * width * (depth / 12)) / 2),
    unit: "bag",
    product: "Brown Mulch, 2 cu ft bag",
    unitPrice: 3.97,
  },
  {
    id: "flooring",
    name: "Flooring",
    icon: iconFlooring,
    fields: [
      { key: "length", label: "Room length (ft)", value: 12 },
      { key: "width", label: "Room width (ft)", value: 10 },
    ],
    // 20 sq ft per box, +10% for cuts
    calc: ({ length, width }) => Math.ceil((length * width * 1.1) / 20),
    unit: "box",
    product: "Laminate Flooring, 20 sq ft box",
    unitPrice: 42.5,
  },
  {
    id: "concrete",
    name: "Concrete",
    icon: iconBuilding,
    fields: [
      { key: "length", label: "Slab length (ft)", value: 10 },
      { key: "width", label: "Slab width (ft)", value: 10 },
      { key: "depth", label: "Thickness (in)", value: 4 },
    ],
    // 80 lb bag ≈ 0.6 cu ft
    calc: ({ length, width, depth }) => Math.ceil((length * width * (depth / 12)) / 0.6),
    unit: "bag",
    product: "Concrete Mix, 80 lb bag",
    unitPrice: 6.48,
  },
];

// Categories from the homedepot.com installation page, with Figma icons
export const INSTALLATION = [
  { name: "Flooring", icon: iconFlooring },
  { name: "Bathroom", icon: iconBath },
  { name: "Kitchen", icon: iconKitchen },
  { name: "Windows & Doors", icon: iconBuilding },
  { name: "Heating & Cooling", icon: iconElectrical },
  { name: "Water Heaters", icon: iconPlumbing },
  { name: "Window Treatments", icon: iconDecor },
  { name: "Exterior Home", icon: iconOutdoor },
  { name: "Storage Solutions", icon: iconStorage },
  { name: "Electrical & Lighting", icon: iconLighting },
  { name: "Carpentry & Masonry", icon: iconTools },
  { name: "Painting & Patching", icon: iconPaint },
  { name: "Appliances", icon: iconAppliances },
  { name: "Landscaping", icon: iconLawn },
  { name: "Assembly & Mounting", icon: iconHardware },
];

export const WORKSHOPS = [
  { title: "Fix a Dripping Faucet", length: "6 min", level: "Beginner" },
  { title: "Paint a Room Like a Pro", length: "9 min", level: "Beginner" },
  { title: "Install Laminate Flooring", length: "12 min", level: "Intermediate" },
  { title: "Build a Raised Garden Bed", length: "15 min", level: "Beginner" },
  { title: "Install a Smart Thermostat", length: "8 min", level: "Intermediate" },
  { title: "Patch a Hole in Drywall", length: "7 min", level: "Beginner" },
];
