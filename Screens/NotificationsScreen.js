import {View, Text,Button} from 'react-native'

function NotificationsScreen({navigation}){
    const logoutButtonHanlder = () =>{
        navigation.navigate("Login")
    }
    return(
        <View style={{marginTop:100}}>
            <Text>Notification</Text>

            <Button title='logout' onPress={logoutButtonHanlder}></Button>
        </View>
    );
}

export default NotificationsScreen;