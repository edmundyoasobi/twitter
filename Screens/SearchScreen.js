import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

function SearchScreen() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scaledWidth, setScaledWidth] = useState(0);
  const [scaledHeight, setScaledHeight] = useState(0);
  const style1 = { width: scaledWidth, height: scaledHeight };
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
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
      setSelectedImage({
        localUri: pickerResult.uri,
        height: pickerResult["assets"][0]["height"],
        width: pickerResult["assets"][0]["width"],
      });
      if (pickerResult) {
        const widthRatio = screenWidth / pickerResult["assets"][0]["width"];
        const heightRatio = screenHeight / pickerResult["assets"][0]["height"];
        const scalingRatio = Math.min(widthRatio, heightRatio);
        setScaledHeight(pickerResult["assets"][0]["height"] * scalingRatio);
        setScaledWidth(pickerResult["assets"][0]["width"] * scalingRatio);
      }
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ScrollView>
        <View>
          {selectedImage && (
            <View style={[{ position: "relative" }, style1]}>
              <Image
                resizeMode="contain"
                source={{ uri: selectedImage.localUri }}
                style={{ width: "100%", height: "100%" }}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 10, // Adjust this value for desired top offset
                  right: 10, // Adjust this value for desired right offset
                  zIndex: 1, // Ensure the button is above the image
                  // Additional styles for the button (e.g., background color, padding, etc.)
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: 15,
                  height: 30,
                  width: 30,
                }}
              >
                {/* Button content */}
                {/* You can place your button icon or text here */}
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 10 }}
                  >
                    x
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.uri }}
                style={{
                  width: 80,
                  height: 80,
                  margin: 5,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  borderColor: "#e0dcdc",
                }}
              />
            ))}
          </View>
          <Pressable onPress={openImagePickerAsync}>
            <View
              style={{
                width: 80,
                height: 80,
                margin: 5,
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: "#e0dcdc",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="image" size={30} color="#1DA1F2" />
            </View>
          </Pressable>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default SearchScreen;
