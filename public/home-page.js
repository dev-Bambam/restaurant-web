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
orderBtns.forEach((btn) => {
  if (btn.innerHTML === "Order Now") {
    btn.addEventListener("click", () => {
      alert("check the cart");
      cartBadge.innerHTML = parseInt(cartBadge.innerHTML);
    });
  }
});
