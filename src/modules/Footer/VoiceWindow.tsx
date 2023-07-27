import React from 'react';
import {
  VoiceWindowEl,
  VoiceWindowTitle,
  VoiceWindowChoice,
  ChoiceItem,
} from './VoiceWindow.styled';

interface IVoiceWindow {
  active: boolean;
  setActive: (v: boolean) => void;
  link: string;
}

export const VoiceWindow: React.FC<IVoiceWindow> = ({ active, setActive, link }) => {
  return (
    <VoiceWindowEl active={active}>
      <VoiceWindowTitle>
        Разрешить открытие ссылки: <b>{link}</b> на новой вкладке
      </VoiceWindowTitle>
      <VoiceWindowChoice>
        <ChoiceItem
          href={link}
          target="_blank"
          onClick={() => {
            setActive(false);
          }}>
          Да
        </ChoiceItem>
        <ChoiceItem
          href={link}
          onClick={() => {
            setActive(false);
          }}>
          Нет
        </ChoiceItem>
        <ChoiceItem
          onClick={() => {
            setActive(false);
          }}>
          Закрыть
        </ChoiceItem>
      </VoiceWindowChoice>
    </VoiceWindowEl>
  );
};
