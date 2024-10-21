// Simple JavaScript interaction example for form validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Tous les champs sont requis.');
        event.preventDefault(); // Empêche l'envoi du formulaire si les champs ne sont pas remplis
    }
});
