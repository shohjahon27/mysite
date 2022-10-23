window.addEventListener( 'DOMContentLoaded', () => { 
  const navToggle = document.querySelector( ".nav-toggle" ),
    links = document.querySelector( ".links" ),
    socialIcons = document.querySelector( ".social-icons" ),
    loader = document.querySelector( '.loader' );

  navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
    socialIcons.classList.toggle("show-icons");
  });
  
  setTimeout( () => { 
    loader.style.opacity = '0'
    setTimeout( () => {
      loader.style.display = 'none';
    }, 500)
  }, 2000 )


} )
