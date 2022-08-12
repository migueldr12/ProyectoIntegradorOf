//SOLUCIONES

function cargarModuloSoluciones()
{
    fetch('soluciones/agregarSolucion.html')
    .then(respuesta => {
            return respuesta.text();
        })
    .then(datos => {
                        // insertamos el codigo HTML dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        // Se agrego este import para cada modulo
                        import('./soluciones.js')
                        .then(obj => {
                            cm = obj;
                            cm.inicializar();
                        });
                    });
}

function cargarModuloSolucionesAgregar()
{
    fetch('soluciones/agregarSolucion.html')
    .then(respuesta => {
            return respuesta.text();
        })
    .then(datos => {
                        // insertamos el codigo HTML dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        // Se agrego este import para cada modulo
                        import('./soluciones.js')
                        .then(obj => {
                            cm = obj;
                            cm.inicializarAgregar();
                        });
                    });
}

function cargarModuloSolucionReporte()
{
    fetch('soluciones/reporteSolucion.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
//TRATAMIENTOS

function cargarModuloTratamientos()
{
    fetch('tratamientos/tratamientosPrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloTratamientoAgregar()
{
    fetch('tratamientos/agregarTratamiento.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloTratamientoBuscar()
{
    fetch('tratamientos/buscarTratamiento.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloTratamientoModificar()
{
    fetch('tratamientos/modificarTratamiento.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloTratamientoReporte()
{
    fetch('tratamientos/reporteTratamiento.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

//ACCESORIOS


function cargarModuloAccesorio()
{
    fetch('accesorios/principalAccesorios.html')
            .then(respuesta => {
                return respuesta.text();
            })
            .then(datos => {
                document.getElementById('contenedor_principal').innerHTML = datos;
            });
}
    

function cargarModuloAgregarAccesorio()
{
    fetch('accesorios/agregarAccesorio.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloBuscarAccesorio()
{
    fetch('accesorios/buscarAccesorio.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloModificarAccesorio()
{
    fetch('accesorios/modificarAccesorio.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloCatalogoAccesorio()
{
    fetch('accesorios/catalogoAccesorio.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}


//MATERIALES


function cargarModuloMaterial()
{
    fetch('materiales/principalMateriales.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloAgregarMaterial()
{
    fetch('materiales/agregarMateriales.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloBuscarMaterial()
{
    fetch('materiales/buscarMateriales.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloModificarMateriales()
{
    fetch('materiales/modificarMateriales.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloCatalogoMateriales()
{
    fetch('materiales/catalogoMateriales.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}


//LENTES DE CONTACTO


function cargarModuloLentesContacto()
{
    fetch('lentesContacto/agregarLentesContacto.html')
    .then(respuesta => {
            return respuesta.text();
        })
    .then(datos => {
                        // insertamos el codigo HTML dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        // Se agrego este import para cada modulo
                        import('./lentesContacto.js')
                        .then(obj => {
                            cm = obj;
                            cm.inicializar();
                        });
                    });
}

function cargarModuloAgregarLentesContacto()
{
    fetch('lentesContacto/agregarLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloBuscarLentesContacto()
{
    fetch('lentesContacto/buscarLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloModificarLentesContacto()
{
    fetch('lentesContacto/modificarLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloCatalogoLentesContacto()
{
    fetch('lentesContacto/catalogoLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}


//CLIENTES

function cargarModuloCliente()
{
    fetch('clientes/clientePrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloClienteAgregar()
{
    fetch('clientes/agregarCliente.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloClienteBuscar()
{
    fetch('clientes/buscarCliente.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloClienteModificar()
{
    fetch('clientes/modificarCliente.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloClienteReporte()
{
    fetch('clientes/reporteCliente.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

//EMPLEADOS

function cargarModuloEmpleado()
{
    fetch('empleados/empleadoPrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloEmpleadoAgregar()
{
    fetch('empleados/agregarEmpleado.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloEmpleadoBuscar()
{
    fetch('empleados/buscarEmpleado.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloEmpleadoModificar()
{
    fetch('empleados/modificarEmpleado.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloEmpleadoReporte()
{
    fetch('empleados/reporteEmpleado.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

//EXAMEN

function cargarModuloExamen()
{
    fetch('examen/examenPrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloExamenAgregar()
{
    fetch('examen/agregarExamen.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloExamenBuscar()
{
    fetch('examen/buscarExamen.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloExamenModificar()
{
    fetch('examen/modificarExamen.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloExamenReporte()
{
    fetch('examen/reporteExamen.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloPresupuesto()
{
    fetch('presupuesto/presupuestoPrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloPresupuestoLentesContacto()
{
    fetch('presupuesto/presupuestoLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesContactoAgregar()
{
    fetch('presupuesto/agregarLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesContactoBuscar()
{
    fetch('presupuesto/buscarLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesContactoModificar()
{
    fetch('presupuesto/modificarLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesContactoReporte()
{
    fetch('presupuesto/reporteLentesContacto.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesArmazon()
{
    fetch('presupuesto/presupuestoLentesArmazon.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloPresupuestoLentesArmazonAgregar()
{
    fetch('presupuesto/agregarLentesArmazon.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesArmazonBuscar()
{
    fetch('presupuesto/buscarLentesArmazon.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesArmazonModificar()
{
    fetch('presupuesto/modificarLentesArmazon.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPresupuestoLentesArmazonReporte()
{
    fetch('presupuesto/reporteLentesArmazon.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloArmazones()
{
    fetch('armazones/agregarArmazones.html')
    .then(respuesta => {
            return respuesta.text();
        })
    .then(datos => {
                        // insertamos el codigo HTML dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        // Se agrego este import para cada modulo
                        import('./armazones.js')
                        .then(obj => {
                            cm = obj;
                            cm.inicializar();
                        });
                    });
}

function cargarModuloArmazonesAgregar()
{
    fetch('armazones/agregarArmazones.html')
    .then(respuesta => {
            return respuesta.text();
        })
    .then(datos => {
                        // insertamos el codigo HTML dentro del contenedor principal
                        document.getElementById('contenedor_principal').innerHTML = datos;
                        // Se agrego este import para cada modulo
                        import('./armazones.js')
                        .then(obj => {
                            cm = obj;
                            cm.inicializarAgregar();
                        });
                    });
}
function cargarModuloArmazonesReporte()
{
    fetch('armazones/reporteArmazones.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPagos()
{
    fetch('pagos/pagosPrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPagosAgregar()
{
    fetch('pagos/agregarPagos.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPagosModificar()
{
    fetch('pagos/modificarPagos.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPagosEliminar()
{
    fetch('pagos/eliminarPagos.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloPagosReporte()
{
    fetch('pagos/reportePagos.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloVentas()
{
    fetch('ventas/ventasPrincipal.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}

function cargarModuloVentasAgregar()
{
    fetch('ventas/agregarVentas.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloVentasBuscar()
{
    fetch('ventas/buscarVentas.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}
function cargarModuloVentasReporte()
{
    fetch('ventas/reporteVentas.html')
        .then(respuesta => {
            return respuesta.text();
        })
        .then(datos => {
            // insertamos el codigo HTML dentro del contenedor principal
            document.getElementById('contenedor_principal').innerHTML = datos;
        });
}