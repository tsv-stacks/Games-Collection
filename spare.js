// this.info = function (array) {
//     array = ['title', 'platform', 'genre', 'completed']
//     const gameOutput = []
//     for (let i = 0; i < array.length; i++) {
//         gameOutput.push(this[array[i]])
//     }
//     return gameOutput.join(', ')
// }

function Student(name, grade) {
    this.name = name
    this.grade = grade
}

function ages(age) {
    this.age = age
}

ages.prototype = Object.create(Student.prototype)

const me = new ages(26)
me.name = 'Tarndeep'
me.grade = 2
console.log(me)


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