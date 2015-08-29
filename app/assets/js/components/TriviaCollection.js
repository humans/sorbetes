import Trivia from './Trivia';

class TriviaCollection {
    /**
     * Create a new Trivia Collection instance.
     *
     * @param  {array}  elements
     * @return {TriviaCollection}
     */
    constructor (elements) {
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
    filter (condition) {
        var elements = [];

        for (let element of this.elements) {
            if (! condition(element)) {
                continue;
            }

            elements.push(element);
        }

        return new TriviaCollection(elements);
    }

    /**
     * Return all the collections that are currently visible on screen.
     *
     * @return {TriviaCollection}
     */
    visible_on_screen () {
        return this.filter((trivia) => {
            var scope = trivia.position().top;

            return (scope > 210) && (scope < 260);
        });
    }

    /**
     * Show all the trivia objects.
     *
     * @return {void}
     */
    show () {
        for (let element of this.elements) {
            element.show();
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
    _set_elements (elements) {
        var collection = [];

        for (let index in elements) {
            let element = elements[index];
            let instance = element;

            if (typeof element !== 'object') {
                continue;
            }

            if (element.constructor.name !== 'Trivia')  {
                instance = new Trivia(element);
            }

            collection.push(instance);
        }

        return collection;
    }
}

export default TriviaCollection;