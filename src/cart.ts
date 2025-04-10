import { Product } from "tests/cart.test";
import { z } from "zod";

const Product = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
});

type result = {
  statusCode: number,
  message: string,
}

// TODO: implémenter le module cart ici

export function addProduct(product: Product, cart: Product[]): result{
  return;
}

export function delProduct(product: Product, cart: Product[]): result{
  return;
}

export function sumProductInCart(cart: Product[]): result{
  return;
}

export function priceCart(product: Product, cart: Product[]): result{
  return;
}

export function promoCode(product: Product, cart: Product[]): result{
  return;
}