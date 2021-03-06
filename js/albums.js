let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idAlbums = qsToObject.get('id'); //obtengo el id del album


let urlAlbums = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${idAlbums}?`;

fetch(urlAlbums)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let cover = document.querySelector('.img');
        let title = document.querySelector('.titlehtml');
        let nombre = document.querySelector('.nombreArtist');
        let genres = document.querySelector('.sub-title');
        let release_date = document.querySelector('.sub-title1');

        console.log(title);
        cover.src = data.cover_medium;
        title.innerText = data.title;
        nombre.innerText = data.artist.name;
        genres.innerText = data.genres.data[0].name;
        release_date.innerText = data.release_date;


    })
    .catch(function (error) {
        console.log(error)
    })