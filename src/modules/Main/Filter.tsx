import React from "react";
import styled, { css } from "styled-components";
import img1 from "./images/img1.svg";
import { Input, InputEl, InputField } from "../../components/Inputs";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";
import { useDispatch } from "react-redux";
import {
  setFilterName,
  setFilterPriceFrom,
  setFilterPriceTo,
} from "../../store/slices/FilterSlice";

const FilterEl = styled.div``;
const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const FilterText = styled.div<{ isActive: boolean }>`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  display: inline-flex;
  border-radius: 20px;
  font-size: 20px;
  align-items: center;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    margin-left: 5px;
    width: 25px;
    transform: rotate(180deg);
    object-fit: cover;
    height: 25px;
    background-repeat: no-repeat;
    background-size: 25px 25px;
    background-image: url(${img1});
  }

  ${(props) =>
    props.isActive &&
    css`
      border-radius: 20px 20px 0 0;
    `}
`;
const FilterMenuWrapper = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  max-width: 700px;
  width: 100%;
  max-height: 700px;
  transition: 1s;

  ${(props) =>
    !props.isActive &&
    css`
      max-height: 0;
    `}
`;

const FilterInput = styled.input<{ maxWidth?: string }>`
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  font-size: 18px;
  font-weight: 500;

  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "200px")};
`;

const FilterMenu = styled.div<{ isActive: boolean }>`
  border-radius: 0 20px 20px 20px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const FilterMenuText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor};
`;

const FilterMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${UI_Funcs.tabletMedia(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

const FilterApply = styled.button`
  display: inline-flex;
  align-self: flex-start;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;

  border-radius: 15px;
`;

export const Filter: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [name, setName] = React.useState("");
  const [priceFrom, setPriceFrom] = React.useState<number>();
  const [priceTo, setPriceTo] = React.useState<number>();
  const [isApplyDisabled, setIsApplyDisabled] = React.useState(false);

  const dispatch = useDispatch();

  function onFilterClick() {
    setIsActive(!isActive);
  }

  function nameChange(e: any) {
    setName(e.target.value);
  }

  function priceFromChange(e: any) {
    if (e.target.value.length > 5) return;
    setPriceFrom(e.target.value);
  }

  function priceToChange(e: any) {
    if (e.target.value.length > 5) return;
    setPriceTo(e.target.value);
  }

  function onApplyClick() {
    setIsActive(false);
    if (name) {
      dispatch(setFilterName(name));
    }
    if (priceFrom) {
      dispatch(setFilterPriceFrom(priceFrom));
    }
    if (priceTo) {
      dispatch(setFilterPriceTo(priceTo));
    }
  }

  return (
    <FilterEl>
      <FilterContainer>
        <FilterText onClick={onFilterClick} isActive={isActive}>
          Фильтрация товаров
        </FilterText>
        <FilterMenuWrapper isActive={isActive}>
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
        </FilterMenuWrapper>
      </FilterContainer>
    </FilterEl>
  );
};
