
$(document).ready(function(){
    
    $(".aparecer").css("position", "relative").css("left", "150%").animate({left: "0%"}, 1500);
    
    $(".aDerecha").css("position", "relative").css("right", "150%").animate({right: "0%"}, 1500);
      
    $("aside").hide().fadeIn(2000);

    $(".detalle").hide().fadeIn(2000);

    $("#detalle").hide().fadeIn(2000);

    $('.rotar').click(function() {
        $(this).animate({ rotation: '+=360deg' }, {
            duration: 500,
            step: function(now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            }
        });
    });
    
});

   
