window.onload = function () {

    document.querySelectorAll('.nav-toggle').forEach(button => {
        let body = document.querySelector('body')
        button.onclick = function (e) {
            let navElms = document.querySelectorAll("[data-navopen]");
            console.log(navElms[0])
            navElms.forEach(navElm => {
                    (navElm.dataset.navopen == "true" ? navElm.dataset.navopen = "false" : navElm.dataset.navopen = "true")
                })
                (body.dataset.navoverlay == "true" ? body.dataset.navoverlay = "false" : body.dataset.navoverlay = "true")

        };
    })


};