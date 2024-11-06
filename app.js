const pokemon = require('./data.js')
const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ],
  catchPokemon(pokemonObj) {
    game.party.push(pokemonObj)
  },
  gymStatus() {
    let gymTally = {
      completed: 0,
      incomplete: 0
    }
    game.gyms.forEach((num) => {
      if (num.completed === true) {
        gymTally.completed++
      } else if (num.completed === false) {
        gymTally.incomplete++
      }
    })
    console.log(gymTally)
  },
  partyCount() {
    console.log(game.party.length)
  }
}
game.gyms[0].difficulty = 'Easy'
game.gyms[1].difficulty = 'Easy'
game.gyms[2].difficulty = 'Easy'
game.gyms[3].difficulty = 'Med'
game.gyms[4].difficulty = 'Med'
game.gyms[5].difficulty = 'Med'
game.gyms[6].difficulty = 'Hard'
game.gyms[7].difficulty = 'Hard'
console.dir(pokemon, { maxArrayLength: null })
game.party.push(pokemon[0])

game.party.push(pokemon[7])
game.party.push(pokemon[8])
game.party.push(pokemon[9])

game.gyms.forEach((num) => {
  if (num.difficulty === 'Easy') {
    num.completed = true
  }
})

game.party.splice(0, 1, pokemon[1])

game.party.forEach((nam) => {
  console.log(nam.name)
})

pokemon.forEach((sta) => {
  if (sta.starter === true) {
    console.log(sta.name)
  }
})

game.catchPokemon(pokemon[2])

const catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  game.items[1].quantity = game.items[1].quantity - 1
}
catchPokemon(pokemon[90])
game.gyms.forEach((num) => {
  if (num.difficulty === 'Easy' || num.difficulty === 'Med') {
    num.completed = true
  }
})

game.gymStatus()
game.partyCount()
game.gyms.forEach((num) => {
  if (
    num.difficulty === 'Easy' ||
    num.difficulty === 'Med' ||
    num.difficulty === 'Hard'
  ) {
    num.completed = true
  }
})
console.log(game)
