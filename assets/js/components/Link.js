import Scroll from './../utils/Scroll';

class Link {
    constructor (selector) {
        selector = `.${selector}`;

        this.element = document.querySelectorAll(selector);

        if (this.element.length === 1) {
            this.element = this.element[0];
        }
    }

    static select (selector) {
        return new Link(selector);
    }

    should_go_to (selector) {
        var target = document.querySelector(selector);

        function scroll_down (event) {
            event.preventDefault();

            Scroll.to(target.offsetTop);
        }

        this.element.addEventListener('click', scroll_down);
    }

    disable () {
        var elements = this.element;

        if (this.element instanceof Array) {
            elements = [this.element];
        }

        for (let index = 0; index < elements.length; index++) {
            let element = elements[index];

            element.addEventListener('click', (event) => event.preventDefault());
        }
    }
}

export default Link;