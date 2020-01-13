import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';
import moment from 'moment';

// Library
import { Text, Card, Video, VideoProps } from 'components/core';
import { Share } from 'components/common';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface CardVideoProps extends VideoProps {
    createdAt: string;
    recipientName: string;
    onShare: () => void;
    style?: StyleProp<ViewStyle>;
}

const CardVideo: React.FC<CardVideoProps> = props => (
    <Card style={props.style}>
        <View style={styles.header}>
            <View style={styles.content}>
                <ProfilePicture />
                <View style={styles.label}>
                    <Text>
                        For: <Text type="semibold">{props.recipientName}</Text>
                    </Text>
                    <Text style={styles.time} small>
                        {moment(props.createdAt).fromNow()}
                    </Text>
                </View>
            </View>
            <Share onPress={props.onShare} />
        </View>
        <Video volume={props.volume} onVolumeChange={props.onVolumeChange}>
            {props.children}
        </Video>
    </Card>
);

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        marginLeft: 10
    },
    time: {
        color: Colors.neutralLight
    },
    review: {
        paddingTop: 15,
        paddingHorizontal: 15
    }
});

export { CardVideo };
