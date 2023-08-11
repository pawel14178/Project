
const detailsButton = document.querySelectorAll('.getDetailsButton')

const selectedButton = 0

// Details button logic
// Select data for the selected record

detailsButton.forEach((elem, index) => {
    elem.addEventListener('click', ()=>{
        selectedButton = index
    })
})

module.exports = selectedButton