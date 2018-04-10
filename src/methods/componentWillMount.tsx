import * as React from 'react';

const componentWillMount = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillMount extends React.Component {
            componentWillMount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentWillMount;