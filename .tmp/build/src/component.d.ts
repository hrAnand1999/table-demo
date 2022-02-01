import * as React from 'react';
export interface state {
    textLabel: string;
    textValue: string;
    size: number;
}
export declare const initialState: state;
export declare class ReactCircleCard extends React.Component<{}, state> {
    constructor(props: any);
    render(): JSX.Element;
    private static updateCallback;
    static update(newState: state): void;
    state: state;
    componentWillMount(): void;
    componentWillUnmount(): void;
}
export default ReactCircleCard;
