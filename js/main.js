fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector(".footer").innerHTML = data));

fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector(".header").innerHTML = data));



  // Swiper Hero

var swiper = new Swiper(".swiper_hero_bottom", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    effect: "creative",
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      
  });
  var swiper2 = new Swiper(".swiper_hero_top", {
    loop: true,
    spaceBetween: 10,
    effect: "creative",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    thumbs: {
      swiper: swiper,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  // END Swiper Hero



if($(".news_slider").length > 0) {
  var swiper = new Swiper(".news_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
    loop:true,
    navigation: {
      nextEl: ".news_nav_next",
      prevEl: ".news_nav_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
} 



if ($(".swiper_reference").length > 0) {
  var second = new Swiper(".swiper_reference", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },

      1366: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}


if($(".backfaceSwiper").length > 0) {
  var swiper = new Swiper(".backfaceSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop:true,
});
}


if($(".navigation-wrap").length > 0 ) {
  var inNav = $(".inNav");
  var backNav = $(".backNav");
  $(".inImg").hide();
  
  inNav.click(() => {
    $(".inImg").show();
    $(".backImg").hide();
    $("inNavCheck").text()= `<i class="bi bi-check-lg"></i>`;
  });

  backNav.click(() => {
    $(".inImg").hide();
    $(".backImg").show();
  })

};



// About 

$(".read_p").click(function () {
    $(this).parent().find(".last_p2").toggleClass("d-none");
    $(this).parent().find(".last_p").toggleClass("gradient_p");
  
});



// Cursor Media Query

var mediaQuery = window.matchMedia("(min-width:768px)");
if(mediaQuery.matches) {
    // Cursor modified
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
    e.stopPropagation();
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

// Cursor HOVER modified - When hovering an element
var cursor = document.getElementById('cursor');
var clickableCursor = document.getElementsByTagName("img", "a");

for (var i = 0; i < clickableCursor.length; i++) {
    clickableCursor[i].addEventListener('mouseover', () => {
        cursor.style.height = "80px";
        cursor.style.width = "80px";
        cursor.style.animation = "cursorAnimation 5s linear infinite";
        cursor.style.background = "transparent";
    });
    clickableCursor[i].addEventListener('mouseout', () => {
        cursor.style.height = "40px";
        cursor.style.width = "40px";
        cursor.style.animation = "none";
        cursor.style.border = "2px solid #000";
        cursor.style.background = "none";
    });
}
}



// Sticky Bar

jQuery(document).ready(function () {
  jQuery('.detail_nav').theiaStickySidebar({
      additionalMarginTop: 130,
      minWidth: 991,
  });
});


var prevScrollPos = $(window).scrollTop();
$(window).scroll(function () {
  var currentScrollPos = $(window).scrollTop();
  if (prevScrollPos > currentScrollPos) {
    $("header").css("top", 0);
  } else {
    $("header").css("top", -110);
  }
  prevScrollPos = currentScrollPos;
});


const changedLogo1 = () => {
  $(".changedLogo img").attr("src","img/global/logo.png");
}

const changedLogo2 = () => {
  $(".changedLogo img").attr("src","img/global/logo_h.png");
}



/* const selectorChanged = (selector, presentation) => {
  $(selector).change(() => {
    selectVal = $(this).val();
    for(let i = 0; i < presentation.length ; i++) {
      if(presentation[i].dataset.value == selectVal) {
        presentation[i].click();
      }
    }
  })
};


selectorChanged($(".aboutSelector"), $(".about li div.nav-link"));

*/

var aboutSelector = $(".aboutSelector");

$(aboutSelector).change(function (e) {  
  var selectVal = $(this).val();
  var presentation = $(".about li div.nav-link");

  for(let i = 0; i < presentation.length ; i++) {
    if(presentation[i].dataset.value == selectVal) {
      presentation[i].click();
    }
  }
});


var projectSelector = $(".projectSelector");

$(projectSelector).change(function (e) {  
  var selectVal = $(this).val();
  var presentation = $(".project_wrapper li div.nav-link");
  for(let i = 0; i < presentation.length ; i++) {
    if(presentation[i].dataset.value == selectVal) {
      presentation[i].click();
    }
  }
});



var plainSelector = $(".plainSelector");
$(plainSelector).change(function (e) {  
  var selectVal = $(this).val();
  var presentation = $(".plain_Nav li a.nav-link");
  for(let i = 0; i < presentation.length ; i++) {
    if(presentation[i].dataset.value == selectVal) {
      presentation[i].click();
    }
  }
});

var mimariSelector = $(".mimariSelector");
$(mimariSelector).change(function (e) {  
  var selectVal = $(this).val();
  var presentation = $(".social_wrapper_in li a.nav-link");
  for(let i = 0; i < presentation.length ; i++) {
    if(presentation[i].dataset.value == selectVal) {
      presentation[i].click();
    }
  }
});

var newsSelector = $(".newsSelector");
$(newsSelector).change(function (e) {  
  var selectVal = $(this).val();
  var presentation = $(".plain_Nav li a.nav-link");
  for(let i = 0; i < presentation.length ; i++) {
    if(presentation[i].dataset.value == selectVal) {
      presentation[i].click();
    }
  }
});









