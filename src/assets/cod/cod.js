const day = document.getElementById('day');
const year = document.getElementById('year');
const card_t = document.getElementById('card__t');
const code_active = document.getElementById('code__active');
const code_hide = document.getElementById('code__hide');
const number_1 = document.getElementById('number_1')
const number_2 = document.getElementById('number_2')
const number_3 = document.getElementById('number_3')
const number_4 = document.getElementById('number_4')



//Код для открывание и закрывание навигации
document.getElementById('logo').addEventListener('click', (e) => {
    // document.getElementById('nav').style.display='none'
    document.getElementById('side').classList.toggle('custom-height');
})

document.getElementById('submit').addEventListener('click', (e) => {
    // const day = document.getElementById('day');
    const selectedYear = year.options[year.selectedIndex].value
    const selectedDay = day.options[day.selectedIndex].value;
    const selectedCard = card_t.value
    const code_a = code_active.value
    const code_h = code_hide.value
    const number1 = number_1.value
    const number2 = number_2.value
    const number3 = number_3.value
    const number4 = number_4.value
    

    console.log(selectedDay);
    console.log(selectedYear);
    console.log(selectedCard);
    console.log(code_a);
    console.log(code_h);
    console.log(number1);
    console.log(number2);
    console.log(number3);
    console.log(number4);
})