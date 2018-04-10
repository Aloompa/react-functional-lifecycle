import TestComponent from '../../__mocks__/TestComponent';
import componentWillUpdate from '../componentWillUpdate';

describe('ComponentWillUpdate', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call componentWillUpdate with props', () => {
            const spy = jest.fn();

            const Component = componentWillUpdate(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.componentWillUpdate();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
