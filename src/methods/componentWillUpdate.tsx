import * as React from 'react';

const componentWillUpdate = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillUpdate extends React.Component {
            componentWillUpdate (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentWillUpdate;