const randomNumber = Math.round(Math.random() * 7);
const today = dayjs();
const days = today.add(randomNumber, "days");
import product_1 from "../assets/product-1.webp"
import product_2 from "../assets/product-2.webp"
import product_3 from "../assets/product-3.webp"
import product_4 from "../assets/product-4.webp"
import product_5 from "../assets/product-5.webp"
import product_6 from "../assets/product-6.webp"
import product_7 from "../assets/product-7.webp"
import product_8 from "../assets/product-8.webp"
import product_9 from "../assets/product-9.webp"
import product_10 from "../assets/product-10.webp"
import product_11 from "../assets/product-11.webp"
import product_12 from "../assets/product-12.webp"
import product_13 from "../assets/product-13.webp"
import product_14 from "../assets/product-14.webp"
import product_15 from "../assets/product-15.webp"
import product_16 from "../assets/product-16.webp"
import product_17 from "../assets/product-17.webp"
import product_18 from "../assets/product-18.webp"
import product_19 from "../assets/product-19.webp"
import product_20 from "../assets/product-20.webp"
import product_21 from "../assets/product-21.webp"
import product_22 from "../assets/product-22.webp"
import product_23 from "../assets/product-23.webp"
import product_24 from "../assets/product-24.webp"
import product_25 from "../assets/product-25.jpg"
import product_26 from "../assets/product-26.jpg"
import product_27 from "../assets/product-27.jpg"
import product_28 from "../assets/product-28.webp"
import product_29 from "../assets/product-29.jpg"
import product_30 from "../assets/product-30.webp"
import product_31 from "../assets/product-31.jpg"
import product_32 from "../assets/product-32.webp"
import product_33 from "../assets/product-33.jpg"
import product_34 from "../assets/product-34.webp"
import product_35 from "../assets/product-35.jpg"
import product_36 from "../assets/product-36.jpg"



