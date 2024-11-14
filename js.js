let CurrentScroll = getCurrentScroll()
return_scroll(getCurrentScroll())


function getCurrentScroll() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }

function return_scroll(scrollPosition) {
  document.querySelector('#scroly').innerText = 'Текущий скролл: ' + scrollPosition;
      
}

function removeLastChar(str) {
  return str.slice(0, -1);
}

function get_transtion(){
  let result = getComputedStyle(document.documentElement).getPropertyValue('--transition_time');
  result = removeLastChar(result);
  return parseFloat(result)*1000;
}



window.addEventListener('scroll', function() {

    let NewScroll = getCurrentScroll()

    return_scroll(getCurrentScroll())

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
  });