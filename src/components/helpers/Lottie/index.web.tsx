import * as React from 'react';
import LottieWeb from 'react-lottie';

// Common
import { LottieProps } from './model';

const Lottie: React.FC<LottieProps> = ({
    loop = false,
    autoPlay = true,
    ...props
}) => (
    <LottieWeb
        options={{
            loop,
            autoplay: autoPlay,
            animationData: props.source,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        }}
        eventListeners={
            props.callback
                ? [
                      {
                          eventName: 'complete',
                          callback: props.callback,
                      },
                  ]
                : undefined
        }
    />
);

export { Lottie };
