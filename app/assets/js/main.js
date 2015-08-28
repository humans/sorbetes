import Parallax from './utils/Parallax';
import Reveal from './utils/Reveal';

// var facts = new Facts('.fact');
//
// Scroll.listen(function () {
//     facts.in_viewport().reveal();
// });

Parallax.on('.ice-cream').resistance(8).inverse().apply();

Reveal.elements('.fact').midscreen();
