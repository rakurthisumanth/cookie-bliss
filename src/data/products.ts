import chocoChip from "@/assets/choco-chip.png";
import doubleChoco from "@/assets/double-choco.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import butter from "@/assets/butter.png";
import oreo from "@/assets/oreo.png";
import dryFruit from "@/assets/dry-fruit.png";
import comboImg from "@/assets/combo.png";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  packSize: number;
  image: string;
  bestSeller?: boolean;
};

export const products: Product[] = [
  {
    id: "choco-chip",
    name: "Chocolate Chip Cookies",
    description: "Golden, buttery cookies loaded with rich chocolate chips.",
    price: 75,
    packSize: 3,
    image: chocoChip,
    bestSeller: true,
  },
  {
    id: "double-choco",
    name: "Double Chocolate Cookies",
    description: "Deep cocoa dough folded with melting chocolate chunks.",
    price: 85,
    packSize: 3,
    image: doubleChoco,
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cookies",
    description: "Soft velvet crumb studded with creamy white chocolate.",
    price: 80,
    packSize: 3,
    image: redVelvet,
  },
  {
    id: "butter",
    name: "Butter Cookies",
    description: "Classic buttery goodness with a delicate melt-in-your-mouth texture.",
    price: 70,
    packSize: 3,
    image: butter,
    bestSeller: true,
  },
  {
    id: "oreo",
    name: "Oreo Cookies",
    description: "Creamy, crunchy and packed with irresistible Oreo goodness.",
    price: 95,
    packSize: 3,
    image: oreo,
    bestSeller: true,
  },
  {
    id: "dry-fruit",
    name: "Dry Fruit Cookies",
    description: "Loaded with almonds, cashews and raisins in every bite.",
    price: 105,
    packSize: 3,
    image: dryFruit,
  },
];

export const combo = {
  id: "combo-6",
  name: "6-in-1 Cookie Combo",
  price: 200,
  image: comboImg,
  flavours: [
    "Chocolate Chip",
    "Double Chocolate",
    "Red Velvet",
    "Butter",
    "Oreo",
    "Dry Fruit",
  ],
  badges: ["6 Delicious Flavours", "100% Eggless", "No Preservatives", "Made with Love"],
};

export const bestSellers = products.filter((p) => p.bestSeller);

export const menuItems = [
  ...products.map((p) => ({ name: p.name, price: p.price, packSize: p.packSize })),
  { name: "6-in-1 Mixed Combo", price: combo.price },
];
