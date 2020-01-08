import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

// Library
import { Text } from 'components/core';
import { ProfilePicture } from './ProfilePicture';
import { Colors } from 'utils';

export interface UserProps {
    style?: StyleProp<ViewStyle>;
    fullName: string;
    username: string;
}

const User: React.FC<UserProps> = props => (
    <View style={styles.container}>
        <ProfilePicture size="small" />
        <View style={styles.content}>
            <Text type="semibold">{props.fullName}</Text>
            <Text small style={styles.username}>
                @{props.username}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        marginLeft: 10
    },
    username: {
        color: Colors.neutralLight
    }
});

export { User };
