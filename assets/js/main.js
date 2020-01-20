const headerEl = $("header#header");
const headerCoverContentEl = $("header#header .cover-content");
const contentAndCoversEl = $("#contentAndCovers");
let contentAndCoversItem = null;

const init = () => {
    headerEl.fadeIn();
    contentAndCoversEl.hide();
};

const showHeaderCover = () => {
    headerEl.removeClass("cover-left").fadeIn(500);
    headerCoverContentEl.fadeIn();
    contentAndCoversEl.fadeOut(500);
};

const hideHeaderCover = () => {
    const covers = $("*[data-cover]");
    headerEl.addClass("cover-left").delay(500).fadeOut(500);
    headerCoverContentEl.fadeOut();
    contentAndCoversEl.delay(500).fadeIn();
    $(`#covers .cover.cover-${covers[0].dataset.cover}`).addClass("active");
};

const moveUp = () => {

};

const moveDown = () => {
    if (headerEl.is(":visible")) {
        hideHeaderCover();
    } else if (contentAndCoversEl.is(":visible")) {
        if (!contentAndCoversItem) {
            showHeaderCover();
        } else {
            showHeaderCover();
        }
    }
};

window.onload = () => {
    init();
};

let lastScrollTop = 0;
document.addEventListener("scroll", function(event) {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
        moveDown();
    } else {
        moveUp();
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

document.addEventListener("keyup", function (event) {
    if (event.code === "ArrowUp") {
        moveUp();
    } else if (event.code === "ArrowDown") {
        moveDown();
    }
});