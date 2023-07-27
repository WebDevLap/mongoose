import { styled } from 'styled-components';
import { Container } from '../../UI/components';
import { UI_Funcs } from '../../UI/UI_Funcs/UI_Funcs';
export const FooterEl = styled.footer``;

export const FooterContainer = styled(Container)`
  min-height: ${UI_Funcs.pxToRem(50)};
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
  border-top: 2px solid ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${UI_Funcs.pxToRem(30)};
  padding-top: ${UI_Funcs.pxToEm(5)};
  margin-top: ${UI_Funcs.pxToEm(20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterList = styled.ul``;
export const FooterItem = styled.li`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: ${UI_Funcs.pxToEm(12)};

  span {
    color: ${(props) => props.theme.colors.orange};
    cursor: pointer;
    word-break: break-all;
  }
`;