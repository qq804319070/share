$(function () {
    var swiper = new Swiper(".swiper-container", {
        autoplay: 3000,
        loop: "true"
    });
    new Swiper(".swiper-tab", {
        hashnav: true,
    });



    $(".all").on("change", function (e) {
        $(".col").children("input").attr("checked", this.checked);
    });

    $(".quit").on("click", function (e) {
        confirm("您确定要退出登录吗?");
    });

    $(".active").on("click", function (e) {
        $(".layer").css("display", "block");

    });

    $(".tab-class").on("click", function (e) {
        $(this).addClass("cur").siblings().removeClass("cur");
    });

    $(".layer-a").on("click", function () {
        $(".layer").css("display", "none");
    })

});