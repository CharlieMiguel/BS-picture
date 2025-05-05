document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Verificar si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        // Por defecto mostrará modo claro con bombilla
        enableLightMode();
    }

    themeToggle.addEventListener('click', function() {
        themeIcon.classList.add('rotate');
        setTimeout(() => {
            themeIcon.classList.remove('rotate');
        }, 500);
        
        if (body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-lightbulb');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }

    function enableLightMode() {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-lightbulb');
        localStorage.setItem('theme', 'light');
    }
});

function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

