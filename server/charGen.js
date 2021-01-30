const data = require('../src/data.json')
const {name, image, health, armor, attack, movement, range, backstory} = data

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let characters = function() {
    let arr = []
    for(let i = 0; i > 6; i++) {
        arr.push({
            name: name[getRandomIndex(name.length-1)],
            image: image[getRandomIndex(image.length-1)],
            health: health[getRandomIndex(health.length-1)],
            armor: armor[getRandomIndex(armor.length-1)],
            attack: attack[getRandomIndex(attack.length-1)],
            movement: movement[getRandomIndex(movement.length-1)],
            range: range[getRandomIndex(range.length-1)],
            backstory: backstory[getRandomIndex(backstory.length-1)],
            id: i
        })
    }
    return arr
}

module.exports = {
    
    makeChar: () => {
        return characters
    }
}