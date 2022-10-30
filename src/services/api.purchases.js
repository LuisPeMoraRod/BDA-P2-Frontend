import config from "../config";

export const getPurchases = async () => {
  const options = {
    method: "GET",
  };

  return fetch(config.resources.purchases, options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const postPurchase = async (clientId, purchase) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(purchase),
  };

  return fetch(
    config.resources.purchases.concat(`/registroDeCompras/${clientId}`),
    options
  )
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};
