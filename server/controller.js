const genCharacters = require('./charGen.js')

let characters = genCharacters

let id = 6

module.exports = {

    getRecruits: (req, res) => {
        res.status(200).send(characters)
    },

    makeRecruit: (req, res) => {
        const {name, health, armor, attack, movement, range, backstory} = req.body
        const newRecruit = {name, health, armor, attack, movement, range, backstory, id}
        characters.push(newRecruit)
        id++
        res.status(200).send(characters)
    },

    changeRecruit: (req, res) => {
        const {name, health, armor, attack, movement, range, backstory} = req.body
        const index = characters.findIndex( recruit => recruit.id === +req.params.id)
        characters[index] = {
                name: name || characters[index].name,
                health: health || characters[index].health, 
                armor: armor || characters[index].armor, 
                attack: attack || characters[index].attack, 
                movement: movement || characters[index].movement, 
                range: range || characters[index].range, 
                backstory: backstory || characters[index].backstory, 
                id: characters[index].id
            }
        res.status(200).send(characters)
    },

    removeRecruit: (req, res) => {
        const index = characters.findIndex( recruit => recruit.id === +req.params.id)
        characters.splice(index, 1);
        res.status(200).send(characters)
    }

}