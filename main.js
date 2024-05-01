// declaración de variables
let listaClientes = document.getElementById("listaClientes");
let tabla = document.getElementById("tablaProductos")



//Le damos el atributo "onclick" al boton de registrarClientes
 
document.getElementById("botonRegistrarCliente").setAttribute("onclick", "registrarCliente()");


//Funcion que añade clientes

function registrarCliente() {
    let cedulaCliente = document.getElementById("cedula").value;
    let nombreCliente = document.getElementById("nombre").value;
    let telefonoCliente = document.getElementById("telefono").value;
    let direccionCliente = document.getElementById("direccion").value;

    let datosCliente = `Cedula: ${cedulaCliente} - Nombre: ${nombreCliente} - Telefono: ${telefonoCliente} - Dirección: ${direccionCliente}`

    let nuevoCliente = document.createElement("li");
    let datosNuevoCliente = document.createTextNode(datosCliente);
    nuevoCliente.appendChild(datosNuevoCliente);
    nuevoCliente.addEventListener("dblclick", function() {
        if (confirm("¿Desea eliminar este cliente?")){
            this.parentNode.removeChild(this);
        }
    })
    listaClientes.appendChild(nuevoCliente);

    //llama a la funcion de limpiar datos
    limpiarDatos("cliente");
}

//Funcion que añade producto

document.getElementById("botonRegistrarProducto").addEventListener("click", () => {  
    let auxTr = document.createElement("tr");
    let datosProducto = [];
    datosProducto.push(document.getElementById("codigo").value)
    datosProducto.push(document.getElementById("descripcion").value)
    datosProducto.push(document.getElementById("precio").value)
    datosProducto.push(document.getElementById("cantidad").value)
    
    for (const i of datosProducto) {
        let tdAux = document.createElement("td")
        let auxTextTd = document.createTextNode(i);
        tdAux.appendChild(auxTextTd);
        auxTr.appendChild(tdAux);
    }
    auxTr.addEventListener("dblclick", borrarFila);
    tabla.tBodies[0].appendChild(auxTr)

    //llama a la funcion de limpiar datos
    limpiarDatos("producto");
})

//Funcion para borrar fila de tabla

function borrarFila(e) {
    if (confirm("¿Desea eliminar este producto?")) {
        let fila = e.target.parentNode.rowIndex;    
        tabla.deleteRow(fila);
    }
}

//Funcion para borrar datos de los formularios

function limpiarDatos(formulario) {
    if (formulario == "cliente") {
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    } else if (formulario == "producto") {
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    }
    
   
}
