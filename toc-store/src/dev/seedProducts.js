import { seedProducts } from "../firebase/products";

seedProducts()
  .then(() => {
    console.log("✅ Seeding completed");
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });