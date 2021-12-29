import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import LoginScreen from "./LoginScreen";

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

storiesOf("Login Screen", module).add("Basic", () => <Basic />);

const Basic = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <Wrapper>
      <LoginScreen
        username={username}
        password={password}
        handleUsername={(v) => setUsername(v)}
        handlePassword={(v) => setPassword(v)}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  );
};
