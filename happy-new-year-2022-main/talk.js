$(function() {
    initAnimate();
    $("#yes").click(function(event) {
        modal("æˆ‘å°±çŸ¥é“å°å§å§æ‚¨ä¸€å®šä¼šæ„¿æ„çš„ã€‚(^_^)", function() {
            $(".page_one").addClass("hide");
            $(".page_two").removeClass("hide");
            // typeWrite();
            //   fireworks();
        });
    });
    $("#no").click(function(event) {
        modal("æ˜Žäººä¸è¯´æš—è¯ï¼", A);
    });
});

function A() {
    modal("æˆ‘å–œæ¬¢ä½ ï¼", B);
}

function B() {
    modal("æˆ‘çŸ¥é“ä½ åœ¨ç­‰æˆ‘è¿™ä¸€å¥è¯", C);
}

function C() {
    modal("è¯·æ‚¨ä¸è¦æ‹’ç»æˆ‘", D);
}

function D() {
    modal("æ‹’ç»æˆ‘ï¼Œä¸å­˜åœ¨çš„", E);
}

function E() {
    modal("è¿™è¾ˆå­éƒ½ä¸å¯èƒ½è®©ä½ ç¦»å¼€æˆ‘", F);
}

function F() {
    modal("è·Ÿæˆ‘èµ°å§", G);
}

function G() {
    modal("æˆ¿äº§è¯ä¸Šå†™ä½ å", H);
}

function H() {
    modal("æˆ‘ä¼šåšé¥­", I);
}

function I() {
    modal("çˆ±ä½ ã€‚ä¹ˆä¹ˆå“’ï¼", J);
}

function J() {
    modal("è¡Œï¼Œæˆ‘ä»¬åŽ»æ°‘æ”¿å±€ç™»è®°å§", function() {
        fireworks();
    });
}

function fireworks() {
    $(".page_one").addClass("hide");
    initAnimate();
}

function modal(content, callback) {
    var tpl =
        '<div class="container">' +
        '<div class="mask"></div>' +
        '<div class="modal">' +
        "<p>" +
        content +
        "</p>" +
        '<button type="button" id="confirm" class="confirm">ç¡®å®š</button>' +
        "</div>" +
        "</div>";
    $("body").append(tpl);
    $(document).on("click", ".confirm", function() {
        $(".container").remove();
        callback();
    });
}