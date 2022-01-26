const allProductsUrl =
  "https://sizzle-api.herokuapp.com/#jump-Product-GetAllProducts";

const singleProductUrl = "";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const getStorageItem = () => {};
const setStorageItem = (name, item) => {};

export {
  getElement,
  allProductsUrl,
  singleProductUrl,
  getStorageItem,
  setStorageItem,
};
