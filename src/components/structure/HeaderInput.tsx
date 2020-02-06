import * as React from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';

// Library
import { Icon } from 'components/core';
import { Colors, ColorOpacity } from 'utils';

const HeaderInput: React.FC<TextInputProps> = props => (
    <View style={styles.input}>
        <TextInput style={styles.input_inner} {...props} />
        <Icon name="search" color={Colors.white} style={styles.icon} />
    </View>
);

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        backgroundColor: ColorOpacity(Colors.black, 0.2),
        height: 30,
        paddingRight: 15,
        marginTop: 15,
        marginBottom: 7,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input_inner: {
        paddingHorizontal: 15,
        color: 'white',
        flex: 1,
    },
    icon: {
        height: 15,
        width: 15,
    },
});

export { HeaderInput };
