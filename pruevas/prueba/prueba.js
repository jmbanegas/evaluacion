'use strict'

function Student( nombre, correo, Promedio ) {
    this.nombre = nombre;
    this.correo = correo;
    this.Promedio = Promedio;


    this.validaPromedio = function () {
        if(StudentOne.Promedio >=70){
            return alert("APROBADO");
         }else {
            return alert("REPROBADO");
         }
      
    };
}

let StudentOne = new Student ("Johanna", "banegasjohanna9@gmail.com" ,70);

StudentOne.validaPromedio();

let end = StudentOne.correo.indexof('@');
alert(StudentOne.correo.slice(0,end));
