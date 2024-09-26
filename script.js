const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const stars = $$('.star');
const submitBtn = $('.btn-primary');
const card = $('.card');
const main = $('.card-body.main');
const thanks = $('.card-body.thanks');
const label = $('.selected');

thanks.style.display = 'none';


stars.forEach((star) => {
    star.addEventListener('click', () => {
        for (let index = 0; index < stars.length; index++) {
            if (stars[index].classList.contains('active')) {
                stars[index].classList.remove('active');
            }            
        }       
        star.classList.toggle('active');
    })
})



submitBtn.addEventListener('click', () => {
    const starSelected = [...stars].filter(star => star.classList.contains('active'))
    if (starSelected.length === 0) {
        alert('Please select a rating');
        return;
    } else {
        main.style.display = 'none';
        card.querySelector('.thanks').style.display = 'flex';
        const starSelectedValue = starSelected[0].innerText;
        const labelElement = `<label>You selected ${starSelectedValue} out of 5</label></div>`
        label.innerHTML = labelElement;
    }
})





console.log();

