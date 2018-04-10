import * as React from 'react';

const componentWillReceiveProps = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ComponentWillReceiveProps extends React.Component {
            componentWillReceiveProps (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default componentWillReceiveProps;