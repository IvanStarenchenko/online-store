// Мобильное меню бургер


function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

// Аккордеон

function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion() 

// Аккордеон №2
if (document.querySelector(".js-accordion")) {
  const asideAccordion = document.querySelector(".js-accordion");

  asideAccordion.addEventListener("click", (e) => {
    const activeButton = e.target.closest(".js-accordion-trigger");
    if (!activeButton) return; // Игнорируем клик, если он был не на заголовке
    const activePanel = activeButton.closest(".js-accordion-block");
    toggleAccordion(activePanel);
  });

  function toggleAccordion(panelToActivate) {
    const activeButton = panelToActivate.querySelector(".js-accordion-trigger");
    const activePanel = panelToActivate.querySelector(".js-accordion-content");
    const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

    if (activePanelIsOpened === "true") {
      activeButton.setAttribute("aria-expanded", false);
      activePanel.setAttribute("aria-hidden", true);
    } else {
      activeButton.setAttribute("aria-expanded", true);
      activePanel.setAttribute("aria-hidden", false);
    }
  }
}


// ------------СЛАЙДЕРЫ

const swiper = new Swiper('.swiper-hero', {
    spaceBetween: 20,
    speed: 2000,
    parallax: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });

const newSwiper = new Swiper('.new-swiper', {
  slidesPerView: 4,
    spaceBetween: 40,
  // If we need pagination
    centeredSlides: true,
  loop: false,
  pagination: {
    el: '.new-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.new-button-next',
    prevEl: '.new-button-prev',  
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

//   // Responsive breakpoints
  breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1.5,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
  },
  768: {
    slidesPerView: 3,
      spaceBetween: 30,
    centeredSlides: false,
  },
  1024: {
    slidesPerView: 4,
      spaceBetween: 30,
    centeredSlides: false,
  },

}
});

const feedbackSwiper = new Swiper('.feedback-swiper', {
  slidesPerView: 3,
  spaceBetween: 23,
  speed: 2000,
  parallax: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.feedback-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.feedback-swiper-button-next',
    prevEl: '.feedback-swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

//   // Responsive breakpoints
//   breakpoints: {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 3,
//     spaceBetween: 20
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//     spaceBetween: 30
//   },
// }
});

const productSwiper = new Swiper('.swiper-product', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: {
      el: '.swiper-thumbs',
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});


//------Переключение каталога товаров на новые и рекоммендованые в каталоге товаров
document.addEventListener('DOMContentLoaded', () => {

  const newButton = document.getElementById('newBtn');
  const recommendedButton = document.getElementById('recommendedBtn');


  const men = document.getElementById('new');
  const women = document.getElementById('recommended');
    if(recommendedButton){
    recommendedButton.addEventListener('click', () => {
      men.style.display = 'grid';
      women.style.display = 'none';
      recommendedButton.classList.add('active');
      newButton.classList.remove('active');
    });
    }
  
    if(newButton){
      newButton.addEventListener('click', () => {
      women.style.display = 'grid';
      women.classList.add('active');
      men.style.display = 'none';
      recommendedButton.classList.remove('active');
      newButton.classList.add('active');
    });
    }
  

});

//------ Изменение цены при нажатии на размер
document.addEventListener('DOMContentLoaded', () => {

  const xs = document.getElementById('xs');
  const s = document.getElementById('s');
  const m = document.getElementById('m');
  const l = document.getElementById('l');
  const xl = document.getElementById('xl');

  const xsPrice = document.getElementById('xsPrice');
  const sPrice = document.getElementById('sPrice');
  const mPrice = document.getElementById('mPrice');
  const lPrice = document.getElementById('lPrice');
  const xlPrice = document.getElementById('xlPrice');

  if(xs){
    xs.addEventListener('click', () => {
      xsPrice.style.display = 'flex';
      sPrice.style.display = 'none';
      mPrice.style.display = 'none';
      lPrice.style.display = 'none';
      xlPrice.style.display = 'none';
    });
  }

  if(s){
    s.addEventListener('click', () => {
      sPrice.style.display = 'flex';
      xsPrice.style.display = 'none';
      mPrice.style.display = 'none';
      lPrice.style.display = 'none';
      xlPrice.style.display = 'none';
    });
  }
  
  if(m){
    m.addEventListener('click', () => {
      mPrice.style.display = 'flex';
      sPrice.style.display = 'none';
      xsPrice.style.display = 'none';
      lPrice.style.display = 'none';
      xlPrice.style.display = 'none';
    });
  }

  
  if(l){
    l.addEventListener('click', () => {
      lPrice.style.display = 'flex';
      sPrice.style.display = 'none';
      mPrice.style.display = 'none';
      xsPrice.style.display = 'none';
      xlPrice.style.display = 'none';
    });
  }
  
  if(xl){
    xl.addEventListener('click', () => {
      xlPrice.style.display = 'flex';
      sPrice.style.display = 'none';
      mPrice.style.display = 'none';
      lPrice.style.display = 'none';
      xsPrice.style.display = 'none';
    });
  }
  
});

