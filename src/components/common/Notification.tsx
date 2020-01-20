import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

// Library
import { Text, Card } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface NotificationProps {
    label: string;
    description: string;
    createdLabel: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

const Notification: React.FC<NotificationProps> = props => (
    <Card style={[styles.container, props.style]} onPress={props.onPress}>
        <View style={styles.header}>
            <View style={styles.content}>
                <ProfilePicture />
                <Text style={styles.label} type="semibold">
                    {props.label}
                </Text>
            </View>
            <Text style={styles.time} small>
                {props.createdLabel}
            </Text>
        </View>
        <Text>{props.description}</Text>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.greyLight,
        paddingHorizontal: 15
    },
    header: {
        marginBottom: 7.5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: {
        marginLeft: 10
    },
    time: {
        color: Colors.neutralLight
    }
});

export { Notification };
