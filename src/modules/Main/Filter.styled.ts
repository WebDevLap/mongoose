import styled, { css } from "styled-components";
import img1 from './images/img1.svg';
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";


export const FilterEl = styled.div``;
export const FilterContainer = styled.div`
  margin-bottom: ${UI_Funcs.pxToEm(20)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const FilterText = styled.div<{ isActive: boolean }>`
  padding: ${UI_Funcs.pxToEm(20, 20)};
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;
  display: inline-flex;
  border-radius: ${UI_Funcs.pxToEm(20, 20)};
  font-size: ${UI_Funcs.pxToRem(20)};
  align-items: center;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    margin-left: ${UI_Funcs.pxToEm(5)};
    width: ${UI_Funcs.pxToRem(25)};
    transform: rotate(180deg);
    object-fit: cover;
    height: ${UI_Funcs.pxToRem(25)};
    background-repeat: no-repeat;
    background-size: ${UI_Funcs.pxToRem(25)} ${UI_Funcs.pxToRem(25)};
    background-image: url(${img1});
  }

  ${(props) =>
    props.isActive &&
    css`
      border-radius: ${UI_Funcs.pxToEm(20)} ${UI_Funcs.pxToEm(20)} 0 0;
    `}
`;
export const FilterMenuWrapper = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  max-width: ${UI_Funcs.pxToRem(700)};
  width: 100%;
  max-height: ${UI_Funcs.pxToRem(700)};
  transition: 1s;

  ${(props) =>
    !props.isActive &&
    css`
      max-height: 0;
    `}
`;

export const FilterInput = styled.input<{ maxWidth?: string }>`
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  font-size: ${UI_Funcs.pxToRem(18)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '200px')};

  &::placeholder {
    color: inherit;
  }
`;

export const FilterMenu = styled.div<{ isActive: boolean }>`
  border-radius: 0 ${UI_Funcs.pxToEm(20)} ${UI_Funcs.pxToEm(20)} ${UI_Funcs.pxToEm(20)};
  width: 100%;
  padding: ${UI_Funcs.pxToEm(20)};
  border: 3px solid ${({ theme }) => theme.colors.textColor};
  display: flex;
  flex-direction: column;
  row-gap: ${UI_Funcs.pxToEm(20)};
`;

export const FilterMenuText = styled.div`
  font-size: ${UI_Funcs.pxToRem(18)};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const FilterMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${UI_Funcs.pxToEm(10)};

  ${UI_Funcs.tabletMedia(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

export const FilterApply = styled.button`
  display: inline-flex;
  align-self: flex-start;
  padding: ${UI_Funcs.pxToEm(20)};
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 600;

  border-radius: ${UI_Funcs.pxToEm(15)};
`;
