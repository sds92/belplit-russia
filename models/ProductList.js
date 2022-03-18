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
          connectonType: '',
          density: null,
          prices: config.cities.map((item) => ({ city: item, value: null })),
        },
      ],
      desc: [],
    };
  }

  getNewId(products) {
    let ids = products.map(product => product.id)
    for (let index = 0; index < ids.length; index++) {
      if (ids[index + 1] - ids[index] !== 1) {
        return index + 1
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

  deleteItem() {}

  instance() {}
}

export default ProductList;
