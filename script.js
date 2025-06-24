let infosPokemons = []

// récupère l'API pour générer un pokemin à partir d'un id et l'affiche dans la div voulue
function afficherPokemon(pokemon, numeroEquipe) {
fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(response => response.json())
    .then(data => {
        let pokemonDiv = document.getElementById('pokemon' + numeroEquipe)
        let spriteImg = document.createElement('img')
        spriteImg.src = data.sprites.front_default
// verifie si la div contient déja une image
        if (pokemonDiv.childNodes.length === 0)
            pokemonDiv.appendChild(spriteImg)
        else {
            pokemonDiv.removeChild(pokemonDiv.firstChild)
            pokemonDiv.appendChild(spriteImg)
        }
    })
    .catch(error => console.error(error))
}

// return un nombre entre 1 et 1025 pour servir d'id de pokemon
function randomId() {
    return Math.floor(Math.random() * 1025 + 1)
}

// génère un pokemon 6 fois et le place dans une div
document.getElementById('generateTeam').addEventListener('click', () => {
    for (let i = 1; i <= 6; i++) {
        afficherPokemon(randomId(), i.toString())
        document.getElementById('pokemon' + i).addEventListener('click', () => {
            document.getElementById('pokedexImg').src = document.getElementById('pokemon' + i).src
        })
    }
})