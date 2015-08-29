class Trivia {
    constructor (element) {
        this.element = element;

        this.prefix = '.fact';
    }

    position () {
        var scope = this.element.getBoundingClientRect();

        return {
            top: scope.top
        };
    }

    show () {
        if (this.has_class('--active')) {
            return false;
        }

        this.add_class('--active');
    }

    add_class (class_name) {
        var element = this.element;
        var image = element.querySelector(`${this.prefix}__image`);
        var description = element.querySelector(`${this.prefix}__description`);

        element.className += ` ${class_name}`;
        image.className += ` ${class_name}`;
        description.className += ` ${class_name}`;
    }

    has_class (class_name) {
        return (this.element.className.indexOf(class_name) > -1);
    }
}

export default Trivia;