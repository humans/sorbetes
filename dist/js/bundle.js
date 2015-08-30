(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Cart = (function () {
    function Cart() {
        _classCallCheck(this, Cart);

        var selector = '.peddling__image';

        this.interior = document.querySelector('.peddling__image.--interior');
        this.exterior = document.querySelector('.peddling__image.--exterior');
    }

    _createClass(Cart, [{
        key: 'animate',
        value: function animate() {
            var scope = this.interior.getBoundingClientRect().top;

            if (this.has_class('--active')) {
                return;
            }

            if (scope < 0 || scope > 300) {
                return;
            }

            this._add_class('--active');
        }

        /**
         * Check if the instance already has the given class.
         *
         * @param  {string}  class_name
         * @return {boolean}
         */
    }, {
        key: 'has_class',
        value: function has_class(class_name) {
            return this.interior.className.indexOf(class_name) > -1;
        }

        /**
         * Add a class to the container and the main elements.
         *
         * @param  {string}  class_name
         * @return {void}
         */
    }, {
        key: '_add_class',
        value: function _add_class(class_name) {
            this.interior.className += ' ' + class_name;
            this.exterior.className += ' ' + class_name;
        }
    }]);

    return Cart;
})();

exports['default'] = Cart;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsScroll = require('./../utils/Scroll');

var _utilsScroll2 = _interopRequireDefault(_utilsScroll);

var Link = (function () {
    function Link(selector) {
        _classCallCheck(this, Link);

        selector = '.' + selector;

        this.element = document.querySelectorAll(selector);

        if (this.element.length === 1) {
            this.element = this.element[0];
        }
    }

    _createClass(Link, [{
        key: 'should_go_to',
        value: function should_go_to(selector) {
            var target = document.querySelector(selector);

            function scroll_down(event) {
                event.preventDefault();

                _utilsScroll2['default'].to(target.offsetTop);
            }

            this.element.addEventListener('click', scroll_down);
        }
    }, {
        key: 'disable',
        value: function disable() {
            var elements = this.element;

            if (this.element instanceof Array) {
                elements = [this.element];
            }

            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];

                element.addEventListener('click', function (event) {
                    return event.preventDefault();
                });
            }
        }
    }], [{
        key: 'select',
        value: function select(selector) {
            return new Link(selector);
        }
    }]);

    return Link;
})();

exports['default'] = Link;
module.exports = exports['default'];

},{"./../utils/Scroll":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Trivia = (function () {
    /**
     * Create a new Trivia instance.
     *
     * @param  {object}  element
     * @return {Trivia}
     */

    function Trivia(element) {
        _classCallCheck(this, Trivia);

        this.element = element;

        // Class prefix.
        this.prefix = '.fact';
    }

    /**
     * Return the relative position from the window top.
     *
     * @return {object}
     */

    _createClass(Trivia, [{
        key: 'position',
        value: function position() {
            var scope = this.element.getBoundingClientRect();

            return {
                top: scope.top
            };
        }

        /**
         * Reveal the element by adding the `--active` class.
         *
         * @return {void}
         */
    }, {
        key: 'show',
        value: function show() {
            if (this.has_class('--active')) {
                return false;
            }

            this._add_class('--active');
        }

        /**
         * Check if the instance already has the given class.
         *
         * @param  {string}  class_name
         * @return {boolean}
         */
    }, {
        key: 'has_class',
        value: function has_class(class_name) {
            return this.element.className.indexOf(class_name) > -1;
        }

        /**
         * Add a class to the container and the main elements.
         *
         * @param  {string}  class_name
         * @return {void}
         */
    }, {
        key: '_add_class',
        value: function _add_class(class_name) {
            var element = this.element;
            var image = element.querySelector(this.prefix + '__image');
            var description = element.querySelector(this.prefix + '__description');

            element.className += ' ' + class_name;
            image.className += ' ' + class_name;
            description.className += ' ' + class_name;
        }
    }]);

    return Trivia;
})();

exports['default'] = Trivia;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
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
    /**
     * Create a new Trivia Collection instance.
     *
     * @param  {array}  elements
     * @return {TriviaCollection}
     */

    function TriviaCollection(elements) {
        _classCallCheck(this, TriviaCollection);

        this.elements = this._set_elements(elements);
    }

    /**
     * Return the Trivia that matches the condition of the given callback.
     *
     * i.e. collection.filter(function(trivia) { return trivia.position().top === 100; });
     *
     * @param  {function}  condition
     * @return {TriviaCollection}
     */

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

        /**
         * Return all the collections that are currently visible on screen.
         *
         * @return {TriviaCollection}
         */
    }, {
        key: 'visible_on_screen',
        value: function visible_on_screen() {
            return this.filter(function (trivia) {
                var scope = trivia.position().top;

                return scope >= 0 && scope <= 300;
            });
        }

        /**
         * Show all the trivia objects.
         *
         * @return {void}
         */
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

        /**
         * Set the trivia collection.
         *
         * Given values that are already trivia objects, just push it directly to
         * the collection but, if the given object is a plain query object, pass it
         * through a new trivia instance so filtering can be done.
         *
         * @param  {array}  elements
         * @return {array}
         */
    }, {
        key: '_set_elements',
        value: function _set_elements(elements) {
            var collection = [];

            for (var index in elements) {
                var element = elements[index];
                var instance = element;

                if (typeof element !== 'object') {
                    continue;
                }

                if (element.constructor.name !== 'Trivia') {
                    instance = new _Trivia2['default'](element);
                }

                collection.push(instance);
            }

            return collection;
        }
    }]);

    return TriviaCollection;
})();

