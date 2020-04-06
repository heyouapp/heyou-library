import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    View,
    ViewStyle,
    ImageSourcePropType,
} from 'react-native';

// Library
import { Text, Card, Video, VideoProps } from 'components/core';
import { ProfilePicture } from 'components/account';
import { Share } from './Share';
import { Colors } from 'utils';

export interface CardVideoProps extends VideoProps {
    createdLabel: string;
    recipientLabel: string;
    onShare?: () => void;
    source?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
}

const CardVideo: React.FC<CardVideoProps> = props => (
    <Card style={props.style}>
        <View style={styles.header}>
            <View style={styles.content}>
                <ProfilePicture source={props.source} rounded />
                <View style={styles.label}>
                    <Text type="semibold">{props.recipientLabel}</Text>
                    <Text style={styles.time} small>
                        {props.createdLabel}
                    </Text>
                </View>
            </View>
            {!!props.onShare && <Share onPress={props.onShare} />}
        </View>
        <Video playing={props.playing} onPlay={props.onPlay}>
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
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        marginLeft: 10,
    },
    time: {
        color: Colors.neutralLight,
    },
    review: {
        paddingTop: 15,
        paddingHorizontal: 15,
    },
});

export { CardVideo };
