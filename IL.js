
console.log("=== CASE 1: User Data Cleaner ===");

const rawData = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedData = rawData.trim();

const names = cleanedData.split(",").map(name => name.trim().toLowerCase());

const result = names.join(" | ");

console.log("Array nama:", names);
console.log("Hasil akhir:", result);


console.log("\n=== CASE 2: E-Commerce Product Filter ===");

const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

const activeProducts = products.filter(product => product.active === true);

const activeProductNames = activeProducts.map(product => product.name.toUpperCase());

const totalPrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log("Produk aktif:", activeProducts);
console.log("Nama produk kapital:", activeProductNames);
console.log("Total harga produk aktif:", totalPrice);
