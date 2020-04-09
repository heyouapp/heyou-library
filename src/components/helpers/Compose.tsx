import * as React from 'react';

interface Props {
    components: Array<
        React.JSXElementConstructor<React.PropsWithChildren<any>>
    >;
    children: React.ReactNode;
}

const Compose: React.FC<Props> = props => {
    const { components = [], children } = props;

    return (
        <>
            {components.reduceRight(
                (acc, Comp) => (
                    <Comp>{acc}</Comp>
                ),
                children,
            )}
        </>
    );
};

export { Compose };
