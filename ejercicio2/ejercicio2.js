function calcular() {
    var contador = 0;
    var num = parseInt(document.getElementById("num1").value);
    for (var i = 1; i <= num; i++) {
        if ( i %5== 0&&i%3==0) {
            document.write(i + "<br>");
            contador++;
        }
    }
    document.write("cantidad de numeros encontrados: "+contador+"<br>")
}