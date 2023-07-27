import styled from 'styled-components';
import { Container } from '../../UI/components';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';

export const Cart = styled.div``;

export const CartContainer = styled(Container)``;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${UI_Funcs.pxToEm(30)};
`;

export const CartInfo = styled.div`
  margin-top: 40px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export const CartPrice = styled.div`
  font-weight: 500;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};

  span {
    font-weight: 700;
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.colors.orange};

    border-radius: 8px;
    padding: 5px;
  }
`;
