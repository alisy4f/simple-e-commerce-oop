export default class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  displayInfo() {
    console.log(`Product ID: ${this.productId}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Price: ${this.price}`);
    console.log(`Description: ${this.description}\n`);
  }

  updateProduct(newName, newPrice, newDescription) {
    this.productName = newName;
    this.price = newPrice;
    this.description = newDescription;
    console.log("Product updated successfully.");
  }
}
