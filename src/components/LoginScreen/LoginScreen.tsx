import React from "react";
import styled from "styled-components/native";

import Typography from "../Typography/Typography";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
`;

const Title = styled(Typography)`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin: auto 0px;
`;

const OpacityContainer = styled.KeyboardAvoidingView`
  background-color: #ffffff90;
  padding: 12px 24px;
`;

const InputContainer = styled.View`
  margin-top: 8px;
`;

const StyledTextInput = styled.TextInput`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.medium};
  height: 50px;
  border-radius: 4px;
  padding: 4px 12px;
`;

const Label = styled(Typography)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  padding: 4px 8px;
`;

const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  margin: 32px 0px 24px 0px;
`;

const ButtonLabel = styled(Typography)`
  margin: 0 4px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

export interface Props {
  password: string;
  username: string;
  handlePassword: (value: string) => void;
  handleUsername: (value: string) => void;
  handleSubmit: () => void;
}

const LoginScreen = ({
  username,
  password,
  handlePassword,
  handleUsername,
  handleSubmit,
}: Props) => {
  const source = require("../../../assets/clothes.jpg");

  return (
    <Container>
      <BackgroundImage source={source}>
        <Title fontWeight="light">Outfits</Title>
        <OpacityContainer behavior="padding">
          <InputContainer>
            <Label>Username</Label>
            <StyledTextInput value={username} onChangeText={handleUsername} />
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <StyledTextInput
              secureTextEntry
              value={password}
              onChangeText={handlePassword}
            />
          </InputContainer>
          <SubmitButton onPress={handleSubmit}>
            <ButtonLabel>Log in</ButtonLabel>
          </SubmitButton>
        </OpacityContainer>
      </BackgroundImage>
    </Container>
  );
};

export default LoginScreen;
