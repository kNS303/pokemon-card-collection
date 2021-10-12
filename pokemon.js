const display = document.querySelector(".display");

let page = 1;
perPage = 151;



const pillarPokemones = async () => {
    const pokemonesFetch = []

    for (let i = 1; i <= 151; i++) {
        let pokemonesBrutos = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemonesNetos = await pokemonesBrutos.json(); 
        
        pokemonesFetch.push(pokemonesNetos)
    }
    

    const pokemonesMapeo = pokemonesFetch.map((element) => ({
        id: element.id,
        name: element.name,
        image: element.sprites.other["official-artwork"]["front_default"],
        weight: element.weight,
        height: element.height,
    }));

    inyectarPokemones(pokemonesMapeo)

}

const inyectarPokemones = (aquiPokemonesMapeo) => {
    const pokemonesHTML = aquiPokemonesMapeo.map((pokemon) =>
          `<li class="display__element">
          <h2>${pokemon.name}</h2>
          <img class="pokemonimage" src="${pokemon.image}" alt="${pokemon.name}"/>
          <p>NÚMERO #${pokemon.id}</p>
          <p>PESO: ${pokemon.weight/10} KG </p>
          <p>ALTURA: ${pokemon.height/10} M </p>
          </li>`
      ).join("");
    display.innerHTML = pokemonesHTML; 
  };


  
  
  pillarPokemones();



window.addEventListener("scroll" , () => {
    const { scrollTop , scrollHeight, clientHeight } = document.documentElement; 
    if (scrollTop + clientHeight >= scrollHeight)
    console.log("Cargar mas pokemones")
    page++;
    
}

);

const formulario = document.querySelector("#formulario")
const boton = document.querySelector ("#buttonbuscar")

const filtrar = () => {
    console.log(formulario.value);
}

boton.addEventListener("click", filtrar)



