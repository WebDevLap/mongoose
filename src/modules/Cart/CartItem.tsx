import React from 'react';
import {
  IItem,
  addCartItemCount,
  deleteCartItem,
  removeCartItemCount,
} from '../../store/slices/CartSlice';
import { CardCounter, WhichPrice } from '../Main/Card';
import {
  CartItemEl,
  CartItemContainer,
  CartItemImg,
  CartItemContent,
  CartItemTitle,
  CartFooter,
  CartDeleteElement,
} from './CartItem.styled';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';

export const CartItem: React.FC<IItem> = (props) => {
  const { id, imageUrl, name, price, priceWidthDiscount, count } = props;
  const [isDeliting, setIsDeleting] = React.useState(false);
  const [conter, setConter] = React.useState(0);

  const cartCounters = useAppSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
    let isIDInCart = false;

    for (const el of cartCounters) {
      if (el.id === id) {
        isIDInCart = true;
        break;
      }
    }

    if (!isIDInCart) {
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

  function onDeleteCartElClick() {
    setIsDeleting(true);
    setTimeout(() => {
      dispatch(deleteCartItem(id));
    }, 1000);
  }

  return (
    <CartItemEl isDeliting={isDeliting}>
      <CartItemContainer>
        <CartItemImg src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl} alt="image url error" />
        <CartItemContent>
          <CartItemTitle>{name}</CartItemTitle>
          <WhichPrice price={price} priceWidthDiscount={priceWidthDiscount} />
          <CartFooter>
            <CardCounter
              conter={conter}
              onIncrementClick={onIncrementClick}
              onDecrementClick={onDecrementClick}
            />
            <CartDeleteElement onClick={onDeleteCartElClick}>Удалить с корзины</CartDeleteElement>
          </CartFooter>
        </CartItemContent>
      </CartItemContainer>
    </CartItemEl>
  );
};
