//Realicé un programa con el fin de realizar una suma de la contratación de un paquete y multiples servicios, así como se ve en el HTML

let sumaTotal=0
let sumar = (precio) => sumaTotal += precio; //Función de Suma para la contratación de paquetes y servicios

const paquetes = [
    {id:"P1", paquete:"Empresarial", precio:8000},
    {id:"P2", paquete:"Premium-Gradruación", precio:10000},
    {id:"P3", paquete:"Premium-Mixto", precio:14000},
    {id:"P4", paquete:"Boda", precio:20000},
];
const servicios = [
    {id:"S1", servicio:"Meseros y personal", precio:1200},
    {id:"S2", servicio:"Decoración", precio:700},
    {id:"S3", servicio:"Mesa de dulces", precio:1000},
    {id:"S4", servicio:"Vajillas y utencilios", precio:300},
    {id:"S5", servicio:"Servicio de iluminación", precio:250},
    {id:"S6", servicio:"Servicio de sonido y música", precio:500},
    {id:"S7", servicio:"Servicio de video y fotografía", precio:2000},
];

//Selección de paquete
let paqueteIn = (prompt("Escoge el paquete que deseas (Escribir el ID del Paquete) P1 - P4"))
const paqueteCarrito = []; // Array nuevo en el que se almacenará el paquete que se desea contratar
for (const paquete of paquetes){ // For necesario para recorrer el array y buscar el objeto perteneciente al ID ingresado 
    if(paqueteIn == paquete.id){// Si el ID es encontrado, se le sumará el precio correspondiente y se agregará el elemento al nuevo Array perteneciente a los servicios que se van a contratar
        sumar(paquete.precio)
        paqueteCarrito.push(paquete.paquete)
    }
}

//Selección de servicios
const numeroDeServicios = Number(prompt("¿Cuántos servicios deseas contratar (Favor de introducir sólo números) 0 - 7)"))
const serviciosCarrito = []; // Array nuevo en el que se almacenará los servicios que se desean contratar
for (let index = 1; index <= numeroDeServicios; index++) { // Este "for" sirve para ejecutar el prompt una cantidad de veces "De acuerdo al numero de servicios que se contratará"
    let servicioIn = (prompt("Escoge el servicio que deseas agregar (Escribir el ID del servicio) S1 - S7")) 
    for (const servicio of servicios){ // For necesario para recorrer el array y buscar el objeto perteneciente al ID ingresado
        if(servicioIn == servicio.id){ // Si el ID es encontrado, se le sumará el precio correspondiente y se agregará el elemento al nuevo Array perteneciente a los servicios que se van a contratar
            sumar(servicio.precio)
            serviciosCarrito.push(servicio.servicio)
        }
    }
}
alert("Se incorporó lo siguiente a tu carrito:" + `\nPaquete: ${paqueteCarrito}` + `\nServicios: ${serviciosCarrito.join(", ")}` + `\nPrecio total: $${sumaTotal}`);


