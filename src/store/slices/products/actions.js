import { productsActions } from "./products";

const PRODUCTS = [
  { id: 1, nombre: "Crush - Orange, 355ml", marca: "Skim", precio: "144" },
  { id: 1, nombre: "Potatoes - Mini Red", marca: "Eazzy", precio: "252" },
];

const parseProducts = (products) => {
  return products.map((product) => {
    const label = product.nombre + " (" + product.marca + ")";
    return { ...product, label: label };
  });
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const products = parseProducts(PRODUCTS);
      dispatch(productsActions.setProducts(products));
    } catch (error) {
      console.log(error);
    }
  };
};
