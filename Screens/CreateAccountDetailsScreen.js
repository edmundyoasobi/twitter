import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import TwitterLogo from "../Components/TwitterLogo";
import CalendarPicker from "react-native-calendar-picker";
function CreateAccountDetailsScreen({ navigation }) {
  const [nextButtonColor, setNextButtonColor] = useState("grey");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDateOfBirth, setUserDateOfBirth] = useState("");
  const [dateIsFocused, setDateIsFocused] = useState(false);
  const handleFocus = () => {
    setDateIsFocused(true);
    Keyboard.dismiss();
    console.log("focus");
  };

  const handleBlur = () => {
    setDateIsFocused(false);
    console.log("unfocus");
  };

  const datePickerHandler = (date) => {
    console.log(date);
    setUserDateOfBirth(date.toDateString().slice(4));
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: () => <TwitterLogo /> });
  }, [navigation]);

  const userNameHandler = (text) => {
    setUserName(text);
  };
  const userEmailHandler = (text) => {
    setUserName(text);
  };
  const userDateOfBirthHandler = (text) => {
    setUserName(text);
  };

  const nextButtonColorStyle = { backgroundColor: nextButtonColor };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>Create your password</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            fontSize="17"
            placeholder="Name"
            onFocus={handleBlur}
            onChangeText={userNameHandler}
          ></TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            fontSize="17"
            placeholder="Email"
            onFocus={handleBlur}
            onChangeText={userEmailHandler}
          ></TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            fontSize="17"
            placeholder="Date of birth"
            onFocus={handleFocus}
            editable={false}
            onPressIn={handleFocus}
            value={userDateOfBirth}
          ></TextInput>
        </View>
      </View>
      <View style={[styles.nextButtonContainer,nextButtonColorStyle]}>
        <Button title="next" color="white"></Button>
      </View>
      {dateIsFocused && (
        <View>
          <CalendarPicker onDateChange={datePickerHandler} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
  },
  headerTextStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  container: {
    flex: 1,
    marginHorizontal: 40,
  },
  textInputContainer: {
    marginTop: 40,
    borderColor: "#e6e5e3",
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  nextButtonContainer: {
    marginTop: 130,
    alignSelf: "flex-end",
    borderRadius: 25,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});

export default CreateAccountDetailsScreen;
