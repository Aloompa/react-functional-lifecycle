// @flow

import React from 'react';

export const componentWillMount = (fn: Function) =>
    (Component: Object) =>
        class ComponentWillMount extends React.Component {
            componentWillMount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export const componentDidMount = (fn: Function) =>
    (Component: Object) =>
        class ComponentDidMount extends React.Component {
            componentDidMount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export const componentWillReceiveProps = (fn: Function) =>
    (Component: Object) =>
        class ComponentWillReceiveProps extends React.Component {
            componentWillReceiveProps (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export const shouldComponentUpdate = (fn: Function) =>
    (Component: Object) =>
        class ShouldComponentUpdate extends React.Component {
            shouldComponentUpdate (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export const componentWillUpdate = (fn: Function) =>
    (Component: Object) =>
        class ComponentWillUpdate extends React.Component {
            componentWillUpdate (nextProps: Object) {
                return fn(this.props, nextProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export const componentDidUpdate = (fn: Function) =>
    (Component: Object) =>
        class ComponentDidUpdate extends React.Component {
            componentDidUpdate (previousProps: Object) {
                return fn(this.props, previousProps, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export const componentWillUnmount = (fn: Function) =>
    (Component: Object) =>
        class ComponentWillUnmount extends React.Component {
            componentWillUnmount () {
                return fn(this.props, this);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

const functional = (render: Function, lifecycleMethods: Object = {}): Function => {

    let response = render;

    const availableMethods = {
        componentWillMount,
        componentDidMount,
        componentWillReceiveProps,
        shouldComponentUpdate,
        componentWillUpdate,
        componentDidUpdate,
        componentWillUnmount
    };

    Object.keys(lifecycleMethods).map(methodName => {
        response = availableMethods[methodName](lifecycleMethods[methodName])(response);
    });

    return response;

};

export default functional;
