//Getting access to all relevant keys
const textArea = document.querySelector('textarea')
const alphabets = document.querySelectorAll(".alpha")
const keyboard = document.querySelector(".keyboard")
const backspace = document.querySelector("#backspace")
const characters = document.querySelectorAll(".char")
const enter = document.getElementById("enter")
const spacebar = document.getElementById("spacebar")
const done = document.getElementById("done")

//Making keyboard visible 
keyboard.classList.add("keyboard--hidden")
textArea.addEventListener("focus", (e) => {
    keyboard.classList.remove("keyboard--hidden")
})


//Making keyboard functional
const capslock = document.querySelector(".keyboard__key--activatable");
let caps = false;

capslock.addEventListener('click', () => {
    capslock.classList.toggle("keyboard__key--active")
    caps = !caps;
    if (caps) {
        alphabets.forEach(key => {
            key.innerHTML = key.innerHTML.toUpperCase()
        })
    } else {
        alphabets.forEach(key => {
            key.innerHTML = key.innerHTML.toLowerCase()
        })
    }
})

backspace.addEventListener("click", () => {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1)
})

alphabets.forEach((key) => {
    if (!key.classList.contains("keyboard__key--dark")) {
        key.addEventListener('click', (e) => {
            textArea.value += e.target.innerHTML
        })
    }
})

characters.forEach((char) => {
    char.addEventListener("click", (e) => {
        textArea.value += e.target.innerHTML
    })
})

spacebar.addEventListener("click", (e) => {
    textArea.value += " "
})

enter.addEventListener("click", (e) => {
    textArea.value += "\n"
})

//Making keyboard invisible
done.addEventListener("click", () => {
    keyboard.classList.add("keyboard--hidden")
})
