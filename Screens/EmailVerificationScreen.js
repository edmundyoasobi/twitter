import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import LongButton from "../Components/LongButton";
import { useState, useRef } from "react";
function EmailVerificationScreen() {
  const [nextButtonColor, setNextButtonColor] = useState("grey");
  const [bottomViewTopMargin, setBottomViewTopMargin] = useState(450)
  const [textInputValues, setTextInputValues] = useState({
    textInput1: '',
    textInput2: '',
    textInput3: '',
    textInput4: '',
    textInput5: '',
    textInput6: '',
  });
  // Create refs for each TextInput
  const textInputRefs = {
    textInput1: useRef(null),
    textInput2: useRef(null),
    textInput3: useRef(null),
    textInput4: useRef(null),
    textInput5: useRef(null),
    textInput6: useRef(null),
  };

  const handleTextInputChange = (key) => (text) => {
    setTextInputValues((prevValues) => ({
      ...prevValues,
      [key]: text,
    }));

    // Determine the next input key based on the current input
    let nextInputKey;
    switch (key) {
      case 'textInput1':
        nextInputKey = 'textInput2';
        break;
      case 'textInput2':
        nextInputKey = 'textInput3';
        break;
      case 'textInput3':
        nextInputKey = 'textInput4';
        break;
      case 'textInput4':
        nextInputKey = 'textInput5';
        break;
      case 'textInput5':
        nextInputKey = 'textInput6';
        break;
      // Add more cases as needed

      default:
        nextInputKey = null;
    }

    // Focus on the next input if it exists
    if (text.length !== 0 && nextInputKey && textInputRefs[nextInputKey].current) {
      textInputRefs[nextInputKey].current.focus();
      textInputRefs[nextInputKey].current.clear()
    }
  };
  const onFocusHandler = () =>{
    setBottomViewTopMargin(230)
  }
  const bottomViewStyle = { marginTop : bottomViewTopMargin}
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>Create your password</Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.subHeaderTextStyle}>
            Enter it below to verify cheongedmundzh@gmail.com.
          </Text>
        </View>
        <View style={styles.codeInputContainer}>
          <View style={styles.textInputContainer}>
            <View   style={{   flex: 1}}>
              <TextInput
                fontSize="30"
                maxLength={1}
                inputMode="decimal"
                onFocus={onFocusHandler}
                ref={textInputRefs.textInput1}
                onChangeText={handleTextInputChange('textInput1')}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ alignSelf: "center" , flex: 1 }}>
              <TextInput
                fontSize="30"
                maxLength={1}
                inputMode="decimal"
                ref={textInputRefs.textInput2}
                onChangeText={handleTextInputChange('textInput2')}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <View  style={{ alignSelf: "center" , flex: 1}}>
              <TextInput
                fontSize="30"
                maxLength={1}
                inputMode="decimal"
                ref={textInputRefs.textInput3}
                onChangeText={handleTextInputChange('textInput3')}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <View  style={{ alignSelf: "center" , flex: 1}}>
              <TextInput
                fontSize="30"
                maxLength={1}
                inputMode="decimal"
                ref={textInputRefs.textInput4}
                onChangeText={handleTextInputChange('textInput4')}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ alignSelf: "center" , flex : 1}}>
              <TextInput
                fontSize="30"
                maxLength={1}
                inputMode="decimal"
                ref={textInputRefs.textInput5}
                onChangeText={handleTextInputChange('textInput5')}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <View style={{ alignSelf: "center"}}>
              <TextInput inputMode="decimal" fontSize="30" maxLength={1} ref={textInputRefs.textInput6} onChangeText={handleTextInputChange('textInput6')}></TextInput>
            </View>
          </View>
        </View>
      </View>
      <View style={bottomViewStyle}>
        <View>
          <Button title="Didn't receive email?"></Button>
        </View>
        <View style={styles.buttonContainer}>
          <LongButton title="Log In" buttonColor={nextButtonColor}></LongButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 20,
  },
  subHeaderContainer: {},
  headerTextStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  subHeaderTextStyle: {
    color: "grey",
    fontSize: 15,
  },
  container: {
    flex: 1,
    marginHorizontal: 40,
    
  },
  textInputContainer: {
    borderColor: "grey",
    borderBottomWidth: 2,
    paddingBottom: 10,
    width: 40,
    justifyContent: "center",

  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
 
  },
  buttonContainer: {
    marginBottom: 30,
  },
  
});
export default EmailVerificationScreen;
