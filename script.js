const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("zoomedImage");
const captionText = document.getElementById("caption");

document.querySelectorAll('img').forEach(img => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};
