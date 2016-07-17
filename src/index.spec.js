// @flow

import functional from './index';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import React from 'react';

function TestComponent (props) {
    return (
        <div>
            {props.greeting} World!
        </div>
    )
}

const FunctionalComponent = functional(TestComponent, {});

function setup (props) {
    const renderer = TestUtils.createRenderer()
    renderer.render(<FunctionalComponent {...props} />)
    const output = renderer.getRenderOutput()

    return {
        props,
        output,
        renderer
    };
}

describe('React Functional Lifecycle', () => {
    describe('When we override render', () => {
        it('Should pass in the props', () => {
            const { output } = setup({ greeting: 'Hello' });
            const [ greeting ] = output.props.children;

            expect(greeting).toBe('Hello');
        });

        it('Should call componentWillMount with props', (done) => {
            const Component = functional(TestComponent, {
                componentWillMount: (props) => {
                    expect(props.greeting).toBe('Hi');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Hi'
            });

            component.componentWillMount();
        });

        it('Should call componentDidMount with props', (done) => {
            const Component = functional(TestComponent, {
                componentDidMount: (props) => {
                    expect(props.greeting).toBe('Yo');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Yo'
            });

            component.componentDidMount();
        });

        it('Should call componentWillReceiveProps with props and nextProps', (done) => {
            const Component = functional(TestComponent, {
                componentWillReceiveProps: (props, nextProps) => {
                    expect(props.greeting).toBe('Hiya');
                    expect(nextProps.greeting).toBe('Hiya Partner');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Hiya'
            });

            component.componentWillReceiveProps({
                greeting: 'Hiya Partner'
            });
        });

        it('Should call shouldComponentUpdate with props and nextProps', (done) => {
            const Component = functional(TestComponent, {
                shouldComponentUpdate: (props, nextProps) => {
                    expect(props.greeting).toBe('Howdy');
                    expect(nextProps.greeting).toBe('Howdy Partner');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Howdy'
            });

            component.shouldComponentUpdate({
                greeting: 'Howdy Partner'
            });
        });

        it('Should call componentWillUpdate with props and nextProps', (done) => {
            const Component = functional(TestComponent, {
                componentWillUpdate: (props, nextProps) => {
                    expect(props.greeting).toBe('Greetings');
                    expect(nextProps.greeting).toBe('More Greetings');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Greetings'
            });

            component.componentWillUpdate({
                greeting: 'More Greetings'
            });
        });

        it('Should call componentDidUpdate with props and previousProps', (done) => {
            const Component = functional(TestComponent, {
                componentDidUpdate: (props, previousProps) => {
                    expect(props.greeting).toBe('Wassup');
                    expect(previousProps.greeting).toBe('Waaasup');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Wassup'
            });

            component.componentDidUpdate({
                greeting: 'Waaasup'
            });
        });

        it('Should call componentWillUnmount with props', (done) => {
            const Component = functional(TestComponent, {
                componentWillUnmount: (props) => {
                    expect(props.greeting).toBe('Bye');
                    done();
                }
            });

            const component = new Component({
                greeting: 'Bye'
            });

            component.componentWillUnmount();
        });
    });
});
