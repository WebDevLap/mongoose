import React from "react";
import { Card } from "./Card";
import { styled } from "styled-components";
import { Container } from "../../UI/components";
import { getProducts } from "../../API/API";
import { IProducts } from "../../API/API_TYPE";
import { Filter } from "./Filter";
import { useAppSelector } from "../../store/store";

const MainEl = styled.div``;

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

  React.useEffect(() => {
    (async function () {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  // React.useEffect(() => {
  //   let prodCo = products?.filter((el) => {
  //     if (!el.name.includes(filterName)) {
  //       return false;
  //     } else if (+el.priceWidthDiscount < filterPriceFrom) {
  //       return false;
  //     } else if (+el.priceWidthDiscount > filterPriceTo) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   console.log(prodCo);
  //   setFilteredProducts(prodCo);
  // }, [filterName, filterPriceTo, filterPriceFrom]);

  React.useEffect(() => {
    console.log(products);
    let prodCo = products?.filter((el) => {
      if (!el.name.includes(filterName)) {
        return false;
      } else if (+el.priceWidthDiscount < filterPriceFrom) {
        return false;
      } else if (+el.priceWidthDiscount > filterPriceTo) {
        return false;
      } else {
        return true;
      }
    });

    setFilteredProducts(prodCo);
  }, [products]);

  return (
    <MainEl>
      <MainContainer>
        <Filter />
        <MainList>
          {filteredProducts &&
            filteredProducts.map((el, index) => <Card {...el} key={index} />)}
        </MainList>
      </MainContainer>
    </MainEl>
  );
};
