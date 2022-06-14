let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idGenres = qsToObject.get('idGenres'); //obtengo el id del album

let urlGenres=

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genres/${idGenres}")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let info = data.genres.data;
        let section = document.querySelector("genreshtml"); 
        let article = "";
        for (let i = 0; i < 5; i++) {
            article += `<article class="favgenre">
             <img src=${info[i].artist.picture_xl}>
             <p>${info[i].title}</p>
                <p>${info[i].artist.name}</p>
                <a href="genres.html?id=${info[i].id}">♬ </a></article>`
        }
        console.log(article);
        section.innerHTML += article

    })
    .catch(function(error){
        console.log(error);
    })