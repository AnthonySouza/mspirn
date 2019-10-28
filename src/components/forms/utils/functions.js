import { Dimensions, PixelRatio } from 'react-native'

export const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

export const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

export const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

//400ppi celular antonio
export const scale = SCREEN_WIDTH / 400;

export const normalize = (size) => {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const __HEIGHT = heightPercentageToDP(25);
export const __HEIGHT_SMALL = heightPercentageToDP(5);

export default {
  __HEIGHT,
  __HEIGHT_SMALL
}