const expresiones={
    numero:/^\d{1,3}$/
}
const condicion={
    condNum:false
}

function calcularPresupuesto(){
    var tipo =document.getElementById('tipo').value;
    var metros = document.getElementById('metrosConstruccion').value;
    var monto=0;

    if(expresiones.numero.test(metros)){
        condicion.condNum=true;
    }else{
        false
    }
    
    if(condicion.condNum==true){
        switch(tipo){
            case 'Reboque Fino':
                monto=15.755;
                break;
            case 'Reboque Grueso':
                monto = 21.082;
                break
            case 'Contrapiso':
                monto=20.768;
                break;
            case 'Manposteria de ladrillo 18':
                monto=20.768;
                break;
            case 'Manposteria de ladrillo maziso':
                monto=12.316;
                break;
            case 'Carpeta':
                monto=19.286;
                break;
            case 'Cimientos':
                monto = 26.179;
                break;
            case 'Colocacion pizo ceramico':
                monto = 25.072;
                break;
            case 'Colocacion piedra laja':
                monto = 19.052;
                break;
            case 'Colocacion piso flotante':
                monto = 40.832;
                break;
        }
        var mensaje= '<p>'+'El monto aproximado es de: '+monto * metros+'</p>';
        document.getElementById('presupuestoMensaje').innerHTML=mensaje;
    }else{
        var mensajeError='<p>Los metros ingresados son incorrectos solo de 1 hasta 3 digitos</p>';
        document.getElementById('presupuestoMensaje').innerHTML=mensajeError;
    }
}