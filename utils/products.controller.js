const __cities = [
  ['Москва', 'square'],
  ['СПБ', 'spb'],
  ['Казань', 'kazan'],
  ['Краснодар', 'krasnodar'],
  ['Ростов', 'rostov'],
  ['Волгоград', 'volvograd'],
  ['Астрахань', 'astrahan'],
  ['Крым', 'crimea'],
];
const __product = {
  id: null,
  info: { slug: '', position: null, displayName: '', title: '' },
  options: [],
  desc: [],
};

const __option = {
  a: null,
  b: null,
  h: null,
  show: false,
  coef: null,
  connectionType: '',
  density: null,
  prices: __cities.map((item) => ({ city: item[1], value: null })),
};

const __page = {
  id: null,
  path: '',
  title: '',
  content: { product_id: null },
  head: {
    title: '',
    meta: [
      {
        name: 'keywords',
        content: '',
      },
      {
        name: 'description',
        content: '',
      },
    ],
  },
};

export const productsController = {
  copy: (arr) => {
    let res = JSON.parse(JSON.stringify(arr));
    return res;
  },
  getProductById: (products, id) => {
    return products.find((item) => item.id.toString() === id.toString());
  },
  getProductPositionById: (products, id) => {
    let product_position = null;
    productsController.copy(products).find((item, i) => {
      if (item.id === parseInt(id)) {
        product_position = i;
        return true;
      }
    });
    return product_position;
  },
  getInitPrices: (cities) => {
    return cities.map((item) => ({ city: item[1], value: null }));
  },
  getNewId: (arr) => {
    let ids = arr.map((obj) => obj.id);
    for (let index = 0; index < ids.length; index++) {
      if (ids[index + 1] - ids[index] !== 1) {
        return index + 1;
      }
    }
  },
  setDesc: (products, product_id, { title, value }) => {
    let product = productsController.getProductById(products, product_id);
    if (product.desc.find((item) => item.title === title)) {
      product.desc.find((item) => item.title === title).value = value;
    } else {
      product.desc.push({ title, value });
    }
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setTitle: (products, product_id, title) => {
    let product = productsController.getProductById(products, product_id);
    product.info.title = title;
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setPosition: (products, product_id, position) => {
    let product = productsController.getProductById(products, product_id);
    product.info.position = parseInt(position);
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  sortByPosition: (products) => {
    let _products = productsController.copy(products);
    return _products.sort((a, b) => parseInt(a.info.position) - parseInt(b.info.position));
  },
  addProduct: (products, pages, input) => {
    let _products = productsController.copy(products);
    let _pages = productsController.copy(pages);
    let newProduct = productsController.copy(__product);
    let newPage = productsController.copy(__page);
    newProduct.id = productsController.getNewId(_products);
    newProduct.info.slug = input?.slug || '';
    newProduct.info.title = input.title;
    newPage.id = productsController.getNewId(pages);
    newPage.path = `/catalog/${input.slug}`;
    newPage.title = `Белтермо ${input.slug}`;
    newPage.content = { product_id: newProduct.id };
    _products.push(newProduct);
    _pages.push(newPage);
    return [_products, _pages, newProduct.id];
  },
  setPrices: (products, { product_id, option_position, option_city, option_value }) => {
    let _products = productsController.copy(products);
    let _product = productsController.getProductById(_products, product_id);
    let product_position = productsController.getProductPositionById(_products, product_id)
    let price_position = null;
    _product.options[option_position].prices.find((item, i) => {
      if (item.city === option_city) {
        price_position = i;
        return true;
      }
    });
    _product.options[option_position].prices.splice(price_position, 1, {
      city: option_city,
      value: option_value,
    });
    _products.splice(product_position, 1, _product);
    return _products;
  },
  setUserTitle(products, input, id) {
    let _products = productsController.copy(products);
    let _product = productsController.getProductById(_products, id);
    _product.info.userTitle = input;
    let product_position = productsController.getProductPositionById(products, id)
    _products.splice(product_position, 1, _product);
    return _products;
  }
};
