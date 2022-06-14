let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idAlbums = qsToObject.get('id'); //obtengo el id del album


let urlAlbums = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${idAlbums}?`;

fetch(urlAlbums)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let name = document.querySelector('.title-album');
        let cover = document.querySelector('.img');

        name.innerText = data.title;
        cover.src = data.cover;

    })
    .catch(function (error) {
        console.log(error)
    })