let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idUrl = qsToObject.get('id'); //obtengo el id del detalle del genero
<<<<<<< HEAD
let urlDetallegre = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + "idUrl" + "/artist"
=======
let urlDetallegre = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${idUrl}`;
>>>>>>> f1c3dbe85c9a94757e177ed074c8e6932ec8fd14

fetch(urlDetallegre)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.data;
        let article = document.querySelector(".detallegredata");

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