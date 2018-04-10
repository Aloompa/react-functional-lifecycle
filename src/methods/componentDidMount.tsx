import * as React from 'react';

const componentDidMount = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentDidMount extends React.Component {
            componentDidMount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentDidMount;