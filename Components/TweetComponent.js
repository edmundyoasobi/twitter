import { StyleSheet, View, Pressable} from "react-native";
import { useState } from "react";
import TweetHeader from "./TweetHeader";
import TweetDetails from "./TweetDetails";
import TweetReactsBar from "./TweetReactsBar";
import TweetProfile from "./TweetProfile";

function TweetComponent(props) {
  
  const [textHeight, setTextHeight] = useState(0);
  return (
    <View style={styles.outterContainer}>
      <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <TweetProfile imagePath={props.imagePath}></TweetProfile>
        <View style={styles.inner_container}>
          <View style={styles.tempContainer}>
            <TweetHeader username ={props.username} userId = {props.userId}></TweetHeader>
            <TweetDetails text={props.tweetContext} textSize = {15}></TweetDetails>
            <TweetReactsBar  tweet={props.tweet}></TweetReactsBar>
          </View>
        </View>
      </View>
      </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  tempContainer : {
    flex: 1,

  },
  outterContainer:{
    flex :1,
    borderBottomColor : '#CCCCCC',
    borderBottomWidth : 1,
    marginTop : 10,
    
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems : "stretch",
    marginBottom : 10,
    marginRight : 20,
    marginLeft : 20
  },
  inner_container: {
    flex: 5,
    paddingStart: 10,
    marginEnd: 10,
  },
});

export default TweetComponent;
