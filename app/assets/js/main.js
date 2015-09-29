import Parallax from './utils/Parallax';
import ScrollEvent from './events/ScrollEvent';
import TriviaCollection from './components/TriviaCollection';
import Cart from './components/Cart';
import Link from './components/Link';

var selection = document.querySelectorAll('.fact');
var trivium = new TriviaCollection(selection);
var cart = new Cart();

ScrollEvent.listen(function () {
    trivium.visible_on_screen().show();
    cart.animate();
});

Parallax.on('.ice-cream').resistance(8).inverse().apply();

Link.select('\\-\\-about').should_go_to('.section.about');
Link.select('\\-\\-peddling').should_go_to('.section.peddling');
Link.select('\\-\\-pricing').should_go_to('.section.pricing');
Link.select('\\-\\-order').disable();
