import * as React from 'react';
import LottieWeb from 'react-lottie';

// Common
import { LottieProps } from './model';

const Lottie: React.FC<LottieProps> = props => (
    <LottieWeb
        {...props}
        options={{
            loop: props.loop || false,
            autoplay: props.autoPlay || true,
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
