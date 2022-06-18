fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.data;
        let section = document.querySelector(".genreshtml");
        let article = "";
        for (let i = 0; i < 28; i++) {
            article += `<article class="favgenre">
             <img src="${info[i].picture_xl}">
             <p>${info[i].name}</p>
             <a href="detallegre.html?id=${info[i].id}">♬ </a></article>`
        }
        console.log(article);
        section.innerHTML += article

    })
    .catch(function (error) {
        console.log(error);
    })