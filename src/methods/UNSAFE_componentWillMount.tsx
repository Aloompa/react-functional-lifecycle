import * as React from 'react';

const UNSAFE_componentWillMount = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillMount extends React.Component {
            UNSAFE_componentWillMount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default UNSAFE_componentWillMount;