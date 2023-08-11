
let transport_button = document.querySelector('.mainBtnStyle');
let wrapper = document.querySelector('.wrapper')
let popup = document.querySelector('.popup')
let popup_close = document.querySelectorAll('.popup_close')
let popup_submit = document.querySelector('.popup_submit')
let ad_image = document.querySelector('.popup_image');
let ad_image2 = document.querySelector('.popup_image2');
let popup__container = document.querySelector('.popup__container');

transport_button.addEventListener('click', () =>{
    popup.classList.add("show");
    wrapper.classList.add("blur");
    ad_image.classList.add("image_move");
});

for (let i = 0; i < popup_close.length; i++){
    popup_close[i].addEventListener('click', () =>{
    popup.classList.remove("show");
    ad_image2.classList.remove("image_move2");
    wrapper.classList.remove("blur");
    ad_image.classList.remove("image_move");
    ad_image.classList.remove("image_move-forward");
    popup__container.classList.remove("rotate");
    });
}

