import * as React from 'react';

const componentDidCatch = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentDidCatch extends React.Component {
            componentDidCatch (err, info) {
                return fn(this.props, err, info, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentDidCatch;