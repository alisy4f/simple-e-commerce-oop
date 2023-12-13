export default class Cart {
  items = [];
  constructor(cartId) {
    this.cartId = cartId;
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    if (quantity > 1) {
      console.log(`Added ${quantity} ${product.productName}(s) to the cart.`);
    } else {
      console.log(`Added ${quantity} ${product.productName} to the cart.`);
    }
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed ${product.productName} from the cart.`);
    } else {
      console.log(`${product.productName} not found in the cart.`);
    }
  }

  viewCart() {
    console.log("Cart contents:");
    this.items.forEach((item) => {
      if (item.quantity > 1) {
        console.log(
          `${item.quantity} ${item.product.productName} - Rp${item.product.price}`
        );
      } else {
        console.log(
          `${item.quantity} ${item.product.productName}(s) - Rp${item.product.price}`
        );
      }
    });

    const totalAmount = this.items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
    console.log(`Total Amount: Rp${totalAmount}`);
  }
}
