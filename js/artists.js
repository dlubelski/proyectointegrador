let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idArtists = qsToObject.get('id'); //obtengo el id del artista


let urlArtists = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${idArtists}`;

fetch(urlArtists)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
         let name = document.querySelector('.artistshtml');
         let picture = document.querySelector('img');

         name.innerText = data.name;
         picture.src = data.picture;

    })
    .catch(function (error) {
        console.log(error)
    })

    