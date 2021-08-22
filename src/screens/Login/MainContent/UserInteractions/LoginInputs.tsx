import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button/Button';
import { TextInput } from '../../../../components/TextInput/TextInput';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginInputsProps {}

const LoginInputsWrapper = styled.div`
  width: 200px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const LoginInputs: React.FC<LoginInputsProps> = () => {
  const [authId, setAuthId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginInputsWrapper>
      <TextInput
        label="Telefone, nome de usuário ou email"
        value={authId}
        setValue={setAuthId}
      />
      <TextInput label="Senha" value={password} setValue={setPassword} />
      <Button
        label="Entrar"
        backgroundColor="#0095f6"
        labelColor="#fff"
        onClick={() => {
          console.log('dsa');
        }}
      />
    </LoginInputsWrapper>
  );
};
