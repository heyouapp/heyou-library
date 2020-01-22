import * as React from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';

// Library
import { InputStyle, InputInnerStyle, Tag } from 'components/core';
import { Colors } from 'utils';

export interface AutocompleteProps extends TextInputProps {
    tags: [];
    onTagPress: () => void;
}

const Autocomplete = (props: AutocompleteProps) => (
    <View style={[InputStyle, props.style]}>
        <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            style={[InputInnerStyle, styles.input]}
        />
        {props.tags.length > 0 && (
            <View style={styles.content}>
                {props.tags.map(() => (
                    <Tag>Test</Tag>
                ))}
            </View>
        )}
    </View>
);

const styles = StyleSheet.create({
    input: {
        height: 45
    },
    content: {
        borderTopWidth: 1,
        borderTopColor: Colors.greyLight,
        padding: 3.75,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export { Autocomplete };
