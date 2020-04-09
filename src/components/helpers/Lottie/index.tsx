import * as React from 'react';
import LottieNative from 'lottie-react-native';

// Common
import { LottieProps } from './model';

const Lottie: React.FC<LottieProps> = ({
    loop = false,
    autoPlay = true,
    ...props
}) => (
    <LottieNative
        source={props.source}
        onAnimationFinish={props.callback}
        loop={loop}
        autoPlay={autoPlay}
    />
);

export { Lottie };
