'use strict';

/**
 * Класс для кэширования данных. Простейший аналог new Map() из es6, только ключем может быть строка.
 */
class Cache {
    constructor() {
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
    get(key) {
        return this._cache[key];
    }

    /**
     * Устанавливает значение в Cache по ключу.
     *
     * @param key
     * @param value
     * @return {Cache}
     */
    set(key, value) {
        this._cache[key] = value;

        return this;
    }

    /**
     * Возвращает true, если данные по ключю есть в Cache, иначе false.
     *
     * @param key
     * @return {boolean}
     */
    has(key) {
        return !!this._cache[key];
    }

    /**
     *  Удаляет все записи.
     */
    clear() {
        this._cache = {};
    }

    /**
     * Удаляет запись с ключом key, возвращает true, если такая запись была, иначе false.
     *
     * @param key
     * @return {boolean}
     */
    ['delete'](key) {
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
    forEach(f, thisArg) {
        Object.keys(this._cache).forEach((key) => {
            f.call(thisArg || this, this.get(key), key, this);
        });
    }

    /**
     * Возвращает внутренний объект Cache с ключами-значениями.
     *
     * @return {Object}
     */
    getAll() {
        return this._cache;
    }
}

export default Cache;
