
function cambio_color(){
    let color;
    color= "rojo";
    alert(`el semaforo está en ${color}`);
    document.getElementById("rojo").hidden=false;

        if(color=="rojo"){
            color="verde";
            alert(`el semaforo está en ${color}`);
            document.getElementById("rojo").hidden=true;
            
            document.getElementById("verde").hidden=false;
                         
            
       }

    if(color=="verde"){
        color="amarillo";
        alert(`el semaforo está en ${color}`);
        document.getElementById("verde").hidden=true;
            
        document.getElementById("amarillo").hidden=false;

    }
}
    alert("Inicia semaforo");
    cambio_color();
    