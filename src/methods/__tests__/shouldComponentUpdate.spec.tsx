import TestComponent from '../../__mocks__/TestComponent';
import shouldComponentUpdate from '../shouldComponentUpdate';

describe('ShouldComponentUpdate', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call shouldComponentUpdate with props', () => {
            const spy = jest.fn();

            const Component = shouldComponentUpdate(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.shouldComponentUpdate();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
