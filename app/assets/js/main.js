import Parallax from './utils/Parallax';
import ScrollEvent from './events/ScrollEvent';
import TriviaCollection from './components/TriviaCollection';

var selection = document.querySelectorAll('.fact');
var trivium = new TriviaCollection(selection);

ScrollEvent.listen(function () {
    trivium.visible_on_screen().show();
});

Parallax.on('.ice-cream').resistance(8).inverse().apply();
