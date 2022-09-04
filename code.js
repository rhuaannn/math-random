function rand ({min = 0, max = 60}){
    const valor = Math.random () * (max - min) + min
    return Math.floor (valor)    
}
const obj = {max:60, min:0}
console.log(rand(obj))






