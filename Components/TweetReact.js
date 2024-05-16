import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { AntDesign } from "@ant-design/icons-react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/EvilIcons";

function TweetReact(props) {
  const imagePaths = {
    //EvilIcons
    message_icon: "comment",
    //evilicons
    retweet_icon: "retweet",
    //MaterialCommunityIcons
    like_icon: "heart",
    //MaterialCommunityIcons
    share_icon: "share-apple",
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={props.addLike}>
        <Icon name={imagePaths[props.imagePath]} size={25}></Icon>
      </Pressable>
      <Text style={{ paddingStart: 5, paddingTop: 2 }}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image_style: {
    width: 20,
    height: 20,
  },
});

export default TweetReact;
