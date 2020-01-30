import { TextStyle } from 'react-native';

const WEIGHT: { [key: string]: TextStyle['fontWeight'] } = {
    REGULAR: '300',
    SEMIBOLD: '600',
    BOLD: '700',
};

const Fonts = {
    WEIGHT,
    SIZE: {
        SMALL: 14,
        REGULAR: 16,
    },
    LINE_HEIGHT: {
        SMALL: 22,
        REGULAR: 26,
    },
};

export { Fonts };
