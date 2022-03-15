import { gql } from 'apollo-server-micro';
export const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: Int): Product
  }
  type Product {
    id: Int
    position: Int
    name: String
    title: String
    sizes: [[String]]
    density: String
    coef: Float
    prices: Prices
    desc: Descs
    files: Files
  }
  type Prices {
    square: [Float]
    spb: [Float]
    kazan: [Float]
    krasnodar: [Float]
    rostov: [Float]
    volvograd: [Float]
    astrahan: [Float]
    crimea: [Float]
  }
  type Descs {
    consists: [String]
    options: [String]
    advantages: [String]
    functions: [String]
    tech: [TechItem]
  }
  type Files {
    avatarSM: String
    product: String
  }
  type TechItem {
    title: String
    value: [String]
  }

  input ProductInput {
    id: Int
    position: Int
    name: String
    title: String
    sizes: [[String]]
    density: String
    coef: Float
    prices: PricesInput
    desc: DescsInput
    files: FilesInput
  }
  input TechItemInput {
    title: String
    value: [String]
  }
  input PricesInput {
    square: [Float]
    spb: [Float]
    kazan: [Float]
    krasnodar: [Float]
    rostov: [Float]
    volvograd: [Float]
    astrahan: [Float]
    crimea: [Float]
  }
  input DescsInput {
    consists: [String]
    options: [String]
    advantages: [String]
    functions: [String]
    tech: [TechItemInput]
  }
  input FilesInput {
    avatarSM: String
    product: String
  }

  type Mutation {
    createProduct(input: ProductInput): Product
  }
`;