exports['default'] = TriviaCollection;
module.exports = exports['default'];

},{"./Trivia":3}],5:[function(require,module,exports){
/**
 * Made a scroll event helper just to make things a bit more modular.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ScrollEvent = (function () {
  function ScrollEvent() {
    _classCallCheck(this, ScrollEvent);
  }

  _createClass(ScrollEvent, null, [{
    key: 'listen',

    /**
     * Listen for a scroll event.
     *
     * @param  {function}  callback
     * @return {void}
     */
    value: function listen(callback) {
      window.addEventListener('scroll', callback.bind(this));
    }
  }]);

  return ScrollEvent;
})();

exports['default'] = ScrollEvent;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsParallax = require('./utils/Parallax');

var _utilsParallax2 = _interopRequireDefault(_utilsParallax);

var _eventsScrollEvent = require('./events/ScrollEvent');

var _eventsScrollEvent2 = _interopRequireDefault(_eventsScrollEvent);

var _componentsTriviaCollection = require('./components/TriviaCollection');

var _componentsTriviaCollection2 = _interopRequireDefault(_componentsTriviaCollection);

var _componentsCart = require('./components/Cart');

var _componentsCart2 = _interopRequireDefault(_componentsCart);

var _componentsLink = require('./components/Link');

var _componentsLink2 = _interopRequireDefault(_componentsLink);

var selection = document.querySelectorAll('.fact');
var trivium = new _componentsTriviaCollection2['default'](selection);
var cart = new _componentsCart2['default']();

_eventsScrollEvent2['default'].listen(function () {
    trivium.visible_on_screen().show();
    cart.animate();
});

_utilsParallax2['default'].on('.ice-cream').resistance(8).inverse().apply();

_componentsLink2['default'].select('--about').should_go_to('.section.about');
_componentsLink2['default'].select('--peddling').should_go_to('.section.peddling');
_componentsLink2['default'].select('--pricing').should_go_to('.section.pricing');
_componentsLink2['default'].select('--order').disable();

},{"./components/Cart":1,"./components/Link":2,"./components/TriviaCollection":4,"./events/ScrollEvent":5,"./utils/Parallax":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

    _createClass(Scroll, [{
        key: '_trigger_scroll_event',

        // this._trigger_scroll_event();
        // setInterval(this._trigger_scroll_event, 2000);
        value: function _trigger_scroll_event() {
            window.dispatchEvent(new Event('scroll'));
        }
    }], [{
        key: 'to',

        /**
         * Scroll down to the given position and dispatch
         * a scroll event.
         *
         * @todo   Animate the scrolling next time.
         *
         * @param  {integer} position
         * @return {void}
         */
        value: function to(position) {
            document.body.scrollTop = position;

            window.dispatchEvent(new Event('scroll'));
        }
    }]);

    return Scroll;
})();

exports['default'] = Scroll;
module.exports = exports['default'];

},{}]},{},[6]);
