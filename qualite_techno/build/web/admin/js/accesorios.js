/* global Swal */

let accesorios =    [
                            {
                                idProducto      : 36,
                                idAccesorio     : 1,
                                nombre          : "Correa",
                                marca           : "Nike",
                                precioCompra    : 50,
                                precioVenta     : 200,
                                existencias     : 20,
                                estatus         : "Activo",
                            },
                            {
                                idProducto      : 87,
                                idAccesorio     : 2,
                                nombre          : "Estuche de cuero",
                                marca           : "Luis Vuiton",
                                precioCompra    : 200,
                                precioVenta     : 2000,
                                existencias     : 20,
                                estatus         : "Activo",
                            },
                            {
                                idProducto      : 21,
                                idAccesorio     : 3,
                                nombre          : "Estuche de plastico",
                                marca           : "Guca",
                                precioCompra    : 25,
                                precioVenta     : 50,
                                existencias     : 20,
                                estatus         : "Activo",
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
    for(let i = 0; i < accesorios.length; i++)
    {
        contenido += '<tr>' +
                            '<td>' + accesorios[i].nombre + '</td>' +
                            '<td>' + accesorios[i].marca + '</td>' +
                            '<td>' + accesorios[i].precioCompra + '</td>' +
                            '<td>' + accesorios[i].precioVenta + '</td>' +
                            '<td>' + accesorios[i].existencias + '</td>' +           //Cambiar a id 
                            '<td><a href = "#" onclick="cm.mostrarDetalleAccesorio(' + accesorios[i].idAccesorio + ');">Ver detalle</a>' +
                     '</tr>'
    }
    document.getElementById('tbAccesorios').innerHTML = contenido;
}
export function setDetalleVisible(valor)
{
    if (valor === true)
    {
        document.getElementById('divDetalleAccesorios').style.display = "";
        document.getElementById('divListadoAccesorios').style.display = "none";
    }
    else
    {
        document.getElementById("divDetalleAccesorios").style.display = "none";
        document.getElementById('divListadoAccesorios').style.display = "";
    }
}
export function mostrarDetalleAccesorio(idProducto)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idProducto);
    
    if(i >= 0)
    {
        //Abrimos el detalle de armazones
        setDetalleVisible(true);
        
        //Llenamos el formulario con datos del armazon
        document.getElementById("txtIdProducto").value = accesorios[i].idProducto;
        document.getElementById("txtIdAccesorio").value = accesorios[i].idAccesorio;
        document.getElementById("txtNombre").value = accesorios[i].nombre;
        document.getElementById("txtMarca").value = accesorios[i].marca;
        document.getElementById("txtPrecioCompra").value = accesorios[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = accesorios[i].precioVenta;
        document.getElementById("txtExistencias").value = accesorios[i].existencias;
        
        //Activamos el boton de eliminar
        document.getElementById("btnEliminar").classList.remove("disabled");
    }
    else
        Swal.fire('Accesorio no encontrado','',"warning");
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtIdProducto").value = "";
    document.getElementById("txtIdAccesorio").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecioCompra").value = "";
    document.getElementById("txtPrecioVenta").value = "";
    document.getElementById("txtExistencias").value = "";
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < accesorios.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(accesorios[i].idAccesorio === id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
export function agregarAccesorio()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let accesorio =   {
                        idProducto : 0,
                        idAccesorio : 0,
                        nombre : document.getElementById("txtNombre").value,
                        marca : document.getElementById("txtMarca").value,
                        precioCompra : parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta : parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias : parseFloat(document.getElementById("txtExistencias").value),
                        estatus : "Activo", 
                    };
    if(document.getElementById("txtIdAccesorio").value.trim() === '')
    {
        
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de la fecha actual
        accesorio.idProducto = Date.now();
        accesorio.idAccesorio = Date.now() + 1 ;
        
        //Insertamos el accesorio al final del arreglo
        accesorios[accesorios.length] = accesorio;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtIdProducto").value = accesorio.idProducto;
        document.getElementById("txtIdAccesorio").value = accesorio.idAccesorio;
        
        //Mostramos un mensaje al usuario
        Swal.fire('Datos del accesorio agregados correctamente', '', "success");
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        accesorio.idProducto = parseInt(document.getElementById("txtIdProducto").value);
        accesorio.idAccesorio = parseInt(document.getElementById("txtIdAccesorio").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosiconPorId(accesorio.idAccesorio);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            accesorios[pos] = accesorio;
            
            //Mostramos un mensaje al usuario
            Swal.fire('Producto actualizado', 'Se actualizó correctamente el producto', "success");;
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            Swal.fire('Error: accesorio no encontrado', '', "warning");
        }
    }
        
}
export function eliminarAccesorio()
{
    let pos = -1;
    if(document.getElementById("txtIdAccesorio").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosiconPorId(parseInt(document.getElementById("txtIdAccesorio").value)); //Que reciba el codigo
        
        if(pos >= 0)
        {
            Swal.fire({
        icon: 'info',
                html:
                '<p>Para hacer una eliminación es necesario acceder con el usuario de un administrador.</p>' +
                '<label for="user">Usuario:&nbsp;</label>' +
                '<input id="user" type="text">' +
                '<br><br>' +
                '<label for="user">Contraseña:&nbsp;</label>' +
                '<input id="password" type="password">',
                showCancelButton: true,
                cancelButtonColor: 'red',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
        icon: 'warning',
                text: '¿Estás seguro que quieres eliminar este elemento?',
                showCancelButton: true,
                cancelButtonColor: 'red',
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
        //Removemos el armazon de la posicion encontrada
        accesorios.splice(pos, 1);
                //Mostramos un mensaje de notificacion al usuario
                Swal.fire('Registro eliminado correctamente', '', "success");
                //Actualizamos la tabla
                fillTable();
                //Limpiamos el formulario
                limpiarFormularioDetalle();
                //Mostramos la tabla
                setDetalleVisible(false);
        }
        })
        } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        }
        });
        }
    }
}
export function limpiar_y_mostrar_detalle()
{
    limpiarFormularioDetalle();
    setDetalleVisible(true);
}
 

