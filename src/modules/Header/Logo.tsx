import React from 'react';
import {HeaderLogo,
  HeaderLogoImg,
  HeaderLogoText} from './Logo.styled'

export const Logo: React.FC<{ secondType?: boolean }> = ({ secondType = false }) => {
  return (
    <HeaderLogo to="/" secondType={secondType} translate="no">
      <HeaderLogoImg
        src="https://img.icons8.com/?size=1x&id=kYJdhqiRLBFn&format=png"
        alt="weth logo"
      />
      <HeaderLogoText secondType={secondType}>MONGOOSE</HeaderLogoText>
    </HeaderLogo>
  );
};
