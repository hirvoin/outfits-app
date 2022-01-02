import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import { useTheme } from "styled-components";

import fetchGraphQL from "../services/fetchGraphQL";

const LOGIN = `mutation Login($input: Login!) {
  login(input:$input)
}`;

interface Props {
  children: React.ReactNode;
}

type Credentials = {
  username: string;
  password: string;
};

type AuthValue = {
  token: string;
  login: (credentials: Credentials) => void;
  logout: () => void;
};

const defaultValue: AuthValue = {
  token: "",
  login: () => null,
  logout: () => null,
};

const AuthContext = createContext<AuthValue>(defaultValue);

function AuthProvider({ children }: Props) {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const getToken = async () => {
      setLoading(true);
      try {
        const savedToken = await AsyncStorage.getItem("token");
        if (savedToken != null) {
          setToken(savedToken);
        }
      } catch (error) {
        Toast.show("Please log in again.", {
          backgroundColor: theme.colors.salmon,
        });
      }
      setLoading(false);
    };
    getToken();
  }, [theme.colors.salmon, token]);

  const login = useCallback(
    async ({ username, password }: Credentials) => {
      const queryVariables = {
        input: {
          username,
          password,
        },
      };

      try {
        const result = await fetchGraphQL(LOGIN, queryVariables);
        if (result.errors) {
          Toast.show("Invalid credentials.", {
            backgroundColor: theme.colors.salmon,
          });
        } else {
          setToken(result.data.login);
          await AsyncStorage.setItem("token", result.data.login);
          Toast.show("Logged in succesfully.", {
            backgroundColor: theme.colors.tertiary,
          });
        }
      } catch (error) {
        Toast.show("Network error.", {
          backgroundColor: theme.colors.salmon,
        });
      }
    },
    [theme.colors]
  );

  // Todo: fix toasting
  const logout = useCallback(async () => {
    setToken("");
    await AsyncStorage.removeItem("token");
    Toast.show("Logged out succesfully.", {
      backgroundColor: theme.colors.tertiary,
    });
  }, [theme.colors.tertiary]);

  const value = useMemo(
    () => ({ token, login, logout }),
    [login, logout, token]
  );

  if (loading) {
    return <ActivityIndicator color={theme.colors.primary} size="large" />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
