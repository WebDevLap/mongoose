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
  ImgContainer,
  CardImgChoice,
  CardImgChoiceImg,
} from './Card.styled';
import { useAppSelector } from '../../store/store';
import { useDispatch } from 'react-redux';
import { addCartItemCount, removeCartItemCount } from '../../store/slices/CartSlice';

export const Card: React.FC<IProducts> = (props) => {
  const { imageUrl, name, price, priceWidthDiscount, id } = props;
  const [conter, setConter] = React.useState(0);
  const [activeImgForManyImgs, setActiveImgForManyImgs] = React.useState(0);

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

  return (
    <CardEl translate="no">
      <CardContainer>
        <ImgContainer>
          {Array.isArray(imageUrl) ? (
            imageUrl.map((el, index) => (
              <CardImg src={el} active={index === activeImgForManyImgs} />
            ))
          ) : (
            <CardImg src={imageUrl} active={true} />
          )}
          {Array.isArray(imageUrl) && (
            <CardImgChoice>
              {imageUrl.map((el, index) => (
                <CardImgChoiceImg
                  src={el}
                  key={index}
                  active={activeImgForManyImgs === index}
                  onClick={() => setActiveImgForManyImgs(index)}
                />
              ))}
            </CardImgChoice>
          )}
        </ImgContainer>

        <CardTitle>
          <Filtered str={name} filterStr={filterName} />
        </CardTitle>
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

interface IFiltered {
  str: string;
  filterStr: string;
}

const Filtered: React.FC<IFiltered> = ({ str, filterStr }) => {
  const strLow = str.toLowerCase();
  const index = strLow.indexOf(filterStr.toLowerCase());

  return (
    <div>
      {strLow.slice(0, index)}
      <mark>{strLow.slice(index, index + filterStr.length)}</mark>
      {strLow.slice(index + filterStr.length)}
    </div>
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
