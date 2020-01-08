import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Card, Video, VideoProps } from 'components/core';
import { Share, Review } from 'components/common';

export interface RequestVideoProps extends VideoProps {
    review?: boolean;
}

const RequestVideo: React.FC<RequestVideoProps> = props => (
    <Card style={styles.container}>
        <View style={styles.header}>
            <Text small>
                Video completed on{' '}
                <Text type="semibold" small>
                    11/10/2019
                </Text>
            </Text>
            <Share />
        </View>
        <Video {...props} />
        {props.review && <Review style={styles.review} />}
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
