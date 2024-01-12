const IFruit = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

const fruitType = [];
IFruit.forEach((user) => {
  if (!fruitType.includes(user.fruitType)) {
    fruitType.push(user.fruitType);
  }
});

const filterType = (arr, type) => {
  return arr.filter(
    (item) => item.fruitType.toUpperCase() === type.toUpperCase()
  );
};

const filters = {};
fruitType.forEach((type) => {
  filters[type] = filterType(IFruit, type);
});

console.log(fruitType + ` (${fruitType.length})`);
console.log("Hasil Filtrasi untuk Setiap fruitType:", filters);
