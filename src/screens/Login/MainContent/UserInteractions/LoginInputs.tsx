import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button/Button';
import { TextInput as MuiTextInput } from '../../../../components/TextInput/TextInput';
import { spacingSizes } from '../../../../resources/dimens/spacingSizes';
import { strings } from '../../../../resources/strings/strings';
import { OtherOptionsDivider } from './OtherOptionsDivider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginInputsProps {}

const LoginInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${spacingSizes.xxl};
`;

const TextInputWrapper = styled.div`
  margin: 0 0 ${spacingSizes.xs};
  display: grid;
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacingSizes.s};
  display: grid;
`;

export const LoginInputs: React.FC<LoginInputsProps> = () => {
  const [authId, setAuthId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginInputsWrapper>
      <TextInputWrapper>
        <MuiTextInput
          label={strings.loginScreen.authIdInputLabel}
          value={authId}
          setValue={setAuthId}
        />
      </TextInputWrapper>
      <TextInputWrapper>
        <MuiTextInput
          label={strings.loginScreen.passwordInputLabel}
          value={password}
          setValue={setPassword}
        />
      </TextInputWrapper>
      <ButtonWrapper>
        <Button
          label={strings.loginScreen.loginButtonLabel}
          backgroundColor="#0095f6"
          labelColor="#fff"
          onClick={() => {
            console.log('TODO: implement login button');
          }}
        />
      </ButtonWrapper>
      <OtherOptionsDivider />
    </LoginInputsWrapper>
  );
};
