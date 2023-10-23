const bloque = document.getElementById("bloque")

async function obtenerDatos() {
    
    const response = await fetch('https://api.rawg.io/api/games?key=769d6d18f6594e1ba903b0ced91c3e22&dates=2019-09-01,2019-09-30&platforms=18,1,7');

    const data = await response.json();


    console.log(data.results);

    data.results.forEach(result => {

        

        // let generos = result.genres

        let template=`
        
        <tr><td><img width=300px src="${result.background_image}"></td>
        <td>${result.name}</td>
        <td>${result.id}</td>
        <td>
        <button id="myBtn" class="btn btn-warning m-2">Comprar</button>

            <!-- The Modal -->
            <div id="myModal" class="modal">
            <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div> contenido </div>
                </div>
        </tr>`
        
        
        bloque.innerHTML+=template
        
        // generos.forEach(element => {
        //     let genero_game =`<span> #${element.name}</span>`
        //     document.getElementById("generos_p").insertAdjacentHTML('beforeend',genero_game)
        // });
    })

    console.log(data.results[0].name);
    console.log(data.results[0].background_image);
    console.log(data.results[0].id);

    // let generos = data.results[0].genres
    // // let nombresGen = []

    // let template=`<img class="portada centrado" width=300px src="${data.results[0].background_image}">
    // <p>Nombre: ${result.name}</p>
    // <p>ID: ${data.results[0].id}</p>
    // <p id="generos_p">generos: </p>`
    
    // bloque.innerHTML=template
    
    // generos.forEach(element => {
    //     let genero_game =`<span> #${element.name}</span>`
    //     document.getElementById("generos_p").insertAdjacentHTML('beforeend',genero_game)
    // });
    
}
obtenerDatos();

