import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={340}
    height={495}
    viewBox="0 0 340 495"
    backgroundColor="#ddec09"
    foregroundColor="#ff9838"
    {...props}>
    <rect x="35" y="10" rx="20" ry="20" width="270" height="270" />
    <rect x="20" y="290" rx="5" ry="5" width="300" height="36" />
    <rect x="20" y="346" rx="5" ry="5" width="150" height="30" />
    <rect x="40" y="444" rx="15" ry="15" width="260" height="45" />
  </ContentLoader>
);

export default CardLoader;
