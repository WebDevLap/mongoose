import React from 'react';
import { VoiceWindow } from './VoiceWindow';
import { FooterEl, FooterContainer, FooterList, FooterItem } from './Footer.styled';

export const Footer: React.FC = () => {
  const [isVoiceActive, setIsVoiceActive] = React.useState<boolean>(false);
  const [link, setLink] = React.useState<string>('');
  function onFooterItemClick(link: string) {
    setLink(link);
    setIsVoiceActive((prev) => !prev);
  }

  return (
    <FooterEl>
      <VoiceWindow link={link} active={isVoiceActive} setActive={setIsVoiceActive} />
      <FooterContainer>
        <FooterList>
          <FooterItem onClick={(e: any) => onFooterItemClick(e.target.innerText)}>
            Мой гитхаб: <span>https://github.com/WebDevLap/</span>
          </FooterItem>
          <FooterItem onClick={(e: any) => onFooterItemClick(e.target.innerText)}>
            Мой телеграмм: <span>https://t.me/AkhmedFr</span>
          </FooterItem>
        </FooterList>
      </FooterContainer>
    </FooterEl>
  );
};
