import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Colors } from 'utils';

export interface PageCounterProps {
    amount: number;
    active: number;
}

const PageCounter: React.FC<PageCounterProps> = props => (
    <View style={styles.container}>
        {[...new Array(props.amount)].map((_item, index: number) => (
            <View
                style={[
                    styles.dot,
                    props.active === index ? styles.dot_active : null
                ]}
                key={index.toString()}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 7.5,
        marginHorizontal: -3,
        flexDirection: 'row'
    },
    dot: {
        borderRadius: 3,
        backgroundColor: Colors.primaryLight,
        height: 6,
        width: 14,
        marginHorizontal: 3
    },
    dot_active: {
        backgroundColor: Colors.primary
    }
});

export { PageCounter };
