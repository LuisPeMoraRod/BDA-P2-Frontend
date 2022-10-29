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
