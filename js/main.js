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



if($(".about").length > 0) {

const hoverFunction = (selectorDiv, selectorImg, selectorOverImg, selectorOutImg) => {
  $(selectorDiv).hover(() => {
      $(selectorImg).attr("src", selectorOverImg);
      
    }, () => {
      $(selectorImg).attr("src", selectorOutImg);
    }
  );
};

hoverFunction(".about_features:nth-child(1)", ".about_features:nth-child(1) img", "img/home/paipurth_icon1.2.svg", "img/home/paipurth_icon1.1.svg");
hoverFunction(".about_features:nth-child(2)", ".about_features:nth-child(2) img", "img/home/paipurth_icon2.2.svg", "img/home/paipurth_icon2.1.svg");
hoverFunction(".about_features:nth-child(3)", ".about_features:nth-child(3) img", "img/home/paipurth_icon3.2.svg", "img/home/paipurth_icon3.1.svg");
hoverFunction(".about_features:nth-child(4)", ".about_features:nth-child(4) img", "img/home/paipurth_icon4.2.svg", "img/home/paipurth_icon4.1.svg");
hoverFunction(".about_features:nth-child(5)", ".about_features:nth-child(5) img", "img/home/paipurth_icon5.2.svg", "img/home/paipurth_icon5.1.svg");
hoverFunction(".about_features:nth-child(6)", ".about_features:nth-child(6) img", "img/home/paipurth_icon2.2.svg", "img/home/paipurth_icon2.1.svg");

};





if($(".news_slider").length > 0) {
  var swiper = new Swiper(".news_slider", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,
    navigation: {
      nextEl: ".news_nav_next",
      prevEl: ".news_nav_prev",
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


if($(".social_wrapper").length > 0) {

}

  /* 
   const inImg = {
   img1: "img/project_detail/f2.jpg",
   img2: "img/project_detail/f3.jpg",
  };

  const backImg = {
    img1: "img/project_detail/backface_slide1.png", 
    img2: "img/project_detail/backface_slide1.png", 
  };



  inNav.click(function() {
    var swiperImg = $(".backfaceSwiper .swiper-slide img");
    for (var i = 0; i < swiperImg.length; i++) {
      for(var j = 0; j < inImg.length ; j++) {
        swiperImg[i].attr("src", inImg[j]);
      }
    }
    console.log(swiperImg[i]);
  });
}

*/


$(".read_p").click(function () {
    $(this).parent().find(".last_p2").toggleClass("d-none");
    $(this).parent().find(".last_p").toggleClass("gradient_p");
  
});


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
};



jQuery(document).ready(function () {
  jQuery('.detail_nav').theiaStickySidebar({
      additionalMarginTop: 130,
      minWidth: 991,
  });
});

