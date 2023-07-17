import React from "react";
import { styled } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";
import { VoiceWindow } from "./VoiceWindow";

const FooterEl = styled.footer``;

const FooterContainer = styled(Container)`
  min-height: ${UI_Funcs.pxToRem(50)};
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
  border-top: 2px solid ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: ${UI_Funcs.pxToRem(30)};
  padding-top: ${UI_Funcs.pxToEm(5)};
`;

const FooterList = styled.ul``;
const FooterItem = styled.li`
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: ${UI_Funcs.pxToEm(12)};

  span {
    color: ${(props) => props.theme.colors.orange};
    cursor: pointer;
    word-break: break-all;
  }
`;

export const Footer: React.FC = () => {
  const [isVoiceActive, setIsVoiceActive] = React.useState<boolean>(false);
  const [link, setLink] = React.useState<string>("");
  function onFooterItemClick(link: string) {
    setLink(link);
    setIsVoiceActive(!isVoiceActive);
  }

  return (
    <FooterEl>
      <VoiceWindow
        link={link}
        active={isVoiceActive}
        setActive={setIsVoiceActive}
      />
      <FooterContainer>
        <FooterList>
          <FooterItem>
            Мой гитхаб:{" "}
            <span onClick={(e: any) => onFooterItemClick(e.target.innerText)}>
              https://github.com/WebDevLap/
            </span>
          </FooterItem>
          <FooterItem>
            Мой телеграмм:{" "}
            <span onClick={(e: any) => onFooterItemClick(e.target.innerText)}>
              https://t.me/AkhmedFr
            </span>
          </FooterItem>
        </FooterList>
      </FooterContainer>
    </FooterEl>
  );
};
