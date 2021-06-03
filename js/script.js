$(() => {
    const nav = $("nav");
    $(".burger").on("click", (event) => {
        event.preventDefault();
        nav.toggleClass("show")
    });
});

// let header = $("header");
    // let headerInner = $(".header_inner");
    // let headerLogo = $(".header_img");
    // let intro = $(".intro");
    // let introHeight = intro.innerHeight();
    // let scrollPosition = $(window).scrollTop();
    // $(window).on("scroll", () => {
    //     scrollPosition = $(this).scrollTop();
    //     if (scrollPosition > introHeight) {
    //         header.addClass("fixed");
    //         headerInner.css("border", "none");
    //         headerLogo.hide();
    //     } else {
    //         header.removeClass("fixed");
    //         headerInner.css("border-bottom", "1px solid #202020");
    //         headerLogo.show();
    //     }
    // });