import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
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

const ButtonPlaceholder = styled.div`
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  min-width: 100px;
`;

export const DownloadApp: React.FC<DownloadAppProps> = () => (
  <DownloadAppWrapper>
    <Typography variant="body2">
      {strings.loginScreen.downloadAppLabel}
    </Typography>
    <StoreButtonsWrapper>
      <ButtonPlaceholder>iOS</ButtonPlaceholder>
      <ButtonPlaceholder>Android</ButtonPlaceholder>
    </StoreButtonsWrapper>
  </DownloadAppWrapper>
);
