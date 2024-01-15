const containerOne = document.querySelector('.container-1')
const btnOneOn = document.querySelector('.btn-1-svg-on')
const btnOneOff = document.querySelector('.btn-1-svg-off')

containerOne.addEventListener('click', (e) => {
    e.preventDefault()
    if (btnOneOn.style.display === 'block') {
        btnOneOff.style.display = 'block'
        btnOneOn.style.display = 'none'
    } else {
        btnOneOff.style.display = 'none'
        btnOneOn.style.display = 'block'
    }
})