// @flow

import React from 'react';

const functional = (render: Function, lifecycleMethods: Object = {}) => {

    class Component extends React.Component {

        componentWillMount () {
            if (lifecycleMethods.componentWillMount) {
                lifecycleMethods.componentWillMount(this.props, this);
            }
        }

        componentDidMount () {
            if (lifecycleMethods.componentDidMount) {
                lifecycleMethods.componentDidMount(this.props, this);
            }
        }

        componentWillReceiveProps (nextProps) {
            if (lifecycleMethods.componentWillReceiveProps) {
                lifecycleMethods.componentWillReceiveProps(this.props, nextProps, this);
            }
        }

        shouldComponentUpdate (nextProps) {
            if (lifecycleMethods.shouldComponentUpdate) {
                lifecycleMethods.shouldComponentUpdate(this.props, nextProps, this);
            }
        }

        componentWillUpdate (nextProps) {
            if (lifecycleMethods.componentWillUpdate) {
                lifecycleMethods.componentWillUpdate(this.props, nextProps, this);
            }
        }

        componentDidUpdate (previousProps) {
            if (lifecycleMethods.componentDidUpdate) {
                lifecycleMethods.componentDidUpdate(this.props, previousProps, this);
            }
        }

        componentWillUnmount () {
            if (lifecycleMethods.componentWillUnmount) {
                lifecycleMethods.componentWillUnmount(this.props, this);
            }
        }

        render () {
            return render(this.props);
        }

    }

    return Component;

};

export default functional;
