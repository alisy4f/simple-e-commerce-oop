export default class Category {
  products = [];
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }

  displayInfo() {
    console.log(`Category ID: ${this.categoryId}`);
    console.log(`Category Name: ${this.categoryName}`);
  }

  updateCategory(newName) {
    this.categoryName = newName;
    console.log("Category updated successfully.");
  }

  displayProducts() {
    console.log("Products in this category:");
    this.products.forEach((product) => product.displayInfo());
  }
}
