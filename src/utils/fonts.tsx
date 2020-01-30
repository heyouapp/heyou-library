import { Dimensions, PixelRatio, TextStyle } from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
    (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

const WEIGHT: { [key: string]: TextStyle['fontWeight'] } = {
    REGULAR: '300',
    SEMIBOLD: '600',
    BOLD: '700',
};

const Fonts = {
    WEIGHT,
    SIZE: {
        SMALL: scaleFont(12),
        REGULAR: scaleFont(14),
        LARGE: scaleFont(16),
    },
    LINE_HEIGHT: {
        SMALL: scaleFont(18),
        REGULAR: scaleFont(20),
        LARGE: scaleFont(24),
    },
};

export { Fonts };
