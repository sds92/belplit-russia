class Product {
  constructor(id, name, title) {
    this.id = id;
    this.title = title;
    this.name = this.validateName(name);
    this.sizes = [];
    this.density = '';
    this.coef = 0.72;
    this.prices = {
      square: [],
      spb: [],
      kazan: [],
      krasnodar: [],
      rostov: [],
      volvograd: [],
      astrahan: [],
      сrimea: [],
    };
    this.desc = {
      consists: [],
      options: [],
      advantages: [],
      functions: [],
      tech: [],
    };
    this.files = {
      avatarSM: `${this.validateName(name)}.jpg`,
      product: `${this.validateName(name)}.jpg`,
    };
    this.connectionTypes = [];
  }

  validateName(input) {
    if (/^[a-z]{1,20}$/.test(input)) {
      return input;
    } else {
      return null;
    }
  }
}

// const a = new Product(1, 'sdsdsd', 'sdfdsfdf');
// console.log("🚀 ~ file: product.js ~ line 43 ~ a", a)
export default Product;
