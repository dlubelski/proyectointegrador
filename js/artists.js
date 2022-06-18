let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idArtists = qsToObject.get('id'); //obtengo el id del artista


let urlArtists = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idArtists}`;

fetch(urlArtists)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
         let name = document.querySelector('.title-artist');
         let picture = document.querySelector('.foto');
         let artista = document.querySelector('.artista');
         name.innerText = data.name;
         picture.src = data.picture;
       
    })
    .catch(function (error) {
        console.log(error)
    })