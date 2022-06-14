let forms = document.querySelector('form');
let buscar = document.querySelector('.buscar');
forms.addEventListener('submit',function(evento){
    evento.preventDefault();
    console.log('no se manda el form');
    if(buscar.value == ''){
        alert('Este campo es obligatorio')
    }else if(buscar.value.length <=3){
        alert('Este campo debe tener mas de tres caracteres')
    }else{
        this.submit()
    }
})
console.log()


