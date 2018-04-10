import * as React from 'react';

const componentWillUnmount = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillUnmount extends React.Component {
            componentWillUnmount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentWillUnmount;