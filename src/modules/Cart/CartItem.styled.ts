import styled, { css } from 'styled-components';
import { Container } from '../../UI/components';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';

export const CartItemEl = styled.div``;
export const CartItemContainer = styled(Container)`
  display: flex;
  border: 2px solid ${({theme}) => theme.colors.textColor};
  padding: 5px;
  border-radius: 20px;
  align-items: center;
  gap: 20px;

  ${UI_Funcs.phoneMedia(css`
    flex-direction: column;
  `)}
`;
export const CartItemImg = styled.img`
  height: 150px;
  object-fit: cover;
  max-width: 150px;
  border-radius: 20px;
`;
export const CartItemContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const CartItemTitle = styled.div`
margin-bottom: 10px;
color: ${({theme}) => theme.colors.textColor}
`;
