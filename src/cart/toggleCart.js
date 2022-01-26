import { getElement } from "../utils.js";

const cartOverLay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventListener("click", () => {
  cartOverLay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cartOverLay.classList.remove("show");
});

// export const openCart = () => {
//   cartOverLay.classList.add("show");
// };
