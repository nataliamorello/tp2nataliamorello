



document.addEventListener("DOMContentLoaded", () => {
  // llamados al dom
  const imgs = document.querySelectorAll(".galeria img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxFrase = document.getElementById("lightbox-frase");
  const closeBtn = document.querySelector(".lightbox-close");

  //  abrir lightbox con src y frase
  function abrir(src, frase, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightboxFrase.textContent = frase || "";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");


  }

  function cerrar() {
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    lightboxFrase.textContent = "";
    document.body.classList.remove("lightbox-open");
  }

  // cuando hago click en la imagen, toma sus parametros y abre el lightbox
  imgs.forEach(img => {
    const frase = img.dataset.frase || "";
    const src = img.src;
    const alt = img.alt || "";

    img.addEventListener("click", () => abrir(src, frase, alt));

  });

  // cerrar con botón
  closeBtn.addEventListener("click", cerrar);

  // cerrar al click fuera de la imagen 
  lightbox.addEventListener("click", (e) => {
    // si el target -del click- es el propio lightbox (fondo) o el close btn, cerramos
    if (e.target === lightbox) {
      cerrar();
    }
  });


});
