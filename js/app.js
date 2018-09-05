//create variables at the top
var keys = document.querySelectorAll(".key")
var notes = {
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio")
}

// define functions in the middle

function playNote(key) {
    // console.log(key)
    notes[key].currentTime = 0
    notes[key].play()
}



// call functions and/or add Event Listeners
keys.forEach(function (key) {
    key.addEventListener("click", function () {
        playNote(key.id)
    })
})

document.addEventListener("keydown", function (event) {
    // consol 
    if (event.key == "a") {
        playNote("cKey")
        document.querySelector("#cKey").classList.toggle("key_active")

    }
    if (event.key == "s") {
        playNote("dKey")
        document.querySelector("#dKey").classList.toggle("key_active")
    }
    if (event.key == "d") {
        playNote("eKey")
        document.querySelector("#eKey").classList.toggle("key_active")
    }
    if (event.key == "f") {
        playNote("fKey")
        document.querySelector("#fKey").classList.toggle("key_active")
    }
    if (event.key == "g") {
        playNote("gKey")
        document.querySelector("#gKey").classList.toggle("key_active")
    }
    if (event.key == "h") {
        playNote("aKey")
        document.querySelector("#aKey").classList.toggle("key_active")

    }
    if (event.key == "j") {
        playNote("bKey")
        document.querySelector("#bKey").classList.toggle("key_active")

    }
   
})

document.addEventListener("keyup", function (event) {
    if (event.key == "a") {
        document.querySelector("#cKey").classList.toggle("key_active")

    }
    if (event.key == "s") {
        document.querySelector("#dKey").classList.toggle("key_active")
    }
    if (event.key == "d") {
        document.querySelector("#eKey").classList.toggle("key_active")
    }
    if (event.key == "f") {
        document.querySelector("#fKey").classList.toggle("key_active")
    }
    if (event.key == "g") {
        document.querySelector("#gKey").classList.toggle("key_active")
    }
    if (event.key == "h") {
        document.querySelector("#aKey").classList.toggle("key_active")
    }
    if (event.key == "j") {
        document.querySelector("#bKey").classList.toggle("key_active")
    }
    
})
