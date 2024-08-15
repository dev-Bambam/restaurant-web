// banner carouswl slider
document.addEventListener("DOMContentLoaded", () => {
  // init Swiper for hero section
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});

// theme swithcer
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-controller");
  const htmlElement = document.documentElement;

  // Retrieve the theme from local storage
  const storedTheme = localStorage.getItem("theme");

  // If a theme is stored, apply it
  if (storedTheme) {
    htmlElement.setAttribute("data-theme", storedTheme);
  } else {
    // If no theme is stored, default to 'dark'
    htmlElement.setAttribute("data-theme", "garden");
    localStorage.setItem("theme", "garden");
  }

  themeToggle.addEventListener("change", () => {
    // Toggle the theme between 'dark' and 'garden'
    if (themeToggle.checked) {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "garden");
      localStorage.setItem("theme", "garden");
    }
  });
});

// Ordering functionality
const orderBtns = Array.from(document.getElementsByTagName("button"));
const cartBadge = document.querySelector("#cart-badge");
const items = document.querySelector("#no-of-item");
const subTotal = document.querySelector("#sub-total");
// modal
const modal = document.querySelector("#modal");
const modal_item = document.querySelector("#m-items");
const modal_subtotal = document.querySelector("#m-subtotal");
let empty = true;
orderBtns.forEach((btn) => {
  if (btn.innerHTML === "Order Now") {
    btn.addEventListener("click", () => {
      empty = false;
      const cardBody = btn.closest(".card-body");
      const priceSpan = cardBody.querySelector("p span");
      const price = priceSpan.innerText;
      cartBadge.innerHTML = parseInt(cartBadge.innerHTML) + 1;
      items.innerHTML = parseInt(items.innerHTML) + 1;
      subTotal.innerHTML = parseInt(subTotal.innerHTML) + parseInt(price);
      modal_item.innerHTML = items.innerHTML;
      modal_subtotal.innerHTML = subTotal.innerHTML;
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000);
    });
  }
});
// confirm order

const confirm = document.querySelector("#confirm");
confirm.addEventListener("click", () => {
  const lightBox = document.querySelector("#lightbox");
  if (!empty) {
    lightBox.classList.remove("hidden");
    lightBox.classList.remove("lg:hidden");
  }

  setTimeout(() => {
    lightBox.classList.add("hidden");
    lightBox.classList.add("lg:hidden");
  }, 3000);
});
