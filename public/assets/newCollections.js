const randomNumber = Math.round(Math.random() * 7);
const today = dayjs();
const days = today.add(randomNumber, "days");

import product_5 from "../assets/product-5.webp"
import product_6 from "../assets/product-6.webp"
import product_7 from "../assets/product-7.webp"
import product_8 from "../assets/product-8.webp"
import product_9 from "../assets/product-9.webp"
import product_10 from "../assets/product-10.webp"
import product_11 from "../assets/product-11.webp"
import product_12 from "../assets/product-12.webp"

export const newCollections = [
  {
    id: "005",
    image: product_5,
    name: "Crew Neck Pure Cotton White T-Shirt - Maze",
    company: "Adidas",
    price: 209900,
    rating: {
      stars: 4.5,
      count: 756,
    },
    category: "men",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "006",
    image: product_6,
    name: "Mandarin Collar Linen Cotton White Shirt - Azlin",
    company: "Nike",
    price: 229900,
    rating: {
      stars: 4.5,
      count: 346,
    },
    category: "men",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "007",
    image: product_7,
    name: "Pure Cotton Embroidered White Shirt for Men - Retreat",
    company: "Puma",
    price: 229900,
    rating: {
      stars: 4.2,
      count: 456,
    },
    category: "men",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "008",
    image: product_8,
    name: "Pure Cotton Oxford Men's White Shirt with Beach-Inspired Print - Riviera",
    company: "Tommy Hilfiger",
    price: 199900,
    rating: {
      stars: 4.3,
      count: 476,
    },
    category: "men",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "009",
    image: product_9,
    name: "V-Neck Rib Knit Top - Beige",
    company: "Calvin Klein",
    price: 995,
    rating: {
      stars: 4.6,
      count: 486,
    },
    category: "women",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "0010",
    image: product_10,
    name: "LivSoft Cotton Square Neck T-Shirt - Orange",
    company: "H&M",
    price: 1495,
    rating: {
      stars: 4.2,
      count: 686,
    },
    category: "women",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "0011",
    image: product_11,
    name: "LivSoft Cotton T-Shirt - Black And White",
    company: "Zara",
    price: 1395,
    rating: {
      stars: 4.5,
      count: 886,
    },
    category: "women",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "0012",
    image: product_12,
    name: "LivSoft Cotton T-Shirt - White And Black",
    company: "Levi's",
    price: 1395,
    rating: {
      stars: 5.5,
      count: 686,
    },
    category: "women",
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
];
