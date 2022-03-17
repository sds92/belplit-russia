import Size from './Size';
import { validateName } from '../../utils/validations';
class Product {
  /**
   * @param {Number} id
   * @param {String} name
   * @param {String} title
   */
  constructor(id, name, title) {
    this.id = id;
    this.title = title;
    this.name = validateName(name);
    this.density = '130 кг/м³';
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
    this.sizes = [];
    this.connectionTypes = [];
    this.desc = {
      consists: [],
      options: [],
      advantages: [],
      functions: [],
      tech: [],
    };
    this.files = {
      avatarSM: `${validateName(name)}.jpg`,
      product: `${validateName(name)}.jpg`,
    };
  }

  addEntity(input) {
    switch (input) {
      case input instanceof Size: {
        this.sizes.push(input);
        // this.connectionTypes.push()
        break;
      }
      default:
        break;
    }
  }
  deleteEntity(entry, pos) {}

  create() {}

  modify() {}
}

export default Product;