export const all_products = [
  {
    id: "001",
    image: product_1,
    name: "Black & Red Pure Cotton Striped Polo Neck White T-shirt - Converge",
    original_price: 259800,  // Original price 2X
    price: 129900,  // Unchanged price
    rating: {
      stars: 4,
      count: 456,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "002",
    image: product_2,
    name: "Black Collar Mandarin Collar Pure Cotton White Full-sleeve Tee - Halo",
    original_price: 279800,  // Original price 2X
    price: 139900,  // Unchanged price
    rating: {
      stars: 5,
      count: 203,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "003",
    image: product_3,
    name: "V Neck Bell Sleeve Top - Red",
    original_price: 3200,  // Original price 2X
    price: 1600,  // Unchanged price
    rating: {
      stars: 5,
      count: 455,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "004",
    image: product_4,
    name: "High Neck Rib Knit Top - Pink",
    original_price: 2390,  // Original price 2X
    price: 1195,  // Unchanged price
    rating: {
      stars: 5,
      count: 643,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "005",
    image: product_5,
    name: "Crew Neck Pure Cotton White T-Shirt - Maze",
    original_price: 419800,  // Original price 2X
    price: 209900,  // Unchanged price
    rating: {
      stars: 4.5,
      count: 756,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "006",
    image: product_6,
    name: "Mandarin Collar Linen Cotton White Shirt - Azlin",
    original_price: 459800,  // Original price 2X
    price: 229900,  // Unchanged price
    rating: {
      stars: 4.5,
      count: 346,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "007",
    image: product_7,
    name: "Pure Cotton Embroidered White Shirt for Men - Retreat",
    original_price: 459800,  // Original price 2X
    price: 229900,  // Unchanged price
    rating: {
      stars: 4.2,
      count: 456,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "008",
    image: product_8,
    name: "Pure Cotton Oxford Men's White Shirt with Beach-Inspired Print - Riviera",
    original_price: 399800,  // Original price 2X
    price: 199900,  // Unchanged price
    rating: {
      stars: 4.3,
      count: 476,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "009",
    image: product_9,
    name: "V-Neck Rib Knit Top - Beige",
    original_price: 1990,  // Original price 2X
    price: 995,  // Unchanged price
    rating: {
      stars: 4.6,
      count: 486,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0010",
    image: product_10,
    name: "LivSoft Cotton Square Neck T-Shirt - Orange",
    original_price: 2990,  // Original price 2X
    price: 1495,  // Unchanged price
    rating: {
      stars: 4.2,
      count: 686,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0011",
    image: product_11,
    name: "LivSoft Cotton T-Shirt - Black And White",
    original_price: 2790,  // Original price 2X
    price: 1395,  // Unchanged price
    rating: {
      stars: 4.5,
      count: 886,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0012",
    image: product_12,
    name: "LivSoft Cotton T-Shirt - White And Black",
    original_price: 2790,  // Original price 2X
    price: 1395,  // Unchanged price
    rating: {
      stars: 5.5,
      count: 686,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0013",
    image: product_13,
    name: "LivSoft Cotton T-Shirt - Mustard",
    original_price: 2798,  // Original price 2X
    price: 1399,  // Unchanged price
    rating: {
      stars: 5.5,
      count: 686,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0014",
    image: product_14,
    name: "Cutout Rib Knit Top - Black",
    original_price: 1080,  // Original price 2X
    price: 540,  // Unchanged price
    rating: {
      stars: 4,
      count: 600,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0015",
    image: product_15,
    name: "Velvet Two-Way Tie Up Top - Maroon",
    original_price: 2500,  // Original price 2X
    price: 1250,  // Unchanged price
    rating: {
      stars: 4.6,
      count: 940,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0016",
    image: product_16,
    name: "Satin Solid Camisole - Black",
    original_price: 2390,  // Original price 2X
    price: 1195,  // Unchanged price
    rating: {
      stars: 3.8,
      count: 240,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0017",
    image: product_17,
    name: "Satin Lace Camisole - Black",
    original_price: 2390,  // Original price 2X
    price: 1195,  // Unchanged price
    rating: {
      stars: 3.8,
      count: 240,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0018",
    image: product_18,
    name: "Cotton Ruffle Detail Shirt - Light Blue",
    original_price: 3000,  // Original price 2X
    price: 1500,  // Unchanged price
    rating: {
      stars: 4.3,
      count: 250,
    },
    category: "women",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0019",
    image: product_19,
    name: "Pure Cotton Casual Resortwear Oxford Shirt - Mirage",
    original_price: 419800,  // Original price 2X
    price: 209900,  // Unchanged price
    rating: {
      stars: 4.2,
      count: 280,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0020",
    image: product_20,
    name: "Taupe Detail Drop Shoulder White T-Shirt - Aura",
    original_price: 259800,  // Original price 2X
    price: 129900,  // Unchanged price
    rating: {
      stars: 4.2,
      count: 580,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0021",
    image: product_21,
    name: "Poppy Print Oxford Weave White Shirt - Zipping",
    original_price: 299800,  // Original price 2X
    price: 149900,  // Unchanged price
    rating: {
      stars: 4.0,
      count: 580,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0022",
    image: product_22,
    name: "Zipper Collar Cotton Twill White Shirt - Zip Log",
    original_price: 359800,  // Original price 2X
    price: 179900,  // Unchanged price
    rating: {
      stars: 4.5,
      count: 456,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0023",
    image: product_23,
    name: "Hoodie Collar Cotton Linen White Kurta - Cloudie",
    original_price: 479800,  // Original price 2X
    price: 239900,  // Unchanged price
    rating: {
      stars: 5.0,
      count: 756,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0024",
    image: product_24,
    name: "Contrast Detail White Hoodie - Wakai",
    original_price: 459800,  // Original price 2X
    price: 229900,  // Unchanged price
    rating: {
      stars: 4.5,
      count: 856,
    },
    category: "men",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0025",
    image: product_25,
    name: "Fine-knit dress",
    original_price: 1818,  // Original price 2X
    price: 909,  // Unchanged price
    rating: {
      stars: 5.5,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0026",
    image: product_26,
    name: "Cotton jumper",
    original_price: 1118,  // Original price 2X
    price: 559,  // Unchanged price
    rating: {
      stars: 5.5,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0027",
    image: product_27,
    name: "Fine-knit cotton cardigan",
    original_price: 1118,  // Original price 2X
    price: 559,  // Unchanged price
    rating: {
      stars: 5.5,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0028",
    image: product_28,
    name: "Long-sleeved T-shirt",
    original_price: 978,  // Original price 2X
    price: 489,  // Unchanged price
    rating: {
      stars: 5.5,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0029",
    image: product_29,
    name: "Cotton T-shirt",
    original_price: 558,  // Original price 2X
    price: 279,  // Unchanged price
    rating: {
      stars: 5.1,
      count: 856,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0030",
    image: product_30,
    name: "Cotton jersey polo shirt",
    original_price: 1118,  // Original price 2X
    price: 559,  // Unchanged price
    rating: {
      stars: 5.1,
      count: 856,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0031",
    image: product_31,
    name: "Long-sleeved T-shirt",
    original_price: 558,  // Original price 2X
    price: 279,  // Unchanged price
    rating: {
      stars: 5.1,
      count: 856,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0032",
    image: product_32,
    name: "Sequined dress",
    original_price: 5980,  // Original price 2X
    price: 2990,  // Unchanged price
    rating: {
      stars: 5.1,
      count: 856,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0033",
    image: product_33,
    name: "Sequined tulle dress",
    original_price: 321800,  // Original price 2X
    price: 160900,  // Unchanged price
    rating: {
      stars: 4.1,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0034",
    image: product_34,
    name: "3-piece set",
    original_price: 37800,  // Original price 2X
    price: 18900,  // Unchanged price
    rating: {
      stars: 4.1,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days  
  },
  {
    id: "0035",
    image: product_35,
    name: "2-pack cotton leggings",
    original_price: 2098,  // Original price 2X
    price: 1049,  // Unchanged price
    rating: {
      stars: 4.1,
      count: 956,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
  {
    id: "0036",
    image: product_36,
    name: "Joggers",
    original_price: 2098,  // Original price 2X
    price: 1049,  // Unchanged price
    rating: {
      stars: 4.7,
      count: 126,
    },
    category: "kids",
    quantity: 1,
    delivery_date: days.format("dddd, MMMM D"),
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
  },
];
