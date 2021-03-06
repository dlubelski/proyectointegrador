let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart" /* let crea */

fetch(url)  /* permite recursos de forma asincronica que evalua una promesa(info que va a llegar) */
    .then(function (response) { /* metodo */
        return response.json();   /* json:intercambio de datos --> obj literales */
    })
    .then(function (data) { 
        console.log(data); /* muestra datos */
        let info = data.tracks.data; 
        let section = document.querySelector(".song")
        let article = "";
        for (let i = 0; i < 5; i++) {
            article += `<article class="item">
            <img src=${info[i].artist.picture_medium}>   
            <p>${info[i].title}</p>
            <p>${info[i].artist.name}</p>
            <a href="songs.html?id=${info[i].id}">♬ </a></article>`
        }
        console.log(article);
        section.innerHTML += article
    })
    .catch(function (error) {
        console.log(error);
    })

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let info = data.albums.data;
        let section = document.querySelector(".album")
        let article = "";
        for (let i = 0; i < 5; i++) {
            article += `<article class="item">
             <img src=${info[i].artist.picture_medium}>
             <p>${info[i].title}</p>
                <p>${info[i].artist.name}</p>
                <a href="albums.html?id=${info[i].id}">♬ </a></article>`
        }
        console.log(article);
        section.innerHTML += article
    })
    .catch(function (error) {
        console.log(error);
    })


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let info = data.artists.data;
        let section = document.querySelector(".artist")
        let article = "";
        for (let i = 0; i < 5; i++) {
            article += ` <article class="item"> 
            <img src=${info[i].picture_medium}>
             <p>${info[i].name}</p>
             <a href="artists.html?id=${info[i].id}">♬ </a></article>`

        }
        console.log(article);
        section.innerHTML += article
    })
    .catch(function (error) {
        console.log(error);
    })