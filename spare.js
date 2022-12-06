const Doom = new Game('DOOM 2016', 'Steam', "Shooter", true)
const Factorio = new Game('Factorio', 'Steam', 'Strategy', true)
const Rage2 = new Game('Rage 2', 'Epic', 'Action', true)
const StS = new Game('Slay the Spire', 'Steam', 'Strategy', false)
const VS = new Game('Vampire Survivors', 'Steam', 'Action', false)
const DE = new Game('DOOM Eternal', 'Steam', "Shooter", true)
const RocketLeague = new Game('Rocket League', 'Epic', 'Action', false)
const SR = new Game('The Elder Scrolls V: Skyrim Special Edition', 'Steam', 'RPG', false)
const Kotor2 = new Game('Star Wars Knights of the Old Republic II: The Sith Lords', 'Steam', 'RPG', false)
const Civ6 = new Game(`Sid Meier's Civilization VI : Platinum Edition`, 'Steam', 'Strategy', false)


// //delete below
// addGametoLibrary(Doom)
// addGametoLibrary(Factorio)
// addGametoLibrary(Rage2)
// addGametoLibrary(StS)
// addGametoLibrary(VS)
// addGametoLibrary(DE)
// addGametoLibrary(RocketLeague)
// addGametoLibrary(SR)
// addGametoLibrary(Kotor2)
// addGametoLibrary(Civ6)

// if (title === undefined || platform === undefined) {
//     formReset()
//     return console.log('missing inputs')
// } else

// this.info = function (array) {
//     array = ['title', 'platform', 'genre', 'completed']
//     const gameOutput = []
//     for (let i = 0; i < array.length; i++) {
//         gameOutput.push(this[array[i]])
//     }
//     return gameOutput.join(', ')
// }

// function Student(name, grade) {
//     this.name = name
//     this.grade = grade
// }

// function ages(age) {
//     this.age = age
// }

// ages.prototype = Object.create(Student.prototype)

// const me = new ages(26)
// me.name = 'Tarndeep'
// me.grade = 2
// console.log(me)


// let doom1 = {
//     title: 'Doom 2016',
//     platform: 'Steam',
//     genre: 'Shooter',
//     completed: true
// }

// let doom2 = Object.create(doom1)
// doom2.title = 'DOOM Eternal'
// console.log(doom2.genre)
// console.log(doom2)

let array = ('a,b,c,d')

console.log(array.split(','))

// function addGametoLibrary(obj) {
//     myLibrary.push(obj)
// }


// function formReset() {
//     document.getElementById('newGameForm').reset()
// }

function closeForm() {
    document.getElementById("modal-add-game").style.display = 'none';
    formReset()
}

// function openForm() {
//     document.getElementById("modal-add-game").style.display = 'block'
// }

let doomEternal = {}
console.log(Doom)
doomEternal = Object.create(Doom)
doomEternal.title = 'DOOM Eternal'
doomEternal.sayPlatform()
console.log(Doom.listAll())
console.log(Factorio.listAll())
// Doom.sayPlatform()
// console.log(Game.prototype.sayTitle)

addGametoLibrary(doomEternal)


// console.log(Doom)

// console.log(Doom.info())

// Game.prototype = {
//     sayPlatform: function () {
//         console.log(this.platform);
//     },
//     sayTitle: function () {
//         console.log(this.title);
//     },
//     sayGenre: function () {
//         console.log(this.genre);
//     },
//     listAll: function () {
//         array = ['title', 'platform', 'genre', 'completed']
//         const gameOutput = []
//         for (let i = 0; i < array.length; i++) {
//             gameOutput.push(this[array[i]])
//         }
//         return gameOutput.join(', ')
//     }
// }

const Doom = new Game('DOOM 2016', 'Steam', "Shooter", true)
const Factorio = new Game('Factorio', 'Steam', 'Strategy', true)
const Rage2 = new Game('Rage 2', 'Epic', 'Action', true)
const StS = new Game('Slay the Spire', 'Steam', 'Strategy', false)
const VS = new Game('Vampire Survivors', 'Steam', 'Action', false)
const DE = new Game('DOOM Eternal', 'Steam', "Shooter", true)
const RocketLeague = new Game('Rocket League', 'Epic', 'Action', false)
const SR = new Game('The Elder Scrolls V: Skyrim Special Edition', 'Steam', 'RPG', false)
const Kotor2 = new Game('Star Wars Knights of the Old Republic II: The Sith Lords', 'Steam', 'RPG', false)
const Civ6 = new Game(`Sid Meier's Civilization VI : Platinum Edition`, 'Steam', 'Strategy', false)

// Game.prototype.trueFalseConvert = (e) => {
//     if (e == true) {
//         return "Completed"
//     } else {
//         return "Not Completed"
//     }
// }

//delete below
addGametoLibrary(Doom)
addGametoLibrary(Factorio)
addGametoLibrary(Rage2)
addGametoLibrary(StS)
addGametoLibrary(VS)
addGametoLibrary(DE)
addGametoLibrary(RocketLeague)
addGametoLibrary(SR)
addGametoLibrary(Kotor2)
addGametoLibrary(Civ6)
