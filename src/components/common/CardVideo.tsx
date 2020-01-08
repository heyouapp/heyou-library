import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Card, Video, VideoProps } from 'components/core';
import { Share } from 'components/common';
import { ProfilePicture } from 'components/account';
import { Colors } from 'utils';

export interface CardVideoProps extends VideoProps {}

const CardVideo: React.FC<CardVideoProps> = props => (
    <Card>
        <View style={styles.header}>
            <View style={styles.content}>
                <ProfilePicture />
                <View style={styles.label}>
                    <Text>
                        For: <Text type="semibold">Quiche Holandaise</Text>
                    </Text>
                    <Text style={styles.time} small>
                        15 minutes ago
                    </Text>
                </View>
            </View>
            <Share />
        </View>
        <Video {...props} />
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
