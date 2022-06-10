let urlAlbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/302127"

fetch(urlAlbums)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info=data.data
        let section = document.querySelector(".album")
        let article="";
        for (let i = 0; i < 5; i++) {
            article += `<article class="item">
        <p>${tracks.data[i]}</p>
</article>`
        }
        console.log(article);
        section.innerHTML += article
        
    })
    .catch(function (error) {
        console.log(error);
    })