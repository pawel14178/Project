
let popup = document.querySelector('.popup')
let popup_close = document.querySelectorAll('.popup_close')
let detailsButton = document.querySelectorAll('.getDetailsButton')
let orders_container = document.querySelector(".orders_container")

let inputFieldIndex = document.querySelectorAll('.admin_wrapper input[type="text"]')

//all buttons details
for (x=0; x < detailsButton.length; x++){
    detailsButton[x].addEventListener('click', ()=>{
        popup.classList.add("show")
        orders_container.classList.add("blur");
    })
}

//all buttons close
for (let i = 0; i < popup_close.length; i++){
    popup_close[i].addEventListener('click', () =>{
    popup.classList.remove("show");
    orders_container.classList.remove("blur");
    });
}

// Details button logic
// Select data for the selected record



detailsButton.forEach((elem) => {
    elem.addEventListener('click', ()=>{
        const index = elem.getAttribute('data-index')
        inputFieldIndex.forEach((element)=>{
            element.setAttribute('data-index', index)
        })        
        console.log('Received from server:', dataFromServer);
    })
})



// var inputElement = document.querySelector('.admin_wrapper input[data-index]');
// var dataIndexValue = inputElement.getAttribute('data-index');
//

//administrator panel details

const updateInputCheckbox = document.querySelectorAll('.admin_wrapper input[type="checkbox"]')
const updateInputField = document.querySelectorAll('.admin_wrapper input[type="text"]')


updateInputCheckbox.forEach((elem, index) => {
    elem.addEventListener('change', (e)=>{
        if (e.target.checked){
            updateInputField[index].disabled = false
        }else{
            updateInputField[index].disabled = true
        }
    })
})
