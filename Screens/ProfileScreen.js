import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  TextInput,
  Button,
  Image,
  Dimensions,
  Pressable,
  
} from "react-native";
import TweetProfile from "../Components/TweetProfile";
import { FAB } from "react-native-elements";
import { useState } from "react";
const deviceWidth = Dimensions.get("window").width;

function ProfileScreen() {
  const tabScrollItem = [
    "Posts",
    "Replies",
    "Hightlights",
    "Articles",
    "Media",
    "Likes",
  ];

  const [currentFocusIndex, setCurrentFocusIndex ] = useState(0);
  const tabItemPressHanlder = (index)=>{
    setCurrentFocusIndex(index);
  }
  return (
<View style={styles.container}>
    <ScrollView>
    
        <Image
          resizeMode="cover"
          style={[styles.background_image_style]}
          source={require("../assets/haldona.jpeg")}
        ></Image>
        <View style={styles.profileImageWhiteCircleStyle}>
          <Image
            style={[styles.profile_image_style]}
            source={require("../assets/haldona.jpeg")}
          ></Image>
        </View>
        <View style={styles.editProfileButtonStyle}>
          <Button color="black" title="Edit profile"></Button>
        </View>
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.mainTextStyle}>Edmund Cheong</Text>
          <View style={{ marginTop: 5 }}>
            <Text
              style={[styles.secondaryTextStyle, styles.lightColorStyle]}
            >
              @cheong_edmund
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.secondaryTextStyle}>Yoasobi</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={[styles.secondaryTextStyle, styles.lightColorStyle]}
            >
              Joined September 2007
            </Text>
          </View>
          <View style={styles.followingContainer}>
            <View>
              <Text style={styles.secondaryTextStyle}>
                <Text style={{ fontWeight: "bold" }}>160</Text>{" "}
                <Text style={styles.lightColorStyle}>Following</Text>
              </Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.secondaryTextStyle}>
                <Text style={{ fontWeight: "bold" }}>80</Text>{" "}
                <Text style={styles.lightColorStyle}>Followers</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{borderBottomWidth : 0.5, borderColor : "#8e9091"}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {tabScrollItem.map((item, index) => (
              <Pressable key={index} onPress={()=>tabItemPressHanlder(index)}>
                <View
                  style={[styles.tabBarItemStyle,index==currentFocusIndex?styles.focusTabBarItem: ""]}
                >
                  <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                    {item}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
   

      </View>
      
    </ScrollView>
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
          
        }}
      ></FAB>
    </View>
  );
}

const styles = StyleSheet.create({
  followingContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
  },
  tabBarItemStyle : {
    marginLeft: 20,
    marginRight: 5,
    paddingBottom: 7,

  },
  focusTabBarItem : {
    borderBottomWidth: 3,
    borderBottomColor: "#1DA1F2",
  },
  container: {
    flex: 1,
  },
  profile_image_style: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },

  background_image_style: {
    width: deviceWidth,
    height: 250,
  },
  profileImageWhiteCircleStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 212,
    left: 20,
  },
  profileDetailsContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  editProfileButtonStyle: {
    borderColor: "#e8e8e8",
    borderWidth: 2,
    alignSelf: "flex-end",
    padding: 0,
    borderRadius: 20,
    marginTop: 10,
    marginRight: 20,
  },
  mainTextStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  secondaryTextStyle: {
    fontSize: 15,
  },
  lightColorStyle: {
    color: "#8e9091",
  },
});
export default ProfileScreen;
