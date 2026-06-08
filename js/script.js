// Demo button functionality
document.addEventListener('DOMContentLoaded', function() {
    const demoBtn = document.getElementById('demoBtn');

    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            alert('Bouton cliqué ! La page fonctionne correctement.');
            console.log('Button clicked at:', new Date().toLocaleTimeString());
        });
    }
});
