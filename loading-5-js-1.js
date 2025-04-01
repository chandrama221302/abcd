document.addEventListener("DOMContentLoaded", function () {
    const hoverDivs = document.getElementsByClassName("tour-card");

    for (let i = 0; i < hoverDivs.length; i++) {
        let hoverDiv = hoverDivs[i];
        let tourInfo = hoverDiv.querySelector(".tour-info");
        let tourMeta = hoverDiv.querySelector(".tour-meta");
        let heading = hoverDiv.querySelector(".TourPages");
        let IMG = hoverDiv.querySelector(".img");
        let LINE = hoverDiv.querySelector(".line");

        hoverDiv.addEventListener("mouseenter", function () {
            tourInfo.style.bottom = "0px";
            tourInfo.style.opacity = "1";
            tourMeta.classList.remove("opacity-0");
            IMG.style.transform = "scale(1.10)";  // Fixed syntax
            LINE.style.width = "250px";  // Fixed syntax
        });

        hoverDiv.addEventListener("mouseleave", function () {
            tourInfo.style.bottom = "-30px";
            // tourInfo.style.opacity = "0";
            tourMeta.classList.add("opacity-0");
            IMG.style.transform = "scale(1)";  // Fixed syntax
            LINE.style.width = "100px";  // Fixed syntax
        });
    }
});