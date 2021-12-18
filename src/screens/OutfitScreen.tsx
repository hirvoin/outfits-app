import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";
import useQuery from "../hooks/useQuery";

import {
  FloatingActionButton,
  OutfitList,
  OutfitListItemProps,
} from "../components";

const outfits: OutfitListItemProps[] = [
  { id: 1, dateLabel: "Weekday 00.00.0000" },
  { id: 2, dateLabel: "Weekday 00.00.0000" },
  { id: 3, dateLabel: "Weekday 00.00.0000" },
  { id: 4, dateLabel: "Weekday 00.00.0000" },
  { id: 5, dateLabel: "Weekday 00.00.0000" },
  { id: 6, dateLabel: "Weekday 00.00.0000" },
];

const OUTFITS = `query OutfitsQuery {
  outfits {
    id,
    date,
    garments {
      id,
      title
    }
  }
}`;

function OutfitScreen({ navigation, route }) {
  const { loading, data } = useQuery(OUTFITS);
  const theme = useTheme();
  console.log({ data });

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      )}
      {!loading && <OutfitList data={outfits} />}
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
