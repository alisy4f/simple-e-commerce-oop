import Shop from './shop.js';
import Product from './product.js';
import Category from './category.js';
import Cart from './cart.js';
import Order from './order.js';

const shop = new Shop('Shop 1', '0123456789', 'shop1@mail.com');

const product1 = new Product(1, 'TV', 1300000, 'New Product');
const product2 = new Product(2, 'Speaker', 100000, 'Best Product');
const product3 = new Product(3, 'Smartphone', 9999000, 'Smartest Phone Ever');

const category = new Category(1, 'Electronics');
category.products.push(product1, product2, product3);

const cart = new Cart(1)

const order = new Order(1);


//display shop
console.log('--------------------------------');
shop.displayInfo();

//display product
console.log('--------------------------------');
console.log('\n\n--- Product Info ---\n');
product1.displayInfo()
product2.displayInfo()
product3.displayInfo()
//update product
console.log('\n--- Product Update Info ---\n');
product1.updateProduct('TV', 1500000, 'New Comer')
product1.displayInfo()

//category 
console.log('\n\n--- Category Info ---\n');
category.displayInfo();
console.log('\n--------------------------------\n');
category.displayProducts()
//category update
category.updateCategory('Electric Devices')
console.log('--------------------------------');
category.displayInfo()

//cart
console.log('\n\n--- Cart Info ---\n');
cart.addItem(product1, 1)
cart.addItem(product2, 3)
cart.addItem(product3, 1)
console.log('--------------------------------');
cart.viewCart();
console.log('\n--------------------------------\n');
//remove item from cart
cart.removeItem(product1)
console.log('--------------------------------');
console.log(`Remove ${product1.productName} again`);
cart.removeItem(product1)
console.log('>>>>>');
cart.viewCart();

//order
console.log('\n\n--- Order Info ---\n');
order.createOrder(cart);
order.displayOrderDetails()

