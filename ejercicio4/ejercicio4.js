function factorial() {
    var num1=parseInt(document.querySelector("#num1").value);
    var fac=1;
    var total=0
    for(var i=1;i<=num1;i++){
        fac*=i;
    }
    document.write("factorial es"+fac+"<br>")
}