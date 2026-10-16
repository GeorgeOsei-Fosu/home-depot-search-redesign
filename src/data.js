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
