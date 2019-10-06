const header = document.getElementById("myHeader");
window.addEventListener('scroll', (event) => {
    if (window.scrollY >= header.offsetTop) {
        header.classList.add('sticky');
    }

    if (window.scrollY === 0) {
        header.classList.remove('sticky');
    }
});