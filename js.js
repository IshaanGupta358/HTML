window.onscroll = function() {myFunction()};
        
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }

        $('.sub-menu').each(function () {
            var count = $(this).find("li").length;
            if (count >= 12) {
                $(this).addClass('col2');
                $('li').addClass('col2');
            }

            if (count >= 24) {
                $(this).toggleClass('col2 col3');
            }
        });

       
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-50px";
          }
          prevScrollpos = currentScrollPos;

var loader = document.getElementById("preloader");
          window.addEventListener("load", function(){
          loader.style.display= "none";
          })
        