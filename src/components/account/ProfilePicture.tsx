import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    Image,
    ImageSourcePropType,
} from 'react-native';

// Library
import { Colors } from 'utils';

export type ProfilePictureSize =
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';

export interface ProfilePictureProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    size?: ProfilePictureSize;
    squared?: boolean;
    source?: ImageSourcePropType;
}

const ProfilePicture: React.FC<ProfilePictureProps> = props => (
    <View
        style={[
            styles.container,
            styles[
                `${props.size || 'small'}${props.squared ? '_squared' : ''}`
            ] || styles.small,
            props.style,
        ]}>
        {props.source && <Image source={props.source} style={styles.image} />}
        {props.children}
    </View>
);

const styles: { [key: string]: Object } = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: Colors.placeholder,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
    },
    small: {
        borderRadius: 22.5,
        height: 45,
        width: 45,
    },
    medium: {
        borderRadius: 30,
        height: 60,
        width: 60,
    },
    large: {
        borderRadius: 45,
        height: 90,
        width: 90,
    },
    small_squared: {
        height: 90,
        width: 90,
    },
    medium_squared: {
        height: 120,
        width: 90,
    },
    large_squared: {
        height: 150,
        width: 120,
    },
    xlarge_squared: {
        height: 180,
        width: 180,
    },
    xxlarge_squared: {
        height: 200,
        width: 160,
    },
});

export { ProfilePicture };
