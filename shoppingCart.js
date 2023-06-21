// Define a ShoppingCart class
class ShoppingCart {
  constructor() {
    this.cartItems = [];
  }

  addToCart(item, quantity) {
    // Check if the item is already in the cart
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.item === item
    );

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      existingItem.quantity += quantity;
    } else {
      // If the item is not in the cart, add it as a new item
      this.cartItems.push({ item, quantity });
    }

    console.log(`${quantity} ${item}(s) added to the cart.`);
  }

  removeFromCart(item, quantity) {
    // Check if the item is in the cart
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.item === item
    );

    if (!existingItem) {
      console.log(`${item} is not in the cart.`);
      return;
    }

    if (quantity >= existingItem.quantity) {
      // If the requested quantity is greater than or equal to the quantity in the cart, remove the item
      const itemIndex = this.cartItems.indexOf(existingItem);
      this.cartItems.splice(itemIndex, 1);
    } else {
      // If the requested quantity is less than the quantity in the cart, update the quantity
      existingItem.quantity -= quantity;
    }

    console.log(`${quantity} ${item}(s) removed from the cart.`);
  }

  calculateTotal() {
    let total = 0;

    for (const cartItem of this.cartItems) {
      // Assuming each item has a 'price' property
      total += cartItem.item.price * cartItem.quantity;
    }

    return total;
  }
}

const cart = new ShoppingCart();
const item1 = { name: "Apples", price: 1.5 };
const item2 = { name: "Bananas", price: 0.75 };

cart.addToCart(item1, 3);
cart.addToCart(item2, 5);
cart.removeFromCart(item1, 1);
console.log("Total:", cart.calculateTotal());

module.exports = ShoppingCart;
