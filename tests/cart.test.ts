import { describe, expect, it } from "vitest";
import { addProduct, delProduct, sumProductInCart, priceCart, promoCode } from "../src/cart";

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
  name: "Test Product",
  price: 10,
  quantity: 1,
};

const existingProduct: Product = {
  id: "2",
  name: "Product 2",
  price: 10,
  quantity: 1,
};

//

// Add a product tests

describe("cart module / add product", () => {
  it("should add a product to the cart", () => {
    const result: any = addProduct(product, cart);
    expect(result).toBe('200');
  });
});

describe("cart module / add an existing product", () => {
  it("should add 1 to quantity", () => {
    const result: any = addProduct(product, cart);
    expect(result).toBe('400');
  });
});

describe("cart module / add a product with negative price", () => {
  it("return an error", () => {
    const result: any = addProduct(product, cart);
    expect(result).toBe('400');
  });
});

describe("cart module / add a product with null quantity", () => {
  it("return an error", () => {
    const result: any = addProduct(product, cart);
    expect(result).toBe('400');
  });
});

// Delete a product tests

describe("cart module / delete a product", () => {
  it("should delete a product", () => {
    const result: any = delProduct(product, cart);
    expect(result).toBe('200');
  });
});

describe("cart module / delete an existing product", () => {
  it("should return an error", () => {
    const result: any = delProduct(product, cart);
    expect(result).toBe('400');
  });
});

// Sum product in cart tests

describe("cart module / find number of product in cart", () => {
  it("should return the number of product in cart", () => {
    const result: any = sumProductInCart(cart);
    expect(result).toBe('200');
  });
});

// Price cart tests

describe("cart module / find the price of all product in cart", () => {
  it("should return the price of the cart", () => {
    const result: any = priceCart(product, cart);
    expect(result).toBe('200');
  });
});

// Promo code tests

describe("cart module / apply a promo code", () => {
  it("should apply a promo code", () => {
    const result: any = promoCode(product, cart);
    expect(result).toBe('200');
  });
});