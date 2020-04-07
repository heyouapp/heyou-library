import { Platform, TextStyle } from 'react-native';

const WEIGHT: { [key: string]: TextStyle['fontWeight'] } = {
    REGULAR: '300',
    SEMIBOLD: Platform.OS === 'android' ? '700' : '600',
    BOLD: '700',
};

const SIZE =
    Platform.OS === 'web'
        ? {
              SMALL: 13,
              REGULAR: 15,
          }
        : {
              SMALL: 12,
              REGULAR: 14,
          };

const Typo = {
    WEIGHT,
    SIZE,
    LINE_HEIGHT: {
        SMALL: 18,
        REGULAR: 22,
    },
};

export { Typo };
