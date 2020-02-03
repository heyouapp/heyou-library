import * as React from 'react';
export interface SnapErrorProps {
    message: string;
    closeText?: string;
    onClose: () => void;
}
declare const SnapError: React.FC<SnapErrorProps>;
export { SnapError };
