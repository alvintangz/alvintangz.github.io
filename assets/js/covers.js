/*
Author: Alvin Tang
Last updated: 2019-01-11
Intended only for use on Alvin Tang's personal website.
*/

var container = document.getElementById("covers-container");
var headings = document.getElementById("covers-heading");
var covers = ["assets/images/covers/2.jpg", "assets/images/covers/4.jpg", "assets/images/covers/6.jpg", "assets/images/covers/7.jpg"];
var headingTitles = ["lvin Tang", "&nbsp;UofT CS Student", "&nbsp;Part-time Sleeper", "&nbsp;Part-time Developer", "&nbsp;Part-time Developer"]
var divisiblePx = 300;
var lastCoverImg = document.getElementById("covers1");

function coversInit() {
    // Fix the container first, will change this at last cover image
    container.style.position = "fixed";

    windowHeight = window.innerHeight + divisiblePx;

    // Load cover images in the container
    for (imgIndex = 0; imgIndex < covers.length; imgIndex++) {
        var coverImgDiv = document.createElement("div");
        coverImgDiv.className = "covers-img";
        coverImgDiv.style.cssText = "background-image:url('" + covers[imgIndex] + "');display:none;";
        coverImgDiv.id = "covers" + (imgIndex + 2).toString();
        container.appendChild(coverImgDiv);

        windowHeight += divisiblePx
        // Set last cover image
        if(imgIndex + 1 >= covers.length) {
            lastCoverImg = coverImgDiv;
        }
    }

    document.getElementById("covers").style.height = windowHeight.toString() + "px";

}

function coversScroll() {
    // The number of the cover image currently shown
    var coverShown = Math.floor(window.pageYOffset/divisiblePx) + 1;
    // The cover image currently shown
    var coverImgDiv = document.getElementById("covers" + coverShown.toString());
    // All cover images
    var allCoverImgs = document.getElementsByClassName("covers-img");

    // Loop through all cover images and set all of them to display none
    for (imgIndex = 0; imgIndex < allCoverImgs.length; imgIndex++) {
        // Exclude current cover image shown from not being displayed
        if(allCoverImgs[imgIndex] != coverImgDiv) {
            allCoverImgs[imgIndex].style.display = "none";
        } else {
            document.getElementById("covers-heading-change").innerHTML = headingTitles[imgIndex];
        }
    }

    // If the section that the user is viewing through the window is of a cover image
    if(coverImgDiv) {
        // Ensure container is fixed, and the current cover image is displayed as a block
        container.style.position = "fixed";
        coverImgDiv.style.display = "block";
        headings.style.display = "block";
        if(coverImgDiv == lastCoverImg) {
            headings.style.display = "none";
        }
    } else {
        // Ensure that the last cover picture is displayed as a block and the container is now relative
        container.style.position = "relative";
        lastCoverImg.style.display = "block";
        headings.style.display = "none";
    }
    
}

document.addEventListener("DOMContentLoaded", function(event) {
    coversInit();
});

document.addEventListener("scroll", function(event) {
    coversScroll();
});