'use strict';

/**
 * Класс для кэширования данных. Простейший аналог new Map() из es6, только ключем может быть строка.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
    function Cache() {
        _classCallCheck(this, Cache);

        /** Приватное свойство _cache */
        Object.defineProperty(this, '_cache', {
            value: {}
        });
    }

    /**
     * Возвращает значение по ключу из Cache.
     *
     * @param key
     * @return {*}
     */


    _createClass(Cache, [{
        key: 'get',
        value: function get(key) {
            return this._cache[key];
        }

        /**
         * Устанавливает значение в Cache по ключу.
         *
         * @param key
         * @param value
         * @return {Cache}
         */

    }, {
        key: 'set',
        value: function set(key, value) {
            this._cache[key] = value;

            return this;
        }

        /**
         * Возвращает true, если данные по ключю есть в Cache, иначе false.
         *
         * @param key
         * @return {boolean}
         */

    }, {
        key: 'has',
        value: function has(key) {
            return !!this._cache[key];
        }

        /**
         *  Удаляет все записи.
         */

    }, {
        key: 'clear',
        value: function clear() {
            this._cache = {};
        }

        /**
         * Удаляет запись с ключом key, возвращает true, если такая запись была, иначе false.
         *
         * @param key
         * @return {boolean}
         */

    }, {
        key: 'delete',
        value: function _delete(key) {
            if (this.has(key)) {
                delete this._cache[key];

                return true;
            }

            return false;
        }

        /**
         * "Проходит" по Cache и вызывает callback каждый раз для ключа-значения. Аналогичен Array.forEach.
         *
         * @param f
         * @param thisArg
         */

    }, {
        key: 'forEach',
        value: function forEach(f, thisArg) {
            var _this = this;

            Object.keys(this._cache).forEach(function (key) {
                f.call(thisArg || _this, _this.get(key), key, _this);
            });
        }

        /**
         * Возвращает внутренний объект Cache с ключами-значениями.
         *
         * @return {Object}
         */

    }, {
        key: 'getAll',
        value: function getAll() {
            return this._cache;
        }
    }]);

    return Cache;
}();

exports.default = Cache;
