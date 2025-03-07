let agenda = [];

function validarNumero(telefono) {
    const regex = /^[0-9]{8,9}$/;  // Acepta solo números de 10 a 11 dígitos
    return regex.test(telefono);
}

function agregarContacto() {
    const nombre = prompt("Agregar el nombre del contacto");
    const telefono = prompt("Agregar el telefono del contacto");

    if (validarNumero(telefono)) {
        agenda.push({nombre, telefono});
        alert("Contacto agregado correctamente");
    } else {
        alert("El número de telefono no es válido");
    }
    mostrarMenu();
}

function mostrarContacto() {
    if (agenda.length === 0) {  // Verifica que la agenda no esté vacía
        alert("Agenda vacía");
    } else {
        let lista = "Lista de contactos:\n";
        for (let i = 0; i < agenda.length; i++) {  // Muestra todos los contactos
            lista += `${agenda[i].nombre} - ${agenda[i].telefono}\n`;
        }
        alert(lista);
    }
    mostrarMenu();
}

function borrarContacto() {
    const nombre = prompt("Introduce el nombre del contacto que quieres borrar");
    const index = agenda.findIndex(contacto => contacto.nombre === nombre);

    if (index !== -1) {  // Si el contacto existe
        agenda.splice(index, 1);  // Elimina el contacto
        alert("Contacto encontrado y eliminado...");
    } else {
        alert("Contacto no encontrado");
    }
    mostrarMenu();
}

function actualizarContacto() {
    const nombre = prompt("Introduce el nombre del contacto que quieres actualizar");
    const index = agenda.findIndex(contacto => contacto.nombre === nombre);

    if (index !== -1) {  // Si el contacto se encuentra
        const nuevoNombre = prompt("Introduce el nuevo nombre del contacto");
        const nuevoTelefono = prompt("Introduce el nuevo teléfono del contacto");

        if (nuevoNombre) agenda[index].nombre = nuevoNombre;
        if (nuevoTelefono) agenda[index].telefono = nuevoTelefono;

        alert("Contacto actualizado correctamente");
    } else {
        alert("Contacto no encontrado");
    }
    mostrarMenu();
}

function mostrarMenu() {
    const option = prompt("Agenda de Contactos:\n\n1. Agregar contacto\n2. Mostrar todos los contactos\n3. Actualizar contacto\n4. Eliminar contacto\n5. Salir")

    switch (option) {
        case "1":
            agregarContacto();
            break;
        case "2":
            mostrarContacto();
            break;
        case "3":
            actualizarContacto();
            break;
        case "4":
            borrarContacto();
            break;
        case "5":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
            mostrarMenu();
    }
}

// Inicia el programa con el menú
mostrarMenu();
