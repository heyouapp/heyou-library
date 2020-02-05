import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    ImageSourcePropType,
} from 'react-native';

// Library
import { Text, Card } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface NotificationProps {
    label: string;
    description: string;
    createdLabel: string;
    onPress?: () => void;
    source?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
}

const Notification: React.FC<NotificationProps> = props => (
    <Card style={[styles.container, props.style]} onPress={props.onPress}>
        <View style={styles.header}>
            {props.source && (
                <ProfilePicture source={props.source} style={styles.picture} />
            )}
            <Text type="semibold">{props.label}</Text>
        </View>
        <Text>{props.description}</Text>
        <Text style={styles.time} small>
            {props.createdLabel}
        </Text>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.greyLight,
        paddingHorizontal: 15,
    },
    header: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    picture: {
        marginRight: 10,
    },
    time: {
        marginTop: 10,
        color: Colors.neutralLight,
        alignSelf: 'flex-end',
    },
});

export { Notification };
