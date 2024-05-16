import { StyleSheet, View, Image } from "react-native";
function TweetProfile(props) {
    const imagePaths = {
        haldona : require("../assets/haldona.jpeg"),
        edmund : require("../assets/profile_image.jpg"),
        
      };
  return (
    <View style={styles.profile_container}>
      <Image
        style={[styles.profile_image_style]}
        source={imagePaths[props.imagePath]}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  profile_image_style: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    marginTop: 10,
  },
  profile_container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
});

export default TweetProfile;
