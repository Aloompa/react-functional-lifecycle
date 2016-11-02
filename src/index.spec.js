// @flow

import functional, { componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount  } from './index';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import React from 'react';

function TestComponent (props) {
    return (
        <div>
            {props.greeting} World!
        </div>
    );
}

describe('React Functional Lifecycle', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call componentWillMount with props', (done) => {
            const Output = componentWillMount(props => {
                expect(props.greeting).toBe('Hi');
                done();
            })(TestComponent);

            const output = new Output({
                greeting: 'Hi'
            });

            output.componentWillMount();
        });

        it('Should call componentDidMount with props', (done) => {
            const Component = componentDidMount(props => {
                expect(props.greeting).toBe('Yo');
                done();
            })(TestComponent);

            const output = new Component({
                greeting: 'Yo'
            });

            output.componentDidMount();
        });

        it('Should call componentWillReceiveProps with props and nextProps', (done) => {
            const Component = componentWillReceiveProps((props, nextProps) => {
                expect(props.greeting).toBe('Hiya');
                expect(nextProps.greeting).toBe('Hiya Partner');
                done();
            })(TestComponent);

            const output = new Component({
                greeting: 'Hiya'
            });

            output.componentWillReceiveProps({
                greeting: 'Hiya Partner'
            });
        });

        it('Should call shouldComponentUpdate with props and nextProps', (done) => {
            const Component = shouldComponentUpdate((props, nextProps) => {
                expect(props.greeting).toBe('Howdy');
                expect(nextProps.greeting).toBe('Howdy Partner');
                done();
            })(TestComponent);

            const output = new Component({
                greeting: 'Howdy'
            });

            output.shouldComponentUpdate({
                greeting: 'Howdy Partner'
            });
        });

        it('Should call componentWillUpdate with props and nextProps', (done) => {
            const Component = componentWillUpdate((props, nextProps) => {
                expect(props.greeting).toBe('Greetings');
                expect(nextProps.greeting).toBe('More Greetings');
                done();
            })(TestComponent);

            const output = new Component({
                greeting: 'Greetings'
            });

            output.componentWillUpdate({
                greeting: 'More Greetings'
            });
        });

        it('Should call componentDidUpdate with props and previousProps', (done) => {
            const Component = componentDidUpdate((props, previousProps) => {
                expect(props.greeting).toBe('Wassup');
                expect(previousProps.greeting).toBe('Waaasup');
                done();
            })(TestComponent);

            const output = new Component({
                greeting: 'Wassup'
            });

            output.componentDidUpdate({
                greeting: 'Waaasup'
            });
        });

        it('Should call componentWillUnmount with props', (done) => {
            const Component = componentWillUnmount(props => {
                expect(props.greeting).toBe('Bye');
                done();
            })(TestComponent);

            const output = new Component({
                greeting: 'Bye'
            });

            output.componentWillUnmount();
        });
    });

    describe('When we use it as an object on render', () => {
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
