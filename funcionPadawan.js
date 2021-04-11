/*function aprendizPadawan(nombre,planeta,edad,estatura,clasificar) {
    let aprendiz={
         nombre: nombre,
         planeta: planeta,
         edad: edad,
         estatura: estatura
    }
   
    clasificar(aprendiz);
}
aprendizPadawan("Obiwan","Sullust",27,1.80,function(padawan) {
    if (padawan.edad<=15) {
        console.log("Que la fuerza te acompañe!");
    } else {
        console.log("Tu habilidad con el sable es increible!");
    }
});*/

//Funcion Flecha

let aprendizPadawan=(nombre,planeta,edad,estatura,clasificar)=> {
    let aprendiz={
         nombre: nombre,
         planeta: planeta,
         edad: edad,
         estatura: estatura
    }
   
    clasificar(aprendiz);
}
aprendizPadawan("Obiwan","Sullust",10,1.80,padawan=> {
    if (padawan.edad<=15) {
        console.log("Que la fuerza te acompañe!");
    } else {
        console.log("Tu habilidad con el sable es increible!");
    }
});
