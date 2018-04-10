import * as React from 'react';

const UNSAFE_componentWillUpdate = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillUpdate extends React.Component {
            UNSAFE_componentWillUpdate (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default UNSAFE_componentWillUpdate;