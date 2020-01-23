import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Input, Tag } from 'components/core';
import { Colors } from 'utils';
import { Controlled } from '../decorators';

export default {
    title: 'Core|Input',
};

export const normal = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input />
    </Controlled>
);

export const withLabel = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input label="Label test" />
    </Controlled>
);

export const withLabelAndError = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input label="Label test" error="Error label" />
    </Controlled>
);

export const multiline = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input placeholder="Start typing here..." multiline />
    </Controlled>
);

export const withContent = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input placeholder="Start typing here...">
            <View style={styles.contentEmpty} />
        </Input>
    </Controlled>
);

export const autocomplete = () => (
    <Controlled initialState="" keyValue="value" keyOnChange="onChangeText">
        <Input placeholder="Start typing here...">
            <View style={styles.content}>
                <Tag onPress={() => {}}>Broadway</Tag>
                <Tag onPress={() => {}}>Comic Con</Tag>
                <Tag onPress={() => {}}>DC</Tag>
                <Tag onPress={() => {}}>Disney</Tag>
                <Tag onPress={() => {}}>HBO</Tag>
            </View>
        </Input>
    </Controlled>
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
