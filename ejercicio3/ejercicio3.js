function bono() {
    var antiguedad = parseInt(document.querySelector("#num1").value);
    var sueldo = parseInt(document.querySelector("#num2").value);
    var donos=0;
    if(antiguedad>4||sueldo<2000)
    {
        bonos=sueldo*0.25;
    }
    else
    {
        bonos=sueldo*0.20;
    }
    document.write("El bono que resivira es:"+bonos+"<br>")
}