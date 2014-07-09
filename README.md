# socket.io-memcached [![Build Status](https://travis-ci.org/marcofranssen/socket.io-memcached.svg?branch=master)](https://travis-ci.org/marcofranssen/socket.io-memcached) [![NPM version](https://badge.fury.io/js/socket.io-memcached.svg)](http://badge.fury.io/js/socket.io-memcached)

## Note

This adapter is still under development. Feel free to fork and participate in the development.

## How to use

```js
var io = require('socket.io')(3000);
var memcached = require('socket.io-memcached');
io.adapter(memcached('192.168.0.102:11212'));
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
