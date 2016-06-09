class Scroll {
    /**
     * Scroll down to the given position and dispatch
     * a scroll event.
     *
     * @todo   Animate the scrolling next time.
     *
     * @param  {integer} position
     * @return {void}
     */
    static to (position) {
        document.body.scrollTop = position;

        window.dispatchEvent(new Event('scroll'));
        // this._trigger_scroll_event();
        // setInterval(this._trigger_scroll_event, 2000);
    }

    _trigger_scroll_event() {
        window.dispatchEvent(new Event('scroll'));
    }
}

export default Scroll;