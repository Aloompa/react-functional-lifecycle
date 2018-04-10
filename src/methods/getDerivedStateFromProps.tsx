import * as React from 'react';

const componentWillUpdate = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class GetDerivedStateFromProps extends React.Component <React.ComponentType> {
            static getDerivedStateFromProps (nextProps, nextState) {
                return fn(nextProps, nextState);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentWillUpdate;