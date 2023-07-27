import React from 'react';
import { IProducts } from '../../API/API_TYPE';
import {
  CardEl,
  CardContainer,
  CardImg,
  CardTitle,
  CardPrice,
  CardCounterEl,
  CardCounterIncrement,
  CardCounterCount,
  CardCounterDecrement,
  CardAddToCard,
} from './Card.styled';
import { useAppSelector } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addCartItemCount, removeCartItemCount } from '../../store/slices/CartSlice';

export const Card: React.FC<IProducts> = (props) => {
  const { imageUrl, name, price, priceWidthDiscount, id } = props;
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

  const filterName = useAppSelector((state) => state.filter.name);

  const filtered = (str: string) => {
    const index = name.toLowerCase().indexOf(filterName.toLowerCase());
    const strLow = str.toLowerCase();

    return (
      <div>
        {strLow.slice(0, index)}
        <mark>{strLow.slice(index, index + filterName.length)}</mark>
        {strLow.slice(index + filterName.length)}
      </div>
    );
  };

  return (
    <CardEl translate="no">
      <CardContainer>
        <CardImg src={imageUrl} />
        <CardTitle>{filtered(name)}</CardTitle>
        <WhichPrice price={price} priceWidthDiscount={priceWidthDiscount}></WhichPrice>
        <CardCounter
          conter={conter}
          onIncrementClick={onIncrementClick}
          onDecrementClick={onDecrementClick}
        />
      </CardContainer>
    </CardEl>
  );
};

export const WhichPrice: React.FC<{
  price: string;
  priceWidthDiscount: string;
}> = ({ price, priceWidthDiscount }) => {
  return (
    <>
      {priceWidthDiscount === price ? (
        <CardPrice>
          <p>Цена: </p> <b>{price}€</b>
        </CardPrice>
      ) : (
        <CardPrice>
          <p>Цена: </p> <b>{priceWidthDiscount}€</b> <span>{price}€</span>
        </CardPrice>
      )}
    </>
  );
};

export const CardCounter: React.FC<{
  conter: number;
  onDecrementClick: Function;
  onIncrementClick: Function;
}> = ({ conter, onDecrementClick, onIncrementClick }) => {
  return (
    <>
      {conter ? (
        <CardCounterEl>
          <CardCounterDecrement onClick={() => onDecrementClick()}></CardCounterDecrement>
          <CardCounterCount>{conter}</CardCounterCount>
          <CardCounterIncrement onClick={() => onIncrementClick()}></CardCounterIncrement>
        </CardCounterEl>
      ) : (
        <CardAddToCard onClick={() => onIncrementClick()}>Добавить в корзину</CardAddToCard>
      )}
    </>
  );
};
