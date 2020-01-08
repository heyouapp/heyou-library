import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

// Library
import { Icon, Text } from 'components/core';
import { User } from 'components/account';
import { Colors } from 'utils';

export interface ReviewProps {
    style?: StyleProp<ViewStyle>;
}

const Review: React.FC<ReviewProps> = props => (
    <View style={props.style}>
        <User fullName="" username="" />
        <View style={styles.stars}>
            <Icon name="starFull" color={Colors.primary} style={styles.star} />
            <Icon name="starFull" color={Colors.primary} style={styles.star} />
            <Icon name="starEmpty" color={Colors.primary} style={styles.star} />
            <Icon name="starEmpty" color={Colors.primary} style={styles.star} />
            <Icon name="starEmpty" color={Colors.primary} style={styles.star} />
        </View>
        <Text style={styles.text}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            imperdiet lacus ac lectus porttitor vehicula. Cras ultricies, justo
            eu fermentum condimentum.”
        </Text>
    </View>
);

const styles = StyleSheet.create({
    stars: {
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: -5,
        flexDirection: 'row'
    },
    star: {
        marginHorizontal: 5
    },
    text: {
        fontStyle: 'italic'
    }
});

export { Review };
