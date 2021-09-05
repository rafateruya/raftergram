import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ForgotPasswordProps {}

const ForgotPasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;
`;

const ForgotPasswordLabel = styled.div`
  color: #00376b;
`;

export const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const onClickForgotPassword = () => {
    console.log('TODO: implement forgot password');
  };

  return (
    <ForgotPasswordWrapper onClick={onClickForgotPassword}>
      <ForgotPasswordLabel>Esqueceu a senha ?</ForgotPasswordLabel>
    </ForgotPasswordWrapper>
  );
};
