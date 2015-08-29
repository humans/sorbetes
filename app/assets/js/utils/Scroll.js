class Scroll {
    static listen (callback) {
        window.addEventListener('scroll', callback.bind(this));
    }
}

export default Scroll;