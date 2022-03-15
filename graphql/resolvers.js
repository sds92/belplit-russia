export const resolvers = {
    Query: {
      products(parent) {
        return products;
      },
      product(parent, { id }) {
        return products.find((product) => product.id === id);
      },
    },
    Mutation: {
      createProduct(parent, { input }) {
        const product = createProduct(input);
        products.push(product);
        return product;
      },
    },
  };