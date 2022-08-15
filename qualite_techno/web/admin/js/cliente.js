/* global Swal */

let clientes  =     [
                        {
                            idPersona       : 36,
                            idCliente       : 1,
                            codigoDeCliente : 1,
                            nombre          : "Miguel",
                            apellidoPaterno : "Duran",
                            apellidoMaterno : "Ramirez",
                            genero          : "Masculino",
                            rfc             : "12345678901234567890123",
                            correo          : "miguelDuran@gmail.com",
                            estatus         : "Activo",
                            telefonoDeCasa  : "3465879",
                            telefonoMovil   : "47798756789"
                        },
                        {
                            idPersona       : 30,
                            idCliente       : 2,
                            codigoDeCliente : 2,
                            nombre          : "Diego Fernando",
                            apellidoPaterno : "Nava",
                            apellidoMaterno : "Bonel",
                            genero          : "Masculino",
                            rfc             : "12345678901234567890113",
                            correo          : "diegoNava@gmail.com",
                            estatus         : "Activo",
                            telefonoDeCasa  : "3465872",
                            telefonoMovil   : "47798756798"
                        },
                        {
                            idPersona       : 98,
                            idCliente       : 3,
                            codigoDeCliente : 3,
                            nombre          : "Emmanuel",
                            apellidoPaterno : "Escobedo",
                            apellidoMaterno : "Gonzalez",
                            genero          : "Masculino",
                            rfc             : "12345678901234567890093",
                            correo          : "emmanuelEsco@gmail.com",
                            estatus         : "Activo",
                            telefonoDeCasa  : "3465813",
                            telefonoMovil   : "47798754389"
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
    for(let i = 0; i < clientes.length; i++)
    {
        contenido += '<tr>' +
                            '<td>' + clientes[i].nombre + ' ' + clientes[i].apellidoPaterno + ' ' + clientes[i].apellidoMaterno + '</td>' +
                            '<td>' + clientes[i].correo + '</td>' +
                            '<td>' + clientes[i].telefonoDeCasa + '</td>' +
                            '<td>' + clientes[i].telefonoMovil + '</td>' +
                                       //Cambiar a id 
                            '<td><a href = "#" onclick="cm.mostrarDetalleCliente(' + clientes[i].idCliente + ');">Ver detalle</a>' +
                     '</tr>'
    }
    document.getElementById('tbClientes').innerHTML = contenido;
}
export function setDetalleVisible(valor)
{
    if (valor === true)
    {
        document.getElementById('divDetalleClientes').style.display = "";
        document.getElementById('divListadoClientes').style.display = "none";
    }
    else
    {
        document.getElementById("divDetalleClientes").style.display = "none";
        document.getElementById('divListadoClientes').style.display = "";
    }
}
export function mostrarDetalleCliente(idCliente)
{
    let i = -1;
    
    //Buscamos la posicion del Armazon
    i = buscarPosiconPorId(idCliente);
    
    if(i >= 0)
    {
        //Abrimos el detalle de armazones
        setDetalleVisible(true);
        
        //Llenamos el formulario con datos del armazon
            document.getElementById("txtIdPersona").value = clientes[i].idPersona;
            document.getElementById("txtIdCliente").value = clientes[i].idCliente;
            document.getElementById("txtCodigoDeCliente").value = clientes[i].codigoDeCliente;
            document.getElementById("txtNombre").value = clientes[i].nombre;
            document.getElementById("txtApellidoPaterno").value = clientes[i].apellidoPaterno;
            document.getElementById("txtApellidoMaterno").value = clientes[i].apellidoMaterno;
            document.getElementById("txtGenero").value = clientes[i].genero;
            document.getElementById("txtRfc").value =  clientes[i].rfc;
            document.getElementById("txtCorreo").value = clientes[i].correo;
            document.getElementById("txtTelefonoDeCasa").value = clientes[i].telefonoDeCasa;
            document.getElementById("txtTelefonoMovil").value = clientes[i].telefonoMovil;
        
        //Activamos el boton de eliminar
        document.getElementById("btnEliminar").classList.remove("disabled");
    }
    else
        Swal.fire('Cliente no encontrado','',"warning");
}
export function limpiarFormularioDetalle()
{
            document.getElementById("txtIdPersona").value = "";
            document.getElementById("txtIdCliente").value = "";
            document.getElementById("txtCodigoDeCliente").value = "";
            document.getElementById("txtNombre").value = "";
            document.getElementById("txtApellidoPaterno").value = "";
            document.getElementById("txtApellidoMaterno").value = "";
            document.getElementById("txtGenero").value = "";
            document.getElementById("txtRfc").value = "";
            document.getElementById("txtCorreo").value = "";
            document.getElementById("txtTelefonoDeCasa").value = "";
            document.getElementById("txtTelefonoMovil").value = "";
}
export function buscarPosiconPorId(id)
{
    //Se hace la busqueda de la posicion de un armazon 
    //Buscamos la posicion de accesorios con base en el idArmazones
    
    for(let i = 0; i < clientes.length; i++)
    {
        // Comparamos si el id del del armazon en la posicion actual es igual 
        // al id de lo que son pasa por parametro
        if(clientes[i].idCliente === id)
            return i;
    }
        //Si llegamos hasta aqui significa que no encontramos el id buscamos el 
    return -1;
}
export function agregarCliente()
{
    //Declaramos una variable temporal para saber la posicion del armazon
    let pos = -1;
    
    //Definimos artributos y valores del accesorio
    let cliente =   {
                        idPersona : 0,
                        idCliente : 0,
                        codigoDeCliente:0,
                        nombre : document.getElementById("txtNombre").value,
                        apellidoPaterno : document.getElementById("txtApellidoPaterno").value,
                        apellidoMaterno : document.getElementById("txtApellidoMaterno").value,
                        genero :document.getElementById("txtGenero").value,
                        correo: document.getElementById("txtCorreo").value,
                        rfc: document.getElementById("txtRfc").value,
                        estatus : "Activo",
                        telefonoDeCasa: document.getElementById("txtTelefonoDeCasa").value,
                        telefonoMovil: document.getElementById("txtTelefonoMovil").value 
                    };
    if(document.getElementById("txtIdCliente").value.trim() === '')
    {
        
        //Generamos un ID para el armazon a partir de los milisegundos 
        //de la fecha actual
        let inicialesPaterno = cliente.apellidoPaterno.charAt(0) + cliente.apellidoPaterno.charAt(1);
        let inicialesMaterno = cliente.apellidoMaterno.charAt(0);
        cliente.codigoDeCliente = inicialesPaterno + inicialesMaterno + Date.now();
        cliente.idPersona = Date.now();
        cliente.idCliente = Date.now() + 1 ;
        
        
        //Insertamos el accesorio al final del arreglo
        clientes[clientes.length] = cliente;
        
        //Colocamos los IDs generados en las cajas de textos para 
        //evitar duplicados
        document.getElementById("txtIdPersona").value = cliente.idPersona;
        document.getElementById("txtIdCliente").value = cliente.idCliente;
        document.getElementById("txtCodigoDeCliente").value = cliente.codigoDeCliente;
        
        //Mostramos un mensaje al usuario
        Swal.fire('Cliente agregado correctamente', '', "success");
        
        //Actualizamos la tabla
        fillTable();
    }
    else
    {
        //Si el armazon ya tiene un ID, lo tomamos para actualizar sus datos:
        cliente.idPersona = parseInt(document.getElementById("txtIdPersona").value);
        cliente.idCliente = parseInt(document.getElementById("txtIdCliente").value);
        cliente.codigoDeCliente = parseInt(document.getElementById("txtCodigoDeCliente").value);
        
        //Buscamos la posicion del objeto
        pos = buscarPosiconPorId(cliente.idCliente);
        
        if(pos >= 0)
        {
            //Reemplazamos el objeto en la posicion encontrada
            clientes[pos] = cliente;
            
            //Mostramos un mensaje al usuario
            Swal.fire('Cliente actualizado', 'Se actualizo correctamente el cliente', "success");;
            
            //Actualizamos la tabla
            fillTable();
        }
        else
        {
            Swal.fire('Error: cliente no encontrado', '', "warning");
        }
    }
        
}
export function eliminarCliente()
{
    let pos = -1;
    if(document.getElementById("txtIdCliente").value !== '')
    {
        //Buscamos la posicion del accesorio
        pos = buscarPosiconPorId(parseInt(document.getElementById("txtIdCliente").value)); //Que reciba el codigo
        
        if(pos >= 0)
        {
            //Removemos el armazon de la posicion encontrada
            clientes.splice(pos, 1);
            
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

function alertaContrasena()
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
