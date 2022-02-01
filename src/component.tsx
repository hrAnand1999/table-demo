import * as React from 'react';

export interface state {
    textLabel: string,
    textValue: string,
    size: number
}

export const initialState: state = {
    textLabel: '',
    textValue: '',
    size: 200
}

export class ReactCircleCard extends React.Component<{}, state> {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    render() {
        const { textLabel, textValue, size } = this.state;
        const style: React.CSSProperties = { width: size, height: size };
        return (
            <div className="circleCard" style={style}>
                <p>
                    {textLabel}
                    <br />
                    <em>{textValue}</em>
                </p>
            </div>
        )
    }
    private static updateCallback: (data: object) => void = null;

    public static update(newState: state) {
        if (typeof ReactCircleCard.updateCallback === 'function') {
            ReactCircleCard.updateCallback(newState);
        }
    }

    public state: state = initialState;

    public componentWillMount() {
        ReactCircleCard.updateCallback = (newState: state): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        ReactCircleCard.updateCallback = null;
    }
}

export default ReactCircleCard;