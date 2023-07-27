import React from 'react';
import { IItem, addCartItemCount, removeCartItemCount } from '../../store/slices/CartSlice';
import { CardCounter, WhichPrice } from '../Main/Card';
import {
  CartItemEl,
  CartItemContainer,
  CartItemImg,
  CartItemContent,
  CartItemTitle,
} from './CartItem.styled';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';

export const CartItem: React.FC<IItem> = (props) => {
  const { id, imageUrl, name, price, priceWidthDiscount, count } = props;

  const dispatch = useDispatch();

  const [conter, setConter] = React.useState(0);

  const cartCounters = useAppSelector((state) => state.cart.items);

  React.useEffect(() => {
    for (let index = 0; index < cartCounters.length; index++) {
      const element = cartCounters[index];
      if (element.id === id) {
        setConter(element.count);
        break;
      }
    }
  }, [cartCounters]);

  React.useEffect(() => {
    let isIdInCart = false;

    for (const el of cartCounters) {
      if (el.id === id) {
        isIdInCart = true;
        break;
      }
    }

    if (!isIdInCart) {
      setConter(0);
    }
  }, [cartCounters]);
  
  function onIncrementClick() {
    if (conter > 98) return;
    dispatch(
      addCartItemCount({
        id,
        imageUrl,
        name,
        price,
        priceWidthDiscount,
      }),
    );
  }

  function onDecrementClick() {
    dispatch(removeCartItemCount(id));
  }

  return (
    <CartItemEl>
      <CartItemContainer>
        <CartItemImg src={imageUrl} />
        <CartItemContent>
          <CartItemTitle>{name}</CartItemTitle>
          <WhichPrice price={price} priceWidthDiscount={priceWidthDiscount} />
          <CardCounter
            conter={conter}
            onIncrementClick={onIncrementClick}
            onDecrementClick={onDecrementClick}
          />
        </CartItemContent>
      </CartItemContainer>
    </CartItemEl>
  );
};
