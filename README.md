# React Functional Lifecycle

Are you tired of using classes in React just to use the lifecycle methods? This library is designed to allow lifecycle methods to be exposed as composable functions.

Previously:

```javascript
class MyComponent {

    componentDidMount () {
        console.log('I mounted with props:', this.props);
    }

    componentWillUnmount () {
        console.log('See you later!', this.props);
    }

    render () {
        return (
            <SomeComponent {...this.props} />
        );
    }

}
```

With React-Functional-LifeCycle:

```javascript

const MyComponent = compose(
    componentDidMount(props => {
        console.log('I mounted with props:', props);
    }),
    componentWillUnmount(props => {
        console.log('See you later!', props);
    })
)(SomeComponent);
```

This is a way to tap into the React lifecycle methods without writing classes. This is useful if you are using [Recompose](https://github.com/acdlite/recompose/) or [Redux](redux.js.org) to manage your state, but you still need to access lifecycle methods.

This library works with React web or native and allows access to all of the lifecycle methods you know and love.

## Installation

React Functional Lifecycle has a peerDependency of React 14 or greater. Otherwise, installing it is as easy as:

`npm install react-functional-lifecycle --save`

## API

### Table of Contents

- [componentWillMount(props, component)](#componentwillmount) *deprecated
- [UNSAFE_componentWillMount(props, component)](#unsafe_componentwillmount)
- [componentDidMount(props, component)](#componentdidmount)
- [componentWillReceiveProps(props, nextProps, component)](#componentwillreceiveprops) *deprecated
- [UNSAFE_componentWillReceiveProps(props, nextProps, component)](#unsafe_componentwillreceiveprops)
- [shouldComponentUpdate(props, nextProps, component)](#shouldcomponentupdate)
- [componentWillUpdate(props, nextProps, component)](#componentwillupdate) *deprecated
- [UNSAFE_componentWillUpdate(props, nextProps, component)](#unsafe_componentwillupdate)
- [componentDidUpdate(props, previousProps, component)](#componentdidupdate)
- [componentWillUnmount(props, component)](#componentwillunmount)
- [getDerivedStateFromProps(props)](#getderivedstatefromprops)
- [getSnapshotBeforeUpdate([props, prevProps, component], [props, prevProps, snapshot, component])](#getsnapshotbeforeupdate)
- [componentDidCatch(props, error, info, component)](#componentdidcatch)

### componentWillMount

This is triggered when a component will mount. Note that this method is being deprecated and will not work in version 17 of React. Use `UNSAFE_componentWillMount` if you must use it now.

`componentWillMount(props: Object, component: Object)`

```javascript
import { componentWillMount } from 'react-functional-lifecycle';

export default componentWillMount(props => {
    console.log('I will mount with props:', props);
})(YourReactComponent);
```

### UNSAFE_componentWillMount

This is triggered when a component will mount.

`UNSAFE_componentWillMount(props: Object, component: Object)`

```javascript
import { UNSAFE_componentWillMount } from 'react-functional-lifecycle';

export default UNSAFE_componentWillMount(props => {
    console.log('I will mount with props:', props);
})(YourReactComponent);
```

### componentWillReceiveProps

This is triggered when the component is about to get new props. Note that this method is being deprecated and will not work in version 17 of React. Use `UNSAFE_componentWillReceiveProps` if you must use it now.

`componentWillReceiveProps(props: Object, component: Object)`

```javascript
import { componentWillReceiveProps } from 'react-functional-lifecycle';

export default componentWillReceiveProps(props => {
    console.log('I am going to receive props:', props);
})(YourReactComponent);
```

### UNSAFE_componentWillReceiveProps

This is triggered when the component is about to get new props.

`UNSAFE_componentWillReceiveProps(props: Object, component: Object)`

```javascript
import { UNSAFE_componentWillReceiveProps } from 'react-functional-lifecycle';

export default UNSAFE_componentWillReceiveProps(props => {
    console.log('I am going to receive props:', props);
})(YourReactComponent);
```

### componentDidMount

This is triggered after a component mounts.

`componenDidMount(props: Object, component: Object)`

```javascript
import { componenDidMount } from 'react-functional-lifecycle';

export default componenDidMount(props => {
    console.log('I did mount with props:', props);
})(YourReactComponent);
```

### shouldComponentUpdate

Return `true` to update your component and `false` to prevent the component from re-rendering.

`shouldComponentUpdate(props: Object, nextProps: Object, component: Object)`

```javascript
import { shouldComponentUpdate } from 'react-functional-lifecycle';

export default shouldComponentUpdate(
    (props, nextProps) => props !== nextProps
)(YourReactComponent);
```

### componentWillUpdate

This is triggered when a component will update. Note that this method is being deprecated and will not work in version 17 of React. Use `UNSAFE_componentWillUpdate` if you must use it now.

`componentWillUpdate(props: Object, nextProps: Object, component: Object)`

```javascript
import { componentWillUpdate } from 'react-functional-lifecycle';

export default componentWillUpdate((props, nextProps) => {
    console.log('I will update with props:', nextProps);
    console.log('Here are my current props', props);
})(YourReactComponent);
```

### UNSAFE_componentWillUpdate

This is triggered when a component will update.

`UNSAFE_componentWillUpdate(props: Object, nextProps: Object, component: Object)`

```javascript
import { UNSAFE_componentWillUpdate } from 'react-functional-lifecycle';

export default UNSAFE_componentWillUpdate((props, nextProps) => {
    console.log('I will update with props:', nextProps);
    console.log('Here are my current props', props);
})(YourReactComponent);
```

### componentDidUpdate

This is triggered when a component finished an update.

`componentDidUpdate(props: Object, prevProps: Object, component: Object)`

```javascript
import { componentDidUpdate } from 'react-functional-lifecycle';

export default componentDidUpdate((props, prevProps) => {
    console.log('I did update with props:', props);
    console.log('Here are my previous props', prevProps);
})(YourReactComponent);
```

### componentWillUnmount

This is triggered when a component is about to unmount.

`componentWillUnmount(props: Object, component: Object)`

```javascript
import { componentWillUnmount } from 'react-functional-lifecycle';

export default componentWillUnmount((props) => {
    console.log('I will unmount with props:', props);
})(YourReactComponent);
```

### getDerivedStateFromProps

This is invoked after a component is instantiated as well as when it receives new props. It should return an object to update state, or null to indicate that the new props do not require any state updates.

`getDerivedStateFromProps(props: Object)`

```javascript
import { getDerivedStateFromProps } from 'react-functional-lifecycle';

export default getDerivedStateFromProps((props) => {
    return !!props.hasUpdate;
})(YourReactComponent);
```

### getSnapshotBeforeUpdate

This method takes two functions: the getSnapshotBeforeUpdate method and the componentDidUpdate method which has access to the snapshot. getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values (e.g. scroll position) before they are potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()

`getSnapshotBeforeUpdate([props: Object, prevProps: Object, component: Object], [props: Object, prevProps: Object, snapshot: any, component: Object])`

```javascript
import { getSnapshotBeforeUpdate } from 'react-functional-lifecycle';

export default getSnapshotBeforeUpdate((props, prevProps) => {
    return 'MY SNAPSHOT'
}, (props, prevProps, snapshot) => {
    console.log(snapshot); // MY SNAPSHOT
})(YourReactComponent);
```

### componentDidCatch

This is triggered when a component has an error.

`componentDidCatch(props: Object, error: any, info: any, component: Object)`

```javascript
import { componentDidCatch } from 'react-functional-lifecycle';

export default componentDidCatch((_props, error) => {
    console.log('I had an error:', error);
})(YourReactComponent);
```

## Composing LifeCycle Methods

The composed wrapper usage allows you to string multiple methods together. If you are using a utility library such as Recompose, Lodash or Ramda, you can use `compose` like this:

```javascript
import { compose } from 'recompose';
import { shouldComponentUpdate } from 'react-functional-lifecycle';

export default compose(
    shouldComponentUpdate((props, nextProps) => props !== nextProps),
    componentWillUnmount(() => console.log('Bye!'))
)(YourReactComponent);
```

## Contributing

We encourage you to contribute to React Functional Lifecycle by submitting bug reports and pull requests through Github.

## License

React Functional Lifecycle is released under The MIT License (MIT)

Copyright (c) [2015] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
