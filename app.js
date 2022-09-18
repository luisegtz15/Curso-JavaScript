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
    {dia: "Domingo", porcentaje: 2},
    {dia: "Martes", porcentaje: 1},
    {dia: "Miércoles", porcentaje: 1},
    {dia: "Jueves", porcentaje: 1},
    {dia: "Viernes", porcentaje: 2},
    {dia: "Sábado", porcentaje: 8},
]

//Función de suma para calcular el precio final del paquete
let sumaTotal=0
let suma = (precio) => sumaTotal+=precio

//Función para agregar aumento de porcentaje al costo del evento
let interes = (porcentaje) => suma(precioAsistentes*(porcentaje/100))

// ASISTENTES
let asistentesInput = prompt("¿Cuantos personas asistirán al evento?") //Se ingresa el número personas que asistirán al evento
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
let tipoEventoInput = prompt("¿Qué tipo de evento realizarás?") //Se ingresa el tipo de evento que se realizará
const seleccionEvento = eventos.find((el)=>el.evento.includes(tipoEventoInput)) //Busca si el evento ingresado coincide con las opciones
let tipoEventoOutput = seleccionEvento.evento //Se guarda el evento relacionado
let porcentajeEvento = seleccionEvento.porcentaje //Se guarda el porcentaje correspondiente al evento
interes(porcentajeEvento) //Se realiza función para agregar el interés y se suma al costo total

//Se declara qué día de la semana se realizará el evento
let diaInput = prompt("¿Qué día de la semana realizarás el evento?") //Dia de la semana ingresada.
let diaOutput //Dia de la semana regresada mediante objeto
let porcentajeDia //Porcentaje regresado mediante objeto
while(diaInput == "Lunes"){ //Condición para que el usuario no pueda ingresar el día Lunes (No se labora ese día)
    diaInput = prompt("El día Lunes no está disponible para eventos, favor de escoger otro día.")
}
const seleccionDias = dias.find((el)=>el.dia.includes(diaInput)) //Busca si el día ingresado coincide con el array
diaOutput = seleccionDias.dia //Guarda el día que se encontró relación
porcentajeDia = seleccionDias.porcentaje //Guarda el porcentaje correspondiente al día
interes(porcentajeDia) //Se realiza función para agregar el interés y se suma al costo total

//Se entrega costo por paquete armado
let container = document.querySelector(".cotizacion");
container.innerHTML = 
`<div class ="d-flex flex-column justify-content-start align-items-center">
    <h2 class ="my-4">Carrito de compras:</h2>
    <div>
        <p><strong>Asistentes:</strong> ${asistentesOutput} - $${precioAsistentes}.00 MXN</p>
        <p><strong>Tipo de evento:</strong> ${tipoEventoOutput} - ${porcentajeEvento}%</p>
        <p><strong>Día de la semana:</strong> (${diaOutput}) - ${porcentajeDia}%</p>
        <p><strong>Precio Total:</strong> $${sumaTotal}.00 MXN</p>
    </div>
</div>`;