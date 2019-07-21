window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var nav = document.getElementById("nav");
        if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
            nav.style.animation = "nav 0.5s forwards";
        } else{
            nav.style.animation = "navr 0.5s forwards";
        }
    }