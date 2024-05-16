import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  TextInput,
  Button,
} from "react-native";
import { COMMENTS, PROFILES, TWEETS } from "../data/tweets_data";
import TweetComponent from "../Components/TweetComponent";
import TweetProfile from "../Components/TweetProfile";
import TweetDetails from "../Components/TweetDetails";
import TweetReactsBar from "../Components/TweetReactsBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

function CommentScreen({ route }) {
  const { id } = route.params;
  const [tweetDetails, setTweetDetails] = useState(null);
  const [date, setDate] = useState(null);
  const [newComment, setNewComment] = useState("");
  const navigation = useNavigation();
  const [keyBoardAppear, setKeyBoardAppear] = useState(false);
  temp = PROFILES[0];
  temp2 = TWEETS[0];
  const fetchDataFromExpress = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.113:4999/api/tweet/" + id
      ); // Replace with your actual API endpoint

      setTweetDetails(response.data.tweet);
      //const data = response.data.tweets;
      //console.log(data); // Use the fetched data in your React Native app
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const textInputOnFocusHanlder = () => {
    setKeyBoardAppear(true);
  };
  const textInputOnBlurHanlder = () => {
    setKeyBoardAppear(false);
  };

  const postComment = async () => {
    const postData = {
      userId: "65b3fdf0e8d813595f181fb7",
      userComment: newComment,
    };
    try {
      const response = await axios.post(
        "http://192.168.1.113:4999/api/comment/" + id,
        postData
      );
      fetchDataFromExpress();
      setNewComment("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  const postCommentButtonHandler = () => {
    postComment();
  };

  //tabBarStyle:{borderTopWidth: 0}
  useEffect(() => {
    navigation.setOptions({ tabBarStyle: { borderTopWidth: 0 } });
  }, [navigation]);

  useEffect(() => {
    fetchDataFromExpress();
  }, []);

  useEffect(() => {
    tweetDetails ? convertDate(tweetDetails.time) : null;
  }, [tweetDetails]);

  const commentInputHanlder = (text) => {
    setNewComment(text);
  };

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    setDate(dateObject);
  };

  const nextButtonAbsoluteBox = keyBoardAppear
    ? {
        position: "absolute",
        bottom: 280,
        right: 0,
      }
    : "";

  return (
    <View style={styles.outterContainer}>
      <View style={{ flex: 17 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <TweetProfile imagePath={temp.profileImagePath}></TweetProfile>
            </View>
            <View style={styles.userDetailsContainer}>
              <Text>{tweetDetails ? tweetDetails.userId.name : ""}</Text>
              <Text style={styles.profileId}>
                {tweetDetails ? "@" + tweetDetails.userId.userName : ""}
              </Text>
            </View>
          </View>
          <View style={styles.tweetContext}>
            <TweetDetails
              text={tweetDetails ? tweetDetails.tweetContent : "s"}
              textSize={20}
            ></TweetDetails>
          </View>
          <View style={styles.timeContainer}>
            <Text style={{ color: "#999" }}>
              {date
                ? date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : ""}
            </Text>
            <Text style={{ color: "#999" }}>
              {" "}
              · {date ? date.toLocaleDateString() : ""} ·{" "}
            </Text>
            <Text style={{ color: "#4C9EEB" }}>Twitter Web App</Text>
          </View>
          <View style={styles.reactionSummaryBorderContainer}>
            <View style={styles.reactionSummaryContainer}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>
                  {tweetDetails ? tweetDetails.retweetUsersId.length : 0}
                </Text>{" "}
                Retweets{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {tweetDetails ? tweetDetails.tweetLikes : 0}
                </Text>{" "}
                Likes
              </Text>
            </View>
          </View>
          <View style={styles.reactionBorderContainer}>
            <View style={styles.reactionContainer}>
              <TweetReactsBar tweet={temp2}></TweetReactsBar>
            </View>
          </View>

          <FlatList
            data={tweetDetails ? tweetDetails.comments : null}
            scrollEnabled={false}
            keyExtractor={(item) => item._id.toString()}
            renderItem={(itemData) => {
              const profile = PROFILES.find((profile) => profile.id === 1);
              if (profile) {
                return (
                  <TweetComponent
                    imagePath={profile.profileImagePath} // Assuming profileImagePath exists in the profile object
                    username={itemData.item.userId.name} // Assuming userName exists in the profile object
                    userId={itemData.item.userId.userName} // Assuming userId exists in the profile object
                    tweetContext={itemData.item.userComment} // Access tweetContext from itemData.item
                    likes={itemData.item.tweetLikes}
                    comments={itemData.item.comments}
                    retweets={itemData.item.retweetUsersId}
                    tweet={itemData.item}
                  />
                );
              } else {
                return null; // Or handle cases where profile is not found
              }
            }}
          ></FlatList>
        </ScrollView>
      </View>

      <View style={[styles.commentTextInputContainer]}>
        <View style={[styles.commentTextInputStyle, nextButtonAbsoluteBox]}>
          <View style={{ justifyContent: "center", flex: 1, marginLeft: 10 }}>
            <TextInput
              placeholder="Post your reply"
              style={{ fontSize: 17 }}
              onChangeText={commentInputHanlder}
              onFocus={textInputOnFocusHanlder}
              onBlur={textInputOnBlurHanlder}
              value={newComment}
            ></TextInput>
          </View>
          <View style={{ justifyContent: "center", marginRight: 10 }}>
            <Button title="Post" onPress={postCommentButtonHandler}></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  commentTextInputContainer: {
    flex: 1,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
  },
  commentTextInputStyle: {
    borderRadius: 30,
    backgroundColor: "#edeef0",
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: 18,
    paddingLeft: 10,
    flex: 1,
  },
  container: {
    marginLeft: 10,
    flexDirection: "row",
  },
  outterContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  profileContainer: {
    flex: 1,
  },
  userDetailsContainer: {
    flex: 5,
    justifyContent: "center",
  },
  tweetContext: {
    marginTop: 10,
    marginLeft: 15,
  },
  timeContainer: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  reactionContainer: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  reactionSummaryBorderContainer: {
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "#CCCCCC",
    marginLeft: 10,
    marginRight: 10,
  },
  reactionBorderContainer: {
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
  },
  reactionSummaryContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
  },
  profileId: {
    color: "#999",
  },
});
export default CommentScreen;
