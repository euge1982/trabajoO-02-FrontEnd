/*Array con las direcciones de las imagenes*/
const imagenes=[
    "https://img.freepik.com/foto-gratis/disparo-vertical-carretera-magnificas-montanas-cielo-azul-capturado-california_181624-44891.jpg?uid=R158807550&ga=GA1.1.1882681859.1723488819&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/hermoso-paisaje-carretera-bosque-muchos-arboles-otono-coloridos_181624-22472.jpg?uid=R158807550&ga=GA1.1.1882681859.1723488819&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/disparo-vertical-pasaje-madera-sobre-pequeno-lago-reflectante-cordillera-horizonte_181624-37099.jpg?uid=R158807550&ga=GA1.1.1882681859.1723488819&semt=ais_hybrid",
    "https://img.freepik.com/fotos-premium/vista-arboles-otono_1048944-30429939.jpg?uid=R158807550&ga=GA1.1.1882681859.1723488819&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/tiro-vertical-pista-forestal-rodeada-arboles-verdes_181624-4318.jpg?uid=R158807550&ga=GA1.1.1882681859.1723488819&semt=ais_hybrid",
    "https://img.freepik.com/fotos-premium/disparo-vertical-camino-madera-montanas_181624-50382.jpg?uid=R158807550&ga=GA1.1.1882681859.1723488819&semt=ais_hybrid"];

/*Se selecciona el contenedor de la galeria*/
const galeria= document.getElementById('galeria');

/*Se generan los elementos img y se agregan a la galeria*/
imagenes.forEach( (src, index) =>{
    const imagen= document.createElement('img');
    imagen.src=src;
    imagen.alt= `Foto {$index + 1}`;
    galeria.appendChild(imagen)
});
