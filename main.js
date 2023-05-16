$(document).ready(function () {
    var isDone = true;

    $("#gnb > ul > li").on("mouseenter", function () {
        if (isDone) {
            isDone = false;
            $(this).children("ul.sub").stop().slideDown();
        }
    });
    $("#gnb > ul > li").on("mouseleave", function () {
        $(this).children("ul.sub").slideUp(function () {
            isDone = true;
        })
    });
    /* popup */
    $(".notice > .content > ul > li").eq(0).on("click", function () {
        $(".popup").show();
        //$(".popup").css("display", "block");
    });
    $("#close").on("click", function () {
        $(".popup").hide();
        //$(".popup").css("display", "none");
    });

    /* slider */
    $("#slide .frame li").eq(0).siblings().hide();
    var slideIndex = 0;
    setInterval(function () {
        if (slideIndex < 2) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }

        $("#slide .frame li").eq(slideIndex).siblings().fadeOut(500);
        $("#slide .frame li").eq(slideIndex).fadeIn(500);
    }, 3000);

    /* tab */
    $(".tab > li").click(function () {
        $(".tab").find("li").removeClass("on");
        $(".content").find("div").removeClass("on");

        $(this).addClass("on");

        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
    })
})