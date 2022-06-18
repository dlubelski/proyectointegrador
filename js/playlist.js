let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idSongs = qsToObject.get('id'); //obtengo el id del artista


let urlSongs = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks${idSongs}`;
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
         document.querySelector('.player').innerHTML=`<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idSongs}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
         document.querySelector('.button').innerHTML= `<button type="submit">Agregar a mi playlist</button>`
         document.querySelector('.link').innerHTML=`<a href="./playlist.html">playlist</a>`

         let playlist =[];
         let recuperoStorage = localStorage.getItem ("playlist");
         if (recuperoStorage){
             let playlistToArray = JSON.parse(recuperoStorage)
             playlist = playlistToArray
         }

         

         let link = document.querySelector('.button');
         if(playlist.includes(idSongs)){
             link.innerText = "sacar de favoritos"
         }
         if (playlist.includes(idSongs)){
             let sacarSong = playlist.indexOf(idSongs)
             playlist.splice(sacarSong,1);
             link.innerText = "Agregar a favoritos"
         }else{
             favoritos.push(idSongs)
             link.innerText = "Sacar de favoritos"
         }
         
         let playlistToString = JSON.stringify(playlist);
         localStorage.setItem('playlist',playlistToString)
         

    
         
       console.log(localStorage.getItem("favoritos"));
    })
    .catch(function (error) {
        console.log(error)
    })













let playlistRecuperada = JSON.parse(recuperoStorage);