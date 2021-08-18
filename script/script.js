let arregloValores;
let arregloDistancia;
let arregloNombrePlanetas = [];
let arregloPlanetas = [];
let arregloTamanio = [];

class Planeta{
    constructor(nombre_planeta){
        this.numero_clasificacion = 0;
        this.nombre = nombre_planeta;
        this.distancia_tierra = 0;
        this.tamanio = 0;
    }
}

var enviarEvaluacion = (e) => {

    let inputs = [...document.querySelectorAll(".numeracion_planetas")];
    let inputsD = [...document.querySelectorAll(".distancia_planetas")];
    let inputsN = [...document.querySelectorAll(".nombre_planetas")];
    let inputsT = [...document.querySelectorAll(".Tamanio_planetas")];

    arregloValores = inputs.map((input) => {
        return parseInt(input.value);
    });

    arregloDistancia = inputsD.map((distancia) => {
        return distancia.value;
    });

    arregloTamanio = inputsT.map((tamanio) => {
        return tamanio.value;
    });

    arregloNombrePlanetas = inputsN.map((nombrePleneta) => {
        return nombrePleneta.value;
    });


    //Lenar arreglo Planeta

    for (let x = 1; x <= arregloValores.length; x++) {
        let planeta = new Planeta();
        planeta.distancia_tierra = document.getElementById(`d_planeta_${x}`).value;
        planeta.nombre = document.getElementById(`np_planeta_${x}`).value;
        planeta.numero_clasificacion = document.getElementById(`n_planeta_${x}`).value;
        planeta.tamanio = document.getElementById(`t_planeta_${x}`).value;

        arregloPlanetas.push(planeta);
        console.log(x)
    }

    console.log(arregloPlanetas);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La carga fue exitosa',
        showConfirmButton: false,
        timer: 1500
      });
}

let ordernarValores = (e) => {
    /**
     * Generamos copia del arreglo en ambos casos.
     */
    let copiArregloValores = arregloValores.map(numero => numero);
    let copiaArregloPlanetas = arregloPlanetas.map(planeta => planeta);

    /**
     * Procedemos a ordenar el arreglo,  en el segundo caso,  emplearemos una propiedad de la 
     * clase planeta,  como elemento de comparacion en la funcion de ordenamiento
     */
    copiArregloValores.sort((a, b) => {
        return a - b;
    });

    copiaArregloPlanetas.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });

    let copia2ArregloPlanetas = copiaArregloPlanetas.map(planeta => planeta);

    console.log("********Arreglos ascendente***********")
    console.log(copiArregloValores);
    console.log(copiaArregloPlanetas);

    console.log("********Arreglos descendente***********")
    copiArregloValores.reverse();
    copia2ArregloPlanetas.reverse();
    console.log(copiArregloValores);
    console.log(copia2ArregloPlanetas);

}
let infCompleta = {
    arregloValores,
    arregloDistancia,
    arregloTamanio,
    arregloNombrePlanetas
}
let filtrarDistancia = (e) => {
    let distanciaABuscar = prompt("Digite la distacia a filtrar");
   
   
    // let arregloFiltradoDistancia = Planeta.distancia_tierra.filter(
    //     (distancia) => distancia == distanciaABuscar
    // );
    let pla = Planeta;
    let arregloFiltradoDistancia1 = pla.filter(num => num[1] ==  distanciaABuscar);

    let arregloFiltradoDistancia = arregloFiltradoDistancia1.reduce((a, b) => (a + b[1]),0);
  
    // let arregloFiltradoDistancia = Planeta.filter(distancia_tierra, function(distancia_tierra){
    //     return distancia_tierra >=95;
    // });

    if (arregloFiltradoDistancia == undefined)
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No existe el planeta',
            })
    else
    Swal.fire("Informacion del filtro" +  arregloFiltradoDistancia )
    console.log(arregloFiltradoDistancia)
      

}

let buscarPlaneta = (e) => {
    let nombrePlanetaABuscar = prompt("Digite el nombre del planeta a buscar");
    console.log(nombrePlanetaABuscar);
    let r = arregloNombrePlanetas.find((nombre) => nombrePlanetaABuscar.toLowerCase() == nombre.toLowerCase());
    console.log(r)

    if (r == undefined)
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No existe el planeta',
        })
    else
    Swal.fire({
        icon: 'success',
        title: 'Busqueda exitosa...',
        text: 'El planeta existe',
        })
}

document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
document.querySelector("#btn_ordenar_valores").addEventListener("click", ordernarValores);
document.querySelector("#btn_filtar_distancia").addEventListener("click", filtrarDistancia);
document.querySelector("#btn_buscar_planeta").addEventListener("click", buscarPlaneta);