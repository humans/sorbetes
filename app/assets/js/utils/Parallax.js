import _ from "lodash";

class Parallax {
    /**
     * Create a new Parallax instance.
     *
     * @param  {object}  element
     * @param  {object}  options
     * @return {Parallax}
     */
    constructor(element, options = {}) {
        var defaults = {
            opacity:    false,
            resistance: 1,
            inverse:    true
        };

        this.element = element;

        // Override the defaults.
        this.options = _.assign(defaults, options);
    }

    /**
     * Apply the parallax to the given element.
     *
     * @return {Parallax}
     */
    apply() {
        window.addEventListener('scroll', this._listen.bind(this));

        return this;
    }

    /**
     * Listen for the scrolling event.
     *
     * @param  {object}  event
     * @return {void}
     */
    _listen(event) {
        var element = this.element;
        var options = this.options;

        // Calculate to current page offset.
        var total_offset = window.pageYOffset + window.innerHeight;

        // Calculate the scroll position.
        var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

        // Determine the parallax motion. (Up or down)
        var sign = (options.inverse) ? -1 : 1;

        var offset = (window.pageYOffset * sign) / options.resistance;

        if (options.opacity) {
            var opacity = (100 - top) / 100;

            element.style.opacity = opacity;
        }

        element.style.transform = 'translate(0, ' + offset + 'px)';
    }
}

export default Parallax;