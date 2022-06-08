const input = document.querySelector("#inputproductos");
const button = document.querySelector("#button");
const productoscontainer = document.querySelector(".apiproducto");

button.addEventListener('click',(e) =>{
    e.preventDefault();
    traerProducto(input.value);

})

function traerProducto(producto){
    fetch(`https://api.escuelajs.co/api/v1/products/${producto}/`)
    .then((res) => res.json())
    .then((data) => {
        crearProducto(data);

    });


}

function crearProducto(producto){
    const imagen =document.getElementById('img');
    imagen.src = producto.images[0];

    const titulo = document.getElementById('nomproducto');
    titulo.textContent = producto.title;

}

function añadirp(){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function eliminarp(){
    fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function actualizarp(){
    fetch('https://fakestoreapi.com/products/7',{
                method:"PUT",
                body:JSON.stringify(
                    {
                        title: 'test product',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
}

function listar(){

    const input = document.getElementById('listar').value;


    const t =document.getElementById('titulo');
    t.textContent = producto.images[0];

    const titulo = document.getElementById('nomproducto');
    titulo.textContent = producto.title;




}