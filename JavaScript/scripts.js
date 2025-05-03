document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('registroForm');
    const confirmacion = document.getElementById('confirmacion');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validarFormulario()) {
            mostrarConfirmacion();
        }
    });
    
    function validarFormulario() {
        let valido = true;
        
        // Validar nombre
        const nombre = document.getElementById('nombre');
        const nombreError = document.getElementById('nombre-error');
        if (nombre.value.trim() === '') {
            nombreError.textContent = 'Por favor ingrese su nombre completo';
            valido = false;
        } else {
            nombreError.textContent = '';
        }
        
        // Validar email
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@uam\.edu\.ni$/;
        
        if (email.value.trim() === '') {
            emailError.textContent = 'Por favor ingrese su correo institucional';
            valido = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Por favor ingrese un correo institucional válido (@uam.edu.ni)';
            valido = false;
        } else {
            emailError.textContent = '';
        }
        
        // Validar carrera
        const carrera = document.getElementById('carrera');
        const carreraError = document.getElementById('carrera-error');
        if (carrera.value === '') {
            carreraError.textContent = 'Por favor seleccione su carrera';
            valido = false;
        } else {
            carreraError.textContent = '';
        }
        
        // Validar conferencias seleccionadas
        const checkboxes = document.querySelectorAll('input[name="conferencias"]:checked');
        const conferenciasError = document.getElementById('conferencias-error');
        if (checkboxes.length === 0) {
            conferenciasError.textContent = 'Por favor seleccione al menos una conferencia';
            valido = false;
        } else {
            conferenciasError.textContent = '';
        }
        
        return valido;
    }
    
    function mostrarConfirmacion() {
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const carrera = document.getElementById('carrera').value;
        
        const checkboxes = document.querySelectorAll('input[name="conferencias"]:checked');
        const conferencias = Array.from(checkboxes).map(cb => {
            return cb.nextElementSibling.textContent;
        });
        
        // Mostrar datos en la confirmación
        document.getElementById('email-confirmacion').textContent = email;
        
        const eventosLista = document.getElementById('eventos-confirmacion');
        eventosLista.innerHTML = '';
        conferencias.forEach(conf => {
            const li = document.createElement('li');
            li.textContent = conf;
            eventosLista.appendChild(li);
        });
        
        // Ocultar formulario y mostrar confirmación
        formulario.style.display = 'none';
        confirmacion.classList.remove('hidden');
        
        // Aquí normalmente enviarías los datos a un servidor
        console.log('Datos del formulario:', {
            nombre,
            email,
            carrera,
            conferencias
        });
    }
});