import * as React from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator } from 'react-native';

// Library
import { InputStyle, InputInnerStyle } from './Input';
import { Tag } from './Tag';
import { Colors } from 'utils';

export interface AutocompleteProps {}

const useAutocomplete = (callback: (text: string) => void) => {
    const [loader, setLoader] = React.useState(false);
    const [value, setValue] = React.useState('');

    let timer: any = null;

    const onChangeText = (text: string) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(value);
            setLoader(false);
        }, 2000);

        setValue(text);
        setLoader(true);
    };

    return {
        loader,
        value,
        onChangeText
    };
};

const Autocomplete = (_props: AutocompleteProps) => {
    const uAuto = useAutocomplete(() => {});

    return (
        <View style={InputStyle}>
            <View style={styles.input}>
                <TextInput
                    placeholder="Start typing here..."
                    placeholderTextColor={Colors.neutralLight}
                    value={uAuto.value}
                    onChangeText={uAuto.onChangeText}
                    style={InputInnerStyle}
                />
                {uAuto.loader && <ActivityIndicator />}
            </View>
            <>
                <View style={styles.line} />
                <View style={styles.content}>
                    <Tag>Tag ABC 1</Tag>
                    <Tag>Tag 2</Tag>
                    <Tag>Tag AB 3</Tag>
                    <Tag>Tag 4</Tag>
                    <Tag>Tag A 5</Tag>
                    <Tag>Ta 6</Tag>
                    <Tag>TAG 7</Tag>
                    <Tag>Taggg 8</Tag>
                </View>
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        backgroundColor: Colors.greyLight,
        height: 1,
        marginHorizontal: 15
    },
    content: {
        margin: -3.75,
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export { Autocomplete };
