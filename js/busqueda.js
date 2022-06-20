let qs = location.search;
let qsobj = new URLSearchParams(qs);
let objeto = qsobj.get('buscar');
console.log(qs);
console.log(objeto);

let busqueda =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/?q=${objeto}`;
let listaArtistas = document.querySelector('.artistasSearch');
listaArtistas.innerHTML = '<img class="cargando" src="./img/udemusicphotos/gif.gif">'

fetch(busqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let titulo = document.querySelector('.titulosSearch')
        let artista = data.data
        if (artista.length == 0) {
            listaArtistas.innerHTML = '<h1>¡No se encontraron resultados!</h1>'
            return
        } 
    let resultados = ""
        for (let i = 0; i < 4; i++) {
            resultados +=
                `<article class="artista">
    <img class="img" src="${artista[i].picture_big}" alt="${ artista[i].name }"> </a>
    <h3><a href="artists.html?id=${artista[i].id}">${ artista[i].name}</a>
    </h3></article>`
}
listaArtistas.innerHTML = resultados

}) 
