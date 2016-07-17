// @flow

import React from 'react';

const functional = (render: Function, lifecycleMethods: Object = {}): Function => {

    class Component extends React.Component {

        componentWillMount () {
            if (lifecycleMethods.componentWillMount) {
                return lifecycleMethods.componentWillMount(this.props, this);
            }
        }

        componentDidMount () {
            if (lifecycleMethods.componentDidMount) {
                return lifecycleMethods.componentDidMount(this.props, this);
            }
        }

        componentWillReceiveProps (nextProps: Object) {
            if (lifecycleMethods.componentWillReceiveProps) {
                return lifecycleMethods.componentWillReceiveProps(this.props, nextProps, this);
            }
        }

        shouldComponentUpdate (nextProps: Object) {
            if (lifecycleMethods.shouldComponentUpdate) {
                return lifecycleMethods.shouldComponentUpdate(this.props, nextProps, this);
            }

            return true;
        }

        componentWillUpdate (nextProps: Object) {
            if (lifecycleMethods.componentWillUpdate) {
                return lifecycleMethods.componentWillUpdate(this.props, nextProps, this);
            }
        }

        componentDidUpdate (previousProps: Object) {
            if (lifecycleMethods.componentDidUpdate) {
                return lifecycleMethods.componentDidUpdate(this.props, previousProps, this);
            }
        }

        componentWillUnmount () {
            if (lifecycleMethods.componentWillUnmount) {
                return lifecycleMethods.componentWillUnmount(this.props, this);
            }
        }

        render () {
            return render(this.props);
        }

    }

    return Component;

};

export default functional;
