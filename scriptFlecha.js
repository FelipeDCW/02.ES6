/* Arrow function - Function flecha */

const funcionFlecha = () => {

}
console.log(funcionFlecha())


const arreglo = [`cadena1`, `cadena2`,`cadena3`]
arreglo.push(`cadena4`)
arreglo.forEach(function(cadena) {
    console.log(cadena)
});

arreglo.forEach(cadena => {console.log(cadena)});

const arregloNumeros=[1,3,-3,0,-5,6]

const positivo = arregloNumeros.filter(function(numero){
    return numero > 0
})
console.log(positivo)

const positivos = arregloNumeros.filter(numero => numero>0)
console.log(positivos)

let miFuncionSuma = num => num + num;    //ES6 
console.log(miFuncionSuma(3))

const objeto = {
    nombre: `jugando`,
    nodeberia: () =>{
        console.log(this.nombre)
    }
}
objeto.nodeberia()
console.log(objeto.nombre)

