let armazones =    [
                            {
                                idArmazon       : 1,
                                codigoDeBarras  : "OQ-001",
                                nombre          : "Armazon de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                dimensiones     : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo",
                                descripcion     : "Llenadooo"
                            },
                            {
                                idArmazon       : 2,
                                codigoDeBarras  : "OQ-002",
                                nombre          : "Armazon de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                dimensiones     : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo",
                                descripcion     : "Llenadooo"
                            },
                            {
                                idArmazon       : 3,
                                codigoDeBarras  : "OQ-003",
                                nombre          : "Armazon de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                dimensiones     : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo",
                                descripcion     : "Llenadooo"
                            }
                        ];
export function inicializar()
{
    setDetalleVisible(false);
    fillTable();
}
export function inicializarAgregar()
{
    setDetalleVisible(true);
    fillTable();
}
function fillTable()
{
    let contenido = '';
    // recorremos el arreglo
    for(let i = 0; i < armazones.length; i++)
    {
        contenido += '<tr>' +
                            '<td>' + armazones[i].nombre + '</td>' +
                            '<td>' + armazones[i].marca + '</td>' +
                            '<td>' + armazones[i].modelo + '</td>' +
                            '<td>' + armazones[i].color + '</td>' +
                            '<td>' + armazones[i].dimensiones + '</td>' +
                            '<td>' + armazones[i].precioCompra + '</td>' +
                            '<td>' + armazones[i].precioVenta + '</td>' +
                            '<td>' + armazones[i].existencias + '</td>' +
                            '<td>' + armazones[i].estatus + '</td>' +
                            '<td>' + armazones[i].descripcion + '</td>' +
                            '<td><a href = "#" onclick="cm.mostrarDetalleArmazon(' + armazones[i].idArmazon + ');">Ver detalle</a>' +
                     '</tr>'
    }
    document.getElementById('tbArmazones').innerHTML = contenido;
}
export function setDetalleVisible(valor)
{
    if (valor === true)
    {
        document.getElementById('divDetalleArmazones').style.display = "";
        document.getElementById('divListadoArmazones').style.display = "";
    }
    else
    {
        document.getElementById("divDetalleArmazones").style.display = "none";
        document.getElementById('divListadoArmazones').style.display = "";
    }
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < armazones.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(armazones[i].idAccesorio == id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
export function mostrarDetalleArmazon(idArmazon)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosicionPorId(idArmazon);
    
    if(i > 0)
    {
        //Limpiamos el formulario
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con datos del armazon 
        document.getElementById("txtCodigoDeBarras").value = armazones[i].codigoDeBarras;
        document.getElementById("txtNombre").value = armazones[i].nombre;
        document.getElementById("txtMarca").value = armazones[i].marca;
        document.getElementById("txtModelo").value = armazones[i].modelo;
        document.getElementById("txColor").value = armazones[i].color;
        document.getElementById("txtDimensiones").value = armazones[i].dimensiones;
        document.getElementById("txtPrecioCompra").value = armazones[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = armazones[i].precioVenta;
        document.getElementById("txtExistencias").value = armazones[i].existencias;
        document.getElementById("txtDescripcion").value = armazones[i].descripcion;
        
        //Activamos los botones de eliminar y actualizar, y desactivamos el de agregar
        document.getElementById("btnEliminar").classList.remove("disabled");
        document.getElementById("btnActualizar").classList.remove("disabled");
        document.getElementById("btnAgregar").classList.add("disabled");
    }
    else
        alert('Armazon no encontrado');
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtCodigoDeBarras").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtModelo").value = "";
    document.getElementById("txColor").value = "";
    document.getElementById("txtDimensiones").value = "";
    document.getElementById("txtPrecioCompra").value = "";
    document.getElementById("txtPrecioVenta").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById("txtDescripcion").value = "";
}

