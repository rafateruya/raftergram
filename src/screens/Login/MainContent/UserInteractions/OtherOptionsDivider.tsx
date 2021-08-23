import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OtherOptionsDividerProps {}

const DividerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const Divider = styled.div`
  background: #dbdbdb;
  height: 1px;
  flex: 1;
`;

const OtherOptionsLabel = styled(Typography)`
  margin: 0 10px;
`;

export const OtherOptionsDivider = () => (
  <DividerWrapper>
    <Divider />
    <OtherOptionsLabel>OU</OtherOptionsLabel>
    <Divider />
  </DividerWrapper>
);
