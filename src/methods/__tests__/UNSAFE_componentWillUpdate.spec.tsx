import TestComponent from '../../__mocks__/TestComponent';
import UNSAFE_componentWillUpdate from '../UNSAFE_componentWillUpdate';

describe('UNSAFE ComponentWillUpdate', () => {
    it('Should call UNSAFE_componentWillUpdate with props', () => {
        const spy = jest.fn();

        const Component = UNSAFE_componentWillUpdate(props => {
            spy(props);
        })(TestComponent);

        const component = new Component({
            greeting: 'Hi'
        });

        component.UNSAFE_componentWillUpdate();

        expect(spy).toBeCalledWith({
            greeting: 'Hi'
        });
    });
});
