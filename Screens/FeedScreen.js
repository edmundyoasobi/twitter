import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { TWEETS, PROFILES } from "../data/tweets_data";
import TweetComponent from "../Components/TweetComponent";
import { useRef, useEffect, useState } from "react";
import { FAB } from "react-native-elements";
import axios from 'axios'

function FeedScreen({ navigation }) {
  const [tweets, setTweets] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const list = useRef(null);
  //http://127.0.0.1:4999/api/tweet/

  const fetchDataFromExpress = async () => {
    try {
      const response = await axios.get('http://192.168.1.113:4999/api/tweet/'); // Replace with your actual API endpoint
      console.log(response.data)
      setTweets(response.data.result)
      //const data = response.data.tweets;

      setRefreshing(false) 

      //console.log(data); // Use the fetched data in your React Native app
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchDataFromExpress()
  },[]) 

 
  
  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing to true when pull-to-refresh is triggered
    fetchDataFromExpress();
  };
  

  const press = () => {
    list.current.scrollToOffset({ offset: 0, animated: true });
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: () => <CustomHeader /> , tabBarStyle : {borderTopWidth : 0}});
  }, [navigation]);

  function pressHanlder(item) {
    console.log("pressed")
    console.log(item._id)
    navigation.navigate("Comment",{id:item._id});
  }
  function CustomHeader() {
    return (
      <Pressable onPress={press}>
        <Image
          source={require("../assets/twitter.png")} // Replace with your image source
          style={{ width: 120, height: 30 }} // Set the width and height of your image
          resizeMode="contain" // Adjust the resizeMode as needed
        />
      </Pressable>
    );
  }



  return (
    <View style={styles.container}>
      <FlatList
      onRefresh={handleRefresh}
      refreshing={refreshing}
        ref={list}
        data={tweets}
        keyExtractor={(item) => item._id.toString()}
        renderItem={(itemData) => {
          const profile = PROFILES.find(
            (profile) => profile.id === 1
          );

          if (profile) {
            return (
              <TweetComponent
                onPress={()=>pressHanlder(itemData.item)}
                imagePath={profile.profileImagePath} // Assuming profileImagePath exists in the profile object
                username={itemData.item.userId.name} // Assuming userName exists in the profile object
                userId={itemData.item.userId.userName} // Assuming userId exists in the profile object
                tweetContext={itemData.item.tweetContent} // Access tweetContext from itemData.item
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
      <FAB
        title="+"
        color="#1DA1F2"
        placement="right"
        buttonStyle={{
          width: 60, // Adjust the width to maintain circular shape
          height: 60, // Adjust the height to maintain circular shape
          borderRadius: 30, // Half of the width and height to maintain circular shape
        }}
        titleStyle={{fontSize:24}}
        onPress={() => {
          navigation.navigate("Tweet");
        }}
      ></FAB>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default FeedScreen;
