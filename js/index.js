let urlTracks = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch(urlTracks)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = tracks.data
        let section = document.querySelector(".indexhtml")
        let articles = "";
        for (let i = 0; i < info.length; i++) {
            section += `<section>
        <p class="name">Nombre:${tracks.data[i].title}>
         <a href="./detallegre.html?id=${tracks.data.link[i].id}">ir a detalle</a>
         <img class="image" src="${tracks.data.picture}" alt="">
</section>`
{/* <article class="item">
                    <p>Old Town Road - Lil Nas X</p><br>
                </article> */}
        }
        console.log(articles);
        section.innerHTML += articles
    })
    .catch(function (error) {
        console.log(error);
    })