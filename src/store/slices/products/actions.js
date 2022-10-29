import { productsActions } from "./products";
import {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
} from "../../../services/api.products";

const parseProducts = (products) => {
  return products.map((product) => {
    const label = product.nombre + " (" + product.marca + ")";
    return { ...product, label: label };
  });
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      let response;
      response = await getProducts(); // get Teams from API
      if (!response.ok) throw new Error("Couldn't fetch products data");
      let products = await response.json();

      products = parseProducts(products);
      dispatch(productsActions.setProducts(products));
      dispatch(productsActions.setTotal(products.length));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      let response;
      response = await postProduct(product);
      if (!response.ok) throw new Error("Couldn't create new product");

      response = await getProducts();
      if (!response.ok) throw new Error("Couldn't fetch products data");
      let products = await response.json();

      products = parseProducts(products);
      dispatch(productsActions.setProducts(products)); //update products
      dispatch(productsActions.setTotal(products.length));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      let response;
      response = await putProduct(product);
      if (!response.ok) throw new Error("Couldn't update product");

      response = await getProducts();
      if (!response.ok) throw new Error("Couldn't fetch products data");
      let products = await response.json();

      products = parseProducts(products);
      dispatch(productsActions.setProducts(products)); //update product
      dispatch(productsActions.setTotal(products.length));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeProduct = (productId) => {
  return async (dispatch) => {
    try {
      let response;
      response = await deleteProduct(productId);
      if (!response.ok) throw new Error("Couldn't delete product");

      response = await getProducts();
      if (!response.ok) throw new Error("Couldn't fetch products data");
      let products = await response.json();

      products = parseProducts(products);
      dispatch(productsActions.setProducts(products)); //update products
      dispatch(productsActions.setTotal(products.length));
    } catch (error) {
      console.log(error);
    }
  };
};
