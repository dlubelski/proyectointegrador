let urlTracks = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch(urlTracks)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info=data.data
        let section = document.querySelector(".song")
        let article="";
        for (let i = 0; i < 5; i++) {
            article += `<article class="item">
        <p>${info[i].title}</p>
</article>`
        }
        console.log(article);
        section.innerHTML += article
    })
    .catch(function (error) {
        console.log(error);
    })