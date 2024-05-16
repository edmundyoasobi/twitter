import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
  Image,
  Keyboard,
  Animated,
} from "react-native";
import {
  bounceAnimation,
  fadeDown,
  fadeUp,
  fadeUpFromBottom,
} from "../Animations/CreateTweetAnimations";
import axios from "axios";
import ScrollImage from "../Components/ScrollImage";
import TweetProfile from "../Components/TweetProfile";
import { useEffect, useState, useRef } from "react";
import { TWEETS } from "../data/tweets_data";
import Tweet from "../models/tweet";

function CreateTweetScreen({ navigation }) {
  const [tweetContext, setTweetContext] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hideScrollImage, setHideScrollImage] = useState(false);
  const [scaledWidth, setScaledWidth] = useState(0);
  const [scaledHeight, setScaledHeight] = useState(0);
  const style1 = { width: scaledWidth, height: scaledHeight };
  const textInputRef = useRef(null);
  const [scrollViewBottom, setScrollViewBottom] = useState(297 - 80);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  /*
  const scrollImageStyle = {
    display: hideScrollImage ? "none" : "flex",
    bottom: 297 - 80,
    transform: [{ translateY: fadeAnim }],
  };
  */
  const scrollImageStyle = {
    display: hideScrollImage ? "none" : "flex",
    bottom: scrollViewBottom,
    transform: [{ translateY: fadeAnim }],
  };

  useEffect(() => {
    if (tweetContext != "") {
      fadeDown(fadeAnim);
    } else {
      fadeUp(fadeAnim);
    }
  }, [tweetContext]);

  useEffect(() => {
    if (selectedImage != null) {
      if (hideScrollImage == false) {
        setHideScrollImage(true);
      }
    } else {
      if (hideScrollImage == true) {
        setHideScrollImage(false);
      }
    }
  }, [selectedImage]);

  function tweetInputHandler(text) {
    setTweetContext(text);
    //console.log(tweetContext);
  }

  /*
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        const { height } = Dimensions.get("screen");
        //console.log(event.startCoordinates.screenY)
        if (tweetContext == "") {
          //setKeyBoardHeight(297)
          //fadeUp()
          fadeUpFromBottom(fadeAnim);
        }
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      (event) => {
        //console.log(event.endCoordinates.screenY)
        //setKeyBoardHeight(0);
        //fadeDown()

        //fadeDownToBottom()
        bounceAnimation(fadeAnim);
      }
    );

    

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  */

  const onFucusHanlder = () => {
    setScrollViewBottom(297 - 80);
  };

  const onBlurHanlder = () => {
    setScrollViewBottom(-50);
  };

  const removeImage = () => {
    console.log(selectedImage);
    setSelectedImage(null);
  };

  const addTweetHandler= async() =>{
    //console.log(tweetContext);
    const postData = {
      userId : "65b3fdf0e8d813595f181fb7",
      tweetContent : tweetContext
    }
    try {
      const response = await axios.post(
        "http://192.168.1.113:4999/api/tweet/" 
      ,postData); // Replace with your actual API endpoint
      //const data = response.data.tweets;
      //console.log(data); // Use the fetched data in your React Native app
    } catch (error) {
      console.error("Error creating data:", error);
    }

    navigation.goBack();
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Tweet" color="#1DA1F2" onPress={addTweetHandler} />
      ),
      headerTitle: "",
    });
  }, [navigation, tweetContext]);

  useEffect(() => {
    // Focus on TextInput when Screen 2 mounts
    textInputRef.current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <TweetProfile imagePath="haldona"></TweetProfile>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              ref={textInputRef}
              multiline
              placeholder="What's happening?"
              style={{ fontSize: 20 }}
              onChangeText={tweetInputHandler}
              onBlur={onBlurHanlder}
              onFocus={onFucusHanlder}
            ></TextInput>
          </View>
        </View>
        <View>
          {selectedImage && (
            <View
              style={[
                { position: "relative", marginLeft: 80, marginRight: 20 },
                style1,
              ]}
            >
              <Image
                resizeMode="contain"
                source={{ uri: selectedImage.localUri }}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              />
              <Pressable
                onPress={removeImage}
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
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
      <ScrollImage
        setSelectedImage={setSelectedImage}
        setScaledHeight={setScaledHeight}
        setScaledWidth={setScaledWidth}
        scrollImageStyle={scrollImageStyle}
        images={images}
      ></ScrollImage>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  textInputContainer: {
    flex: 5,
    marginLeft: 10,
    marginTop: 30,
  },
});
export default CreateTweetScreen;
