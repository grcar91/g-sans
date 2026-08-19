
  function openModal(src) {
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

const slider = document.querySelector(".slider-track");
const levo = document.querySelector(".slider-gumb.levo");
const desno = document.querySelector(".slider-gumb.desno");

if (slider && levo && desno) {

    function premakniSlider(smer) {

        const slika = slider.querySelector("img");

        if (!slika) return;

        const razdalja = slika.offsetWidth + 15;

        slider.scrollBy({
            left: smer * razdalja,
            behavior: "smooth"
        });
    }

    desno.addEventListener("click", function () {
        premakniSlider(1);
    });

    levo.addEventListener("click", function () {
        premakniSlider(-1);
    });
}