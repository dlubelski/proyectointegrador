let url= "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart"
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let info= data.data
    let section = document.querySelector(".indexhtml")
    let articles="";
    for (let i=0; i<info.length; i++){
        articles +=`<article>
        <p class="name">Nombre:${tracks.data[i].title}>
         <a href="./detallegre.html?id=${tracks.data.link[i].id}">ir a detalle</a>
         <img class="image" src="${tracks.data.picture}" alt="">
</article>`
    }
    console.log(articles);
    section.innerHTML += articles
})
.catch(function(error){
    console.log(error);
})