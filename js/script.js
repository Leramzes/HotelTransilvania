// Función para alternar el estado del sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    document.body.classList.toggle('sidebar-expanded');
});

// Función para cargar el contenido sin actualizar el sidebar
function cargarPagina(pagina) {
    fetch(pagina)  // Asegúrate de que pagina ya contiene 'html/'
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la página: ' + pagina);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('contenido').innerHTML = '<div class="alert alert-danger">No se pudo cargar el contenido.</div>';
        });
}
