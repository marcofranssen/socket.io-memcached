'use strict';

var util = require('util'),
    Adapter = require('socket.io-adapter'),
    debug = require('debug')('socket.io-memcached');

/**
 * Returns a memcached adapter class
 *
 * @param {Mixed} args Array, string or object with servers
 * @param {Object} options options for memcached
 */
var adapter = function(args, options) {
    debug('This adapter is still under development, please participate in the development by forking the repository on https://github.com/marcofranssen/socket.io-memcached. This version behaves just like the default memory adapter.');

    var Memcached = require('memcached'),
        memcached = new Memcached(args, options);

    /**
     * Adapter constructor.
     *
     * @param {string} nsp namespace name
     * @api public
     */
    function MemcachedAdapter(nsp) {
        Adapter.call(this, nsp);
        this.memcached = memcached;
    }

    util.inherits(MemcachedAdapter, Adapter);

    return MemcachedAdapter;
};

module.exports = adapter;
