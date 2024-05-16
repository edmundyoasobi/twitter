import { StyleSheet, View } from "react-native";
import { useState } from "react";
import TweetReact from "./TweetReact";
function TweetReactsBar(props){
   const [likes, setLikes] = useState(props.tweet.tweetLikes)
   //const [likes, setLikes] = useState(0)
   const addLikeHandler =()=>{
    setLikes(likes +1);
    props.tweet.likeTweet();
    console.log(props.tweet.tweetLikes)
   }
 return (
    <View style={styles.container}>
            <TweetReact imagePath = "message_icon" text={props.tweet.comments.length}></TweetReact>
            <TweetReact imagePath= "retweet_icon" text={props.tweet.retweetUsersId.length}></TweetReact>
            <TweetReact imagePath= "like_icon" text={likes} addLike={addLikeHandler}></TweetReact>
            <TweetReact imagePath= "share_icon" text=""></TweetReact>
    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: "row",
        justifyContent : "space-between",
        flex : 1,
        marginTop : 5,
        
    
      },
})

export default TweetReactsBar;