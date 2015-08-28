import _ from "lodash";

class Parallax {
    /**
     * Create a new Parallax instance.
     *
     * @param  {object}  element
     * @param  {object}  options
     * @return {Parallax}
     */
    constructor(element) {
        this.element = element;

        this.options = {
            opacity:    false,
            resistance: 1,
            inverse:    false
        };
    }

    /**
     * Set the element to apply the parallax on.
     *
     * @param  {object}  selector
     * @return {Parallax}
     */
    static on(selector) {
        var element = document.querySelector(selector);

        return new Parallax(element);
    }

    /**
     * Override the resistance value.
     *
     * @param  {integer}  resistance
     * @return {Parallax}
     */
    resistance(resistance) {
        this.options.resistance = resistance;

        return this;
    }

    /**
     * Enable parallax opacity.
     *
     * @return {Parallax}
     */
     revealOnScroll()
    {
        this.options.opacity = true;

        return this;
    }

    /**
     * Set the parallax to go directly with the scrolling.
     *
     * @return {Parallax}
     */
    direct()
    {
        this.options.inverse = false;

        return this;
    }

    /**
     * Set the parallax to go against the scrolling.
     *
     * @return {Parallax}
     */
    inverse()
    {
        this.options.inverse = true;

        return this;
    }

    /**
     * Apply the parallax to the given element.
     *
     * @return {Parallax}
     */
    apply() {
        window.addEventListener('scroll', this._listen.bind(this));
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