import * as React from 'react';

// Library
import { SnapError } from 'components/structure';

// Common
import Wrapper from './Wrapper';

interface Model {
    id?: number;
    onPress?: () => void;
    message: string;
}

interface Context {
    data: Model[];
    push: (d: Model) => void;
    pop: (d: Model) => void;
}

const ErrorsContext = React.createContext<Context | null>(null);

export const useErrors = () => React.useContext(ErrorsContext);

const useErrorsHook = () => {
    const [data, setData] = React.useState<Model[]>([]);

    const push = (item: Model) =>
        setData(prevData => [
            ...prevData,
            {
                id: Date.now(),
                ...item,
            },
        ]);

    const pop = (item: Model) =>
        setData(prevData => {
            const index = prevData.findIndex((e: Model) => e.id === item.id);
            if (index > -1) {
                prevData.splice(index, 1);
            }

            return [...prevData];
        });

    return {
        data,
        push,
        pop,
    };
};

export const ErrorsProvider: React.FC<React.ReactNode> = props => {
    const hook = useErrorsHook();

    return (
        <ErrorsContext.Provider value={hook}>
            <Wrapper>
                {hook.data.map((item: Model) => (
                    <SnapError
                        message={item.message}
                        onClose={() => {
                            hook.pop(item);
                            item.onPress && item.onPress();
                        }}
                        key={item.id}
                    />
                ))}
            </Wrapper>
            {props.children}
        </ErrorsContext.Provider>
    );
};

export { ErrorsContext };
