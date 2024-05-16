import { StyleSheet, View, Button, Text, TextInput, Alert } from "react-native";
import { useEffect, useState } from "react";
import TwitterLogo from "../Components/TwitterLogo";
import LongButton from "../Components/LongButton";
function PasswordScreen({ route, navigation }) {
  const { email } = route.params;
  const [userInput, setUserInput] = useState("");
  const [nextButtonColor, setNextButtonColor] = useState("grey");

  const handleUserInput = (text) => {
    setUserInput(text);
    if (text.length !== 0) {
      setNextButtonColor("#1da1f2");
    } else {
      setNextButtonColor("grey");
    }
  };
  useEffect(() => {
    navigation.setOptions({ headerTitle: () => <TwitterLogo/> });
  }, [navigation]);

  const nextButtonColorStyle = { backgroundColor: nextButtonColor };

  const loginButtonHanlder = () => {
    if (userInput != 1234) {
      Alert.alert("Error", "Wrong password!", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        
      ]);
    } else {
      navigation.navigate("Main");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>Enter your password</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Text>{email}</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handleUserInput}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <LongButton
          title="Log In"
          buttonColor={nextButtonColor}
          pressHandler={loginButtonHanlder}
        ></LongButton>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.underlinedText} fontWeight="bold">
          Forgot password?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
  },
  headerContainer: {
    marginTop: 20,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textInputContainer: {
    marginTop: 40,
    borderColor: "#e6e5e3",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  buttonContainer: {
    marginTop: 100,
  },
  underlinedText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 15,
  },
  forgotPasswordContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default PasswordScreen;