//-------Переключение контента по кнопкам на странице товара
document.addEventListener('DOMContentLoaded', () => {

  const descriptionBtn = document.getElementById('descriptionBtn');
  const commentsBtn = document.getElementById('commentsBtn');
  const questionBtn = document.getElementById('questionBtn');
  

  const description = document.getElementById('description');
  const comments = document.getElementById('comments');
  const question = document.getElementById('question');

  if(descriptionBtn){
    descriptionBtn.addEventListener('click', () => {
      description.style.display = 'flex';

      descriptionBtn.classList.add('border-bottom');
      commentsBtn.classList.remove('border-bottom');
      questionBtn.classList.remove('border-bottom');

      comments.style.display = 'none';
      question.style.display = 'none';
    });
  }

  if(commentsBtn){
    commentsBtn.addEventListener('click', () => {
    comments.style.display = 'flex';

    commentsBtn.classList.add('border-bottom');
    descriptionBtn.classList.remove('border-bottom');
    questionBtn.classList.remove('border-bottom');
    
    description.style.display = 'none';
    question.style.display = 'none';
  });
  }
  
  if(questionBtn){
    questionBtn.addEventListener('click', () => {
      question.style.display = 'flex';

      questionBtn.classList.add('border-bottom');
      descriptionBtn.classList.remove('border-bottom');
      commentsBtn.classList.remove('border-bottom');

      comments.style.display = 'none';
      description.style.display = 'none';
    });
  }
  

});


// -------Счётчик в корзине, который увеличивает цену в total

document.addEventListener('DOMContentLoaded', function(){
  
  const counter = document.getElementById('counter');
  const decrementButton = document.getElementById('decrement');
  const incrementButton = document.getElementById('increment');

  let count = 1;
  const maxCount = 10;

  const counter2 = document.getElementById('counter2');
  const decrementButton2 = document.getElementById('decrement2');
  const incrementButton2 = document.getElementById('increment2');

  let count2 = 1;
  const maxCount2 = 10;

  const counter3 = document.getElementById('counter3');
  const decrementButton3 = document.getElementById('decrement3');
  const incrementButton3 = document.getElementById('increment3');

  let count3 = 1;
  const maxCount3 = 10;

  const blueFlowerPrintDefoult = document.getElementById('blue-flower-print-crop-top-price');
  const blueFlowerPrintTotal = document.getElementById('blue-flower-print-crop-top-total');

  const levenderHoodieDefoult = document.getElementById('levender-hoodie-price');
  const levenderHoodieTotal = document.getElementById('levender-hoodie-total');

  const blackSweatshirtDefoult = document.getElementById('black-sweatshirt-price');
  const blackSweatshirtTotal = document.getElementById('black-sweatshirt-total');



  let price1 = parseFloat(blueFlowerPrintDefoult.textContent.replace('$', ''));
  let price2 = parseFloat(levenderHoodieDefoult.textContent.replace('$', ''));
  let price3 = parseFloat(blackSweatshirtDefoult.textContent.replace('$', ''));


  decrementButton.addEventListener('click', () => {
    if (count > 1) {
      count--;
      updateCounterAndTotal();
    }
  });
  decrementButton2.addEventListener('click', () => {
    if (count2 > 1) {
      count2--;
      updateCounterAndTotal2();
    }
  });
  decrementButton3.addEventListener('click', () => {
    if (count3 > 1) {
      count3--;
      updateCounterAndTotal3();
    }
  });

  incrementButton.addEventListener('click', () => {
    if (count < maxCount) {
      count++;
      updateCounterAndTotal();
    }
  });
  incrementButton2.addEventListener('click', () => {
    if (count2 < maxCount2) {
      count2++;
      updateCounterAndTotal2();
    }
  });
  incrementButton3.addEventListener('click', () => {
    if (count3 < maxCount3) {
      count3++;
      updateCounterAndTotal3();
    }
  });

  function updateCounterAndTotal() {
    counter.textContent = count;
    const totalPrice1 = (count * price1).toFixed(2);
    blueFlowerPrintTotal.textContent = '$' + totalPrice1;

  }
  function updateCounterAndTotal2() {

    counter2.textContent = count2;
    const totalPrice2 = (count2 * price2).toFixed(2);
    levenderHoodieTotal.textContent = '$' + totalPrice2;

  }
  function updateCounterAndTotal3() {

    counter3.textContent = count3;
    const totalPrice3 = (count3 * price3).toFixed(2);
    blackSweatshirtTotal.textContent = '$' + totalPrice3;
  }  
});


