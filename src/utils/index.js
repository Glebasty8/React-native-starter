import { Dimensions, PixelRatio } from 'react-native';

const scale = Dimensions.get('window').width / 375;

export const normalize = size => {
    if (!size) {
        return 0;
    }
    // if (Platform.OS === 'ios') {
    // 	return Math.round(PixelRatio.roundToNearestPixel(scale * size));
    // }
    return Math.ceil(PixelRatio.roundToNearestPixel(scale * size));
};
