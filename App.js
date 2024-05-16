import { StatusBar } from "expo-status-bar";
import HomeScreen from "./Screens/HomeScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./Components/BottomTab.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentScreen from "./Screens/CommentScreen.js";
import LoginScreen from "./Screens/LoginScreen.js";
import PasswordScreen from "./Screens/PasswordScreen.js";
import CreateAccountDetailsScreen from "./Screens/CreateAccountDetailsScreen.js";
import EmailVerificationScreen from "./Screens/EmailVerificationScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";


const Stack = createNativeStackNavigator();
//<BottomTab></BottomTab>

export default function App() {
  return (

    <ProfileScreen></ProfileScreen>
    /*
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="Password" component={PasswordScreen} />

        <Stack.Screen
          name="CreateAccountDetails"
          component={CreateAccountDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    */
    
  );
}
