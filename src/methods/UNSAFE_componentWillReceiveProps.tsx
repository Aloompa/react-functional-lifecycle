import * as React from 'react';

const UNSAFE_componentWillReceiveProps = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillReceiveProps extends React.Component {
            UNSAFE_componentWillReceiveProps (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default UNSAFE_componentWillReceiveProps;