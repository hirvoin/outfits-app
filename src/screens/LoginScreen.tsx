import React, { useEffect, useState } from "react";

import { Login } from "../components";
import { useAuth } from "../context/auth";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  useEffect(() => {
    setPassword("");
  }, []);

  const handleSubmit = () => {
    login({ username, password });
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
}

export default LoginScreen;
