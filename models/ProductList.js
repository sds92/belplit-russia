class ProductList {
  constructor(config) {
    this.cities = config.cities;
    this.product = {
      id: null,
      info: { slug: '', position: null, displayName: '', title: '' },
      options: [
        {
          a: null,
          b: null,
          h: null,
          show: false,
          coef: null,
          connectionType: '',
          density: null,
          prices: config.cities.map((item) => ({ city: item, value: null })),
        },
      ],
      desc: [],
    };
    this.option = {
      a: null,
      b: null,
      h: null,
      show: false,
      coef: null,
      connectionType: '',
      density: null,
      prices: config.cities.map((item) => ({ city: item, value: null })),
    };
  }

  getNewId(products) {
    let ids = products.map((product) => product.id);
    for (let index = 0; index < ids.length; index++) {
      if (ids[index + 1] - ids[index] !== 1) {
        return index + 1;
      }
    }
  }

  addItem(productList, input) {
    let newItem = JSON.parse(JSON.stringify(this.product));
    newItem.id = this.getNewId(productList);
    newItem.info.slug = input.slug;
    newItem.info.title = input.title;
    return productList.push(newItem);
  }

  findById(productList, _id) {
    return productList.find((item) => item.id === product_id);
  }

  modifyOptions(productList, input) {
    this.findById(input.product_id).options[input.option_position][input.option_name] = input.option_value;
  }

  setPrices(productList, { product_id, option_position, option_city, option_value }) {
    const _products = JSON.parse(JSON.stringify(productList));
    const _product = _products[product_id];
    let product_position = null;
    let price_position = null;
    _products.find((item, i) => {
      if (item.id === parseInt(product_id)) {
        product_position = i;
      }
    });
    _product.options[option_position].prices.find((item, i) => {
      if (item.city === option_city) {
        price_position = i;
        return true
      }
    });
    _product.options[option_position].prices.splice(price_position, 1, {
      city: option_city,
      value: option_value,
    });
    _products.splice(product_position, 1, _product);
    return _products
  }

  deleteItem() {}

  instance() {}
}

export default ProductList;
