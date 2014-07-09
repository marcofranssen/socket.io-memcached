'use strict';

var util = require('util'),
    Adapter = require('socket.io-adapter'),
    debug = require('debug')('socket.io-memcached');

/**
 * Returns a memcached adapter class
 *
 * @param {Object} opts Options for memcached
 */
var adapter = function(opts) {
    debug('This adapter is still under development, please participate in the development by forking the repository on https://github.com/marcofranssen/socket.io-memcached. This version behaves just like the default memory adapter.');
    /**
     * Adapter constructor.
     *
     * @param {string} nsp namespace name
     * @api public
     */
    function MemcachedAdapter(nsp) {
        Adapter.call(this, nsp);
    }

    util.inherits(MemcachedAdapter, Adapter);

    return MemcachedAdapter;
};

module.exports = adapter;
