window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var nav = document.getElementById("nav");
    if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
        nav.style.animation = "nav 0.5s forwards";
    } else {
        nav.style.animation = "navr 0.5s forwards";
    }
}


 function openpanal(panalid) {
            var i, panal, tablinks;
            panal = document.getElementsByClassName("panal");
            
            for (i = 0; i < panal.length; i++) {
                panal[i].style.display = "none";
            }
     
            /*
            ask about this in dicure
            tablinks = document.getElementsByClassName("accordion");
     
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }*/
            document.getElementById(panalid).style.display = "block";
        }
