document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    alert(
      `Gracias, ${nombre}. Hemos recibido tu mensaje y te contactaremos pronto.`
    );
    document.getElementById("contact-form").reset();
  });
