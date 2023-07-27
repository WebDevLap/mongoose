import styled, { css } from "styled-components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const FilterProps = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${UI_Funcs.pxToEm(10)} 0;
  gap: ${UI_Funcs.pxToEm(10)};
`;
export const FilterPropItem = styled.div<{ active?: boolean }>`
  padding: ${UI_Funcs.pxToEm(10)};
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

export const FilterPropText = styled.div`
  span {
    font-weight: 700;
  }
`;

export const FilterPropCross = styled.div`
  width: ${UI_Funcs.pxToRem(30)};
  height: ${UI_Funcs.pxToRem(22)};
  position: relative;
  margin-left: ${UI_Funcs.pxToEm(8)};
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
    width: ${UI_Funcs.pxToRem(2)};
    height: 80%;
    border-radius: ${UI_Funcs.pxToEm(3)};
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;