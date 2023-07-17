import { css } from "styled-components";
import { UI_Enums } from "../UI_Enums";
import { UI_Funcs } from "./UI_Funcs";

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
    @media (max-width: ${UI_Funcs.pxToEm(747)}) {
      ${v}
    }
  `;
}

export function phoneMedia(v: any) {
  return css`
    @media (max-width: ${UI_Funcs.pxToEm(479)}) {
      ${v}
    }
  `;
}

export function pcMedia(v: any) {
  return css`
    @media (max-width: ${UI_Funcs.pxToEm(992)}) {
      ${v}
    }
  `;
}
