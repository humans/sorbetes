(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function element_is_in_viewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    var offset = -300;

    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight + offset || html.clientHeight + offset) && rect.right <= (window.innerWidth || html.clientWidth);
}

document.addEventListener('scroll', function (event) {
    var facts = document.querySelectorAll('.fact');
    var ice_cream = document.querySelector('.board__image--parallax');

    for (let fact of facts) {
        if (fact.classList.contains('fact--visible') || !element_is_in_viewport(fact)) {
            continue;
        }

        fact.classList.add('fact--visible');
    }

    let total = window.pageYOffset + window.innerHeight;
    let offset = window.pageYOffset * -1 / 3;

    ice_cream.style.transform = 'translate(-50%, ' + (offset + 80) + 'px)';
});

},{}]},{},[1]);
