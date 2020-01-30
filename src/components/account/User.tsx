import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    ImageSourcePropType,
} from 'react-native';

// Library
import { Text } from 'components/core';
import { ProfilePicture } from './ProfilePicture';
import { Colors } from 'utils';

export interface UserProps {
    style?: StyleProp<ViewStyle>;
    fullName: string;
    userName: string;
    source?: ImageSourcePropType;
}

const User: React.FC<UserProps> = props => (
    <View style={[styles.container, props.style]}>
        <ProfilePicture source={props.source} size="small" />
        <View style={styles.content}>
            <Text type="semibold">{props.fullName}</Text>
            <Text small style={styles.userName}>
                @{props.userName}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        marginLeft: 10,
    },
    userName: {
        color: Colors.neutralLight,
    },
});

export { User };
