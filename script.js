
function cambio_color() {
    let color;
    color = "rojo";
    //alert(`el semaforo está en ${color}`);
    document.getElementById("rojo").hidden = false;
    setTimeout(() => {
        if (color == "rojo") {
            color = "verde";
            //alert(`el semaforo está en ${color}`);
            document.getElementById("rojo").hidden = true;
            document.getElementById("verde").hidden = false;

        }
        setTimeout(() => {
            if (color == "verde") {
                color = "amarillo";
                // alert(`el semaforo está en ${color}`);
                document.getElementById("verde").hidden = true;

                document.getElementById("amarillo").hidden = false;
            }

        }, 5000);

    }, 5000);

  


}
alert("Inicia semaforo");
cambio_color();

