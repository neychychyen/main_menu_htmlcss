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
        document.querySelector('body').click();
        console.log(document.querySelector('body'))
        event_scroll();
        document.querySelector('.content').click()
        return_scroll(CurrentScroll);

} );


window.addEventListener('resize', function(){
        handleResize();
        return_resize();
        document.querySelector('body').click();

} );



// onclick фунции

function menu_onckick(event){
  
  var nestedDiv = event.querySelector('div');
  var nestedDivClass = nestedDiv.querySelector('div'); // Получение класса вложенного div

  ClassList = nestedDivClass.classList
  ClassList = Array.from(ClassList);

  elements = document.querySelectorAll('.' + ClassList[0])
  
  assemble_event_activity(elements[0], elements[1], nestedDiv) // Вывод класса вложенного div в консоль или выполнение других операций

}
function assemble_event_activity(first_elem, second_elem, father){

  if (first_elem.classList.contains('active')) {

    first_elem.classList.remove('active');
    first_elem.classList.add('u_deg45');
    second_elem.classList.add('u_deg45');
    first_elem.classList.remove('deg45');
    
    second_elem.classList.remove('deg_m_45');
    father.classList.remove('active_button')
    father.classList.add('unactive_button')
    
    SideBar(true)
    
      
      
} else {  

    first_elem.classList.add('active');
    first_elem.classList.add('deg45');
    second_elem.classList.add('deg_m_45');
    first_elem.classList.remove('u_deg45');
    second_elem.classList.remove('u_deg45');
    
    father.classList.add('active_button')
    father.classList.remove('unactive_button')

    SideBar()


}

}


function SideBar(del=false){
  sidebar = document.querySelector('.sidebar')
  main_menu = document.querySelector('.main_menu')

  if (del){
    main_menu.classList.remove('heightx2');
    sidebar.classList.add('hidden');
  }

  else {
    main_menu.classList.add('heightx2');
    sidebar.classList.remove('hidden');
  }

}