
import { Image , Pressable} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommentScreen from './CommentScreen';
import { useState } from 'react';
const Stack = createNativeStackNavigator();
import FeedScreen from './FeedScreen';
import CreateTweetScreen from './CreateTweetScreen';



function HomeScreen(){
   //<Stack.Screen options={{headerTitle : ()=> <CustomHeader/>}} name="Feed" component={FeedScreen}/>
    return (
      <Stack.Navigator>
        <Stack.Screen  name="Feed" component={FeedScreen} />
        <Stack.Screen options={{title: "Tweet"}} name="Comment"component={CommentScreen}/>
        <Stack.Screen name="Tweet" options={{ headerBackTitle: "Cancel"}} component={CreateTweetScreen}/>
    </Stack.Navigator>
    );
}


export default HomeScreen;
