// ПРЕДНАСТРОЙКИ переменные
let CurrentScroll = getCurrentScroll()


let CurrentTransition = get_transtion()


// ПРЕДНАСТРОЙКИ функции
return_scroll(getCurrentScroll())

// ФУНКЦИИ


function getCurrentScroll() { // Узнать текущий скролл по Y
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }




function removeLastChar(str) {// Нужен для get_transtion
  return str.slice(0, -1);
}

function get_transtion(){ // Выудить базовую задержку анимацции из css
  let result = getComputedStyle(document.documentElement).getPropertyValue('--transition_time');
  result = removeLastChar(result);
  return parseFloat(result)*1000;
}



function event_scroll(){// Что происходит при скроле, нужен для window.addEventListener('scroll'


    let NewScroll = getCurrentScroll()

    const mainMenu = document.querySelector('.main_menu');
    
    // Если прокручено больше чем 100px (можно настроить значение)
    if (NewScroll - CurrentScroll > 0) {
      mainMenu.classList.add('shrink');
      
    } else {
      mainMenu.classList.add('transition');
      mainMenu.classList.remove('shrink');
      setTimeout(() => {
      mainMenu.classList.remove('transition');
    }, get_transtion());
      
    }
    if (NewScroll < 10){
      mainMenu.classList.add('transition');
      mainMenu.classList.remove('shrink');
    }
    CurrentScroll = NewScroll


}






function get_transtion(){
  let result = getComputedStyle(document.documentElement).getPropertyValue('--transition_time');
  result = removeLastChar(result);
  return parseFloat(result)*1000;
}


function disableScroll() {
  document.body.style.overflow = 'hidden'; // Отключаем прокрутку
}
function enableScroll() {
  document.body.style.overflow = ''; // Восстанавливаем прокрутку
}
function handleResize(){
        disableScroll();

  // Восстанавливаем прокрутку через 1 секунду (1000 миллисекунд)
  setTimeout(enableScroll, CurrentTransition);
}


// Используются в фронтенде

function return_resize() {
  const width = window.innerWidth;
  document.querySelector('#scale').innerText = 'Текущий scale: ' + window.innerWidth;
}

function return_scroll(scrollPosition) {
  console.log(scrollPosition)
  document.querySelector('#scroly').innerText = 'Текущий скролл: ' + scrollPosition;
      
}



// Ивенты


window.addEventListener('scroll', function(){
        event_scroll();
        return_scroll(CurrentScroll);

} );


window.addEventListener('resize', function(){
        handleResize();
        return_resize();

} );
