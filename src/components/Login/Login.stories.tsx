import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";

import Login from "./Login";

storiesOf("Login Screen", module).add("Basic", () => <Basic />);

const Basic = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <Login
      username={username}
      password={password}
      handleUsername={(v) => setUsername(v)}
      handlePassword={(v) => setPassword(v)}
      handleSubmit={handleSubmit}
    />
  );
};
