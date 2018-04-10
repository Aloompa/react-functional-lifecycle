import * as React from 'react';

const getSnapshotBeforeUpdate = (fn: Function, updateFn: Function) =>
    (Component : React.ComponentType) : any =>
        class GetSnapshotBeforeUpdate extends React.Component {
            getSnapshotBeforeUpdate (prevProps: Object) {
                return fn(this.props, prevProps, this);
            }

            componentDidUpdate (prevProps, prevState, snapshot) {
                return updateFn(this.props, prevProps, snapshot, this, prevState);
            }

            render () {
                return <Component {...this.props} />;
            }
        };

export default getSnapshotBeforeUpdate;