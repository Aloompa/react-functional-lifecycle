# React Functional Lifecycle

This is a way to tap into the React lifecycle methods without writing classes. This is useful if you are using a Flux or Redux library to manage your state, but you still need to access lifecycle methods.

## Installation

React Functional Lifecycle has a peerDependency of React 14 or greater. Otherwise, installing it is as easy as:

`npm install react-functional-lifecycle --save`

## API

React Functional Lifecycle is a function that takes your functional component as the first argument and an object of your lifecycle methods as the second argument and returns a new component. For example:

```javascript
import functional from 'react-functional-lifecycle';

function YourReactComponent (props) {
    return (
        <div>Hello</div>
    );
}

export default functional(YourReactComponent, {

    componentWillMount: (props) => {
        // do something..
    },

    shouldComponentUpdate: (props, nextProps) => {
        // do something...
    }

});
```

Additionally, all of the React Lifecycle methods are available as stand-alone methods that can be composed around your render.

```javascript
import { shouldComponentUpdate } from 'react-functional-lifecycle';

function YourReactComponent (props) {
    return (
        <div>Hello</div>
    );
}

export default shouldComponentUpdate(
    (props, nextProps) => props !== nextProps
)(YourReactComponent);
```

The composed wrapper usage allows you to string multiple methods together. If you are using a utility library such as Lodash or Ramda, you can use `compose` like this:

```javascript
import { compose } from 'lodash';
import { shouldComponentUpdate } from 'react-functional-lifecycle';

function YourReactComponent (props) {
    return (
        <div>Hello</div>
    );
}

export default compose(
    shouldComponentUpdate((props, nextProps) => props !== nextProps),
    componentWillUnmount(() => console.log('Bye!'))
)(YourReactComponent);
```

The object can contain any of the following methods:

- `componentWillMount(props, component)`
- `componentDidMount(props, component)`
- `componentWillReceiveProps(props, nextProps, component)`
- `shouldComponentUpdate(props, nextProps, component)`
- `componentWillUpdate(props, nextProps, component)`
- `componentWillUpdate(props, previousProps, component)`
- `componentWillUnmount(props, component)`

## Contributing

We encourage you to contribute to React Functional Lifecycle by submitting bug reports and pull requests through Github.

## License

React Functional Lifecycle is released under The MIT License (MIT)

Copyright (c) [2015] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
