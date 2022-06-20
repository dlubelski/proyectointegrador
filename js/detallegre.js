let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idUrl = qsToObject.get('id'); //obtengo el id del detalle del genero
let urlDetallegre = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idUrl}`;

fetch(urlDetallegre)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.data;
        let section = document.querySelector(".detallegredata");
        let article = "";

        for (let i = 0; i < 1; i++) {
            article += `<article class="regguetonartists"> 
                <p>Genre: ${data.name}</p>
            <img class"fotosgeneros" src="${data.picture_xl}" alt=""> 
            </article>`


        }
        console.log(article);
        section.innerHTML += article

    })
    .catch(function (error) {
        console.log(error);
    })