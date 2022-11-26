function Game(title, platform, genre, completed) {
    this.title = title;
    this.platform = platform;
    this.genre = genre;
    this.completed = completed;
    this.info = function (array) {
        array = ['title', 'platform', 'genre', 'completed']
        const gameOutput = []
        for (let i = 0; i < array.length; i++) {
            gameOutput.push(this[array[i]])
        }
        return gameOutput.join(', ')
    }
}

const Doom = new Game('Doom 2016', 'Steam', "Shooter", true)

// console.log(Doom)
let doomArray = Object.values(Doom)
// console.log(doomArray.join(", "))
console.log(Doom.info())
