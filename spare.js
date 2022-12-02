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
