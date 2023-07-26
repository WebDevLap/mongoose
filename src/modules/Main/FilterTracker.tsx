import React from 'react';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../../store/store';
import {
  setFilterName,
  setFilterPriceFrom,
  setFilterPriceTo,
} from '../../store/slices/FilterSlice';
import { useDispatch } from 'react-redux';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';

const FilterProps = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  gap: 10px;
`;
const FilterPropItem = styled.div<{ active?: boolean }>`
  padding: 10px;
  background-color: #ffd78c;
  border-radius: ${UI_Funcs.pxToEm(10)};
  font-size: ${UI_Funcs.pxToRem(18)};
  display: none;
  align-items: center;

  ${(props) =>
    props.active &&
    css`
      display: flex;
    `}
`;

const FilterPropText = styled.div`
  span {
    font-weight: 700;
  }
`;

const FilterPropCross = styled.div`
  width: 30px;
  height: 22px;
  position: relative;
  margin-left: 8px;
  cursor: pointer;
  border-left: 2px solid ${({ theme }) => theme.colors.darkGrey};

  &::before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    width: 2px;
    height: 80%;
    border-radius: 3px;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const FilterTracker: React.FC<{
  setName: Function;
  setPriceTo: Function;
  setPriceFrom: Function;
}> = ({ setName, setPriceTo, setPriceFrom }) => {
  const nameApplyed = useAppSelector((state) => state.filter.name);
  const priceFromApplyed = useAppSelector((state) => state.filter.priceFrom);
  const priceToApplyed = useAppSelector((state) => state.filter.priceTo);

  const dispatch = useDispatch();

  function onNameCrossClick() {
    dispatch(setFilterName(''));
    setName('');
  }
  function onPriceToCrossClick() {
    dispatch(setFilterPriceTo(0));
    setPriceTo('');
  }
  function onPriceFromCrossClick() {
    dispatch(setFilterPriceFrom(0));
    setPriceFrom('');
  }

  return (
    <FilterProps translate="no">
      <FilterPropItem active={nameApplyed !== ''}>
        <FilterPropText>
          Фильтр по названию: <span> "{nameApplyed}"</span>
        </FilterPropText>
        <FilterPropCross onClick={onNameCrossClick}></FilterPropCross>
      </FilterPropItem>
      <FilterPropItem active={priceFromApplyed !== 0}>
        <FilterPropText>
          Цена от <span> {priceFromApplyed}€</span>
        </FilterPropText>
        <FilterPropCross onClick={onPriceFromCrossClick}></FilterPropCross>
      </FilterPropItem>
      <FilterPropItem active={priceToApplyed !== 0}>
        <FilterPropText>
          Цена до <span> {priceToApplyed}€</span>
        </FilterPropText>
        <FilterPropCross onClick={onPriceToCrossClick}></FilterPropCross>
      </FilterPropItem>
    </FilterProps>
  );
};
