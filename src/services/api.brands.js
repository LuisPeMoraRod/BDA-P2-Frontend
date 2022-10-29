import config from "../config";

export const getBrands = async () => {
  const options = {
    method: "GET",
  };

  return fetch(config.resources.brands, options)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};
