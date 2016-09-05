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