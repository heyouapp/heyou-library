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

export type ProfilePictureSizeType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface ProfilePictureProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    size?: ProfilePictureSizeType;
    source?: ImageSourcePropType;
    rounded?: boolean;
}

export const ProfilePictureSizes = {
    sm: {
        height: 45,
        width: 45,
    },
    md: {
        height: 90,
        width: 90,
    },
    lg: {
        height: 120,
        width: 90,
    },
    xl: {
        height: 150,
        width: 120,
    },
    xxl: {
        height: 200,
        width: 160,
    },
};

const ProfilePicture: React.FC<ProfilePictureProps> = props => {
    const size =
        ProfilePictureSizes[props.size || 'sm'] || ProfilePictureSizes.sm;

    return (
        <View
            style={[
                styles.container,
                size,
                props.rounded && { borderRadius: size.height / 2 },
                props.style,
            ]}>
            {props.source && (
                <Image source={props.source} style={styles.image} />
            )}
            {props.children}
        </View>
    );
};

const styles: { [key: string]: Object } = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: Colors.placeholder,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
    },
});

export { ProfilePicture };
