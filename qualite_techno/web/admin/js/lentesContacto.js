/* global Swal */

let lentesContacto =    [
                            {
                                idProducto      : 1,
                                idLenteContacto : 1,
                                codigoDeBarras  : 1,
                                nombre          : "Armazon de madera",
                                marca           : "Gucci",
                                color           : "Negro",
                                queratometria   : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo"
                            },
                            {
                                idProducto      : 2,
                                idLenteContacto : 2,
                                codigoDeBarras  : 2,
                                nombre          : "Armazon de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                queratometria   : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo"
                            },
                            {
                                idProducto      : 3,
                                idLenteContacto : 3,
                                codigoDeBarras  : 3,
                                nombre          : "Armazon de pasta",
                                marca           : "Gucci",
                                modelo          : "GU-89",
                                color           : "Negro",
                                queratometria   : "50x50",
                                precioCompra    : 500,
                                precioVenta     : 2500,
                                existencias     : 600,
                                estatus         : "Activo"
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
    for(let i = 0; i < lentesContacto.length; i++)
    {
        contenido += '<tr>' +
                            '<td>' + lentesContacto[i].nombre + '</td>' +
                            '<td>' + lentesContacto[i].marca + '</td>' +
                            '<td>' + lentesContacto[i].precioCompra + '</td>' +
                            '<td>' + lentesContacto[i].precioVenta + '</td>' +
                            '<td>' + lentesContacto[i].existencias + '</td>' +   //Cambiar a id armazon
                            '<td><a href = "#" onclick="cm.mostrarDetalleLentesContacto(' + lentesContacto[i].idLenteContacto + ');">Ver detalle</a>' +
                     '</tr>'
    }
    document.getElementById('tbLentesContacto').innerHTML = contenido;
}
export function setDetalleVisible(valor)
{
    if (valor === true)
    {
        document.getElementById('divDetalleLentesContacto').style.display = "";
        document.getElementById('divListadoLentesContacto').style.display = "none";
    }
    else
    {
        document.getElementById("divDetalleLentesContacto").style.display = "none";
        document.getElementById('divListadoLentesContacto').style.display = "";
    }
}
export function mostrarDetalleLentesContacto(idProducto)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idProducto);
    
    if(i >= 0)
    {
        //Abrimos el detalle de armazones
        setDetalleVisible(true);
        
        //Llenamos el formulario con datos del armazon
        document.getElementById("txtIdProducto").value = lentesContacto[i].idProducto;
        document.getElementById("txtIdLenteContacto").value = lentesContacto[i].idLenteContacto;
        document.getElementById("txtCodigoDeBarras").value = 'OQ-' + lentesContacto[i].codigoDeBarras;
        document.getElementById("txtNombre").value = lentesContacto[i].nombre;
        document.getElementById("txtMarca").value = lentesContacto[i].marca;
        document.getElementById("txtColor").value = lentesContacto[i].color;
        document.getElementById("txtQueratometria").value = lentesContacto[i].queratometria;
        document.getElementById("txtPrecioCompra").value = lentesContacto[i].precioCompra;
        document.getElementById("txtPrecioVenta").value = lentesContacto[i].precioVenta;
        document.getElementById("txtExistencias").value = lentesContacto[i].existencias;
        
        //Activamos el boton de eliminar
        document.getElementById("btnEliminar").classList.remove("disabled");
    }
    else
        alert('Armazon no encontrado');
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtIdProducto").value = "";
    document.getElementById("txtIdLenteContacto").value = "";
    document.getElementById("txtCodigoDeBarras").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtColor").value = "";
    document.getElementById("txtQueratometria").value = "";
    document.getElementById("txtPrecioCompra").value = "";
    document.getElementById("txtPrecioVenta").value = "";
    document.getElementById("txtExistencias").value = "";
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < lentesContacto.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(lentesContacto[i].idLenteContacto === id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
export function agregarLenteContacto()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let lenteContacto =   {
                        idProducto : 0,
                        idLenteContacto : 0,
                        codigoDeBarras : 0,
                        nombre : document.getElementById("txtNombre").value,
                        marca : document.getElementById("txtMarca").value,    
                        color : document.getElementById("txtColor").value,
                        queratometria : document.getElementById("txtQueratometria").value,
                        precioCompra : parseFloat(document.getElementById("txtPrecioCompra").value),
                        precioVenta : parseFloat(document.getElementById("txtPrecioVenta").value),
                        existencias : parseFloat(document.getElementById("txtExistencias").value),
                        estatus : "Activo"
                    };
    if(document.getElementById("txtCodigoDeBarras").value.trim() === '')
    {
        
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de la fecha actual
        lenteContacto.idProducto = Date.now();
        lenteContacto.idLenteContacto = Date.now() + 1 ;
        lenteContacto.codigoDeBarras = 'OQ-' + Date.now() + 2;
        
        //Insertamos el accesorio al final del arreglo
        lentesContacto[lentesContacto.length] = lenteContacto;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtIdProducto").value = lenteContacto.idProducto;
        document.getElementById("txtCodigoDeBarras").value = lenteContacto.codigoDeBarras;
        document.getElementById("txtIdLenteContacto").value = lenteContacto.idLenteContacto;
        
        //Mostramos un mensaje al usuario
        Swal.fire('Datos del Lente de Contacto agregados correctamente', '', "success");
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        lenteContacto.idProducto = parseInt(document.getElementById("txtIdProducto").value);
        lenteContacto.idLenteContacto = parseInt(document.getElementById("txtIdLenteContacto").value);
        lenteContacto.codigoDeBarras = parseInt(document.getElementById("txtCodigoDeBarras").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosiconPorId(lenteContacto.idLenteContacto);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            lentesContacto[pos] = lenteContacto;
            
            //Mostramos un mensaje al usuario
            Swal.fire('Producto actualizado', 'Se actualizo correctamente el producto', "success");;
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            Swal.fire('Error: lente de contacto no encontrado', '', "warning");
        }
    }
        
}
export function eliminarLenteContacto()
{
    let pos = -1;
    if(document.getElementById("txtCodigoDeBarras").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosiconPorId(parseInt(document.getElementById("txtIdLenteContacto").value)); //Que reciba el codigo
        
        if(pos >= 0)
        {
            //Removemos el armazon de la posicion encontrada
            lentesContacto.splice(pos, 1);
            
            //Mostramos un mensaje de notificacion al usuario
            alertaContrasena();
            
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
export function alertaContrasena()
{
    Swal.fire({
        icon: 'info',
        html:
                '<p>Para hacer una eliminación es necesario acceder con el usuario de un administrador.</p>'+
                '<label for="user">Usuario:&nbsp;</label>'+
                '<input id="user" type="text">'+
                '<br><br>'+
                '<label for="user">Contraseña:&nbsp;</label>'+
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
            if(result.isConfirmed) {
                Swal.fire(
                    'Se eliminó con éxito',
                    '',
                    'success'
                )
            }
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
}
 

