import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { spacingSizes } from '../../../../resources/dimens/spacingSizes';
import { strings } from '../../../../resources/strings/strings';
import { UserInteractionBox } from './UserInteractionBox';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SignUpBoxProps {}

const SignUpTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NoAccountLabelWrapper = styled.div`
  margin-right: ${spacingSizes.xs};
`;

export const SignUpBox: React.FC<SignUpBoxProps> = () => (
  <UserInteractionBox>
    <SignUpTextWrapper>
      <NoAccountLabelWrapper>
        <Typography variant="body1">
          {strings.loginScreen.noAccountLabel}
        </Typography>
      </NoAccountLabelWrapper>
      <Link href="accounts/emailsignup">
        <Box fontWeight="fontWeightBold">
          {strings.loginScreen.signUpButtonLabel}
        </Box>
      </Link>
    </SignUpTextWrapper>
  </UserInteractionBox>
);
