function inicio(){
    var archivos, archivo1;
    avisos=document.getElementById("avisos");
    archivo=document.getElementById("archivo");
    archivo.addEventListener("change",mostrar,false);
    boton=document.getElementById("enviar");
    boton.addEventListener("click",ejecuta,false);
}

function mostrar(e){
    archivos=e.target.files;
    archivo1=archivos[0];
    avisos.innerText="Nombre del archvio " + archivo1.name;
}

function ejecuta(){
    lector=new FileReader();
    lector.addEventListener("load",leido,false);
    lector.readAsText(archivo1);
}

function leido(e){
    avisos.innerText=e.target.result;
}

window.addEventListener("load",inicio,false);