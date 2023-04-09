/* 1 получить все ЛИ
2 получить кнопки + добавить клик функцию
3  добавить форИч на ЛИ 
    3.1 привязать элементы к клику на кнопку
4 показывать ближ ЛИ слева+справа
    4.1 скрывать ЛИ , которые не соседи
5 дизейблить стрелку или переходить к ЛИ заново (если конечный)
*/


const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const sliderWrap = document.querySelector('.images');

nextBtn.addEventListener('click', () => moveSlide(true));
prevBtn.addEventListener('click', () => moveSlide(false));


function moveSlide(moveTo) {
    
    const cs = window.getComputedStyle(sliderWrap); 
    let right = parseInt(cs.right);
    const pos = moveTo ? -135 : +135;
    //console.log('right--> ', right);

     if(right == '0') return sliderWrap.style.right = right + 945 + "px";

     else if(right == '945' && moveTo === false) return sliderWrap.style.right = right + -810 + "px";
    
    sliderWrap.style.right = right + pos + "px";
}

