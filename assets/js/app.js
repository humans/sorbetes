function element_is_in_viewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    var offset = -300;

    return (
        rect.top >= 0 && rect.left >= 0 &&
        rect.bottom <= (window.innerHeight + offset || html.clientHeight + offset) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}



document.addEventListener('scroll', function (event) {
    var facts = document.querySelectorAll('.fact');
    var ice_cream = document.querySelector('.board__image--parallax');

    for (let fact of facts) {
        if (fact.classList.contains('fact--visible') || ! element_is_in_viewport(fact)) {
            continue;
        }

        fact.classList.add('fact--visible');
    }

    let total = window.pageYOffset + window.innerHeight;
    let offset = (window.pageYOffset * -1) / 5;

    ice_cream.style.transform = 'translate(-50%, ' + (offset + 80) + 'px)';
});
