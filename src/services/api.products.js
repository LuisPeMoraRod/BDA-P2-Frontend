import config from "../config";

export const getProducts = async () => {
  const options = {
    method: "GET",
  };

  return fetch(config.resources.products, options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const postProduct = async (product) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(product),
  };

  return fetch(config.resources.products, options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const putProduct = async (product) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(product),
  };

  return fetch(config.resources.products.concat(`/${product.id}`), options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};
