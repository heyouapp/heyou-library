import * as React from 'react';
import { VideoProps } from 'components/core';
export interface RequestVideoProps extends VideoProps {
    review?: boolean;
}
declare const RequestVideo: React.FC<RequestVideoProps>;
export { RequestVideo };
