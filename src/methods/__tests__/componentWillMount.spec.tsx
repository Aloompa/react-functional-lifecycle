import TestComponent from '../../__mocks__/TestComponent';
import componentWillMount from '../componentWillMount';

describe('ComponentWillMount', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call componentWillMount with props', () => {
            const spy = jest.fn();

            const Component = componentWillMount(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.componentWillMount();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
