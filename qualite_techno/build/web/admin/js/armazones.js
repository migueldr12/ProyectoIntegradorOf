/* global Swal */

let armazones =    [
                            {
                                idProducto      : 1,
                                idArmazon       : 1,
                                codigoDeBarras  : 1,
                                nombre          : "Armazón de madera",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                dimensiones     : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo",
                                descripcion     : "Llenado"
                            },
                            {
                                idProducto      : 2,
                                idArmazon       : 2,
                                codigoDeBarras  : 2,
                                nombre          : "Armazón de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                dimensiones     : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo",
                                descripcion     : "Llenado"
                            },
                            {
                                idProducto      : 3,
                                idArmazon       : 3,
                                codigoDeBarras  : 3,
                                nombre          : "Armazón de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                dimensiones     : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo",
                                descripcion     : "Llenado"
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
                            '<td>' + armazones[i].precioCompra + '</td>' +
                            '<td>' + armazones[i].precioVenta + '</td>' +
                            '<td>' + armazones[i].existencias + '</td>' +           //Cambiar a id armazon
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
        document.getElementById('divListadoArmazones').style.display = "none";
    }
    else
    {
        document.getElementById("divDetalleArmazones").style.display = "none";
        document.getElementById('divListadoArmazones').style.display = "";
    }
}
export function mostrarDetalleArmazon(idProducto)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idProducto);
    
    if(i >= 0)
    {
        //Abrimos el detalle de armazones
        setDetalleVisible(true);
        
        //Llenamos el formulario con datos del armazon
        document.getElementById("txtIdProducto").value = armazones[i].idProducto;
        document.getElementById("txtIdArmazon").value = armazones[i].idArmazon;
        document.getElementById("txtCodigoDeBarras").value = 'OQ-' + armazones[i].codigoDeBarras;
        document.getElementById("txtNombre").value = armazones[i].nombre;
        document.getElementById("txtMarca").value = armazones[i].marca;
        document.getElementById("txtModelo").value = armazones[i].modelo;
        document.getElementById("txtColor").value = armazones[i].color;
        document.getElementById("txtDimensiones").value = armazones[i].dimensiones;
        document.getElementById("txtPrecioCompra").value = armazones[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = armazones[i].precioVenta;
        document.getElementById("txtExistencias").value = armazones[i].existencias;
        document.getElementById("txtDescripcion").value = armazones[i].descripcion;
        
        //Activamos el boton de eliminar
        document.getElementById("btnEliminar").classList.remove("disabled");
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
export function agregarArmazon()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let armazon =   {
                        idProducto : 0,
                        idArmazon : 0,
                        codigoDeBarras : 0,
                        nombre : document.getElementById("txtNombre").value,
                        marca : document.getElementById("txtMarca").value,    
                        modelo : document.getElementById("txtModelo").value,
                        color : document.getElementById("txtColor").value,
                        dimensiones : document.getElementById("txtDimensiones").value,
                        precioCompra : parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta : parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias : parseFloat(document.getElementById("txtExistencias").value),
                        estatus : "Activo",
                        descripcion : document.getElementById("txtDescripcion").value   
                    };
    if(document.getElementById("txtCodigoDeBarras").value.trim() === '')
    {
        
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de la fecha actual
        armazon.idProducto = Date.now();
        armazon.idArmazon = Date.now() + 1 ;
        armazon.codigoDeBarras = 'OQ-' + Date.now() + 2;
        
        //Insertamos el accesorio al final del arreglo
        armazones[armazones.length] = armazon;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtIdProducto").value = armazon.idProducto;
        document.getElementById("txtCodigoDeBarras").value = armazon.codigoDeBarras;
        document.getElementById("txtIdArmazon").value = armazon.idArmazon;
        
        //Mostramos un mensaje al usuario
        Swal.fire('Datos del armazón agregados correctamente', '', "success");
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        armazon.idProducto = parseInt(document.getElementById("txtIdProducto").value);
        armazon.idArmazon = parseInt(document.getElementById("txtIdArmazon").value);
        armazon.codigoDeBarras = parseInt(document.getElementById("txtCodigoDeBarras").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosiconPorId(armazon.idArmazon);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            armazones[pos] = armazon;
            
            //Mostramos un mensaje al usuario
            Swal.fire('Producto actualizado', 'Se actualizó correctamente el producto', "success");;
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            Swal.fire('Error: armazón no encontrado', '', "warning");
        }
    }
        
}
export function eliminarArmazon()
{
    let pos = -1;
    if(document.getElementById("txtCodigoDeBarras").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosiconPorId(parseInt(document.getElementById("txtIdArmazon").value)); //Que reciba el codigo
        
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
        armazones.splice(pos, 1);
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


 

