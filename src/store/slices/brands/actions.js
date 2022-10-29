import { brandsActions } from "./brands";
import { getBrands } from "../../../services/api.brands";

const parseBrands = (brands) => {
  return brands.map((brand) => {
    const name = brand.nombre;
    return { ...brand, label: name };
  });
};

export const fetchBrands = () => {
  return async (dispatch) => {
    try {
      let response;
      response = await getBrands(); // get brands from API
      if (!response.ok) throw new Error("Couldn't fetch brands data");
      let brands = await response.json();

      brands = parseBrands(brands);
      dispatch(brandsActions.setBrands(brands));
    } catch (error) {
      console.log(error);
    }
  };
};
