const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const socialIcons = document.querySelector(".social-icons");

navToggle.addEventListener("click", function () {
  console.log(links.classList);
  links.classList.toggle("show-links");
  socialIcons.classList.toggle("show-icons");
});
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });
//Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

//========================
// download button start
//======================== 

   var know = {
     salom: "Assalom alaykum yaxshimisiz",
     "Assalom alaykum": "Assalom alaykum, kayfiyatingiz qanday?",
     "assalom alaykum": "Assalom alaykum, kayfiyatingiz qanday?",
     "seni kim yaratgan":
       "meni Shohjahon Xolpo'latov yaratgan va men haliyam sinovdaman",
     "hozir soat nechchi": "o'zingiz qarab olin, yoki telefoningiz yuqmi?",
     yuq: "unda sotib olin",
     "soat necha": "o'zingiz qarab olin, yoki telefoningiz yuqmi?",
     "soat nechchi": "o'zingiz qarab olin, yoki telefoningiz yuqmi?",
     "shohjahon kim": "dasturchi",
     "shohjahon qayerda": "uzidan surang telefon raqami 91 224-79-40",
     "shohijahon qayerda": "uzidan surang telefon raqami 91 224-79-40",
     "yordam kerak": "qanaqa",
     "yordamiz kerak": "yaxshi surang",
     "bu sayt kimniki": "bu sayt shohjahonniki",
     "men buyurtma bermoqchiman":
       "qanaqa unda @ShokhjakhonKholpulatov77 bilan bog'laning",
     "buyurtma bermoqchiman": "unda @ShokhjakhonKholpulatov77 bilan bog'laning",
     "ismin nima": "uf men ZeroBot man dedimku",
     "ismin kim": "ismim zeroBot",
     "e qaleysan eshmat": "o'zing eshmat",
     qaleysan: "yaxshi rahmat uzingiz yaxshimi",
     qandaysan: "yaxshi rahmat uzingiz yaxshimi",
     qande: "yaxshi rahmat uzingiz yaxshimi",
     qale: "yaxshi rahmat uzingiz yaxshimi",
     erkak: "ha erkakligimni qayerdan bildin ahmoq",
     kimsan: "zeroBot man uzingchi?",
     tanishaylik: "hop :)",
     "isming nima": "zeroBot",
     "isming kim": "zeroBot uzingiznikichi?",
     qayerdansan: "bilmayman iltimos mendan shaxsiy savollar suramang",
     "nimani yoqtirasan": "sizdan biron nima urganishni :)",
     "kimni yoqtirasan": "sizni :)",
     "kim bor": "men bor keling nima xizmat :)",
     tel: "91 224-79-40",
     raqam: "91 224-79-40",
     "raqamni kursat": "91 224-79-40",
     "raqamni ko'rsat": "91 224-79-40",
     "raqamni ko'rsating": "91 224-79-40",
     uxlayabsanmi: "yo'q men 24 soat online man",
     "uxlab qoldinmi": "yo'q men 24 soat online man",
     uyquchi: "yo'q men 24 soat online man uzing uyquchi",
     yaxshimisan: "suraganingiz uchun rahmat uzingiz ham yaxshimisiz?",
     yaxshiman: "xursandman",
     yaxshi: "xursandman",
     "zo'r": "xursandman",
     zur: "xursandman",
     xayr: "xayr sizni kutib qolamiz",
     xayrr: "xayr sizni kutib qolamiz",
     "men ketdim": "xayr sizni kutib qolamiz",
     uzingchi: "yaxshi rahmat :)",
     "nima gaplar": "olamda tinchlik",
     "nima gaplarr": "olamda tinchlik",
     "nima gap": "olamda tinchlik",
     tinch: "ha yaxshi",
     "ismim shohjahon": "xush kelibsiz Shohjahon",
     "ismim Shohjahon": "xush kelibsiz Shohjahon",
     "ismim Shoxjahon": "xush kelibsiz Shohjahon",
     "ismim Shoxjaxon": "xush kelibsiz Shohjahon",
     "ismim Shohjaxon": "xush kelibsiz Shohjahon",
     "ismim Shohijahon": "xush kelibsiz Shohjahon",
     "ob havo qanday": "yaxshidir",
     hop: "ok :)",
     xop: "ok :)",
     nima: "nima nima?",
     rahmat: "arzimaydi",
     qaleysiz: "yaxshi rahmat ahvolingiz qanday uydagila ham yaxshimi",
     qalesiz: "yaxshi rahmat ahvolingiz qanday uydagila ham yaxshimi",
     "yaxshi rahmat": "hop sog' bo'ling",
     shohjahon: "yaxshi xush kelibsiz Shohjahon",
     shohjahonman: "yaxshi xush kelibsiz Shohjahon",
     shoxjahonman: "yaxshi xush kelibsiz shoxjahon",
     shoxjaxonman: "yaxshi xush kelibsiz shoxjaxon",
     shohjaxonman: "yaxshi xush kelibsiz shohjaxon",
     "telefon nomeri kerak": "91 224-79-40",
   };
   function talk() {
     var user = document.getElementById("userBox").value;
     document.getElementById("chatLog").innerHTML += "Siz: " + user + "<br>";
     if (user in know) {
       document.getElementById("chatLog").innerHTML +=
         "ZeroBot: " + know[user] + "<br>" + "<hr>";
     } else {
       document.getElementById("chatLog").innerHTML +=
         "men hali juda aqlli emasman, mendan boshqa narsa so'rayqolin <br>";
     }
   }