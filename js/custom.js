
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").classList.add("fade-out"); // Fade out preloader
        setTimeout(function() {
            document.getElementById("preloader").style.display = "none"; // Hide preloader
            let mainContent = document.getElementById("main-content");
            mainContent.classList.remove("hidden"); // Remove the hidden class
            mainContent.style.opacity = "1"; // Ensure it becomes visible
        }, 900); // Wait for fade-out animation before removing
    }, 6); // Show preloader for 2.8 seconds
};




// const cursor = document.createElement("div");
// cursor.classList.add("custom-cursor");
// document.body.appendChild(cursor);

// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });

// document.querySelectorAll("button, .filter-tab, .event-card").forEach((el) => {
//   el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
//   el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
// });
