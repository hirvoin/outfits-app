import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import useQuery from "../hooks/useQuery";
import {
  FloatingActionButton,
  OutfitList,
  ScreenContainer,
} from "../components";

import { OutfitStackScreenParams } from "../navigation";

type Props = NativeStackScreenProps<OutfitStackScreenParams, "OutfitTab">;

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

function OutfitScreen({ navigation }: Props) {
  const { data } = useQuery(OUTFITS);

  return (
    <ScreenContainer>
      <OutfitList data={data.outfits} />
      <FloatingActionButton
        iconName="plus"
        label="Add outfit"
        onPress={() => navigation.navigate("OutfitForm")}
      />
    </ScreenContainer>
  );
}

export default OutfitScreen;
