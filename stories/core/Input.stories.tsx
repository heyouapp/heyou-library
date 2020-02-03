import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Store, withState } from '@sambego/storybook-state';

// Library
import { Input, Tag } from 'components/core';
import { Colors } from 'utils';
import { Container } from '../decorators';

const store = new Store({
    value: '',
    onChangeText: (value: string) => store.set({ value }),
});

export default {
    title: 'Core/Input',
    decorators: [withState(), Container],
    parameters: {
        state: {
            store,
        },
    },
};

export const normal = () => <Input />;

export const secondary = () => <Input secondary />;

export const withLabel = () => <Input label="Label test" />;

export const withLabelAndError = () => (
    <Input label="Label test" error="Error label" />
);

export const multiline = () => (
    <Input placeholder="Start typing here..." multiline />
);

export const withContent = () => (
    <Input placeholder="Start typing here...">
        <View style={styles.contentEmpty} />
    </Input>
);

export const autocomplete = () => (
    <Input placeholder="Start typing here...">
        <View style={styles.content}>
            <Tag onPress={() => {}}>Broadway</Tag>
            <Tag onPress={() => {}}>Comic Con</Tag>
            <Tag onPress={() => {}}>DC</Tag>
            <Tag onPress={() => {}}>Disney</Tag>
            <Tag onPress={() => {}}>HBO</Tag>
        </View>
    </Input>
);

const styles = StyleSheet.create({
    contentEmpty: {
        backgroundColor: Colors.grey,
        height: 200,
    },
    content: {
        borderTopWidth: 1,
        borderTopColor: Colors.greyLight,
        marginHorizontal: -3.75,
        marginBottom: -3.75,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
