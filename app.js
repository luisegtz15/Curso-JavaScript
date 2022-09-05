//Realicé un programa con el fin de realizar una suma de la contratación de un paquete y multiples servicios, así como se ve en el HTML
let sumaTotal=0
let varS1=0
let varS2=0
let varS3=0
let varS4=0
let varS5=0
let varS6=0
let varS7=0

//Función de Suma para la contratación de paquetes y servcios
function Sumar(precio){
    sumaTotal = sumaTotal + precio
    return sumaTotal;
}

//Selección de paquete
    let paquete = (prompt("Escoge el paquete que deseas"))
    switch (paquete){
        case "P1":
            Sumar(8000)
            break;
    
        case "P2":
            Sumar(10000)
            break
    
        case "P3":
            Sumar(14000)
            break
    
        case "P4":
            Sumar(20000)
            break
        }   


//Se deciden cuántos servicios adicionales se contratarán
let nuServicios = Number(prompt("¿Cuántos servicios deseas contratar"))

//Selección de servicios
for (let index = 1; index <= nuServicios; index++) {
    let servicio = (prompt("Escoge los servicios adicionales que desees"))
    switch (servicio){
        case "S1":
            if (varS1==0){
                Sumar(1200)
                varS1=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;

        case "S2":
            if (varS2==0){
                Sumar(700)
                varS2=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;

        case "S3":
            if (varS3==0){
                Sumar(1000)
                varS3=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;

        case "S4":
            if (varS4==0){
                Sumar(300)
                varS4=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;

        case "S5":
            if (varS5==0){
                Sumar(250)
                varS5=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;
    
        case "S6":
            if (varS6==0){
                Sumar(500)
                varS6=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;
    
        case "S7":
            if (varS7==0){
                Sumar(2000)
                varS7=1
            }
            else {
                console.log("Ya escogiste este servicio, por favor escoge otro");
                index--
            }
            break;
    }
}
console.log(sumaTotal);

