import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Card } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface NotificationProps {
    review?: boolean;
}

const Notification: React.FC<NotificationProps> = _props => (
    <Card style={styles.container}>
        <View style={styles.header}>
            <View style={styles.content}>
                <ProfilePicture />
                <Text style={styles.label} type="semibold">
                    Notification Label
                </Text>
            </View>
            <Text style={styles.time} small>
                5 min
            </Text>
        </View>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            imperdiet lacus ac lectus porttitor vehicula.
        </Text>
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
