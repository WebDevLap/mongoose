import styled, { css } from 'styled-components';
import { Container } from '../../UI/components';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';

export const CartItemEl = styled.div<{ isDeliting: boolean }>`
  max-height: 500px;
  position: relative;
  z-index: 5;
  overflow: hidden;
  transition: 900ms;
  transition-timing-function: linear;

  ${(props) =>
    props.isDeliting &&
    css`
      z-index: 2;
      max-height: 0;
    `}
`;
export const CartItemContainer = styled(Container)`
  display: flex;
  border: ${UI_Funcs.pxToEm(2)} solid ${({ theme }) => theme.colors.textColor};
  padding: ${UI_Funcs.pxToEm(5)};
  border-radius: ${UI_Funcs.pxToEm(20)};
  align-items: center;
  gap: ${UI_Funcs.pxToEm(20)};

  ${UI_Funcs.phoneMedia(css`
    flex-direction: column;
  `)}
`;
export const CartItemImg = styled.img`
  height: ${UI_Funcs.pxToRem(150)};
  object-fit: cover;
  border-radius: ${UI_Funcs.pxToEm(20)};
  width: ${UI_Funcs.pxToRem(150)};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 10px;
`;
export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CartItemTitle = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const CartFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CartDeleteElement = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  height: 100%;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.orange};
`;
