import { StyleSheet, Text, View } from "react-native";
function TweetDetails(props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: props.textSize}}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex :0 ,
        flexWrap: 'wrap',
        flexDirection : 'row',
        marginBottom: 0
      },

});

export default TweetDetails;
