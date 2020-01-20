/// <reference types="react" />
export interface HeaderProps {
    onPressBack?: () => void;
    onPressClose?: () => void;
    title: Object | string;
    theme?: 'white' | 'primary';
}
declare const Header: (props: HeaderProps) => JSX.Element;
export { Header };
