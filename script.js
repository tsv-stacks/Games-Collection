let myLibrary = []
let modal = document.getElementById("modal-add-game")
let gameOneOutput = document.getElementById('game1')
const gameContainer = document.getElementById('game-container')


const Doom = new Game('DOOM 2016', 'Steam', "Shooter", true)
const Factorio = new Game('Factorio', 'Steam', 'Strategy', true)

function Game(title, platform, genre, completed) {
    this.title = title;
    this.platform = platform;
    this.genre = genre;
    this.completed = completed;
}

// create deletebutton

function createDeleteBtn() {
    let btn = document.createElement('button');
    btn.classList.add('delete-btn')
    btn.setAttribute('data', `game${i}`)
    let currentiD = `game${i}`
    currentiD.appendChild(btn)
}

// form reset

const formReset = () => document.getElementById('newGameForm').reset()

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
        formReset()
    }
}

// button brings up form
// collect user input

// button functionality
// if text is in form, clear text when closing it

// function goes through myLibrary array
// if completed == true , change true to completed
// checks length
// makes div and span inner.HTML
// push to html

const addGametoLibrary = obj => myLibrary.push(obj);

// deleteBtn function

function deleteEntry(thisdata) {
    console.log('delete entry button')
    console.log(thisdata)
    btnData = thisdata.getAttribute('data-a')
    // console.log(btnData)
    // console.log(myLibrary)
    myLibrary.splice(btnData, 1)
    // console.log(myLibrary)
    updateDisplay()
}

// toggle completed

function completedToggle(thisdata) {
    console.log('completed toggle button')
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
        let btn = document.createElement('button');
        btn.classList.add('delete-btn')
        btn.setAttribute('data-a', `${i}`)
        btn.innerHTML = "Delete"
        btn.title = 'delete game entry'
        btn.onclick = function () { deleteEntry(this) }
        gameContainer.appendChild(btn)
        let togglebtn = document.createElement('button')
        togglebtn.classList.add('toggle-btn')
        togglebtn.setAttribute('data-b', `${i}`)
        togglebtn.title = 'completed'
        togglebtn.innerHTML = "Completed"
        togglebtn.onclick = function () { completedToggle(this) }
        gameContainer.appendChild(togglebtn)
    }
}

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
    return this.genre
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

// function runs on page load
updateDisplay()

const openForm = () => document.getElementById("modal-add-game").style.display = 'block'

function closeForm() {
    document.getElementById("modal-add-game").style.display = 'none';
    formReset()
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        formReset()
    }
}

function resetList() {
    let result = confirm('This will clear the list of games in the collection. \nThere is no way to undo this. \nAre you sure you want to clear the list?')
    if (result) {
        gameContainer.textContent = ""
    }
}
