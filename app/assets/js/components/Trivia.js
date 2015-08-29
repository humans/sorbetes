class Trivia {
    /**
     * Create a new Trivia instance.
     *
     * @param  {object}  element
     * @return {Trivia}
     */
    constructor (element) {
        this.element = element;

        // Class prefix.
        this.prefix = '.fact';
    }

    /**
     * Return the relative position from the window top.
     *
     * @return {object}
     */
    position () {
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
    show () {
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
    has_class (class_name) {
        return (this.element.className.indexOf(class_name) > -1);
    }

    /**
     * Add a class to the container and the main elements.
     *
     * @param  {string}  class_name
     * @return {void}
     */
    _add_class (class_name) {
        var element = this.element;
        var image = element.querySelector(`${this.prefix}__image`);
        var description = element.querySelector(`${this.prefix}__description`);

        element.className += ` ${class_name}`;
        image.className += ` ${class_name}`;
        description.className += ` ${class_name}`;
    }
}

export default Trivia;