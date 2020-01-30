import { TextStyle } from 'react-native';

const WEIGHT: { [key: string]: TextStyle['fontWeight'] } = {
    REGULAR: '300',
    SEMIBOLD: '600',
    BOLD: '700',
};

const Fonts = {
    WEIGHT,
    SIZE: {
        SMALL: 12,
        REGULAR: 14,
    },
    LINE_HEIGHT: {
        SMALL: 18,
        REGULAR: 22,
    },
};

export { Fonts };
