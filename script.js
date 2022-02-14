
$(document).ready(function () {
    let icon = document.getElementById("icon-d");

    let check = document.getElementById("check");

    let atag = document.getElementById("atag");


    icon.onclick = function() 
    {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme"))
        {
            icon.src = "light-mode.png";
            document.getElementById('check-btn-rotate').style.color='#fff';
        } 
        else 
        {
            icon.src = "dark-mode.png";
            document.getElementById('check-btn-rotate').style.color='#000';
        }
    }


    check.onclick = function() {
        if (window.innerWidth < 501) {
            document.getElementById("container").classList.toggle("blur-class");
        }

        document.getElementById("check-btn-rotate").classList.toggle("rotate-check");
    }


    atag.onclick = function() {
        document.getElementById('check-btn-rotate').click();
    }


    // Show Home Div on page load .
    $(".home-img-div").removeClass("anim-left");
    $(".home-para-div").removeClass("anim-right");
    

    $(document).on('scroll',function(){
    
        var homePoint = $("#home").offset().top;
        var colorPoint = $("#color").offset().top;
        var breedPoint = $("#breed").offset().top;
        var aboutPoint = $("#about").offset().top;

        var scrollPoint=$(this).scrollTop();

        //Home animation
        if(scrollPoint>=homePoint-350 && scrollPoint <=breedPoint-350)
        {
            $(".home-img-div").removeClass("anim-left");
            $(".home-para-div").removeClass("anim-right");
        }
        else 
        {
            $(".home-img-div").addClass("anim-left");
            $(".home-para-div").addClass("anim-right");
        }


           //Breed animation
           if(scrollPoint>=breedPoint-200 && scrollPoint <=colorPoint-250 )
           {
               $(".breed-img").css("opacity","1");
               $(".breed-para").css("opacity","1");
              
           }
           else 
           {
               $(".breed-img").css("opacity","0");
               $(".breed-para").css("opacity","0");
           }


        //Color animation . 
        if(scrollPoint>=colorPoint-350 && scrollPoint <=aboutPoint-450)
        {
            $(".color-img").removeClass("anim-left");
            $(".color-para").removeClass("anim-right");
        }
        else 
        {
            $(".color-img").addClass("anim-left");
            $(".color-para").addClass("anim-right");
        }


        //About animation
        if(scrollPoint>=aboutPoint-350)
        {
            $(".about-h2").css("opacity","1");
            $(".about-para").removeClass("anim-right");
        }
        else 
        {
            $(".about-h2").css("opacity","0");
            $(".about-para").addClass("anim-right");
        }

    });
    
});
