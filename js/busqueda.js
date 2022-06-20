let qs = location.search;
let qsobj = new URLSearchParams(qs);
let objeto = qsobj.get('buscar');
console.log(qs);
console.log(objeto);

let busqueda =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${objeto}`;
fetch(busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let artista = data.data
        let listaArtistas = document.querySelector('.artistasSearch');
        /* if (artista.length == 0) {
            titulo.innerHTML = '¡La canción que quisiste buscar no existe!'
            resultado.innerHTML = ''
            listaArtistas.innerHTML = '<h1>¡No se encontraron resultados!</h1>'
        } */
        for (let i = 0; i < 4; i++) {
            listaArtistas.innerHTML +=
                `<article class="artista">
    <img class="img" src="${artista[i].picture_big}" alt="${ artista[i].name }"> </a>
    <h3><a href="artists.html?id=${artista[i].id}">${ artista[i].name}</a>
    </h3></article>`
}

}) 
