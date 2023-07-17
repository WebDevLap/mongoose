import { css } from "styled-components";
import { UI_Enums } from "../UI_Enums";

export function pxToRem(px: number) {
  return px / UI_Enums.remSize + "rem";
}

export function pxToEm(px: number, parent?: number) {
  if (parent) {
    return px / parent + "em";
  } else {
    return px / UI_Enums.remSize + "em";
  }
}

export function tabletMedia(v: any) {
  return css`
    @media (max-width: 747px) {
      ${v}
    }
  `;
}

export function phoneMedia(v: any) {
  return css`
    @media (max-width: 479px) {
      ${v}
    }
  `;
}
