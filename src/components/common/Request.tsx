import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';

// Library
import { Text, Button, Card } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface RequestProps {
    fullName: string;
    recipientName: string;
    createdAt: string;
    completedAt: string;
    expiresAt: string;
    refusedAt: string;
    status: 'pending' | 'completed' | 'rejected' | 'expired';
    onPress: () => void;
}

const Request: React.FC<RequestProps> = props => (
    <Card style={styles.container} onPress={props.onPress}>
        <ProfilePicture size="medium" squared />
        <View style={styles.content}>
            <View>
                <Text type="semibold">{props.fullName}</Text>
                <Text>For: {props.recipientName}</Text>
                <Text style={styles.time} small>
                    {props.status === 'pending'
                        ? `${moment(props.expiresAt).fromNow(
                              true
                          )} left to respond`
                        : moment(
                              props.status === 'completed'
                                  ? props.completedAt
                                  : props.status === 'expired'
                                  ? props.expiresAt
                                  : props.refusedAt
                          ).format('DD-MM-YYYY')}
                </Text>
            </View>
            <Button type="secondary" small>
                View Request
            </Button>
        </View>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    content: {
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    time: {
        color: Colors.neutralLight
    }
});

export { Request };
