import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';

// Library
import { Text, Card, Video, VideoProps } from 'components/core';
import { Share, Review, ReviewProps } from 'components/common';

export interface RequestVideoProps extends VideoProps {
    review?: ReviewProps;
    completedAt: string;
    onShare: () => void;
}

const RequestVideo: React.FC<RequestVideoProps> = props => (
    <Card style={styles.container}>
        <View style={styles.header}>
            <Text small>
                Video completed on{' '}
                <Text type="semibold" small>
                    {moment(props.completedAt).format('DD-MM-YYYY')}
                </Text>
            </Text>
            <Share onPress={props.onShare} />
        </View>
        <Video {...props} />
        {props.review && <Review {...props.review} style={styles.review} />}
    </Card>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 7.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    review: {
        paddingTop: 15,
        paddingHorizontal: 15
    }
});

export { RequestVideo };
