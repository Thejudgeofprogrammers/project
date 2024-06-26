const goTopBtn = document.querySelector('.back-to-top');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        goTopBtn.classList.add('go-top-show');
    } else {
        goTopBtn.classList.remove('go-top-show');
    }
}

function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -35);
        setTimeout(goTop, 0);
    }
}
