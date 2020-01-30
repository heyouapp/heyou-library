import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

// Library
import { Icon, Text } from 'components/core';
import { User } from 'components/account';
import { Colors } from 'utils';

export interface ReviewProps {
    style?: StyleProp<ViewStyle>;
    fullName: string;
    userName: string;
    rating: number;
    description: string;
}

const Review: React.FC<ReviewProps> = props => (
    <View style={props.style}>
        <User fullName={props.fullName} userName={props.userName} />
        <View style={styles.stars}>
            {[...new Array(5)].map((_item, index: number) => (
                <Icon
                    name={index < props.rating ? 'starFull' : 'starEmpty'}
                    color={Colors.primary}
                    style={styles.star}
                    key={index.toString()}
                />
            ))}
        </View>
        <Text style={styles.text}>“{props.description}”</Text>
    </View>
);

const styles = StyleSheet.create({
    stars: {
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: -5,
        flexDirection: 'row',
    },
    star: {
        marginHorizontal: 5,
    },
    text: {
        fontStyle: 'italic',
    },
});

export { Review };
