let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idSongs = qsToObject.get('id'); //obtengo el id del artista


let urlSongs = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${idSongs}`;
console.log(urlSongs);
fetch(urlSongs)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
         let name = document.querySelector('.title-artist');
         let picture = document.querySelector('.foto');
         let artista = document.querySelector('.cancion')
         let disco = document.querySelector('.cancion2')
         name.innerText = data.title;
         picture.src = data.album.cover;
         artista.innerText=data.artist.name;
         disco.innerText= data.album.title
         
         
       
    })
    .catch(function (error) {
        console.log(error)
    })