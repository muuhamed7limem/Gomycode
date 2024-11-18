class Product {
  constructor(id, name, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  }

  displayCart() {
    const cartContainer = document.querySelector(".shopping-card-container .list-products");
    const totalPriceElement = document.querySelector(".total");

    cartContainer.innerHTML = ""; 
    this.items.forEach((item) => {
      const productCard = document.createElement("div");
      productCard.classList.add("card-body");
      productCard.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${item.product.imageUrl}" class="card-img-top" alt="${item.product.name}">
          <div class="card-body">
            <h5 class="card-title">${item.product.name}</h5>
            <p class="card-text">Unit Price: ${item.product.price} $</p>
            <div>
              <i class="fas fa-plus-circle" data-id="${item.product.id}"></i>
              <span class="quantity">${item.quantity}</span>
              <i class="fas fa-minus-circle" data-id="${item.product.id}"></i>
            </div>
            <div>
              <i class="fas fa-trash-alt" data-id="${item.product.id}"></i>
            </div>
          </div>
        </div>
      `;
      cartContainer.appendChild(productCard);
    });

    totalPriceElement.textContent = `${this.getTotalPrice()} $`;


    this.attachEventListeners();
  }

  attachEventListeners() {
    document.querySelectorAll(".fa-plus-circle").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = parseInt(e.target.getAttribute("data-id"));
        this.addItem(products.find((product) => product.id === productId), 1);
        this.displayCart();
      });
    });


    document.querySelectorAll(".fa-minus-circle").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const item = this.items.find((item) => item.product.id === productId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.removeItem(productId);
        }
        this.displayCart();
      });
    });

    document.querySelectorAll(".fa-trash-alt").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = parseInt(e.target.getAttribute("data-id"));
        this.removeItem(productId);
        this.displayCart();
      });
    });
  }
}


const products = [
  new Product(1, "Basket", 100, "baskets.png"),
  new Product(2, "Socks", 20, "socks.png"),
  new Product(3, "Bag", 50, "bag.png"),
];


const myCart = new ShoppingCart();

document.addEventListener("DOMContentLoaded", () => {
  myCart.addItem(products[0], 1); 
  myCart.addItem(products[1], 2); 
  myCart.addItem(products[2], 1); 

  // Display the cart
  myCart.displayCart();
});
