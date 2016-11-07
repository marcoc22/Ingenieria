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
    
    var policia = new Policia("2","a","b","c",1); 
    var testigo;
    if(pTestigo.selectedIndex === 1)
        testigo = new Testigo(1,$('#id_testigo').val(), $('#nombre_testigoText').val(), "asd", "asd" ); 
    else 
        testigo = new Testigo(1," ", " ", " ", " ");
    var lugar = new Lugar(new Distrito(pDistrito.selectedIndex, pDistrito.options[pDistrito.selectedIndex].value), "Por el parque central"); 
    var fechaDecomiso = $('#fecha').val(); 
    var horaDecomiso = $('#hora').val(); 
    var interesado = new Interesado(1,$('#fechaNac').val(),lugar, $('#id_interesado').val(), $('#apellido1_interesado').val(), $('#apellido2_interesado').val(), "En algun lugar de heredia"); 
    var decomisos = [new Decomiso(5, "a", 1, "xxx"), new Decomiso(6, "a", 1, "xxx")]; 
    var observaciones = "a";
    var actaDecomiso = new ActaDecomiso(10,policia, testigo, lugar,
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

