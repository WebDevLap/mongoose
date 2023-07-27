export function getCartItemsLS() {
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
}
