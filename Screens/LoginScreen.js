import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { isEmail } from "validator";
import { useEffect, useState } from "react";
import TwitterLogo from "../Components/TwitterLogo";
function LoginScreen({ navigation }) {
  const [userInput, setUserInput] = useState("");
  const [nextButtonColor, setNextButtonColor] = useState("grey");
  const [keyBoardAppear, setKeyBoardAppear] = useState(false);
  useEffect(() => {
    navigation.setOptions({ headerTitle: () => <TwitterLogo /> });
  }, [navigation]);

  const handleUserInput = (text) => {
    setUserInput(text);
    if (isEmail(text)) {
      setNextButtonColor("#1da1f2");
    } else {
      setNextButtonColor("grey");
    }
  };

  const nextButtonHandler = () => {
    if (isEmail(userInput)) {
      navigation.navigate("Password",{
        email : userInput
      });
    }
  };

  const textInputOnFocusHanlder = () => {
    setKeyBoardAppear(true);
  };
  const textInputOnBlurHanlder = () => {
    setKeyBoardAppear(false);
  };

  const nextButtonColorStyle = { backgroundColor: nextButtonColor };

  const nextButtonAbsoluteBox = keyBoardAppear
    ? {
        position: "absolute",
        bottom: 280,
        right: 0,
      }
    : "";
  const forgotPasswordButtonAbsoluteBox = keyBoardAppear
    ? {
        position: "absolute",
        bottom: 280,
      }
    : "";

  return (
    <View style={styles.screen}>
      <View style={{ flex: 9 }}>
        <ScrollView style={styles.screen}>
          <View style={styles.container}>
            <View>
              <Text style={styles.textStyle}>
                To get started, first enter your phone , email, or @username
              </Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="Phone, email, or username"
                  fontSize="20"
                  placeholderTextColor="#a6a4a1"
                  onChangeText={handleUserInput}
                  onFocus={textInputOnFocusHanlder}
                  onBlur={textInputOnBlurHanlder}
                ></TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={[{ flex: 1 }]}>
        <View style={[styles.bottomContainer]}>
          <View
            style={[
              styles.forgotPasswordContainer,
              styles.absoluteBox,
              forgotPasswordButtonAbsoluteBox,
            ]}
          >
            <Button title="Forgot password?"></Button>
          </View>
          <View
            style={[
              styles.buttonContainer,
              nextButtonColorStyle,
              nextButtonAbsoluteBox,
            ]}
          >
            <Button color="white" title="Next" onPress={nextButtonHandler} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 30,
    justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  textInputContainer: {
    marginTop: 40,
    borderColor: "#e6e5e3",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  textInputStyle: {
    color: "#a6a4a1",
  },
  buttonContainer: {
    alignSelf: "flex-end",
    borderRadius: 25,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-start",
  },
  buttonStyle: {
    color: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 40,
  },
});

export default LoginScreen;
