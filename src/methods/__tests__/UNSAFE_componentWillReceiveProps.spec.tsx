import TestComponent from '../../__mocks__/TestComponent';
import UNSAFE_componentWillReceiveProps from '../UNSAFE_componentWillReceiveProps';

describe('UNSAFE ComponentWillReceiveProps', () => {
    it('Should call UNSAFE_componentWillReceiveProps with props', () => {
        const spy = jest.fn();

        const Component = UNSAFE_componentWillReceiveProps(props => {
            spy(props);
        })(TestComponent);

        const component = new Component({
            greeting: 'Hi'
        });

        component.UNSAFE_componentWillReceiveProps();

        expect(spy).toBeCalledWith({
            greeting: 'Hi'
        });
    });
});
