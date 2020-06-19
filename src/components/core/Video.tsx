import * as React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

// Library
import { Colors } from 'utils';

const Video: React.FC<ViewProps> = props => (
    <View style={[styles.container, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.placeholder,
        width: '100%',
        paddingTop: '150%',
        overflow: 'hidden',
    },
});

export { Video };
