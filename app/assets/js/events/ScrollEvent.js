/**
 * Made a scroll event helper just to make things a bit more modular.
 */
class ScrollEvent {
    /**
     * Listen for a scroll event.
     *
     * @param  {function}  callback
     * @return {void}
     */
    static listen (callback) {
        window.addEventListener('scroll', callback.bind(this));
    }
}

export default ScrollEvent;