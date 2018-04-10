import TestComponent from '../../__mocks__/TestComponent';
import componentWillUnmount from '../componentWillUnmount';

describe('ComponentWillUnmount', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call componentWillUnmount with props', () => {
            const spy = jest.fn();

            const Component = componentWillUnmount(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.componentWillUnmount();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
