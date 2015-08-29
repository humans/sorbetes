(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Trivia = (function () {
    function Trivia(element) {
        _classCallCheck(this, Trivia);

        this.element = element;

        this.prefix = '.fact';
    }

    _createClass(Trivia, [{
        key: 'position',
        value: function position() {
            var scope = this.element.getBoundingClientRect();

            return {
                top: scope.top
            };
        }
    }, {
        key: 'show',
        value: function show() {
            if (this.has_class('--active')) {
                return false;
            }

            this.add_class('--active');
        }
    }, {
        key: 'add_class',
        value: function add_class(class_name) {
            var element = this.element;
            var image = element.querySelector(this.prefix + '__image');
            var description = element.querySelector(this.prefix + '__description');

            element.className += ' ' + class_name;
            image.className += ' ' + class_name;
            description.className += ' ' + class_name;
        }
    }, {
        key: 'has_class',
        value: function has_class(class_name) {
            return this.element.className.indexOf(class_name) > -1;
        }
    }]);

    return Trivia;
})();

exports['default'] = Trivia;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Trivia = require('./Trivia');

var _Trivia2 = _interopRequireDefault(_Trivia);

var TriviaCollection = (function () {
    function TriviaCollection(elements) {
        _classCallCheck(this, TriviaCollection);

        this.elements = this._set_elements(elements);
    }

    _createClass(TriviaCollection, [{
        key: 'filter',
        value: function filter(condition) {
            var elements = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var element = _step.value;

                    if (!condition(element)) {
                        continue;
                    }

                    elements.push(element);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return new TriviaCollection(elements);
        }
    }, {
        key: 'visible_on_screen',
        value: function visible_on_screen() {
            return this.filter(function (trivia) {
                var scope = trivia.position().top;

                return scope > 210 && scope < 260;
            });
        }
    }, {
        key: 'show',
        value: function show() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var element = _step2.value;

                    element.show();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: '_set_elements',
        value: function _set_elements(elements) {
            var collection = [];

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var element = _step3.value;

                    var instance = element;

                    if (element.constructor.name !== 'Trivia') {
                        instance = new _Trivia2['default'](element);
                    }

                    collection.push(instance);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return collection;
        }
    }]);

    return TriviaCollection;
})();

exports['default'] = TriviaCollection;
module.exports = exports['default'];

},{"./Trivia":1}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsParallax = require('./utils/Parallax');

var _utilsParallax2 = _interopRequireDefault(_utilsParallax);

var _utilsScroll = require('./utils/Scroll');

var _utilsScroll2 = _interopRequireDefault(_utilsScroll);

var _componentsTriviaCollection = require('./components/TriviaCollection');

var _componentsTriviaCollection2 = _interopRequireDefault(_componentsTriviaCollection);

var trivium = new _componentsTriviaCollection2['default'](document.querySelectorAll('.fact'));

_utilsScroll2['default'].listen(function () {
    trivium.visible_on_screen().show();
});

_utilsParallax2['default'].on('.ice-cream').resistance(8).inverse().apply();

},{"./components/TriviaCollection":2,"./utils/Parallax":4,"./utils/Scroll":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Parallax = (function () {
    /**
     * Create a new Parallax instance.
     *
     * @param  {object}  element
     * @param  {object}  options
     * @return {Parallax}
     */

    function Parallax(element) {
        _classCallCheck(this, Parallax);

        this.element = element;

        this.options = {
            opacity: false,
            resistance: 1,
            inverse: false
        };
    }

    /**
     * Set the element to apply the parallax on.
     *
     * @param  {string}  selector
     * @return {Parallax}
     */

    _createClass(Parallax, [{
        key: 'resistance',

        /**
         * Override the resistance value.
         *
         * @param  {integer}  resistance
         * @return {Parallax}
         */
        value: function resistance(_resistance) {
            this.options.resistance = _resistance;

            return this;
        }

        /**
         * Enable parallax opacity.
         *
         * @return {Parallax}
         */
    }, {
        key: 'revealOnScroll',
        value: function revealOnScroll() {
            this.options.opacity = true;

            return this;
        }

        /**
         * Set the parallax to go directly with the scrolling.
         *
         * @return {Parallax}
         */
    }, {
        key: 'direct',
        value: function direct() {
            this.options.inverse = false;

            return this;
        }

        /**
         * Set the parallax to go against the scrolling.
         *
         * @return {Parallax}
         */
    }, {
        key: 'inverse',
        value: function inverse() {
            this.options.inverse = true;

            return this;
        }

        /**
         * Apply the parallax to the given element.
         *
         * @return {Parallax}
         */
    }, {
        key: 'apply',
        value: function apply() {
            window.addEventListener('scroll', this._listen.bind(this));
        }

        /**
         * Listen for the scrolling event.
         *
         * @param  {object}  event
         * @return {void}
         */
    }, {
        key: '_listen',
        value: function _listen(event) {
            var element = this.element;
            var options = this.options;

            // Calculate to current page offset.
            var total_offset = window.pageYOffset + window.innerHeight;

            // Calculate the scroll position.
            var top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

            // Determine the parallax motion. (Up or down)
            var sign = options.inverse ? -1 : 1;

            var offset = window.pageYOffset * sign / options.resistance;

            if (options.opacity) {
                var opacity = (100 - top) / 100;

                element.style.opacity = opacity;
            }

            element.style.transform = 'translate(0, ' + offset + 'px)';
        }
    }], [{
        key: 'on',
        value: function on(selector) {
            var element = document.querySelector(selector);

            return new Parallax(element);
        }
    }]);

    return Parallax;
})();

exports['default'] = Parallax;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Scroll = (function () {
    function Scroll() {
        _classCallCheck(this, Scroll);
    }

    _createClass(Scroll, null, [{
        key: 'listen',
        value: function listen(callback) {
            window.addEventListener('scroll', callback.bind(this));
        }
    }]);

    return Scroll;
})();

exports['default'] = Scroll;
module.exports = exports['default'];

},{}]},{},[3]);
