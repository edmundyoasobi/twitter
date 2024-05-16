import {Animated} from "react-native"
import {  useRef } from "react";


const bounceAnimation = (fadeAnim) => {
    Animated.sequence([
      //drop the component to the bottom
      Animated.timing(fadeAnim, {
        toValue: +(297 - 80),
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: +(297 - 100),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 80),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 90),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 80),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 85),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 80),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 82),
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: +(297 - 80),
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const fadeUp = (fadeAnim) => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: -60,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fadeDown = (fadeAnim) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: +60,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const fadeUpFromBottom = (fadeAnim) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: -60,
      duration: 1,
      useNativeDriver: true,
    }).start();
  };

  module.exports = {bounceAnimation, fadeDown, fadeUp, fadeUpFromBottom}