import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {
  StoreButton,
  StoreType,
} from '../../../../components/StoreButton/StoreButton';
import { strings } from '../../../../resources/strings/strings';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DownloadAppProps {}

const DownloadAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoreButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  margin: 4px;
`;

export const DownloadApp: React.FC<DownloadAppProps> = () => (
  <DownloadAppWrapper>
    <Typography variant="body2">
      {strings.loginScreen.downloadAppLabel}
    </Typography>
    <StoreButtonsWrapper>
      <ButtonWrapper>
        <StoreButton type={StoreType.apple}>iOS</StoreButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <StoreButton type={StoreType.google}>Android</StoreButton>
      </ButtonWrapper>
    </StoreButtonsWrapper>
  </DownloadAppWrapper>
);
