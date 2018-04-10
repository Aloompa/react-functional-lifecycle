import * as React from 'react';

const componentDidUpdate = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentDidUpdate extends React.Component {
            componentDidUpdate (previousProps: Object) {
                return fn(this.props, previousProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentDidUpdate;