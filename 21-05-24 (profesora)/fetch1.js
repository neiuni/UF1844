document.getElementById("idObtener").addEventListener("click", ()=>{
    fetch('json1.json')
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        console.log(datos);

        let texto=document.getElementById("texto");
        texto.innerHTML=datos.titulo + " " + datos.director + " " + datos.lanzamiento + " " + datos.actores.join("-");

    })
   
    .catch(x=>alert(x))
    .finally(()=>console.log("Terminado"))
   

})