import TestComponent from '../../__mocks__/TestComponent';
import componentDidCatch from '../componentDidCatch';

describe('componentDidCatch', () => {

    it('Should call componentDidCatch with props', () => {
        const spy = jest.fn();

        const Component = componentDidCatch((_props, err) => {
            spy(err);
        })(TestComponent);

        const component = new Component({
            greeting: 'Hi'
        });

        component.componentDidCatch('SOME ERROR');

        expect(spy).toBeCalledWith('SOME ERROR');
    });
    
});
