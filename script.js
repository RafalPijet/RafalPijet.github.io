document.getElementById("tablet").addEventListener("mouseleave", function () {
    setTimeout(function () {
        document.getElementById("scroll-item").scrollTop = -100;
    }, 500);
});
