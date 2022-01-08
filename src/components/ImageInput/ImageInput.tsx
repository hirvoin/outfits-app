import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";

import FloatingActionButton from "../FloatingActionButton/FloatingActionButton";

const Container = styled.View`
  margin: 8px;
  height: 300px;
  border-radius: 8px;
  width: 100%;
`;

const StyledImage = styled.Image`
  border-radius: 8px;
  width: undefined;
  height: undefined;
  flex: 1;
`;

export interface Props {
  imageUri: string;
}

const ImageInput = ({ imageUri }: Props) => {
  const [showButtons, setShowButtons] = useState(false);
  const [cameraPermission, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [mediaPermission, requestMediaPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const [capturedPicture, setCapturedPicture] =
    useState<ImagePicker.ImageInfo | null>(null);

  useEffect(() => {
    (async () => {
      if (!cameraPermission?.granted) {
        await requestCameraPermission();
      }

      if (!mediaPermission?.granted) {
        await requestMediaPermission();
      }

      console.log({ cameraPermission });
      console.log({ mediaPermission });
    })();
  }, [
    cameraPermission,
    mediaPermission,
    requestCameraPermission,
    requestMediaPermission,
  ]);

  const source =
    capturedPicture || imageUri
      ? { uri: capturedPicture?.uri ?? imageUri }
      : // eslint-disable-next-line global-require
        require("../../../assets/icon.png");

  const toggleButtons = () => setShowButtons(!showButtons);

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setCapturedPicture(result);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setCapturedPicture(result);
    }
  };

  return (
    <Container>
      <StyledImage source={source} />
      <FloatingActionButton
        iconName={showButtons ? "chevron-right" : "pencil"}
        onPress={toggleButtons}
      />
      {showButtons && (
        <>
          <FloatingActionButton
            iconName="camera"
            onPress={takePicture}
            right={80}
          />
          <FloatingActionButton
            iconName="file-plus"
            onPress={pickImage}
            right={146}
          />
        </>
      )}
    </Container>
  );
};

export default ImageInput;
