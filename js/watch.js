/**
 * ui.watch 数据监听
 *
 * 监听json和array数据：
 * 在不污染原数据（保持正常的原生方式赋值和取值）的情况下，
 * 监听数据的变化（支持原生赋值方式），
 * 可设定每一个走骤反馈，也可以设定最后一次反馈，
 * 新增加的对象同样保持监听，可对一个数据对象可监听多个回调，
 * 对象间相互嵌套，会执行监听冒泡，
 * 删除对象亦删除监听，也可以保留数据对象，只删除全部或局部的监听
 *
 * 对外开放接口
 *
 *
 */
'use strict'
ui.watch = function () { //obj, watcher, hold 或者 obj, attr, watcher, hold 或者watchId
    var _ = ui.watch._;
    //
    if (ui.isFunction(arguments[1])) {
        return _.watchAll.apply(null, arguments);
    };
    if (ui.isArray(arguments[1])) {
        return _.watchSome.apply(null, arguments);
    }
    //
    if (ui.isString(arguments[0])) {
        _.g[arguments[0]]();
    }
}
ui.watch.remove = function () { // obj 或者 obj, true/false 或者 obj, watcher 或者 obj, watcher, true/false 或者 watcher 或者 watchID
    var _ = ui.watch._;
    //
    if (arguments.length >= 2) {
        if (ui.isBoolean(arguments[1])) {
            return _.removeObjAllWatcher.apply(null, arguments);
        } else {
            return _.removeObjOneWatcher.apply(null, arguments);
        }
    } else {
        if (ui.isJson(arguments[0]) || ui.isArray(arguments[0])) {
            return _.removeObjAllWatcher.apply(null, arguments);
        } else {
            return _.removeAllWatcher.apply(null, arguments);
        }
    }
}
//
ui.watch._ = {
    g: {},
    //
    arrayMethods: ['pop', 'push', 'reverse', 'shift', 'sort', 'unshift', 'splice'],
    watchAll: function (obj, watcher, hold) {
        var _ = ui.watch._;
        //
        var isJson = ui.isJson(obj);
        var isArray = ui.isArray(obj);
        //只接收json和array
        if (!isJson && !isArray) {
            return false;
        }
        var id = _.watchOne(obj, watcher, hold);
        if (id === false) {
            return watcher;
        }
        //
        if (isArray) {
            _.defineArrayWatcher(obj, id);
            obj.forEach(function (val) {
                if (ui.isJson(val) || ui.isArray(val)) {
                    _.watchAll(val, id);
                }
            });
        }
        //
        if (isJson) {
            for (var prop in obj) {
                _.defineJsonWatcher(obj, prop);
                if (ui.isJson(obj[prop]) || ui.isArray(obj[prop])) {
                    _.watchAll(obj[prop], id);
                }
            }
        }
        return id;
    },
    watchSome: function (obj, props, watcher, hold) {
        var _ = ui.watch._;
        //
        var isJson = ui.isJson(obj);
        //只接收json
        if (!isJson) {
            return false;
        }
        var id = _.watchOne(obj, watcher, hold);
        if (id === false) {
            return watcher;
        }
        //
        for (var i in props) {
            var prop = props[i];
            if (prop !== undefined) {
                _.defineJsonWatcher(obj, prop);
                if (ui.isJson(obj[prop]) || ui.isArray(obj[prop])) {
                    _.watchAll(obj[prop], id);
                }
            }
        }
        return id;
    },
    watchOne: function (obj, watcher, hold) {
        var _ = ui.watch._;
        //
        if (!ui.object.hasKey(obj, '__watchers__')) {
            _.defineProp(obj, "__watchers__", []);
        };
        var isFunction = ui.isFunction(watcher);
        var isString = ui.isString(watcher);
        var isSame = false;
        obj.__watchers__.forEach(function (id) {
            if (isFunction) {
                if (_.g[id] === watcher) {
                    isSame = true;
                }
            } else if (isString) {
                if (id === watcher) {
                    isSame = true;
                }
            }
        });
        if (!isSame) {
            var id = ui.number.random(1e8).toString();
            if (isFunction) {
                hold = hold ? hold !== true ? hold : 100 : 0;
                watcher.__hold__ = hold;
                watcher.__timeid__ = null;
                _.g[id] = watcher;
            } else if (isString) {
                id = watcher;
            }
            obj.__watchers__.push(id);
            return id;
        } else {
            return false;
        }
    },
    //
    defineJsonWatcher: function (obj, prop, id) {
        var _ = ui.watch._;
        //
        var oldval = obj[prop].valueOf();
        var getter = function () {
            return getter.value;
        };
        getter.value = oldval;
        var setter = function (val) {
            var newval = val.valueOf();
            getter.value = newval;
            _.callWatcherHold(obj, prop, newval, oldval);
        };
        //
        _.defineGetAndSet(obj, prop, getter, setter);
        //
    },
    defineArrayWatcher: function (obj, id) {
        var _ = ui.watch._;
        //
        for (var i = _.arrayMethods.length, method; i--; ) {
            method = _.arrayMethods[i];
            _.defineArrayWatcherByMethod(obj, obj[method], method);
        }
        //
        obj.forEach(function (oldval, k) {
            var getter = function () {
                return getter.val;
            };
            getter.val = oldval;
            var setter = function (val) {
                var newval = val.valueOf();
                getter.val = newval;
                _.callWatcherHold(obj, k, newval, oldval);
            };
            //
            _.defineGetAndSet(obj, k, getter, setter);
            //
            if (ui.isArray(oldval) || ui.isJson(oldval)) {
                _.watchAll(oldval, id);
            }
        })
    },
    defineArrayWatcherByMethod: function (obj, original, method) {
        var _ = ui.watch._;
        //
        _.defineProp(obj, method, function () {
            var oldval = ui.array.clone(obj);
            var response = original.apply(obj, arguments);
            _.callWatcherHold(obj, method, obj, oldval);
            return response;
        });
    },
    defineProp: function (obj, prop, value) {
        Object.defineProperty(obj, prop, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        });
    },
    defineGetAndSet: function (obj, prop, getter, setter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            set: function (value) {
                setter.call(this, value);
            },
            enumerable: true,
            configurable: true
        });
    },
    callWatcherHold: function (obj, prop, newval, oldval) {
        var _ = ui.watch._;
        //
        obj.__watchers__.forEach(function (id) {
            if (_.g[id] !== undefined) {
                if (_.g[id].__hold__ > 0) {
                    clearTimeout(_.g[id].__timeid__);
                    _.g[id].__timeid__ = setTimeout(function () {
                        _.callWatcher(id, obj, prop, newval, oldval);
                    }, _.g[id].__hold__);
                } else {
                    _.callWatcher(id, obj, prop, newval, oldval);
                }
            };
        });
    },
    callWatcher: function (id, obj, prop, newval, oldval) {
        var _ = ui.watch._;
        //
        _.g[id].call(obj, prop, newval, oldval);
        //
        //追加变动的监听
        if (!ui.isEqual(oldval, newval)) {
            if (ui.isObject(newval) || ui.isArray(newval)) {
                _.watchAll(newval, id);
            }
        }
    },
    //
    removeObjAllWatcher: function (obj, deep) {
        var _ = ui.watch._;
        //
        var isJson = ui.isJson(obj);
        var isArray = ui.isArray(obj);
        //
        if (!isJson && !isArray) {
            return false;
        }
        //
        obj.__watchers__ = [];
        //
        if (deep) {
            if (isArray) {
                obj.forEach(function (val) {
                    if (ui.isJson(val) || ui.isArray(val)) {
                        _.removeObjAllWatcher(val, deep);
                    }
                });
            }
            //
            if (isJson) {
                for (var prop in obj) {
                    if (ui.isJson(obj[prop]) || ui.isArray(obj[prop])) {
                        _.removeObjAllWatcher(obj[prop], deep);
                    }
                }
            }
        }
        return true;
        //
    },
    removeObjOneWatcher: function (obj, watcher, deep) {
        var _ = ui.watch._;
        //
        var isJson = ui.isJson(obj);
        var isArray = ui.isArray(obj);
        //
        if (!isJson && !isArray) {
            return false;
        }
        //
        var id = watcher;
        if (ui.isFunction(watcher)) {
            for (id in _.g) {
                if (watcher === _.g[id]) {
                    break;
                }
            }
        }
        delete _.g[id];
        //
        if (deep) {
            if (isArray) {
                obj.forEach(function (val) {
                    if (ui.isJson(val) || ui.isArray(val)) {
                        _.removeObjOneWatcher(val, id, deep);
                    }
                });
            }
            //
            if (isJson) {
                for (var prop in obj) {
                    if (ui.isJson(obj[prop]) || ui.isArray(obj[prop])) {
                        _.removeObjOneWatcher(obj[prop], id, deep);
                    }
                }
            }
        }
        return true;
    },
    removeAllWatcher: function (watcher) {
        var _ = ui.watch._;
        //
        var isString = ui.isString(watcher);
        var isFunction = ui.isFunction(watcher);
        //
        if (!isString && !isString) {
            return false;
        }
        var id;
        if (isFunction) {
            for (id in _.g) {
                if (watcher === _.g[id]) {
                    break;
                }
            }
        }
        //
        delete _.g[id];
        return true;
    }
}