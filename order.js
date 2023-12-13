export default class Order {
  items = [];
  constructor(orderId) {
    this.orderId = orderId;
    this.totalAmount = 0;
  }

  createOrder(cart) {
    this.items = [...cart.items];
    this.totalAmount = cart.items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
    console.log("Order created successfully.");
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`);
    console.log("Order items:");
    this.items.forEach((item) => {
      if (item.quantity < 2) {
        console.log(
          `${item.quantity} ${item.product.productName} - Rp${item.product.price}`
        );
      } else {
        console.log(
          `${item.quantity} ${item.product.productName}(s) - Rp${item.product.price}`
        );
      }
    });
    console.log(`Total Amount: $${this.totalAmount}`);
  }
}
