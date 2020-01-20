import * as React from 'react';
export interface HeaderProps {
    title: React.ReactNode | string;
    theme?: 'white' | 'primary';
    onPressBack?: () => void;
    onPressClose?: () => void;
}
declare const Header: (props: HeaderProps) => JSX.Element;
export { Header };
