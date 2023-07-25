import React from "react";
import { IProducts } from "../../API/API_TYPE";
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
} from "./styled";

export const Card: React.FC<IProducts> = (props) => {
  const { imageUrl, name, price, priceWidthDiscount } = props;
  const [conter, setConter] = React.useState(0);

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
    <CardEl>
      <CardContainer>
        <CardImg src={imageUrl} />
        <CardTitle>{name}</CardTitle>
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
            <CardCounterDecrement
              onClick={onDecrementClick}
            ></CardCounterDecrement>
            <CardCounterCount>{conter}</CardCounterCount>
            <CardCounterIncrement
              onClick={onIncrementClick}
            ></CardCounterIncrement>
          </CardCounter>
        ) : (
          <CardAddToCard onClick={onAddToCardClick}>
            Добавить в корзину
          </CardAddToCard>
        )}
      </CardContainer>
    </CardEl>
  );
};
