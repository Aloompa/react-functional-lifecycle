import TestComponent from '../../__mocks__/TestComponent';
import getSnapshotBeforeUpdate from '../getSnapshotBeforeUpdate';

describe('getSnapshotBeforeUpdate', () => {

    it('Should call getSnapshotBeforeUpdate with props', () => {
        const spy = jest.fn();

        const Component = getSnapshotBeforeUpdate(props => {
            spy(props);
        }, jest.fn())(TestComponent);

        const component = new Component({
            greeting: 'Hi'
        });

        component.getSnapshotBeforeUpdate();

        expect(spy).toBeCalledWith({
            greeting: 'Hi'
        });
    });
    
});
