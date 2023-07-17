import { css, styled } from "styled-components";
import { Container } from "../../UI/components";
import { UI_Funcs } from "../../UI/UI_Funcs/UI_Funcs";

export const MainEl = styled.section``;
export const MainContainer = styled(Container)``;

export const Message = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  max-width: 650px;
  border-radius: ${UI_Funcs.pxToEm(10)};
  margin-bottom: ${UI_Funcs.pxToEm(8)};
`;

export const WeatherData = styled.div`
  max-width: 650px;
  padding: 20px;
  background-size: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 20px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  border-radius: ${UI_Funcs.pxToEm(10)};
  margin-bottom: ${UI_Funcs.pxToEm(15)};
  &::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    background-image: url("https://avatars.mds.yandex.net/i?id=1a546d486f4901a3ff3cc3a452677331719c68a8-9181263-images-thumbs&n=13");
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    z-index: -2;
    left: 0;
    height: 100%;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
`;
export const WeatherDataTitle = styled.h2`
  font-weight: 600;
  font-size: ${UI_Funcs.pxToRem(18)};
  margin-bottom: ${UI_Funcs.pxToEm(8)};
`;

export const WeatherDataSubtitle = styled.p`
  margin-bottom: ${UI_Funcs.pxToEm(15)};
`;

export const WeatherDataDegree = styled.div`
  display: flex;
`;

export const DegreeText = styled.div`
  font-size: ${UI_Funcs.pxToRem(50)};
  font-weight: 600;
  margin-right: ${UI_Funcs.pxToEm(20)};
`;

export const DegreeSubtext = styled.div<{ first: string; second: string }>`
  display: flex;
  flex-direction: column;

  &:before {
    content: attr(first);
    display: block;
  }
  &:after {
    content: "Ощущается как: " attr(second) "°";
    display: block;
  }
`;

export const WeatherDataAddInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  justify-content: space-between;

  ${UI_Funcs.phoneMedia(css`
  flex-direction: column;
  align-items: start;
  `)}
`;
export const AddInfoItem = styled.div<{ string: string | number }>`
  display: flex;
  align-items: center;

  &:after {
    margin-left: ${UI_Funcs.pxToEm(5)};
  }

  &:nth-child(1) {
    &:after {
      content: attr(string) " m/c";
    }
  }
  &:nth-child(2) {
    &:after {
      content: attr(string) " %";
    }
  }
  &:nth-child(3) {
    &:after {
      content: attr(string) " мм рт. ст.";
    }
  }
`;

export const Img1 = styled.img.attrs({
  src: "https://img.icons8.com/?size=1x&id=EWjiSSGn5H9O&format=png",
})`
  width: 24px;
  height: 24px;
`;
export const Img2 = styled.img.attrs({
  src: "https://img.icons8.com/?size=1x&id=xE95vxOYeH5E&format=png",
})`
  width: 24px;
  height: 24px;
`;
export const Img3 = styled.img.attrs({
  src: "https://img.icons8.com/?size=1x&id=79551&format=png",
})`
  width: 24px;
  height: 24px;
`;