// --------Показывает пароль по нажатию
document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('passwordInput');


  const togglePasswordButton = document.getElementById('toggle-password-button');



  togglePasswordButton.addEventListener('click', () => {
    console.log('click');
    if (passwordInput.type === 'password') {
      console.log('in','click');
      passwordInput.type = 'text';
      togglePasswordButton.textContent = 'Hide';
    } else {
      console.log('in','click');
      passwordInput.type = 'password';
      togglePasswordButton.textContent = 'Show';
    }
  });

});



// --------Личный кабинет. Переключение страниц
document.addEventListener('DOMContentLoaded', () => {

  const ordersBtn = document.getElementById('ordersBtn');
  const wishlistBtn = document.getElementById('wishlistBtn');
  const infoBtn = document.getElementById('infoBtn');
  const detailsBtn = document.getElementById('detailsBtn');
  const changeBtn = document.querySelectorAll('.changeBtn');


  const orders = document.getElementById('orders');
  const wishlist = document.getElementById('wishlist');
  const info = document.getElementById('info');
  const details = document.getElementById('details');
  const change = document.getElementById('change');


  if(ordersBtn){
    ordersBtn.addEventListener('click', () => {
      orders.style.display = 'grid';
      wishlist.style.display = 'none';
      info.style.display = 'none';
      details.style.display = 'none';
      change.style.display = 'none';
    });
  }

  if(wishlistBtn){
    wishlistBtn.addEventListener('click', () => {
      wishlist.style.display = 'grid';
      orders.style.display = 'none';
      info.style.display = 'none';
      details.style.display = 'none';
      change.style.display = 'none';
    });
  }
  if(infoBtn){
    infoBtn.addEventListener('click', () => {
      info.style.display = 'grid';
      orders.style.display = 'none';
      wishlist.style.display = 'none';
      details.style.display = 'none';
      change.style.display = 'none';
    });
  }
  if(detailsBtn){
    detailsBtn.addEventListener('click', () => {
      details.style.display = 'grid';
      info.style.display = 'none';
      orders.style.display = 'none';
      wishlist.style.display = 'none';
      change.style.display = 'none';
    });
  }
  
  // if(changeBtn){
  //   changeBtn.addEventListener('click', () => {
  //     change.style.display = 'grid';
  //     orders.style.display = 'none';
  //     wishlist.style.display = 'none';
  //     info.style.display = 'none';
  //     details.style.display = 'none';
  //   });
  // }
  changeBtn.forEach(function(changeBtn) {
    changeBtn.addEventListener('click', function() {
      change.style.display = 'grid';
      orders.style.display = 'none';
      wishlist.style.display = 'none';
      info.style.display = 'none';
      details.style.display = 'none';
    });
});
});

$(function() {
  $("#price-slider").slider({
    range: true,
    min: 0,
    max: 2000,
    values: [700, 1250],
    slide: function(event, ui) {
      $("#min-price").text("$" + ui.values[0]);
      $("#max-price").text("$" + ui.values[1]);
    }
  });
  
  // Инициализация начальных значений
  $("#min-price").text("$" + $("#price-slider").slider("values", 0));
  $("#max-price").text("$" + $("#price-slider").slider("values", 1));
});

