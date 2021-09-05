import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button/Button';
import { TextInput as MuiTextInput } from '../../../../components/TextInput/TextInput';
import { OtherOptionsDivider } from './OtherOptionsDivider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginInputsProps {}

const horizontalPadding = 40;

const LoginInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${horizontalPadding}px;
`;

const TextInputWrapper = styled.div`
  margin: 0 0 6px;
  display: grid;
`;

const ButtonWrapper = styled.div`
  margin-top: 8px;
  display: grid;
`;

export const LoginInputs: React.FC<LoginInputsProps> = () => {
  const [authId, setAuthId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginInputsWrapper>
      <TextInputWrapper>
        <MuiTextInput
          label="Telefone, nome de usuário ou email"
          value={authId}
          setValue={setAuthId}
        />
      </TextInputWrapper>
      <TextInputWrapper>
        <MuiTextInput label="Senha" value={password} setValue={setPassword} />
      </TextInputWrapper>
      <ButtonWrapper>
        <Button
          label="Entrar"
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
