export function useDebounce() {
  let setter: any = null;

  return function (func: Function, time: number) {
    if (setter) {
      clearTimeout(setter);
    }
    setter = setTimeout(func, time);
  };
}
