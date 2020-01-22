/// <reference types="react" />
interface ListItemProps {
    label: string;
    value?: string;
    onPress: () => void;
}
declare const ListItem: (props: ListItemProps) => JSX.Element;
export { ListItem };
