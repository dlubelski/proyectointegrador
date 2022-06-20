let recuperoStorage = localStorage.getItem("favoritos");
recuperoStorageToArray = JSON.parse(recuperoStorage);

//capturar la sección para completar con datos
let section = document.querySelector(".favoritos")
let contenidoSection = ""

//pedir a la api los datos de todos los ids
for (let i = 0; i < recuperoStorageToArray.length; i++) {
    //fetch
    let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${recuperoStorageToArray[i]}`;

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            //trabajo con los datos 
            contenidoSection += `<article>
                                    <p class="name">Nombre: ${data.title}</p>
                                    <img src="${data.artist.picture}" alt="foto">
                                    <a href="songs.html?id=${data.id}">♬ </a>
                                    </article>`

            section.innerHTML = contenidoSection

        })
        .catch(function (error) {
            console.log(error);
        })

}

