class Cart {
  items;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    const savedCart = JSON.parse(localStorage.getItem(this.#localStorageKey));
    if (Array.isArray(savedCart)) {
      this.items = savedCart;
    } else if (savedCart && Array.isArray(savedCart.items)) {
      this.items = savedCart.items;
    }

    if (!Array.isArray(this.items)) {
      this.items = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.items));
  }

  addToCart(productId) {
    let matchingItem;
    this.items.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });

    // const quantity = Number(
    //   document.querySelector(`.js-quantity-selector-${productId}`).value,
    // );

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.items.push({
        productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];

    this.items.forEach((item) => {
      if (item.productId !== productId) {
        newCart.push(item);
      }
    });

    this.items = newCart;
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.items.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
}

const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

console.log(cart);
console.log(businessCart);
