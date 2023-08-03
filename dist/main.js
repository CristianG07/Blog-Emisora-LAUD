function closeDiv(myElement) {
  let div = document.getElementById(myElement);
  div.style.display = "none";
}

//In this page, the follow code control the main slide used for both mobile and desktop devices:
let swiper = new Swiper(".swiper-container", {
  preventInteractionOnTransition: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

//Controls the slider for all sections that contains info cards.
let mySwiper = new Swiper(".mobil-swiper-container", {
  scrollbar: {
    enabled: false,
  },
  slidesPerView: 1.3,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    scale: 0.98,
  },
  breakpoints: {
    640: {
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 30,
      loop: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
      loop: true,
      coverflowEffect: {
        slideShadows: false,
        scale: 0.98,
      },
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,
      effect: "none",
      autoplay: {
        delay: 7000,
        disableOnInteraction: true,
      },
    },
    1536: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,
      effect: "none",
      autoplay: {
        delay: 10000,
      },
    },
  },
});

//Controls the slider for all sections that contains info cards.
let mySwiperStyleTwo = new Swiper(".mobil-swiper-container-style-two", {
  scrollbar: {
    enabled: false,
  },
  slidesPerView: 1.3,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    scale: 0.98,
  },
  breakpoints: {
    640: {
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlidesBounds: true,
      effect: "none",
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlidesBounds: true,
      effect: "none",
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      effect: "none",
      autoplay: {
        delay: 10000,
      },
    },
    1536: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      effect: "none",
      autoplay: {
        delay: 10000,
      },
    },
  },
});

let mySquareCoverSwiper = new Swiper(".mobil-swiper-container-gallery", {
  scrollbarHide: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
    1536: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});

document.getElementById("hamburguer").addEventListener("click", () => {
  document.body.classList.toggle("no-scroll");
});

$(document).ready(function () {
  $("#my_nanogallery2").nanogallery2({
    galleryMosaic: [
      // default layout
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 4, r: 1 },
      { w: 2, h: 1, c: 5, r: 1 },
      { w: 2, h: 2, c: 5, r: 2 },
      { w: 1, h: 1, c: 4, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 2, h: 1, c: 3, r: 4 },
      { w: 1, h: 1, c: 5, r: 4 },
      { w: 1, h: 1, c: 6, r: 4 },
    ],
    galleryMosaicXS: [
      // layout for XS width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 },
    ],
    galleryMosaicSM: [
      // layout for SM width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 },
    ],
    galleryMaxRows: 1,
    galleryDisplayMode: "rows",
    gallerySorting: "random",
    thumbnailDisplayOrder: "random",

    thumbnailHeight: "280",
    thumbnailWidth: "320",
    thumbnailAlignment: "scaled",
    thumbnailGutterWidth: 0,
    thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,

    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },

    // DISPLAY ANIMATION
    // for thumbnails
    thumbnailDisplayTransition: "imageSlideUp",
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: "easeInOutQuint",
    thumbnailDisplayInterval: 60,
    // LIGHTBOX
    viewerToolbar: { display: false },
    viewerTools: {
      topLeft: "label",
      topRight:
        "shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton",
    },

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { background: "#111" },
    },

    // DEEP LINKING
    locationHash: true,
    items: [
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%201.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%201.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%202.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%202.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%203.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%203.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%204.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%204.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%205.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque%205.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-02/LAUD%20Rock%20al%20Parque.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-06/LAUD%20BALTHVS%201.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-06/LAUD%20BALTHVS%201.jpg",
      },
      {
        src: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-06/LAUD%20christina%20y%20los%20subterraneos%201.jpg",
        srct: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2023-06/LAUD%20christina%20y%20los%20subterraneos%201.jpg",
      },
    ],
  });
});

$(document).ready(function () {
  // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
  $('.category_list .category_item[category="martes"]').addClass("bg-red-700");

  // FILTRANDO PRODUCTOS  ============================================

  $(".category_item").click(function () {
    var catProduct = $(this).attr("category");

    // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $(".category_item").removeClass("bg-red-700");
    $(this).addClass("bg-red-700");

    // OCULTANDO PRODUCTOS =========================
    $(".product-item").css("transform", "scale(0)");
    function hideProduct() {
      $(".product-item").hide();
    }
    setTimeout(hideProduct, 400);

    // MOSTRANDO PRODUCTOS =========================
    function showProduct() {
      $('.product-item[category="' + catProduct + '"]').show();
      $('.product-item[category2="' + catProduct + '"]').show();
      $('.product-item[category="' + catProduct + '"]').css(
        "transform",
        "scale(1)",
      );
      $('.product-item[category2="' + catProduct + '"]').css(
        "transform",
        "scale(1)",
      );
    }
    setTimeout(showProduct, 400);
  });

  // MOSTRANDO TODOS LOS PRODUCTOS =======================

  $('.category_item[category="martes"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });

  $('.category_item[category="lunes"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });

  $('.category_item[category="jueves"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });

  $('.category_item[category="domingo"]').click(function () {
    function showAll() {
      $(".product-item").show();
      $(".product-item").css("transform", "scale(1)");
    }
    setTimeout(showAll, 400);
  });
});

function toggleDiv(btnState) {
  console.log(btnState);
  let audioPlayer = document.getElementById("audioPlayer");
  let videoPlayer = document.getElementById("videoPlayer");
  let labelOnAir = document.getElementById("onAirBtn");
  let labelOffAir = document.getElementById("offAirBtn");
  let onAirBall = document.getElementById("onAirBall");

  switch (btnState) {
    case true:
      labelOnAir.style.display = "none";
      labelOffAir.style.display = "block";
      videoPlayer.style.display = "block";
      videoPlayer.classList.remove(
        "animate__animated",
        "animate__slideOutDown",
      );
      videoPlayer.classList.add("animate__animated", "animate__slideInUp");
      audioPlayer.style.display = "none";
      onAirBall.style.backgroundColor = "#B50000";
      break;
    case false:
      labelOnAir.style.display = "block";
      labelOffAir.style.display = "none";
      videoPlayer.classList.remove("animate__animated", "animate__slideInUp");
      videoPlayer.classList.add("animate__animated", "animate__slideOutDown");
      audioPlayer.style.display = "block";
      onAirBall.style.backgroundColor = "#FFF";
      break;
    default:
      videoPlayer.style.display = "none";
      break;
  }
}
