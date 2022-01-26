import { getStorageItem, setStorageItem } from "./utils.js";

let store = [];
const setupStore = (products) => {
  store = products.map(() => {
    // console.log(product);
    const {
      id,
      fields: { featured, name, price, description, image },
    } = product;
    return {
      id,
      featured,
      name,
      price,
      description,
      image,
    };
  });
};


const findProduct = () => {};

export { store, setupStore, findProduct };
