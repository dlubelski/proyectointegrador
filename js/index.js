let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let info = data.tracks.data;
        let section = document.querySelector(".song")
        let article = "";
        for (let i = 0; i < 5; i++) {
            article += `<article class="item"><p>${info[i].title}-</p>`,
                article += `<p>${info[i].artist.name}</p>`
            article += `<img src=${info[i].artist.picture_medium}></article>`
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
            article += `<article class="item"><p>${info[i].title}-</p>`,
                article += `<p>${info[i].artist.name}</p>`
            article += `<img src=${info[i].artist.picture_medium}></article>`
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
            article += `<article class="item"><p>${info[i].title}-</p>`,
            article += `<p>${info[i].name}</p>`
            article += `<img src=${info[i].picture_medium}></article>`

        }
        console.log(article);
        section.innerHTML += article
    })
    .catch(function (error) {
        console.log(error);
    })