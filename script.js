let myLibrary = []
let modal = document.getElementById("modal-add-game")
let gameOneOutput = document.getElementById('game1')
const gameContainer = document.getElementById('game-container')


function Game(title, platform, genre, completed) {
    this.title = title;
    this.platform = platform;
    this.genre = genre;
    this.completed = completed;
}

// form reset

function formReset() {
    // code
}

// check game entry does not already exist

function titleCheck(title, platform) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].sayTitle() == title && myLibrary[i].sayPlatform() == platform) {
            // console.log(myLibrary[i].sayPlatform())
            // console.log(platform)
            console.log('title already exists')
            window.alert("Game already exists in Library!")
            return false;
        } else {
            console.log('new title')
        }
    }
}

function inputArray() {
    console.log('hi papi')
    // title, platform, genre, completed
    let title = document.getElementById("newGameForm").elements[0].value;
    console.log(title)
    let platform = document.getElementById("newGameForm").elements[1].value
    console.log(platform)
    let genre = document.getElementById('mod-genre').value
    console.log(genre)
    let completed = document.querySelector('input[name="mod-complete-status"]:checked').value;
    console.log(completed)
    if (titleCheck(title, platform) !== false) {
        let gameTitle = new Game(title, platform, genre, completed)
        addGametoLibrary(gameTitle)
        updateDisplay()
    }
}

// make new function
// addGametoLibrary(gameTitle)
// updateDisplay()

// button brings up form
// collect user input

// button functionality
// if text is in form, clear text when closing it

// function goes through myLibrary array
// if completed == true , change true to completed
// checks length
// makes div and span inner.HTML
// push to html

function addGametoLibrary(obj) {
    myLibrary.push(obj)
}

function updateDisplay() {
    console.log('hi')
    gameContainer.textContent = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement('div')
        newDiv.id = `game${i}`
        // console.log(newDiv.id)
        newDiv.className = 'game'
        newDiv.innerHTML = myLibrary[i].listAll();
        // console.log(newDiv)
        gameContainer.appendChild(newDiv)
    }
}



const Doom = new Game('DOOM 2016', 'Steam', "Shooter", true)
const Factorio = new Game('Factorio', 'Steam', 'Strategy', true)

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

Game.prototype.sayPlatform = function () {
    return this.platform
}

Game.prototype.sayTitle = function () {
    return this.title
}

Game.prototype.sayGenre = function () {
    console.log(this.genre)
}

Game.prototype.listAll = function () {
    array = ['title', 'platform', 'genre', 'completed']
    const gameOutput = []
    for (let i = 0; i < array.length; i++) {
        gameOutput.push(this[array[i]])
    }
    return gameOutput.join(', ')
}

let doomEternal = {}
console.log(Doom)
doomEternal = Object.create(Doom)
doomEternal.title = 'DOOM Eternal'
doomEternal.sayPlatform()
console.log(Doom.listAll())
console.log(Factorio.listAll())
// Doom.sayPlatform()
// console.log(Game.prototype.sayTitle)

addGametoLibrary(Doom)
addGametoLibrary(Factorio)
addGametoLibrary(doomEternal)
// let game1 = myLibrary[0].listAll()
// gameOneOutput.textContent = game1
// console.log(myLibrary)

updateDisplay()

function openForm() {
    document.getElementById("modal-add-game").style.display = 'block'
}

function closeForm() {
    document.getElementById("modal-add-game").style.display = 'none'
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function resetList() {
    let result = confirm('This will clear the list of games in the collection. \nThere is no way to undo this. \nAre you sure you want to clear the list?')
    if (result) {
        gameContainer.textContent = ""
    }
}
