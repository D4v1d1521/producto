const input = document.querySelector("#inputPokemon");
const button = document.querySelector("#button");
const pokemoncointainer = document.querySelector(".pokeapi");

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value);
})


function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);
    });
}

function crearPokemon(pokemon){
    const img = document.getElementById('imgg');
    img.src = pokemon.sprites.front_default;

    const h3 = document.getElementById('nombre');
    h3.textContent = pokemon.name;

    // const div = document.createElement('div');
    // div.appendChild(img);
    // div.appendChild(h3);

    // pokemoncointainer.appendChild(div);

}
