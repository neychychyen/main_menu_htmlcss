let CurrentScroll = getCurrentScroll()
return_scroll(getCurrentScroll())


function getCurrentScroll() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }

function return_scroll(scrollPosition) {
  document.querySelector('#scroly').innerText = 'Текущий скролл: ' + scrollPosition;
      
}



window.addEventListener('scroll', function() {

    let NewScroll = getCurrentScroll()

    return_scroll(getCurrentScroll())

    const mainMenu = document.querySelector('.main_menu');
    
    // Если прокручено больше чем 100px (можно настроить значение)
    if (NewScroll - CurrentScroll > 0) {
      mainMenu.classList.add('shrink');
    } else {
      mainMenu.classList.remove('shrink');
    }

    CurrentScroll = NewScroll
  });