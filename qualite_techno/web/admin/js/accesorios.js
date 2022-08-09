

 export function mmostrarDetalleAccesorio(idAccesorio)
{
   
    let i = -1;
    
    //Buscamos la posicion del accesorio
    i= buscarPosicionPorId(idAccesorio);
    
    
    //Revisamos que sea una posicion valida
    if(i >=0)
    {
      //limpiams el formulario
      limpiarFormularioDetalle();
        
        
        
        //Llenamos el formulario con datos del accesorio  
    document.getElementById("txtCodigoAccesorio").value= accesorios[i].idAccesorio;
    document.getElementById("txtCodigoProducto").value=accesorios[i].idProducto;
    document.getElementById("txtNumeroUnico").value=accesorios[i].numeroUnico;
    document.getElementById("txtNombre").value=accesorios[i].nombre;
    document.getElementById("txtMarca").value=accesorios[i].marca;
    document.getElementById("txtPrecioCompra").value=accesorios[i].precioCompra;
    document.getElementById("txtPrecioVenta").value=accesorios[i].precioVenta;
    document.getElementById("txtExistencias").value=accesorios[i].exsitencias;
    //Mostramos el formulario que llenamos previamente
    
    
    }
    else //Se supone que esto nunca debe pasar
        alert('Accesorio no encontrado');
    }
    



export function limpiarFormularioDetale(){
    document.getElementById("txtCodigoAccesorio").value="";
    document.getElementById("txtCodigoProducto").value="";
    document.getElementById("txtNumeroUnico").value="";
    document.getElementById("txtNombre").value="";
    document.getElementById("txtMarca").value="";
    document.getElementById("txtPrecioCompra").value="";
    document.getElementById("txtPrecioVenta").value="";
    document.getElementById("txtExistencias").value="";
    
    
}

//contenido ://////  <td><a herf="#" oneclick="cm.mostrarDetalleAccesorio(' +
//                                                              accesorios[i].isAccesorio+'); " > Ver detalle </a></td>+

///***Agregamos numero unico en los accesorios que ya teniamos registrados la clase pasada 
/// numeroUnico:"Def001",













