window.addEventListener("DOMContentLoaded", function () {

    'use strict';

    const tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");
    console.log(tab);
    console.log(info);
    console.log(tabContent);

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }
    info.addEventListener("click", function (event) {
        const target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[1]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});