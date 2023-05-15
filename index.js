window.addEventListener('load', function(){

    console.log('pagina cargada');  


    var imagenes=[];
    imagenes[0]= 'img/img1.jpeg';
    imagenes[1]= 'img/img2.jpeg';
    imagenes[2]= 'img/img3.jpeg';
    imagenes[3]= 'img/img4.jpeg';
    imagenes[4]= 'img/img5.jpeg';

    var posicionImagenes= 0;

    function cambiarImagenes(){
        this.document.slider.src= imagenes[posicionImagenes];

        if (posicionImagenes<4){
            posicionImagenes++;
        }else {
            posicionImagenes=0;

        }
    }
    
    this.setInterval(cambiarImagenes,2000);


});