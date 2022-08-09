let armazones =    [
                            {
                                idProducto      : 1,
                                idArmazon       : 1,
                                codigoDeBarras  : 1,
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
                                idProducto      : 2,
                                idArmazon       : 2,
                                codigoDeBarras  : 2,
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
                                idProducto      : 3,
                                idArmazon       : 3,
                                codigoDeBarras  : 3,
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
                            '<td><a href = "#" onclick="cm.mostrarDetalleArmazon(' + armazones[i].idProducto + ');">Ver detalle</a>' +
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
export function mostrarDetalleArmazon(idArmazon)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idArmazon);
    
    if(i > 0)
    {
        //Limpiamos el formulario
        limpiarFormularioDetalle();
        
        //Llenamos el formulario con datos del armazon
        document.getElementById("txtIdProducto").value = armazones[i].idProducto;
        document.getElementById("txtIdArmazon").value = armazones[i].idArmazon;
        document.getElementById("txtCodigoDeBarras").value = armazones[i].codigoDeBarras;
        document.getElementById("txtNombre").value = armazones[i].nombre;
        document.getElementById("txtMarca").value = armazones[i].marca;
        document.getElementById("txtModelo").value = armazones[i].modelo;
        document.getElementById("txtColor").value = armazones[i].color;
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
    document.getElementById("txtIdProducto").value = "";
    document.getElementById("txtIdArmazon").value = "";
    document.getElementById("txtCodigoDeBarras").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtColor").value = "";
    document.getElementById("txtDimensiones").value = "";
    document.getElementById("txtPrecioCompra").value = "";
    document.getElementById("txtPrecioVenta").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById("txtDescripcion").value = "";
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < armazones.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(armazones[i].idArmazon === id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
/* export function agregarArmazones()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let armazon =   {
                        idArmazon = 0,
                        codigoDeBarras = 0,
                        nombre = document.getElementById("txtNombre").value,
                        marca = document.getElementById("txtMarca").value,
                        modelo = document.getElementById("txtModelo").value,
                        color = document.getElementById("txtColor").value,
                        dimensiones = document.getElementById("txtDimensiones").value,
                        precioCompra = parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta = parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias = parseFloat(document.getElementById("txtExistencias").value),
                        descripcion = document.getElementById("txtDescripcion").value
                    }
    if(document.getElementById("txtCodigoDeBarras").value.trim() === '')
    {
     
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de la fecha actual
        armazon.idArmazon = Date.now();
        armazon.codigoDeBarras = '' + Date.now() + 1;
        
        //Insertamos el accesorio al final del arreglo
        armazones[armazones.length] = armazon;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtCodigoDeBarras").value = armazon.codigoDeBarras;
        document.getElementById("txtIdArmazon").value = armazon.idArmazon;
        
        //Mostramos un mensaje al usuario
        alert('Datos del accesorio agregados correctamente');
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        armazon.idArmazon = parseInt(document.getElementById("txtIdArmazon").value);
        armazon.codigoDeBarras = parseInt(document.getElementById("txtCodigoDeBarras").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosicionPorId(armazon.idArmazon);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            armazones[pos] = armazon;
            
            //Mostramos un mensaje al usuario
            alert('Datos del accesorio actualizados correctamente.');
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            alert('Erro: armazon no encontrado')
        }
    }
        
}
export function eliminarArmazon()
{
    let pos = -1;
    if(document.getElementById("txtCodigoDeBarras").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosicionPorId(parseInt(document.getElementById("txtCodigoDeBarras").value));
        
        if(pos >= 0)
        {
            //Removemos el armazon de la posicion encontrada
            armazones.splice(pos, 1);
            
            //Mostramos un mensaje de notificacion al usuario
            alert('Registro eliminado correctamente');
            
            //Actualizamos la tabla
            fillTable();
            //Limpiamos el formulario
            limpiarFormularioDetalle();
            
            //Mostramos la tabla
            setDetalleVisible(false);
        }
    }
}
 
 */
