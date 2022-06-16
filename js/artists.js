let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idArtists = qsToObject.get('id'); //obtengo el id del artista


let urlArtists = `https://api.allorigins.win/raw?url=https://developers.deezer.com/api/artist${idArtists}`;

fetch(urlArtists)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
<<<<<<< HEAD
         let name = document.querySelector('.title-artist');
         let picture = document.querySelector('.foto');
         let artista = document.querySelector('.artista');
         name.innerText = data.name;
         picture.src = data.picture;
       
=======
        let name = document.querySelector('.artisthtml');
        let picture = document.querySelector('.imgartist');

        name.innerText = data.name;
        picture.src = data.picture;

>>>>>>> 9d01ef88da54b50f7988590f4548a4680d2f4a83
    })
    .catch(function (error) {
        console.log(error)
    })