import React from 'react';
import { Cart as CartEl, CartContainer, CartItemsList, CartInfo, CartPrice } from './index.styled';
import { useAppSelector } from '../../store/store';
import { CartItem } from './CartItem';

export const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCartPrice = useAppSelector((state) => state.cart.totalPrice);
  const totalCartProducts = useAppSelector((state) => state.cart.totalProducts);

  return (
    <CartEl>
      <CartContainer>
        <CartItemsList>
          {cartItems.map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </CartItemsList>
        <CartInfo>
          <CartPrice translate="no">
            Сумма оплаты: <span>{totalCartPrice.toFixed(2)}€</span>
          </CartPrice>
          <CartPrice translate="no">
            Всего продуктов: <span>{totalCartProducts} шт.</span>
          </CartPrice>
        </CartInfo>
      </CartContainer>
    </CartEl>
  );
};
