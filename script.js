let trenutnaSlika = 0;

function getSlike() {
    return Array.from(document.querySelectorAll(".thumbnail"));
}

function openModal(src) {
    const slike = getSlike();

    trenutnaSlika = slike.findIndex(function(slika) {
        return slika.src === src;
    });

    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function spremeniSliko(smer) {
    const slike = getSlike();

    trenutnaSlika += smer;

    if (trenutnaSlika >= slike.length) {
        trenutnaSlika = 0;
    }

    if (trenutnaSlika < 0) {
        trenutnaSlika = slike.length - 1;
    }

    document.getElementById("modalImage").src = slike[trenutnaSlika].src;
}
let touchStartX = 0;
let touchEndX = 0;

const modal = document.getElementById("imageModal");

if (modal) {

    modal.addEventListener("touchstart", function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    modal.addEventListener("touchend", function(event) {
        touchEndX = event.changedTouches[0].screenX;

        const razlika = touchStartX - touchEndX;

        if (razlika > 50) {
            spremeniSliko(1);
        }

        if (razlika < -50) {
            spremeniSliko(-1);
        }
    });
}
