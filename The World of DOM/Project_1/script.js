document.addEventListener("DOMContentLoaded", () => {
    // Function to update the total price
    function updateTotal() {
      const productCards = document.querySelectorAll(".card-body");
      let total = 0;
      productCards.forEach((card) => {
        const unitPrice = parseInt(
          card.querySelector(".unit-price").textContent.replace("$", "").trim()
        );
        const quantity = parseInt(card.querySelector(".quantity").textContent.trim());
        total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
    }
  
    // Add event listeners to "+" buttons
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    plusButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const quantityElement = e.target.closest(".card-body").querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent.trim());
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
      });
    });
  
    // Add event listeners to "-" buttons
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    minusButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const quantityElement = e.target.closest(".card-body").querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent.trim());
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotal();
        }
      });
    });
  
    // Add event listeners to trash buttons
    const trashButtons = document.querySelectorAll(".fa-trash-alt");
    trashButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".card-body");
        productCard.remove();
        updateTotal();
      });
    });
  
    // Add event listeners to heart buttons
    const heartButtons = document.querySelectorAll(".fa-heart");
    heartButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.target.classList.toggle("liked");
        if (e.target.classList.contains("liked")) {
          e.target.style.color = "red";
        } else {
          e.target.style.color = "black";
        }
      });
    });
  
    // Initialize total price
    updateTotal();
  });
  