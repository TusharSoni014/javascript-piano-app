const whiteKeys = document.querySelectorAll('.white-key')
const whiteKeysArray = Array.from(whiteKeys)
const blackKeys = document.querySelectorAll('.black-key')
const blackKeysArray = Array.from(blackKeys)
const volumeSlider = document.querySelector('#volume-range')

whiteKeysArray.forEach((element) => {
    const audio = new Audio(`tunes/${element.id}.wav`)
    element.addEventListener("mousemove", () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
    element.addEventListener("click", () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
})

blackKeysArray.forEach((element) => {
    const audio = new Audio(`tunes/${element.id}.wav`)
    element.addEventListener('mousemove', () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
    element.addEventListener('click', () => {
        audio.volume = volumeSlider.value / 100
        audio.play()
    })
})

document.addEventListener("keydown", (e) => {
    blackKeysArray.forEach((element) => {
        if (element.id == e.key) {
            element.click()
            element.classList.add('active-black')
            setTimeout(() => {
                element.classList.remove('active-black')
            }, 150)
        }
    })
    whiteKeysArray.forEach((element) => {
        if (element.id == e.key) {
            element.click()
            element.classList.add('active-white')
            setTimeout(() => {
                element.classList.remove('active-white')
            }, 150)
        }
    })
})