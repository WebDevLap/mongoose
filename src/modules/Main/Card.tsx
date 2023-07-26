import React from 'react';
import { IProducts } from '../../API/API_TYPE';
import {
  CardEl,
  CardContainer,
  CardImg,
  CardTitle,
  CardPrice,
  CardCounter,
  CardCounterIncrement,
  CardCounterCount,
  CardCounterDecrement,
  CardAddToCard,
} from './styled';
import { useAppSelector } from '../../store/store';

export const Card: React.FC<IProducts> = (props) => {
  const { imageUrl, name, price, priceWidthDiscount } = props;
  const [conter, setConter] = React.useState(0);

  const filterName = useAppSelector((state) => state.filter.name);

  React.useEffect(() => {
    if (!filterName) return;
    console.log(name.toLowerCase().indexOf(filterName));
  }, [filterName]);

  function filtered(str: string) {
    const index = name.toLowerCase().indexOf(filterName.toLowerCase());
    const strLow = str.toLowerCase()

    return (
      <div>
        {strLow.slice(0, index)}
        <mark>{strLow.slice(index, index + filterName.length)}</mark>
        {strLow.slice(index + filterName.length)}
      </div>
    );
  }

  function onAddToCardClick() {
    setConter((prev) => prev + 1);
  }

  function onDecrementClick() {
    if (conter < 99) {
      setConter((prev) => prev - 1);
    }
  }
  function onIncrementClick() {
    setConter((prev) => prev + 1);
  }

  return (
    <CardEl translate='no'>
      <CardContainer>
        <CardImg src={imageUrl} />
        <CardTitle>{filtered(name)}</CardTitle>
        {priceWidthDiscount === price ? (
          <CardPrice>
            <p>Цена: </p> <b>{price}€</b>
          </CardPrice>
        ) : (
          <CardPrice>
            <p>Цена: </p> <b>{priceWidthDiscount}€</b> <span>{price}€</span>
          </CardPrice>
        )}
        {conter ? (
          <CardCounter>
            <CardCounterDecrement onClick={onDecrementClick}></CardCounterDecrement>
            <CardCounterCount>{conter}</CardCounterCount>
            <CardCounterIncrement onClick={onIncrementClick}></CardCounterIncrement>
          </CardCounter>
        ) : (
          <CardAddToCard onClick={onAddToCardClick}>Добавить в корзину</CardAddToCard>
        )}
      </CardContainer>
    </CardEl>
  );
};
