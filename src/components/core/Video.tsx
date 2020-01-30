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
    volume: boolean;
    onVolumeChange: (volume: boolean) => void;
}

const Video: React.FC<VideoProps> = props => (
    <TouchableWithoutFeedback
        onPress={() => props.onVolumeChange(!props.volume)}
        disabled={!props.onVolumeChange}
    >
        <View style={[styles.container, props.style]}>
            {props.children}
            {props.volume !== undefined && (
                <View style={styles.volume}>
                    <Icon
                        name={props.volume ? 'volumeOn' : 'volumeOff'}
                        color={Colors.white}
                        style={styles.icon}
                    />
                </View>
            )}
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.placeholder,
        height: 200,
        overflow: 'hidden',
    },
    volume: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        borderRadius: 15,
        backgroundColor: ColorOpacity(Colors.black, 0.7),
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    icon: {
        height: 18,
        width: 18,
    },
});

export { Video };
