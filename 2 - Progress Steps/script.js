var count = 0

const prev = document.getElementById('prev')
const next = document.getElementById('next')

const circles = document.querySelectorAll('.circle')

prev.addEventListener('click', () => {
    count--

    if (count < 0) {
        count = 0
    }

    update()
})

next.addEventListener('click', () => {
    count++

    if (count > circles.length - 1) {
        count = circles.length - 1
    }
    
    update()
})

function update() {
    var progress = count * 33

    circles.forEach((circle, index) => {
        if (index <= count) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    document.documentElement.style.setProperty('--progress-bar-size', progress.toString() + '%')

    if (count === 0) {
        prev.disabled = true
    } 
    
    else if (count === circles.length - 1) {
        next.disabled = true
    } 
    
    else {
        prev.disabled = false
        next.disabled = false
    }
}