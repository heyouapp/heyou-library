import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    ImageSourcePropType,
} from 'react-native';

// Library
import { Text, Button, Card } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface RequestProps {
    fullName: string;
    recipientLabel: string;
    status: string;
    buttonText: string;
    onPress: () => void;
    source?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
}

const Request: React.FC<RequestProps> = props => (
    <Card style={[styles.container, props.style]} onPress={props.onPress}>
        <ProfilePicture source={props.source} size="md" />
        <View style={styles.content}>
            <View>
                <Text type="semibold" style={styles.fullName}>
                    {props.fullName}
                </Text>
                <Text>{props.recipientLabel}</Text>
                <Text style={styles.time} small>
                    {props.status}
                </Text>
            </View>
            <Button type="secondary" position="end" small>
                {props.buttonText}
            </Button>
        </View>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    content: {
        marginLeft: 15,
        justifyContent: 'space-between',
        flex: 1,
    },
    fullName: {
        lineHeight: 18,
    },
    time: {
        marginTop: 5,
        color: Colors.neutralLight,
    },
});

export { Request };
