// llamamos a todas las cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-crono");

  cards.forEach(card => {
    //  elcolor por defecto guardado para poder restaurarlo cuando se vuelva a hacer click
    const defaultBg = window.getComputedStyle(card).backgroundColor;

    function activar() {
      const color = card.dataset.color || null;
      if (!card.classList.contains("activa")) {
        // activar: asignar color y clase
        if (color) card.style.backgroundColor = color;
        card.classList.add("activa");
        card.setAttribute("aria-pressed", "true");
      } else {
        // desactivar: restaurar estilo original
        card.style.backgroundColor = defaultBg;
        card.classList.remove("activa");
        card.setAttribute("aria-pressed", "false");
      }
    }

    // click en la card
    card.addEventListener("click", activar);

  
  });
});

