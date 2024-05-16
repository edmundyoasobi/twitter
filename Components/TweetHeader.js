import { View , StyleSheet, Text} from "react-native";

function TweetHeader(props) {
  return(
  <View style={styles.container}>
    <Text style={styles.profileName}>{props.username}</Text>
    <Text style={styles.profileId}>{"@"+props.userId}</Text>
    <Text style={styles.profileId}>3h</Text>
  </View>);
}

const styles = StyleSheet.create({
    container : {
        flex: 0,
        flexDirection : "row"
    },
    profileName : {
        fontWeight : 'bold'
    },
    profileId : {
        color : '#999',
        paddingLeft : 5
    } 

})
export default TweetHeader;
