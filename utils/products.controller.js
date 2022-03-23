export const productsController = {
  getProductById: (products, id) => {
    return products.find((item) => item.id === parseInt(id));
  },
  getProductPositionById: (products, id) => {
      let product_position = null;
      products.find((item, i) => {
        if (item.id === parseInt(id)) {
          product_position = i;
          return true
        }
      });
      return product_position
  },
  getInitPrices: (cities) => {
      return cities.map((item) => ({ city: item[1], value: null }))
  }
};
