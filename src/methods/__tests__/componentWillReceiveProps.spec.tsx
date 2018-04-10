import TestComponent from '../../__mocks__/TestComponent';
import componentWillReceiveProps from '../componentWillReceiveProps';

describe('ComponentWillReceiveProps', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call componentWillReceiveProps with props', () => {
            const spy = jest.fn();

            const Component = componentWillReceiveProps(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.componentWillReceiveProps();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
