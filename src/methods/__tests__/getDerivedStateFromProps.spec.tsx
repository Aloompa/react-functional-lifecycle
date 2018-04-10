import TestComponent from '../../__mocks__/TestComponent';
import getDerivedStateFromProps from '../getDerivedStateFromProps';

describe('GetDerivedStateFromProps', () => {
    describe('When we use it as a to compose render', () => {

        it('Should call getDerivedStateFromProps with props', () => {
            const spy = jest.fn();

            const Component = getDerivedStateFromProps(props => {
                spy(props);
            })(TestComponent);

            Component.getDerivedStateFromProps({
                greeting: 'Howdy'
            });

            expect(spy).toBeCalledWith({
                greeting: 'Howdy'
            });
        });

    });
    
});
