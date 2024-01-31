// Código para el menú de navegación

const menu = document.querySelector("nav");
const enlaces = menu.querySelectorAll("a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    const id = enlace.getAttribute("href");
    const seccion = document.querySelector(id);
    seccion.scrollIntoView();
  });
});

// Código para los botones de los proyectos

const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = boton.getAttribute("href");
    const proyecto = document.querySelector(id);
    proyecto.scrollIntoView();
  });
});
