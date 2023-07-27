import React from 'react';
import { Card } from './Card';
import CardLoader from './CardLoader';
import { getProducts } from '../../API/API';
import { IProducts } from '../../API/API_TYPE';
import { Filter } from './Filter';
import { useAppSelector } from '../../store/store';
import { MainEl, MainContainer, MainList } from './index.styled';
import { useDispatch } from 'react-redux';

export const Main = () => {
  const [products, setProducts] = React.useState<IProducts[]>();
  const [filteredProducts, setFilteredProducts] = React.useState<IProducts[]>();
  const [isCardsLoading, setIsCardsLoading] = React.useState(true);
  
  const dispatch = useDispatch();
  
  const filterName = useAppSelector((state) => state.filter.name);
  const filterPriceTo = useAppSelector((state) => state.filter.priceTo);
  const filterPriceFrom = useAppSelector((state) => state.filter.priceFrom);
  React.useEffect(() => {
    (async function () {
      try {
        const products: IProducts[] = await getProducts();  
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
