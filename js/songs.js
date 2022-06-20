let queryString = location.search; //obtengo la qs
let qsToObject = new URLSearchParams(queryString); //Un objeto literal basado en la qs
let idSongs = qsToObject.get('id'); //obtengo el id del artista


let urlSongs = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${idSongs}`;
console.log(urlSongs);
fetch(urlSongs)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
         let picture = document.querySelector('.foto');
         let name = document.querySelector('.title-artist');
         let artista = document.querySelector('.cancion')
         let disco = document.querySelector('.cancion2')
    
         name.innerText = data.title;
         picture.src = data.album.cover;
         artista.innerText=data.artist.name;
         disco.innerText= data.album.title;
         document.querySelector('.player').innerHTML=`<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${idSongs}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
         document.querySelector('button').innerHTML= `<button type="submit">Agregar a mi playlist</button>`
         document.querySelector('.link').innerHTML=`<a href="./playlist.html">playlist</a>`
    
         
         let favoritos = [];

         //chequear si hay algo en favoritos
         let recuperoStorage = localStorage.getItem("favoritos");
 
         if(recuperoStorage){ //null o undefined => false //tiene una variable => true
             let favoritosToArray = JSON.parse(recuperoStorage)
             favoritos = favoritosToArray
         }
 
         let link= document.querySelector("button");
 
         if(favoritos.includes(idSongs)){
             //cambiarle el mensaje al usuario.
             link.innerText = "Sacar de favoritos"
         }
 
         //Definir un evento para el link
         link.addEventListener("click", function(evento){
             //evitar default del link
             evento.preventDefault()
 
             if(favoritos.includes(idSongs)){
                 //Sacar el id del array
                 let gifASacar = favoritos.indexOf(idSongs)
                 favoritos.splice(gifASacar, 1);
                 link.innerText="Agregar a favoritos"
 
             } else {
                 //Agregar un data al array
                 favoritos.push(idSongs);
                 link.innerText = "Sacar de favoritos"
 
             }
 
             //Agregar el array a localStorage. Antes hay que pasarlo a string
             let gifFavoritosToString = JSON.stringify(favoritos);
             localStorage.setItem('favoritos', gifFavoritosToString)
 
 
             console.log(localStorage.getItem("favoritos"));
 
         })
 
    })
    .catch(function (error) {
        console.log(error)
    })