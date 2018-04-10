import TestComponent from '../../__mocks__/TestComponent';
import componentDidMount from '../componentDidMount';

describe('ComponentDidMount', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call componentDidMount with props', () => {
            const spy = jest.fn();

            const Component = componentDidMount(props => {
                spy(props);
            })(TestComponent);

            const component = new Component({
                greeting: 'Hi'
            });

            component.componentDidMount();

            expect(spy).toBeCalledWith({
                greeting: 'Hi'
            });
        });

    });
    
});
