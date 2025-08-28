// a)
console.log("----------------------------(a)-------------------------------------");
const milk = {
    name: "Молоко",
    description: "продукт питания",
    price: 2.15,
    info: function () {
        console.log(`товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`)
    }
}
const rose = {
    name: "Роза",
    description: "цветок",
    price: 4.99,
    info: function () {
        console.log(`товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`)
    }
}
const brick = {
    name: "Кирпич",
    description: "строительний материал",
    price: 1.5,
    info: function () {
        console.log(`товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`)
    }
}
console.log(milk);
console.log(rose);
console.log(brick);

console.log("-----------------------------------------------------------------");
// b)
console.log("--------------------------(b)---------------------------------------");
function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        console.log(`товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`);
    }
}

const sofa = new Product("Диван", "мебель", 250);
const chair = new Product("Кресло", "мебель", 90);
const pen = new Product("Ручка", "для письма", 0.2);
console.log(sofa);
console.log(chair);
console.log(pen);

console.log("-----------------------------------------------------------------");
// c)
console.log("--------------------(c)---------------------------------------------");
const products = [milk, brick, sofa, chair, pen, rose];

function printProducts(products) {
    products.forEach((product, index) => {
        console.log(`\n Товар ${index + 1}: `)
        for (let key in product) {
            let value = product[key];
            if (typeof value === "function") {
                value = value.call(product);
            } else {
                console.log(`${key}: ${value}`);
            }
        }
    });
}


printProducts(products);

// console.log(products);

