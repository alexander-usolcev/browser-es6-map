# browser-es6-map

**browser-es6-map** - it's simple implementation of [new Map()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) from es6 in browser.
But there is one exception - the key can only be a string.

For building you can use [Webpack](https://webpack.github.io/) or something like it.

## Why?
We can't use the original **new Map()** in our files, because the **new Map()** now (July 2016) is not supported in the browser.

## Install 
```
npm install browser-es6-map --save-dev
```

## Use

Create your es6 file:
``` js
// my-file.js

import Cache from 'browser-es6-map';


function test() {

    let listeners = new Cache();
    
    listeners.set('my-number', 1);
    listeners.set('my-array', []);
    listeners.set('my-string', '1');
    
    
    console.log(listeners.has('my-number')); // true
    console.log(listeners.get('my-string')); // '1'
    
    listeners.get('my-array').push('test string data to array');
    listeners.get('my-array').push('another test string data to array');
    
    console.log(listeners.get('my-array')[1]); // 'another test string data to array'
    
    listeners.set('my-string', '2');
    console.log(listeners.get('my-string')); // '2'
}

export default test();

```

and then build it with webpack.

Add to html page you generated script and open console tab in devtools:
``` html
<script src='my-bundle.js'></script>
```

you will see:
```
true
'1'
'another test string data to array'
'2'
```