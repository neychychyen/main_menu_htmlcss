// ПРЕДНАСТРОЙКИ переменные
let CurrentScroll = getCurrentScroll()


let CurrentTransition = get_transtion()



// ПРЕДНАСТРОЙКИ функции
return_scroll(getCurrentScroll())

// ФУНКЦИИ

function default__(item, event){
  if (document.querySelector(item).classList.contains('active')){
    menu_onckick(document.querySelector(event));
  }
}



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


function shut_menu(){
  if (document.querySelector('.menu_button_nested').classList.contains('active_button')){
        menu_onclick(document.querySelector('#mm'))
      }
}


function event_scroll(){// Что происходит при скроле, нужен для window.addEventListener('scroll'




    let NewScroll = getCurrentScroll()


    if (NewScroll - CurrentScroll > 0) {
      
      if (document.querySelector('.menu_button_nested').classList.contains('active_button')){
        menu_onclick(document.querySelector('#mm'))
      }
      

      document.querySelector('.main_menu').classList.add('main_menu_muted')
      unactive_menu('.panel_mm.searchbar')
      unactive_menu('.panel_mm.sidebar')
      unactive_menu('.panel_mm.mainbar')

      
    } else {
      
      active_menu('.panel_mm.mainbar')
      document.querySelector('.main_menu').classList.remove('main_menu_muted')


      
    }
    if (NewScroll < 10){
      active_menu('.panel_mm.mainbar')
      document.querySelector('.main_menu').classList.remove('main_menu_muted')
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


function unactive_menu(queryS = '.panel_mm.searchbar'){
  elem = document.querySelector(queryS)
  elem.classList.add('flexable_height')
  elem.classList.add('hidden')

  setTimeout(() => {
      elem.classList.remove('flexable_height');
    }, get_transtion());
}

function active_menu(queryS = '.panel_mm.searchbar'){
  elem = document.querySelector(queryS)
  elem.classList.add('flexable_height')
  elem.classList.remove('hidden')

  setTimeout(() => {
      elem.classList.remove('flexable_height');
    }, get_transtion());
}

// Используются в фронтенде

function return_resize() {
  const width = window.innerWidth;
  document.querySelector('#scale').innerText = 'Текущий scale: ' + window.innerWidth;
}

function return_scroll(scrollPosition) {
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



// onclick фунции
function del_activate_submenu(){

  if (document.querySelector('.submenu.submenu_visible'))
  document.querySelector('.submenu.submenu_visible').classList.remove('submenu_visible')

}
function activate_submenu(that){ // Активирует кнопку субменю, на которую нажали
  res = that.querySelector('.fixed .submenu')
  if (document.querySelector('.submenu.submenu_visible') == res){del_activate_submenu()}
  else{
    del_activate_submenu()
  


  res.classList.add('submenu_visible')
  }
  

}


function search_onclick(){

  if (document.querySelector('.menu_button_nested').classList.contains('active_button')){
        menu_onclick(document.querySelector('#mm'))
      }

  var searchbar = document.querySelector('.panel_mm.searchbar')
  unactive_menu('.panel_mm.sidebar')

  if (searchbar.classList.contains('hidden')){active_menu('.panel_mm.searchbar')}
  else {unactive_menu('.panel_mm.searchbar')}
}


function menu_onclick(event){


  
  unactive_menu('.panel_mm.searchbar')

  var sidebar = document.querySelector('.panel_mm.sidebar')
  if (sidebar.classList.contains('hidden')){active_menu('.panel_mm.sidebar')}
  else {unactive_menu('.panel_mm.sidebar')}

  


  



  
  
  
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
    first_elem.classList.add('u_deg_m_45');
    second_elem.classList.add('u_deg45');
    first_elem.classList.remove('deg45');
    
    second_elem.classList.remove('deg_m_45');
    father.classList.remove('active_button')
    father.classList.add('unactive_button')
    
      
      
} else {  

    first_elem.classList.add('active');
    first_elem.classList.add('deg45');
    second_elem.classList.add('deg_m_45');
    first_elem.classList.remove('u_deg_m_45');
    second_elem.classList.remove('u_deg45');
    
    father.classList.add('active_button')
    father.classList.remove('unactive_button')



}

}






