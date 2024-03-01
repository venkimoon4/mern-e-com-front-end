const randomNumber = Math.round(Math.random() * 7);
const today = dayjs();
const days = today.add(randomNumber, "days");

export const newArrivals = [
  {
    id: "001",
    image: "./images/product-1.webp",
    name: "Black & Red Pure Cotton Striped Polo Neck White T-shirt - Converge",
    company: "Puma",
    price: 129900,
    rating: {
      stars: 4,
      count: 456,
    },
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20), // Random number between 20 and 90
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3), // Random number between 3 and 15 days
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "002",
    image: "../src/assets/product-2.webp",
    name: "Black Collar Mandarin Collar Pure Cotton White Full-sleeve Tee - Halo",
    company: "Nike",
    price: 139900,
    rating: {
      stars: 5,
      count: 203,
    },
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "003",
    image: "../src/assets/product-3.webp",
    name: "V Neck Bell Sleeve Top - Red",
    company: "Zara",
    price: 1600,
    rating: {
      stars: 5,
      count: 455,
    },
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
  {
    id: "004",
    image: "../src/assets/product-4.webp",
    name: "High Neck Rib Knit Top - Pink",
    company: "H&M",
    price: 1195,
    rating: {
      stars: 5,
      count: 643,
    },
    quantity: 1,
    discount_percentage: Math.floor(Math.random() * (90 - 20 + 1) + 20),
    return_period: Math.floor(Math.random() * (15 - 3 + 1) + 3),
    delivery_date: days.format("dddd, MMMM D"),
  },
];
