const url='personas.json';
fetch(url)
.then(respuesta=>{
    if(!respuesta.ok){
        throw new Error('Error al obtener los datos')
    }
    return respuesta.json();
})
.then(datos=>{
    console.log(datos);
    const litaDatos=document.getElementById('listaDatos');
    datos.personas.forEach(dato=>{
        const li=document.createElement('li');
        li.textContent=dato.nombre;
        litaDatos.appendChild(li);
    })
})