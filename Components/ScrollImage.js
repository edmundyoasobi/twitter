import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

function ScrollImage(props) {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [images, setImages] = useState([]);

  const selectedImageFromScrollViewHanlder = (index) => {
    selectedImageFromScrollView = images[index];

    props.setSelectedImage({
      localUri: selectedImageFromScrollView["uri"],
      height: selectedImageFromScrollView["height"],
      width: selectedImageFromScrollView["width"],
    });
    if (selectedImageFromScrollView) {
      const widthRatio =
        (screenWidth - 100) / selectedImageFromScrollView["width"];
      const heightRatio = screenHeight / selectedImageFromScrollView["height"];
      const scalingRatio = Math.min(widthRatio, heightRatio);
      props.setScaledHeight(selectedImageFromScrollView["height"] * scalingRatio);
      props.setScaledWidth(selectedImageFromScrollView["width"] * scalingRatio);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need media library permissions to make this work!");
      } else {
        // Access media library here
        // For example:
        const assets = await MediaLibrary.getAssetsAsync({
          first: 10, // Retrieve the first 10 images
          mediaType: MediaLibrary.MediaType.photo, // Filter by photos
          sortBy: [MediaLibrary.SortBy.creationTime], // Sort by creation time
        });
        setImages(assets["assets"] || []);
      }
    })();
  }, []);

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Allows selecting multiple images (this might not work as expected in Expo),
      selectionLimit: 4,
    });

    if (!pickerResult.canceled) {
      const imageHeight = pickerResult["assets"][0]["height"];
      const imageWidth = pickerResult["assets"][0]["width"];
      props.setSelectedImage({
        localUri: pickerResult["assets"][0]["uri"],
        height: imageHeight,
        width: imageWidth,
      });
      if (pickerResult) {
        const widthRatio = (screenWidth - 100) / imageWidth;
        const heightRatio = screenHeight / imageHeight;
        const scalingRatio = Math.min(widthRatio, heightRatio);
        props.setScaledHeight(imageHeight * scalingRatio);
        props.setScaledWidth(imageWidth * scalingRatio);
      }
    }
  };

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          left: 0,
          right: 0,
        
        },
        props.scrollImageStyle,
      ]}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
          {images.map((image, index) => (
            <Pressable
              key={index}
              onPress={() => selectedImageFromScrollViewHanlder(index)}
            >
              <Image
                source={{ uri: image.uri }}
                style={styles.imageContainer}
              />
            </Pressable>
          ))}
        </View>
        <Pressable onPress={openImagePickerAsync}>
          <View style={styles.imageContainer}>
            <Icon name="image" size={30} color="#1DA1F2" />
          </View>
        </Pressable>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    margin: 3,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#e0dcdc",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ScrollImage;
