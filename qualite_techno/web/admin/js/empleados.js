/* global Swal */

let empleados =    [
                            {
                                idPersona       : 1,
                                idEmpleado      : 1,
                                codigoEmpleado  : 1,
                                nombre          : "Diego",
                                apellidoPaterno : "Nava",
                                apellidoMaterno : "Bonel",
                                genero          : "Hombre",
                                rfc             : "NABD011213",
                                telefonoMovil   : "4776668129",
                                telefonoCasa    : "4774080312",
                                correo          : "20001388@alumnos.utleon.edu.mx",
                                usuario         : "DiegoNava",
                                contrasena      : "1234",
                                estatus         : "Activo"
                            },
                            {
                                idPersona       : 2,
                                idEmpleado      : 2,
                                codigoEmpleado  : 2,
                                nombre          : "Miguel",
                                apellidoPaterno : "Duran",
                                apellidoMaterno : "Ramirez",
                                genero          : "Hombre",
                                rfc             : "DURM",
                                telefonoMovil   : "4771234567",
                                telefonoCasa    : "4771234567",
                                correo          : "20011468@alumnos.utleon.edu.mx",
                                usuario         : "MiguelDuran",
                                contrasena      : "1234",
                                estatus         : "Activo"
                            },
                            {
                                idPersona       : 3,
                                idEmpleado      : 3,
                                codigoEmpleado  : 3,
                                nombre          : "Jocelyn",
                                apellidoPaterno : "Jaime",
                                apellidoMaterno : "Godinez",
                                genero          : "Mujer",
                                rfc             : "JAG0134",
                                telefonoMovil   : "4779876543",
                                telefonoCasa    : "4779876543",
                                correo          : "20004567@alumnos.utleon.edu.mx",
                                usuario         : "JocelynJaime",
                                contrasena      : "1234",
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
    for(let i = 0; i < empleados.length; i++)
    {
        contenido += '<tr>' +
                            '<td>' + empleados[i].nombre + "&nbsp" + empleados[i].apellidoPaterno + "&nbsp" + empleados[i].apellidoMaterno + '</td>' +
                            '<td>' + empleados[i].correo + '</td>' +
                            '<td>' + empleados[i].telefonoMovil + '</td>' + 
                            '<td>' + empleados[i].telefonoCasa + '</td>' +  //Cambiar a id armazon
                            '<td><a href = "#" onclick="cm.mostrarDetalleArmazon(' + empleados[i].idEmpleado + ');">Ver detalle</a>' +
                     '</tr>'
    }
    document.getElementById('tbEmpleados').innerHTML = contenido;
}
export function setDetalleVisible(valor)
{
    if (valor === true)
    {
        document.getElementById('divDetalleEmpleado').style.display = "";
        document.getElementById('divListadoEmpleado').style.display = "none";
    }
    else
    {
        document.getElementById("divDetalleEmpleado").style.display = "none";
        document.getElementById('divListadoEmpleado').style.display = "";
    }
}
export function mostrarDetalleArmazon(idPersona)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idPersona);
    
    if(i >= 0)
    {
        //Abrimos el detalle de armazones
        setDetalleVisible(true);
        
        //Llenamos el formulario con datos del armazon
        document.getElementById("txtIdPersona").value = empleados[i].idPersona;
        document.getElementById("txtIdEmpleado").value = empleados[i].idEmpleado;
        document.getElementById("txtCodigoEmpleado").value = 'OQ-' + empleados[i].codigoEmpleado;
        document.getElementById("txtNombre").value = empleados[i].nombre;
        document.getElementById("txtApellidoPaterno").value = empleados[i].apellidoPaterno;
        document.getElementById("txtApellidoMaterno").value = empleados[i].apellidoMaterno;
        document.getElementById("opcGenero").value = empleados[i].genero;
        document.getElementById("txtRfc").value = empleados[i].rfc;
        document.getElementById("txtTelefonoMovil").value = empleados[i].telefonoMovil;
        document.getElementById("txtTelefonoCasa").value = empleados[i].telefonoCasa;
        document.getElementById("txtCorreo").value = empleados[i].correo;
        document.getElementById("txtUsuario").value = empleados[i].usuario;
        document.getElementById("txtContrasena").value = empleados[i].contrasena;
        
        //Activamos el boton de eliminar
        document.getElementById("btnEliminar").classList.remove("disabled");
    }
    else
        alert('Empleado no encontrado');
}
export function limpiarFormularioDetalle()
{
    document.getElementById("txtIdPersona").value = "";
    document.getElementById("txtIdEmpleado").value = "";
    document.getElementById("txtCodigoEmpleado").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellidoPaterno").value = "";
    document.getElementById("txtApellidoMaterno").value = "";
    document.getElementById("opcGenero").value = "";
    document.getElementById("txtRfc").value = "";
    document.getElementById("txtTelefonoMovil").value = "";
    document.getElementById("txtTelefonoCasa").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtContrasena").value = "";
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < empleados.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(empleados[i].idEmpleado === id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
export function agregarEmpleado()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let empleado =   {
                        idPersona : 0,
                        idEmpleado : 0,
                        codigoEmpleado : 0,
                        nombre : document.getElementById("txtNombre").value,
                        apellidoPaterno : document.getElementById("txtApellidoPaterno").value,    
                        apellidoMaterno : document.getElementById("txtApellidoMaterno").value,
                        genero : document.getElementById("opcGenero").value,
                        rfc : document.getElementById("txtRfc").value,
                        telefonoMovil : document.getElementById("txtTelefonoMovil").value,
                        telefonoCasa : document.getElementById("txtTelefonoCasa").value,
                        correo : document.getElementById("txtCorreo").value,
                        usuario : document.getElementById("txtUsuario").value,
                        contrasena : document.getElementById("txtContrasena").value,
                        estatus: "Activo"
                    };
    if(document.getElementById("txtCodigoEmpleado").value.trim() === '')
    {
        
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de lacodigoApellidop fecha actual
        let inicialesPaterno = empleado.apellidoPaterno.charAt(0) + empleado.apellidoPaterno.charAt(1);
        let inicialesMaterno = empleado.apellidoMaterno.charAt(0);
        empleado.codigoEmpleado = inicialesPaterno + inicialesMaterno + Date.now();
        
        empleado.idPersona = Date.now();
        empleado.idEmpleado = Date.now() + 1 ;
        
        //Insertamos el accesorio al final del arreglo
        empleados[empleados.length] = empleado;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtIdPersona").value = empleado.idPersona;
        document.getElementById("txtCodigoEmpleado").value = empleado.codigoEmpleado;
        document.getElementById("txtIdEmpleado").value = empleado.idEmpleado;
        
        //Mostramos un mensaje al usuario
        Swal.fire('Datos del empleado agregados correctamente', '', "success");
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        empleado.idPersona = parseInt(document.getElementById("txtIdPersona").value);
        empleado.idEmpleado = parseInt(document.getElementById("txtIdEmpleado").value);
        empleado.codigoEmpleado = parseInt(document.getElementById("txtCodigoEmpleado").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosiconPorId(empleado.idEmpleado);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            empleados[pos] = empleado;
            
            //Mostramos un mensaje al usuario
            Swal.fire('Empleado actualizado', 'Se actualizo correctamente el empleado', "success");;
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            Swal.fire('Error: empleado no encontrado', '', "warning");
        }
    }
        
}
export function eliminarEmpleado()
{
    let pos = -1;
    if(document.getElementById("txtCodigoEmpleado").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosiconPorId(parseInt(document.getElementById("txtIdEmpleado").value)); //Que reciba el codigo
        
        if(pos >= 0)
        {
            //Removemos el armazon de la posicion encontrada
            empleados.splice(pos, 1);
            
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

 

