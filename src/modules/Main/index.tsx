import React from 'react';
import { Card } from './Card';
import CardLoader from './CardLoader';
import { styled } from 'styled-components';
import { Container } from '../../UI/components';
import { getProducts } from '../../API/API';
import { IProducts } from '../../API/API_TYPE';
import { Filter } from './Filter';
import { useAppSelector } from '../../store/store';
import { FilterTracker } from './FilterTracker';

const MainEl = styled.div`
  flex: 1 1 auto;
`;

const MainContainer = styled(Container)``;

const MainList = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Main = () => {
  const [products, setProducts] = React.useState<IProducts[]>();
  const filterName = useAppSelector((state) => state.filter.name);
  const filterPriceTo = useAppSelector((state) => state.filter.priceTo);
  const filterPriceFrom = useAppSelector((state) => state.filter.priceFrom);
  const [filteredProducts, setFilteredProducts] = React.useState<IProducts[]>();
  const [isCardsLoading, setIsCardsLoading] = React.useState(true);

  React.useEffect(() => {
    (async function () {
      try {
        const products = await getProducts();
        setProducts(products);
      } finally {
        setIsCardsLoading(false);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (!products) return;
    setIsCardsLoading(true);
    let prodCo = products?.filter((el) => {
      if (!el.name.toLowerCase().includes(filterName.toLowerCase())) {
        return false;
      } else if (Number(el.priceWidthDiscount) < +filterPriceFrom && +filterPriceFrom !== 0) {
        return false;
      } else if (Number(el.priceWidthDiscount) > +filterPriceTo && +filterPriceTo !== 0) {
        return false;
      }
      return true;
    });
    setFilteredProducts(prodCo);
    setIsCardsLoading(false);
  }, [products, filterName, filterPriceTo, filterPriceFrom]);

  return (
    <MainEl>
      <MainContainer>
        <Filter />
        <MainList>
          {isCardsLoading
            ? [...new Array(10)].map((el, index) => <CardLoader key={index} />)
            : filteredProducts && filteredProducts.map((el, index) => <Card {...el} key={index} />)}
        </MainList>
      </MainContainer>
    </MainEl>
  );
};