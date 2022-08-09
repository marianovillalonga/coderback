const moment = require("moment");

moment.locale("es");

function calcularEdad(yourBirthDay, format) {
    return moment().diff(moment(yourBirthDay, format), "years");
}

function calcularDias(yourBirthDay, format) {
    return moment().diff(moment(yourBirthDay, format), "days");
}

console.log(calcularDias("18/02/1994", "DD/MM/YYYY") , 
calcularEdad("18/02/1994", "DD/MM/YYYY"));
