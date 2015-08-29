import Parallax from './utils/Parallax';
import Scroll from './utils/Scroll';
import TriviaCollection from './components/TriviaCollection';

var selection = document.querySelectorAll('.fact');
var trivium = new TriviaCollection(selection);

Scroll.listen(function () {
    trivium.visible_on_screen().show();
});

Parallax.on('.ice-cream').resistance(8).inverse().apply();
