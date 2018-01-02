$(function () {
    window.onresize = rem;

    function rem() {
        var curW = document.documentElement.clientWidth || document.body.clientWidth;
        if (curW > 768) {
            curW = 768
        }
        var x = (curW * 100) / 750;
        document.documentElement.style.fontSize = x + "px";
    }

    rem();



});