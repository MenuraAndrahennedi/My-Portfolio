    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.getElementById("navbar").style.padding = "4px 4px";
        } else {
            document.getElementById("navbar").style.padding = "30px 10px";
        }
    }



