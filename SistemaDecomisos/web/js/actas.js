$(document).ready(function(){
   $('#enviarActa_Dec').click(function(){
        if(checkActa())
            enviarActa(); 
        else 
            alert("Algunos campos no se completaron correctamente");
   }); 
});

function enviarActa(){
    
    var pDistrito = document.getElementById("distrito");
    var pTestigo = document.getElementById("nombre_testigo");
    var idDecomiso = 0;
    
    var policia = new Policia("","","","","",0); 
    var testigo;
    if(pTestigo.selectedIndex === 1)
        testigo = new Testigo($('#id_testigo').val()); 
    else 
        testigo = new Testigo(0);
    var lugar = new Lugar(new Distrito(pDistrito.selectedIndex, pDistrito.options[pDistrito.selectedIndex].value), "place"); 
    var fechaDecomiso = $('#fecha').val(); 
    var horaDecomiso = $('#hora').val();; 
    var interesado = new Interesado($('#id_interesado').val(), $('#fechaNac').val(), lugar); 
    var decomisos = [new Decomiso(5, "a", 1, "xxx"), new Decomiso(6, "a", 1, "xxx")]; 
    var observaciones = "asdasd";
    var actaDecomiso = new ActaDecomiso(idDecomiso,policia, testigo, lugar,
                                        fechaDecomiso, horaDecomiso, interesado,
                                        decomisos, observaciones);
    Proxy.actaDecomiso(JSON.stringify(actaDecomiso, replacer));
}

function checkActa(){
    var bool = true;
    if($('#direccion').val() === " ")
        bool = false;
    if($('#info_policia').val() === " ")
        bool = false;
    if($('#apellido1_interesado').val() === " ")
        bool = false;
    if($('#apellido2_interesado').val() === " ")
        bool = false;
    if($('#nombre_interesado').val() === " ")
        bool = false;
    if($('#id_interesado').val() === " ")
        bool = false;
    if($('#cantidad').val() === " ")
        bool = false;
    if($('#proobs').val() === " ")
        bool = false;
    if($('#observaciones').val() === " ")
        bool = false;
//    if(!$('#bIdentificacion').is(':selected') && !$('#bNombre').is(':selected'))
//        bool = false;
    
    return bool;
}