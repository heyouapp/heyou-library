import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

// Library
import { Card, Video, VideoProps } from 'components/core';
import { Share } from './Share';
import { Review, ReviewProps } from './Review';

export interface RequestVideoProps extends VideoProps {
    review?: ReviewProps;
    completedLabel: string;
    completedValue: string;
    onShare: () => void;
    style?: StyleProp<ViewStyle>;
}

const RequestVideo: React.FC<RequestVideoProps> = props => (
    <Card style={[styles.container, props.style]}>
        <View style={styles.header}>
            {props.completedLabel}
            {!!props.onShare && <Share onPress={props.onShare} />}
        </View>
        <Video {...props} />
        {props.review && <Review {...props.review} style={styles.review} />}
    </Card>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
    header: {
        height: 45,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    review: {
        paddingTop: 15,
        paddingHorizontal: 15,
    },
});

export { RequestVideo };
