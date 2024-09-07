document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const cartItems = document.getElementById("cart-items");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  let cart = [];
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.getAttribute("data-item");
      const price = parseInt(button.getAttribute("data-price"), 10);
      const existingItem = cart.find(cartItem => cartItem.name === item);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name: item, price: price, quantity: 1 });
      }
      updateCart();
    });
  });
  function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
      cartItems.appendChild(li);
    });
    cartCount.textContent = totalItems;
    cartTotal.textContent = totalAmount;
  }
});
//2
    document.addEventListener('DOMContentLoaded', function () {
      const images = document.querySelectorAll('.ourSpecials__item__img img');
      const popupOverlay = document.querySelector('.popup-overlay');
      const popupMessage = document.querySelector('.popup-message');
      images.forEach(image => {
        image.addEventListener('click', function () {
          const itemName = this.dataset.item;
          const itemPrice = this.dataset.price;
          popupMessage.textContent = `successfully added to the cart!`;
          popupOverlay.style.display = 'block';
          popupMessage.style.display = 'block';
          setTimeout(() => {
            popupOverlay.style.display = 'none';
            popupMessage.style.display = 'none';
          }, 600);
        });
      });

      const images1 = document.querySelectorAll('.dishGrid__item__img img');
      images1.forEach(image => {
        image.addEventListener('click', function () {
          const itemName = this.dataset.item;
          const itemPrice = this.dataset.price;
          popupMessage.textContent = `successfully added to the cart!`;
          popupOverlay.style.display = 'block';
          popupMessage.style.display = 'block';
          setTimeout(() => {
            popupOverlay.style.display = 'none';
            popupMessage.style.display = 'none';
          }, 600);
        });
      });
      
      popupOverlay.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
        popupMessage.style.display = 'none';
      });

    });
    