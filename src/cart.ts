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
  const productSchema = Product.safeParse(product);
  if (!productSchema.success || product.price <= 0 || product.quantity <= 0) {
    return {
      statusCode: 400,
      message: "Invalid product",
    };
  } else {
    const existingProduct: Product | undefined = cart.find((p) => p.id === product.id);
    if(existingProduct){
      existingProduct.quantity += product.quantity;
      return {
        statusCode: 200,
        message: "Product quantity updated in cart",
      };
    } else {
      cart.push(product);
      return {
        statusCode: 200,
        message: "Product added in cart",
      };
    }
  }
}

export function delProduct(product: Product, cart: Product[]): result{
  const existingProduct: Product | undefined = cart.find((p) => p.id === product.id);
  if(existingProduct){
    const newCart = cart.filter(x => x.id !== existingProduct.id);
    return {
      statusCode: 200,
      message: `Product deleted in cart ${newCart}`,
    };
  } else {
    return {
      statusCode: 400,
      message: "Invalid product",
    };
  }
}

export function countProductInCart(cart: Product[]): result{
  let result = cart.length;
  return {
    statusCode: 200,
    message: result > 1 ? `${result} products in cart` : `${result} product in cart`,
  };
}

export function priceCart(product: Product, cart: Product[]): result{
  let result = 0;
  for(let i: number = 0; i <= cart.length - 1; i++){
    result += cart[i].price;
  }
  return {
    statusCode: 200,
    message: `The cart cost ${result}e`,
  };
}

export function promoCode(product: Product, percentage: number): result{
  const priceAfterPromoCode = product.price * (1 - percentage / 100);
  return {
    statusCode: 200,
    message: `The price after promo code is ${priceAfterPromoCode}e`,
  };
}