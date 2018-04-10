import * as React from 'react';

const shouldComponentUpdate = (fn: Function) =>
    (Component : React.ComponentType) : any =>
        class ShouldComponentUpdate extends React.Component {
            shouldComponentUpdate (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default shouldComponentUpdate;