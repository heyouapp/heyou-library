import * as React from 'react';
export interface SelectorProps {
    data: string[];
    value?: number;
    onChange?: (index: number) => void;
}
declare const Selector: React.FC<SelectorProps>;
export { Selector };
