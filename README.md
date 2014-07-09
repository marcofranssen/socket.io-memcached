# socket.io-memcached

## Note

This adapter is still under development. Feel free to fork and participate in the development.

## How to use

```js
var io = require('socket.io')(3000);
var memcached = require('socket.io-memcached');
io.adapter(memcached({ host: 'localhost', port: 6379 }));
```

By running socket.io with the `socket.io-memcached` adapter you can run
multiple socket.io instances in different processes or servers that can
all broadcast and emit events to and from each other.

If you need to emit events to socket.io instances from a non-socket.io
process, you should use [socket.io-emitter](http:///github.com/Automattic/socket.io-emitter).

## API

### adapter(opts)

Coming soon...

## License
[MIT](/LICENSE)
