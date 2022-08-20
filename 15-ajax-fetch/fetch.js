let pokeList;

pokeList = document.querySelector('[data-pokelist]');

const query = new URLSearchParams(window.location.search);
const pid = query.get('id');

async function Pokeapi(id) {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
    .then(data => {
    if (pid) {
      
    } else {
      MainPokemon(data);
    }
    }).finally(() => { 
      setTimeout(() => {
        pokeList.style.display = 'flex';
       }, 1000);
    }).catch(error => {
    console.log(error);
  })
}

function MaxPokeDex(offset,limit) {
  for (let i = offset; i <= offset + limit; i++) {
    Pokeapi(i);
  }
}

function MainPokemon(pokemon) {

  console.log(pokemon);

    pokeList.innerHTML += `
    
            <div class="poke__item ${pokemon.types[0].type.name}">
              <div class="poke__sprite">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
              </div>
              <div class="poke__info">
                <span class="poke__name">${pokemon.name}</span>
              </div>
            </div>
    
    `

}


MaxPokeDex(1,500);