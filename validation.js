// Se crea una función para que no se envíe el form con campos incompletos.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".registro");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Detiene el envío del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Uy...",
        text: "Hay algún campo incompleto!",
        footer: '<a href="#">Te ayudo?</a>',
      });
      event.preventDefault(); // Detiene el envío del formulario
    } else {
      console.log("Formulario válido. Enviando datos...");
      // form.submit();
      Swal.fire({
        title: "Genial!",
        text: "Estoy enviando tus datos!",
        icon: "success",
      });
    }
  });
});
