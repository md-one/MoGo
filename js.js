window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var nav = document.getElementById("nav");
    var navLi = document.getElementsByClassName("navLi");

    if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
        nav.style.background = "rgba(225, 225, 225, 0.2)";
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.color = "#000000";
            navLi[i].style.fill = "000000";
        }
    } else {
        nav.style.background = "rgba(225, 225, 225, 0)";
        for (let i = 0; i < navLi.length; i++) {
            navLi[i].style.color = "#ffffff";
            navLi[i].style.fill = "ffffff";
        }
    }
}

function openpanal(panalid) {
    var i, panal, tablinks;
    panal = document.getElementsByClassName("panal");


    for (i = 0; i < panal.length; i++) {
        panal[i].style.display = "none";
    }

    document.getElementById(panalid).style.display = "block";
}

function openmenu() {
    var menu = document.getElementById("menu"),
        button = document.getElementById("button");
    button.onclick = function () {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    };
}

function openmenu2() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

var slide = document.querySelectorAll(".slider .slide");

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

function slidePrev() {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slide[slide.length - 1].classList.add("current");
    }
    console.log("fffffff");

}

function slideNext() {
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slide[0].classList.add("current");
    }

}

prevBtn.addEventListener("click", function () {
    slidePrev();
})

nextBtn.addEventListener("click", function () {
    slideNext();
})