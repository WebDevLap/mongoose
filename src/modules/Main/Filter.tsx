import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setFilterName,
  setFilterPriceFrom,
  setFilterPriceTo,
} from '../../store/slices/FilterSlice';
import { FilterTracker } from './FilterTracker';
import {
  FilterEl,
  FilterContainer,
  FilterText,
  FilterMenuWrapper,
  FilterInput,
  FilterMenu,
  FilterMenuText,
  FilterMenuItem,
  FilterApply,
} from './Filter.styled';

export const Filter: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [name, setName] = React.useState('');
  const [priceFrom, setPriceFrom] = React.useState('');
  const [priceTo, setPriceTo] = React.useState('');
  const dispatch = useDispatch();
  

  function onFilterClick() {
    setIsActive(!isActive);
  }

  function nameChange(e: any) {
    setName(e.target.value);
  }

  function priceFromChange(e: any) {
    setPriceFrom(e.target.value);
  }

  function priceToChange(e: any) {
    setPriceTo(e.target.value);
  }

  function onApplyClick() {
    setIsActive(false);
    if (typeof name === 'string') {
      dispatch(setFilterName(name));
    }
    if (typeof +priceFrom === 'number') {
      dispatch(setFilterPriceFrom(+priceFrom));
    }
    if (typeof +priceTo === 'number') {
      dispatch(setFilterPriceTo(+priceTo));
    }
  }

  return (
    <FilterEl translate="no">
      <FilterContainer>
        <FilterText onClick={onFilterClick} isActive={isActive}>
          Фильтрация товаров
        </FilterText>
        <FilterMenuWrapper isActive={isActive}>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <FilterMenu isActive={isActive}>
              <FilterMenuItem>
                <FilterMenuText>Искать по названию: </FilterMenuText>
                <FilterInput value={name} onChange={(e) => nameChange(e)} />
              </FilterMenuItem>
              <FilterMenuItem>
                <FilterMenuText>Цена(€) : от</FilterMenuText>

                <FilterInput
                  value={priceFrom}
                  onChange={(e) => priceFromChange(e)}
                  maxWidth="60px"
                  placeholder="(€)"
                  type="number"
                />
                <FilterMenuText>до</FilterMenuText>
                <FilterInput
                  maxWidth="60px"
                  type="number"
                  placeholder="(€)"
                  value={priceTo}
                  onChange={(e) => priceToChange(e)}
                />
              </FilterMenuItem>
              <FilterApply onClick={onApplyClick}>Применить</FilterApply>
            </FilterMenu>
          </form>
        </FilterMenuWrapper>
        <FilterTracker setName={setName} setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} />
      </FilterContainer>
    </FilterEl>
  );
};
