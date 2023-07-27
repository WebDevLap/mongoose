import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/store';
import { setCartTotalPrice, setCartTotalProducts } from '../store/slices/CartSlice';

export function useCart() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const totalPrice: number = cartItems.reduce((total, el) => total + +el.price * el.count, 0);
    dispatch(setCartTotalPrice(totalPrice));

    const totalProducts: number = cartItems.reduce((total, el) => total + el.count, 0);
    dispatch(setCartTotalProducts(totalProducts));
  }, [cartItems]);
}
