import 'babel/polyfill';

class Reveal {
    /**
     * Create a new Reveal instance.
     * @param  {array}  elements
     * @return {Reveal}
     */
    constructor(elements) {
        this.elements = elements;
    }

    /**
     * Set the elements to be revealed.
     *
     * @param  {string}  selector
     * @return {Reveal}
     */
    static elements(selector) {
        var elements = document.querySelectorAll(selector);

        return new Reveal(elements);
    }

    midscreen() {
        window.addEventListener('scroll', this._listen.bind(this));
    }

    /**
     * Listen for the scrolling event.
     *
     * @param  {object}  event
     * @return {void}
     */
    _listen(event) {
        var elements = this.elements;
        var element_has_class = function (element, className) {
            return (element.className.indexOf(className) > -1);
        };

        for (let element of this.elements) {
            let scope = element.getBoundingClientRect().top;

            if (element_has_class(element, '--active')) {
                continue;
            }

            if ((scope > 210) && (scope < 260)) {
                let image = element.querySelector('.fact__image');
                let description = element.querySelector('.fact__description');

                element.className += ' --active';
                image.className += ' --active';
                description.className += ' --active';
            }
        }
    }
}

export default Reveal;