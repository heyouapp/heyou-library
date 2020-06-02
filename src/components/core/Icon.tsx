import * as React from 'react';
import { TextProps } from 'react-native';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const expoAssetId = require('assets/font/heyou.ttf');
const IconModel = createIconSetFromIcoMoon(
    require('assets/font/selection.json'),
    'heyou',
    expoAssetId,
);

type IconModelProps = (typeof IconModel) & TextProps;

export interface IconProps extends Partial<IconModelProps> {
    name: string;
    size?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = props => (
    <IconModel size={20} {...props} name={props.name as never} />
);

export { Icon };
