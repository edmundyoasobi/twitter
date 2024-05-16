import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import CommentScreen from '../Screens/CommentScreen';
import FeedScreen from '../Screens/FeedScreen';


const Tab = createBottomTabNavigator();


function BottomTab(){
    
    return (
        
        <Tab.Navigator screenOptions={{tabBarShowLabel : false, headerShown: false}}>
            <Tab.Screen options ={{title :"Feed" ,tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size*1.2} />) ,tabBarStyle : {borderTopWidth : 0}}} name="home" component={HomeScreen}/>
            <Tab.Screen options={{tabBarIcon: ({color,size})=>(<Ionicons name="search" color={color} size={size}/>)}} name="Search" component={SearchScreen}/>
            <Tab.Screen options ={{title :"Notifications" , tabBarBadge : 3, tabBarIcon: ({color,size})=>(<MaterialCommunityIcons name="bell" color={color} size={size}/>)}} name="Notifications" component={NotificationsScreen}/>
            <Tab.Screen options={{tabBarIcon: ({color,size})=>(<MaterialCommunityIcons name="email" color={color} size={size}/>)}} name="Messages" component={MessagesScreen}/>
        </Tab.Navigator>
       
    );
}

export default BottomTab;