function alertaAgregar()
{
    Swal.fire({
        title: 'El producto se ha agregado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}
function alertaEnProceso()
{
    Swal.fire('Apartado en proceso', 'Estamos trabajando en ello', "info");
}
function alertaModificar()
{
    Swal.fire({
        text: '¿Estás seguro que quieres modificar este producto?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: 'red',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire
            (
            'El producto se ha modificado con éxito.',
            '',
            'success'
            )
        }
    });
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