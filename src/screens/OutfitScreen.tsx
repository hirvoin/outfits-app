import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";
import useQuery from "../hooks/useQuery";

import {
  FloatingActionButton,
  OutfitList,
  ScreenContainer,
} from "../components";

const OUTFITS = `query OutfitsQuery {
  outfits {
    id,
    date,
    garments {
      id,
      imageUri
    }
  }
}`;

function OutfitScreen({ navigation }) {
  const { loading, data } = useQuery(OUTFITS);
  const theme = useTheme();

  return (
    <ScreenContainer>
      {loading && (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      )}
      {!loading && <OutfitList data={data.outfits} />}
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("OutfitForm")}
      />
    </ScreenContainer>
  );
}

export default OutfitScreen;
