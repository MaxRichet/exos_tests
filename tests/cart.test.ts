import { describe, expect, it } from "vitest";
import { addProduct, delProduct, countProductInCart, priceCart, promoCode } from "../src/cart";

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// Data

let cart: Product[] = [
  {
    id: "2",
    name: "Product 2",
    price: 10,
    quantity: 1,
  },
  {
    id: "3",
    name: "Product 3",
    price: 10,
    quantity: 1,
  },
  {
    id: "4",
    name: "Product 4",
    price: 10,
    quantity: 1,
  },
  {
    id: "5",
    name: "Product 5",
    price: 10,
    quantity: 1,
  },
];

const product: Product = {
  id: "1",
  name: "Prouct 1",
  price: 10,
  quantity: 1,
};

const inexistingProduct: Product = {
  id: "999",
  name: "Product 999",
  price: 10,
  quantity: 1,
};

const existingProduct: Product = {
  id: "2",
  name: "Product 2",
  price: 10,
  quantity: 1,
};

const negativePriceProduct: Product = {
  id: "50",
  name: "Product 50",
  price: -10,
  quantity: 1,
};

const negativeQuantityProduct: Product = {
  id: "51",
  name: "Product 51",
  price: 10,
  quantity: -1,
};

//

// Add a product tests

describe("cart module / add product", () => {
  it("should add a product to the cart", () => {
    const result: any = addProduct(product, cart);
    expect(result).toStrictEqual({statusCode: 200, message: result.message});
  });
});

describe("cart module / add an existing product", () => {
  it("should add 1 to quantity", () => {
    const result: any = addProduct(existingProduct, cart);
    expect(result).toStrictEqual({statusCode: 200, message: result.message});
  });
});

describe("cart module / add a product with negative price", () => {
  it("return an error", () => {
    const result: any = addProduct(negativePriceProduct, cart);
    expect(result).toStrictEqual({statusCode: 400, message: result.message});
  });
});

describe("cart module / add a product with null quantity", () => {
  it("return an error", () => {
    const result: any = addProduct(negativeQuantityProduct, cart);
    expect(result).toStrictEqual({statusCode: 400, message: result.message});
  });
});

// Delete a product tests

describe("cart module / delete a product", () => {
  it("should delete a product", () => {
    const result: any = delProduct(existingProduct, cart);
    expect(result).toStrictEqual({statusCode: 200, message: result.message});
  });
});

describe("cart module / delete an inexisting product", () => {
  it("should return an error", () => {
    const result: any = delProduct(inexistingProduct, cart);
    expect(result).toStrictEqual({statusCode: 400, message: result.message});
  });
});

// Sum product in cart tests

describe("cart module / find number of product in cart", () => {
  it("should return the number of product in cart", () => {
    const result: any = countProductInCart(cart);
    expect(result).toStrictEqual({statusCode: 200, message: result.message});
  });
});

// Price cart tests

describe("cart module / find the price of all product in cart", () => {
  it("should return the price of the cart", () => {
    const result: any = priceCart(product, cart);
    expect(result).toStrictEqual({statusCode: 200, message: result.message});
  });
});

// Promo code tests

describe("cart module / apply a promo code", () => {
  it("should apply a promo code", () => {
    const result: any = promoCode(product, cart);
    expect(result).toStrictEqual({statusCode: 200, message: result.message});
  });
});