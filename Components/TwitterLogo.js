import { Image } from "react-native-elements";
function TwitterLogo() {
    return (
      <Image
        source={require("../assets/twitter.png")} // Replace with your image source
        style={{ width: 120, height: 30 }} // Set the width and height of your image
        resizeMode="contain" // Adjust the resizeMode as needed
      />
    );
  }

  export default TwitterLogo;