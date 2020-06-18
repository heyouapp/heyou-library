import * as React from 'react';
import {
    StyleSheet,
    View,
    ViewProps,
    TouchableWithoutFeedback,
} from 'react-native';

// Library
import { Icon } from './Icon';
import { Colors, ColorOpacity } from 'utils';

export interface VideoProps extends ViewProps {
    playing: boolean;
    onPlay: (state: boolean) => void;
}

const Video: React.FC<VideoProps> = props => (
    <TouchableWithoutFeedback
        onPress={() => props.onPlay(!props.playing)}
        disabled={!props.onPlay}>
        <View style={[styles.container, props.style]}>
            {props.children}
            {!props.playing && (
                <View style={styles.icon}>
                    <View style={styles.icon_holder}>
                        <Icon name="play" color={Colors.white} size={30} />
                    </View>
                </View>
            )}
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.placeholder,
        width: '100%',
        paddingTop: '120%',
        overflow: 'hidden',
    },
    icon: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    icon_holder: {
        borderRadius: 25,
        backgroundColor: ColorOpacity(Colors.white, 0.2),
        height: 50,
        width: 50,
        paddingLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { Video };
