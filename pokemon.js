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



  
*// INTENTO DE SCROLL 

/* window.addEventListener("scroll" , () => {
    const { scrollTop , scrollHeight, clientHeight } = document.documentElement; 
    if (scrollTop + clientHeight >= scrollHeight)
    console.log("Cargar mas pokemones")
    page++;
    
}

); */



document.querySelector("#buttonbuscar").addEventListener ("click", () => {
    let busquedaPokemon = document.querySelector("#formulario").value  
    const searchPokemon = async (busquedaPokemon) => {

        let pokemonesBrutos = await fetch(`https://pokeapi.co/api/v2/pokemon/${busquedaPokemon}`);
        let pokemonesNetos = await pokemonesBrutos.json();
        let pokemonBuscado = await pokemonesNetos.map((element) => ({
            
            name: element.name
        }))
        
        console.log(pokemonBuscado)

    
    }
    searchPokemon(busquedaPokemon) 
}) 

        










// INTENTO DE BUSCADOR

/* let displayBuscar = document.querySelector(".buscar");

let buscarPokemon=async()=>{
    let id=document.querySelector(".formulario").value;
    if (id>898) {
        window.alert("solo hay 898 pokemons");
        spinner.style.display="none";
    }

    let result=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    let pokemonToJson=await result.json();
    spinner.style.display="none";

    let pokemonInfo= {
        name:pokemonToJson.name,
        image: pokemonToJson.sprites.other["official-artwork"]["front_default"],
        id:`#${pokemonToJson.id.toString().padStart(3,0)}`
    }

    const pokemonHTML = `
       <h1 class="displayBuscar__name">${pokemonInfo.name}</h1>
       <h2 class="displayBuscar__id">${pokemonInfo.id}</h2>
       <img class="displayBuscar__image" src="${pokemonInfo.image}" alt="${pokemonInfo.name}"/>`;
    displayBuscar.innerHTML=pokemonHTML;
    document.querySelector('.pokebal-gif').style.display="none";
}

document.querySelector(".buscar__btn").addEventListener('click',buscarPokemon) */



