import { StyleSheet, Button, View } from "react-native";
import { useState } from "react";
function LongButton(props) {

  const nextButtonColorStyle = { backgroundColor: props.buttonColor };

  return (
    <View style={[styles.buttonContainer, nextButtonColorStyle]}>
      <Button title={props.title} color="white" onPress={props.pressHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
});
export default LongButton;
