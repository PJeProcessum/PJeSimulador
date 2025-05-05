document.addEventListener('DOMContentLoaded', function() {
    // Verifica login
    if (!localStorage.getItem('pje_user')) {
        window.location.href = "./index.html";
        return;
    }

    // Restante da lógica do dashboard
    // (Manter o código do dashboard já fornecido)
});