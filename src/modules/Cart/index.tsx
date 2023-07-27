import React from 'react';
import { Cart as CartEl, CartContainer, CartItemsList } from './index.styled';
import { useAppSelector } from '../../store/store';
import { CartItem } from './CartItem';

export const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <CartEl>
      <CartContainer>
        <CartItemsList>
          {cartItems.map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </CartItemsList>
      </CartContainer>
    </CartEl>
  );
};
