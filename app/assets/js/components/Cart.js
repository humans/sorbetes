class Cart {
    constructor () {
        var selector = '.peddling__image';

        this.interior = document.querySelector('.peddling__image.--interior');
        this.exterior = document.querySelector('.peddling__image.--exterior');
    }

    animate () {
        var scope = this.interior.getBoundingClientRect().top;

        if (this.has_class('--active')) {
            return;
        }

        if ((scope < 0) || (scope > 300)) {
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
    has_class (class_name) {
        return (this.interior.className.indexOf(class_name) > -1);
    }

    /**
     * Add a class to the container and the main elements.
     *
     * @param  {string}  class_name
     * @return {void}
     */
    _add_class (class_name) {
        this.interior.className += ` ${class_name}`;
        this.exterior.className += ` ${class_name}`;
    }
}

export default Cart;