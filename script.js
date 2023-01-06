let myLibrary = []
let modal = document.getElementById("modal-add-game")
let gameOneOutput = document.getElementById('game1')
const gameContainer = document.getElementById('game-container')

class Game {
    constructor(title, platform, genre, completed) {
        this.title = title;
        this.platform = platform;
        this.genre = genre;
        this.completed = completed;
    }
    sayPlatform() {
        return this.platform;
    }
    sayTitle() {
        return this.title;
    }
    sayGenre() {
        return this.genre;
    }
    trueFalseConvert(e) {
        if (e == true) {
            return "Completed";
        } else {
            return "Not Completed";
        }
    }
    listAll() {
        array = ['title', 'platform', 'genre', 'completed'];
        const gameOutput = [];
        for (let i = 0; i < array.length; i++) {
            gameOutput.push(this[array[i]]);
        }
        return gameOutput.join(', ');
    }
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
            console.log('title already exists')
            window.alert("Game already exists in Library!")
            return false;
        } else {
            console.log('new title')
        }
    }
}

function inputArray() {
    // title, platform, genre, completed
    let title = document.getElementById("newGameForm").elements[0].value;
    console.log(title.value)
    let platform = document.getElementById("newGameForm").elements[1].value
    console.log(platform.value)
    let genre = document.getElementById('mod-genre').value
    console.log(genre.value)
    if (document.querySelector('input[name="mod-complete-status"]:checked') === null) {
        formReset()
        return console.log('missing input')
    } else {
        let completed = document.querySelector('input[name="mod-complete-status"]:checked').value;
        if (titleCheck(title, platform) !== false) {
            let gameTitle = new Game(title, platform, genre, completed)
            addGametoLibrary(gameTitle)
            updateDisplay()
            formReset()
        } else {
            return console.log('title already exist')
        }
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
    let result = confirm('Are you sure you want to delete this entry?')
    if (result) {
        console.log('delete entry button')
        btnData = thisdata.getAttribute('data-a')
        myLibrary.splice(btnData, 1)
        updateDisplay()
    }
}

// toggle completed

function completedToggle(thisdata) {
    console.log('completed toggle button')
    let num = thisdata.getAttribute('data-b')
    // console.log(myLibrary[num].completed)
    if (myLibrary[num].completed == true) {
        myLibrary[num].completed = false
        updateDisplay()
    } else {
        myLibrary[num].completed = true
        updateDisplay()
    }
}

function updateDisplay() {
    gameContainer.textContent = ""
    for (let i = 0; i < myLibrary.length; i++) {
        // makes div
        let newDiv = document.createElement('div')
        newDiv.id = `game${i}`
        newDiv.className = 'game'
        gameContainer.appendChild(newDiv)
        let newCont = document.getElementById(`game${i}`)
        // make title
        let ptitle = document.createElement("p")
        ptitle.classList.add('game-title')
        ptitle.innerHTML = myLibrary[i].sayTitle()
        newCont.appendChild(ptitle)
        // make platform
        let pPlatform = document.createElement("p")
        pPlatform.classList.add('game-platform')
        pPlatform.innerHTML = myLibrary[i].sayPlatform()
        newCont.appendChild(pPlatform)
        // make genre
        let pGenre = document.createElement("p")
        pGenre.classList.add('game-genre')
        pGenre.innerHTML = myLibrary[i].sayGenre()
        newCont.appendChild(pGenre)
        // make completed
        let pComplete = document.createElement("p")
        pComplete.classList.add('game-complete')
        pComplete.innerHTML = myLibrary[i].trueFalseConvert(myLibrary[i].completed)
        newCont.appendChild(pComplete)
        // makes completed toggle
        let togglebtn = document.createElement('button')
        togglebtn.classList.add('toggle-btn')
        togglebtn.classList.add('btn')
        togglebtn.classList.add('hg')
        togglebtn.setAttribute('data-b', `${i}`)
        togglebtn.title = 'completed'
        togglebtn.innerHTML = "Completed"
        togglebtn.onclick = function () { completedToggle(this) }
        newCont.appendChild(togglebtn)
        // makes delete button
        let btn = document.createElement('button');
        btn.classList.add('delete-btn')
        btn.classList.add('btn')
        btn.setAttribute('data-a', `${i}`)
        btn.innerHTML = "Delete"
        btn.title = 'delete game entry'
        btn.onclick = function () { deleteEntry(this) }
        newCont.appendChild(btn)
    }
}

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
        myLibrary = []
        updateDisplay()
    }
}
