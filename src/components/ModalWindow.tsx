import React from 'react';
import { useAppSelector } from '../store/store';
import { ModalWindowEl, Download, Texte } from './ModalWindow.styled';

export const ModalWindow = () => {
  const ModalWindowStack = useAppSelector((state) => state.modalWindow.modalWindowStack);

  return (
    <ModalWindowEl active={ModalWindowStack.length !== 0}>
      <Download></Download>
      <Texte>{ModalWindowStack[0]}</Texte>
    </ModalWindowEl>
  );
};
