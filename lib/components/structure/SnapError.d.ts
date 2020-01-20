/// <reference types="react" />
export interface SnapErrorProps {
    message: string;
    closeText?: string;
    onClose: () => void;
}
declare const SnapError: (props: SnapErrorProps) => JSX.Element;
export { SnapError };
