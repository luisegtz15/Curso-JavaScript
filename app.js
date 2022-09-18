//Programa para que el usuario pueda armar su propio paquete y cotizar el precio (El HTML y el programa irá mejorando y se agregarán más condiciones)

const asistentes = [
    {minAsistentes: 0, maxAsistentes: 40 , precio:5000},
    {minAsistentes: 41, maxAsistentes: 60 , precio:6500},
    {minAsistentes: 61, maxAsistentes: 80 , precio:7200},
    {minAsistentes: 81, maxAsistentes: 100 , precio:8600},
    {minAsistentes: 101, maxAsistentes: 150 , precio:11900},
    {minAsistentes: 151, maxAsistentes: 200 , precio:14900},
    {minAsistentes: 201, maxAsistentes: 250 , precio:17700},
    {minAsistentes: 251, maxAsistentes: 300 , precio:20300},
    {minAsistentes: 301, maxAsistentes: 350 , precio:22800},
    {minAsistentes: 351, maxAsistentes: 400 , precio:25300}
]
const eventos = [
    {evento: "Boda", porcentaje: 15},
    {evento: "Graduación", porcentaje: 12},
    {evento: "Empresarial", porcentaje: 10},
    {evento: "XV Años", porcentaje: 8},
    {evento: "Bautizo", porcentaje: 5},
    {evento: "Piñata", porcentaje: 3},
    {evento: "Auditorio", porcentaje: 2},
    {evento: "Otro", porcentaje: 2}
]
const dias = [
    {input: "domingo", dia: "Domingo", porcentaje: 2},
    {input: "martes", dia: "Martes", porcentaje: 1},
    {input: "miércoles", dia: "Miércoles", porcentaje: 1},
    {input: "jueves", dia: "Jueves", porcentaje: 1},
    {input: "viernes", dia: "Viernes", porcentaje: 2},
    {input: "sábado", dia: "Sábado", porcentaje: 8},
]

const mesesTemporada = [
    {id: 0, mes:"Enero", porcentaje: 0, temporada: "No"},
    {id: 1, mes:"Febrero", porcentaje: 0, temporada: "No"},
    {id: 2, mes:"Marzo", porcentaje: 0, temporada: "No"},
    {id: 3, mes:"Abril", porcentaje: 8, temporada: "Sí"},
    {id: 4, mes:"Mayo", porcentaje: 8, temporada: "Sí"},
    {id: 5, mes:"Junio", porcentaje: 0, temporada: "No"},
    {id: 6, mes:"Julio", porcentaje: 0, temporada: "No"},
    {id: 7, mes:"Agosto", porcentaje: 8, temporada: "Sí"},
    {id: 8, mes:"Septiembre", porcentaje: 8, temporada: "Sí"},
    {id: 9, mes:"Octubre", porcentaje: 8, temporada: "Sí"},
    {id: 10, mes:"Noviembre", porcentaje: 0, temporada: "No"},
    {id: 11, mes:"Diciembre", porcentaje: 8, temporada: "Sí"}
]

//Adquiere el valor del botón tipo Submit del formulario creado
let miFormulario = document.getElementById("formulario")
miFormulario.addEventListener("submit", paqueteSubmit)

