const weekday = ["Hoy es Domingo","Hoy es Lunes","Hoy es Martes","Hoy es Miercoles","Hoy es Jueves","Viernes","Hoy es Sabado"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("diasemana").innerHTML = day;