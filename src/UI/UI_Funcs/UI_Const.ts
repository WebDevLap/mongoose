import { UI_Enums } from "../UI_Enums";

export function pxToRem(px: number) {
  return px / UI_Enums.remSize + 'rem';
}

export function pxToEm(px: number, parent?: number) {
  if (parent) {
    return px / parent + 'em';
  } else {
    return  px / UI_Enums.remSize + 'em';
  }
}
