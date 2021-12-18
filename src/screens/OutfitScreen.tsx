import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";
import useQuery from "../hooks/useQuery";

import { FloatingActionButton, OutfitList } from "../components";

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

function OutfitScreen({ navigation, route }) {
  const { loading, data } = useQuery(OUTFITS);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      )}
      {!loading && <OutfitList data={data.outfits} />}
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("OutfitForm")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OutfitScreen;
