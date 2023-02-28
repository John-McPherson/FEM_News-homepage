window.onload = function () {

    let navToggle = document.querySelector('.nav_toggle');
    let nav = document.querySelector('nav');
    navToggle.onclick = function () {
        if (nav.dataset.navopen == 'true') {
            nav.dataset.navopen = 'false'

        } else {
            nav.dataset.navopen = 'true'

        }
    }

};