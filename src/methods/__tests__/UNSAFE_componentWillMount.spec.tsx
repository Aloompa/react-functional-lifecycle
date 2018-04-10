import TestComponent from '../../__mocks__/TestComponent';
import UNSAFE_componentWillMount from '../UNSAFE_componentWillMount';

describe('UNSAFE ComponentWillMount', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call UNSAFE_componentWillMount with props', () => {
            const spy = jest.fn();

            const Component = UNSAFE_componentWillMount(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.UNSAFE_componentWillMount();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