//Función para realizar cotización cuando el botón enviar sea presionado
function paqueteSubmit (e){
    e.preventDefault();

        //Función de suma para calcular el precio final del paquete
    let sumaTotal=0
    let suma = (precio) => sumaTotal+=precio

    //Función para agregar aumento de porcentaje al costo del evento
    let interes = (porcentaje) => suma(precioAsistentes*(porcentaje/100))

    // ASISTENTES
    let asistentesInput = document.getElementById("Asistentes").value //Se ingresa el número personas que asistirán al evento
    let asistentesOutput
    let precioAsistentes
    asistentes.forEach(element => { //Se recorre el array para confirmar si se puede realizar un evento con los asistentes que introdujeron
        if(asistentesInput>=element.minAsistentes && asistentesInput<=element.maxAsistentes){ //Busca en el array el elemento correspondiente comparando los asistentes min y los asistentes max
            asistentesOutput=(`${element.minAsistentes}-${element.maxAsistentes}`) //Almacena el número de asistentes que pueden asistir al evento
            suma(element.precio) //Se suma el precio de acuerdo a los asistentes ingresados
            precioAsistentes=element.precio //Se almacena el costo por la cantidad de asistentes
        }
    });
    // TIPO DE EVENTO
    let tipoEventoInput = document.getElementById("Evento").value //Se ingresa el tipo de evento que se realizará
    const seleccionEvento = eventos.find((el)=>el.evento.includes(tipoEventoInput)) //Busca si el evento ingresado coincide con las opciones
    let tipoEventoOutput = seleccionEvento.evento //Se guarda el evento relacionado
    let porcentajeEvento = seleccionEvento.porcentaje //Se guarda el porcentaje correspondiente al evento
    interes(porcentajeEvento) //Se realiza función para agregar el interés y se suma al costo total

    //Se declara la fecha de reservación
    let fechaInput = document.getElementById("Fecha").value //Fecha ingresada
    fechaInput = fechaInput.replace(/-/g, "/"); //Sustituye el formato YYYY-MM-DD por YYYY/MM/DD
    let fechaFormatoEsp = new Date(fechaInput).toLocaleDateString('es-MX') //YYYY-MM-DD por DD/MM/YYYY (Formato Español México)
    let mesTemporada = new Date(fechaInput).getMonth() //Guarda el Mes de la fecha en formato Español México
    let diaInput = new Date(fechaInput).toLocaleDateString('es-MX', {weekday: 'long',}) //Guarda el día de la semana (Formato Español México)

    if(diaInput == "lunes"){ //Condición para que el usuario no pueda ingresar el día Lunes (No se labora ese día)
        alert("El día Lunes no está disponible para eventos, favor de escoger otro día.")
        let container = document.querySelector(".cotizacion");
        while (container.firstChild) { //Elimina todo lo que hay dentro de la clase "cotizacion"
            container.removeChild(container.firstChild);
          }
    }
    //Si no es Lunes realizará lo siguiente
    else{ 
        //se declara el dia de la semana
        const seleccionDia = dias.find((el)=>el.input.includes(diaInput)) //Busca si el día ingresado coincide con el array
        let diaOutput = seleccionDia.dia //Guarda el día que se encontró relación
        porcentajeDia = seleccionDia.porcentaje //Guarda el porcentaje correspondiente al día
        interes(porcentajeDia) //Se realiza función para agregar el interés y se suma al costo total
        
        //se declara el mes
        const seleccionMes = mesesTemporada.find((el)=>el.id == mesTemporada) //Busca si el mes ingresado coincide con el array
        let mes = seleccionMes.mes //Guarda el mes que se encontró relación
        let porcentajeMes = seleccionMes.porcentaje //Guarda el porcentaje correspondiente al mes
        let temporada = seleccionMes.temporada //Guarda si el mes es temporada alta o si no lo es
        interes(porcentajeMes) //Se realiza función para agregar el interés y se suma al costo total

        //Se entrega costo por paquete armado en el HTML
        let container = document.querySelector(".cotizacion");
        container.innerHTML = 
        `<div class ="d-flex flex-column justify-content-center align-items-center">
            <h2 class ="my-4">Carrito de compras:</h2>
            <div>
                <p><strong>Asistentes:</strong> ${asistentesOutput} - $${precioAsistentes}.00 MXN</p>
                <p><strong>Tipo de evento:</strong> ${tipoEventoOutput} - ${porcentajeEvento}%</p>
                <p><strong>Fecha:</strong> ${fechaFormatoEsp} (${diaOutput}) - ${porcentajeDia}%</p>
                <p><strong>Temporada alta:</strong> ${temporada} (${mes}) - ${porcentajeMes}%</p>
                <p><strong>Precio Total:</strong> $${sumaTotal}.00 MXN</p>
            </div>
        </div>`;
    }
}


