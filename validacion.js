function validateForm(event) {
  event.preventDefault(); // Detiene el envío del formulario

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, completa todos los campos.");
    event.preventDefault(); // Detiene el envío del formulario
    return false;
  }
  return true;
}

// si se usa esta validación, agregar "onsubmit="return validateForm()"
// en el html del form.
