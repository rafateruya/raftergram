import { Facebook } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FacebookLoginProps {}

const FacebookLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 8px 0;
`;

const facebookBrandColor = '#385185';

const FacebookIcon = styled(Facebook)`
  color: ${facebookBrandColor};
`;

const FacebookLoginLabel = styled.div`
  color: ${facebookBrandColor};
  margin-left: 4px;
`;

export const FacebookLogin: React.FC<FacebookLoginProps> = () => {
  const onClickFacebookLogin = () => {
    console.log('TODO: implement facebook login');
  };
  return (
    <FacebookLoginWrapper onClick={onClickFacebookLogin}>
      <FacebookIcon />
      <FacebookLoginLabel>Entrar com o Facebook</FacebookLoginLabel>
    </FacebookLoginWrapper>
  );
};
