import React from 'react';
import { useAppSelector } from '../../store/store';
import {
  setFilterName,
  setFilterPriceFrom,
  setFilterPriceTo,
} from '../../store/slices/FilterSlice';
import { useDispatch } from 'react-redux';
import {
  FilterProps,
  FilterPropItem,
  FilterPropText,
  FilterPropCross,
} from './FilterTracker.styled';

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
