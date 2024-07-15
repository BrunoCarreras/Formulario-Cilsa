
function toggleBackground() {
    document.body.classList.toggle('oscuro-mode');
}


document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var inputs = form.querySelectorAll('input, select');
    var valid = true;

    inputs.forEach(function(input) {
        if (!input.value) {
            input.classList.add('is-invalid');
            input.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            input.classList.remove('is-invalid');
            input.nextElementSibling.style.display = 'none';
        }
    });

    if (valid) {
        // Aquí puedes enviar el formulario usando AJAX o cualquier otra lógica
        alert('Formulario enviado correctamente');
    } else {
        alert('Por favor, complete todos los campos requeridos.');
    }
});
