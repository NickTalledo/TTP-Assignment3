// shoppingCart.test.js

const ShoppingCart = require("./shoppingCart");

describe("ShoppingCart", () => {
  let cart;
  const item1 = { name: "Apples", price: 1.5 };
  const item2 = { name: "Bananas", price: 0.75 };

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test("addToCart adds items to the cart", () => {
    cart.addToCart(item1, 3);
    cart.addToCart(item2, 5);

    expect(cart.cartItems.length).toBe(2);

    expect(cart.cartItems[0].item).toBe(item1);
    expect(cart.cartItems[0].quantity).toBe(3);

    expect(cart.cartItems[1].item).toBe(item2);
    expect(cart.cartItems[1].quantity).toBe(5);
  });

  test("removeFromCart removes items from the cart", () => {
    cart.addToCart(item1, 3);
    cart.addToCart(item2, 5);

    cart.removeFromCart(item1, 2);
    expect(cart.cartItems.length).toBe(2);
    expect(cart.cartItems[0].quantity).toBe(1);

    cart.removeFromCart(item2, 5);
    expect(cart.cartItems.length).toBe(1);
    expect(cart.cartItems[0].item).toBe(item1);
  });

  test("removeFromCart removes the entire item if requested quantity is greater than or equal to the quantity in the cart", () => {
    cart.addToCart(item1, 3);
    cart.addToCart(item2, 5);

    cart.removeFromCart(item1, 10);
    expect(cart.cartItems.length).toBe(1);
    expect(cart.cartItems[0].item).toBe(item2);

    cart.removeFromCart(item2, 5);
    expect(cart.cartItems.length).toBe(0);
  });

  test("calculateTotal calculates the correct total cost", () => {
    cart.addToCart(item1, 3);
    cart.addToCart(item2, 5);

    const total = cart.calculateTotal();
    expect(total).toBeCloseTo(10.5, 2);
  });
});

// could not get this test to work
