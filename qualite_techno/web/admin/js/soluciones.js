/* global Swal */

let soluciones =    [
                            {
                                idProducto      : 36,
                                idSolucion      : 1,
                                nombre          : "Solucion de limpieza profunda",
                                marca           : "CleanEX",
                                precioCompra    : 50,
                                precioVenta     : 200,
                                existencias     : 20,
                                estatus         : "Activo",
                                descripcion     : "Sirve para limpiar las impurezas de los lentes"
                            },
                            {
                                idProducto      : 48,
                                idSolucion      : 2,
                                nombre          : "Solucion para lentes de contacto",
                                marca           : "BuenaVista",
                                precioCompra    : 75,
                                precioVenta     : 350,
                                existencias     : 30,
                                estatus         : "Activo",
                                descripcion     : "Mantiene humectados los lentes de contacto"
                            },
                            {
                                idProducto      : 59,
                                idSolucion      : 3,
                                nombre          : "Solucion para lentes de contacto",
                                marca           : "Madrex",
                                precioCompra    : 25,
                                precioVenta     : 100,
                                existencias     : 15,
                                estatus         : "Activo",
                                descripcion     : "Mantiene humectados los lentes de contacto"
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
    for(let i = 0; i < soluciones.length; i++)
    {
        contenido += '<tr>' +
                            '<td>' + soluciones[i].nombre + '</td>' +
                            '<td>' + soluciones[i].marca + '</td>' +
                            '<td>' + soluciones[i].precioCompra + '</td>' +
                            '<td>' + soluciones[i].precioVenta + '</td>' +
                            '<td>' + soluciones[i].existencias + '</td>' +           //Cambiar a id 
                            '<td><a href = "#" onclick="cm.mostrarDetalleSolucion(' + soluciones[i].idSolucion + ');">Ver detalle</a>' +
                     '</tr>'
    }
    document.getElementById('tbSoluciones').innerHTML = contenido;
}
export function setDetalleVisible(valor)
{
    if (valor === true)
    {
        document.getElementById('divDetalleSoluciones').style.display = "";
        document.getElementById('divListadoSoluciones').style.display = "none";
    }
    else
    {
        document.getElementById("divDetalleSoluciones").style.display = "none";
        document.getElementById('divListadoSoluciones').style.display = "";
    }
}
export function mostrarDetalleSolucion(idProducto)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idProducto);
    
    if(i >= 0)
    {
        //Abrimos el detalle de armazones
        setDetalleVisible(true);
        
        //Llenamos el formulario con datos del armazon
        document.getElementById("txtIdProducto").value = soluciones[i].idProducto;
        document.getElementById("txtIdSolucion").value = soluciones[i].idSolucion;
        document.getElementById("txtNombre").value = soluciones[i].nombre;
        document.getElementById("txtMarca").value = soluciones[i].marca;
        document.getElementById("txtPrecioCompra").value = soluciones[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = soluciones[i].precioVenta;
        document.getElementById("txtExistencias").value = soluciones[i].existencias;
        document.getElementById("txtDescripcion").value = soluciones[i].descripcion;
        
        //Activamos el boton de eliminar
        document.getElementById("btnEliminar").classList.remove("disabled");
    }
    else
        Swal.fire('Solucion no encontrada','',"warning");
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtIdProducto").value = "";
    document.getElementById("txtIdSolucion").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecioCompra").value = "";
    document.getElementById("txtPrecioVenta").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById("txtDescripcion").value = "";
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < soluciones.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(soluciones[i].idSolucion === id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
export function agregarSolucion()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let solucion =   {
                        idProducto : 0,
                        idSolucion : 0,
                        nombre : document.getElementById("txtNombre").value,
                        marca : document.getElementById("txtMarca").value,
                        precioCompra : parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta : parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias : parseFloat(document.getElementById("txtExistencias").value),
                        estatus : "Activo",
                        descripcion : document.getElementById("txtDescripcion").value   
                    };
    if(document.getElementById("txtIdSolucion").value.trim() === '')
    {
        
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de la fecha actual
        solucion.idProducto = Date.now();
        solucion.idSolucion = Date.now() + 1 ;
        
        //Insertamos el accesorio al final del arreglo
        soluciones[soluciones.length] = solucion;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtIdProducto").value = solucion.idProducto;
        document.getElementById("txtIdSolucion").value = solucion.idSolucion;
        
        //Mostramos un mensaje al usuario
        Swal.fire('Datos de la solucion agregados correctamente', '', "success");
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        solucion.idProducto = parseInt(document.getElementById("txtIdProducto").value);
        solucion.idSolucion = parseInt(document.getElementById("txtIdSolucion").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosiconPorId(solucion.idSolucion);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            soluciones[pos] = solucion;
            
            //Mostramos un mensaje al usuario
            Swal.fire('Producto actualizado', 'Se actualizo correctamente el producto', "success");;
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            Swal.fire('Error: solucion no encontrado', '', "warning");
        }
    }
        
}
export function eliminarSolucion()
{
    let pos = -1;
    if(document.getElementById("txtIdSolucion").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosiconPorId(parseInt(document.getElementById("txtIdSolucion").value)); //Que reciba el codigo
        
        if(pos >= 0)
        {
            //Removemos el armazon de la posicion encontrada
            soluciones.splice(pos, 1);
            
            //Mostramos un mensaje de notificacion al usuario
            Swal.fire('Registro eliminado correctamente', '', "success");
            
            //Actualizamos la tabla
            fillTable();
            //Limpiamos el formulario
            limpiarFormularioDetalle();
            
            //Mostramos la tabla
            setDetalleVisible(false);
        }
    }
}
export function limpiar_y_mostrar_detalle()
{
    limpiarFormularioDetalle();
    setDetalleVisible(true);
}
 

