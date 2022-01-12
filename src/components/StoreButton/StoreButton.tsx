import React from 'react';
import styled from 'styled-components';

export enum StoreType {
  apple = 'apple',
  google = 'google',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StoreButtonProps {
  type: StoreType;
}

const getLogoAndTexts = (storeType: StoreType) => {
  switch (storeType) {
    default:
    case StoreType.apple:
      return {
        logo: 'logo da apple',
        topText: 'Baixar na',
        storeText: 'App Store',
      };
    case StoreType.google:
      return {
        logo: 'logo da Google',
        topText: 'Disponível no',
        storeText: 'Google Play',
      };
  }
};

const StoreButtonWrapper = styled.div`
  background-color: black;
  width: 136px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const StoreButton: React.FC<StoreButtonProps> = ({ type }) => {
  const { logo, storeText, topText } = getLogoAndTexts(type);
  return (
    <StoreButtonWrapper>
      {topText}
      <br />
      {storeText}
    </StoreButtonWrapper>
  );
};
