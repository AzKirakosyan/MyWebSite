
$(document).ready(function () {
    $(".lightbox").hide();
    $(".big").click(function () {
        $(".lightbox").show();
    });
    $(".lightboxImgX").click(function () {
        $(".lightbox").hide();
    });

    
    $(".lightbox2").hide();
    $(".big2").click(function () {
        $(".lightbox2").show();
    });
    $(".lightboxImgX2").click(function () {
        $(".lightbox2").hide();
    });
    

    $(".lightbox3").hide();
    $(".big3").click(function () {
        $(".lightbox3").show();
    });
    $(".lightboxImgX3").click(function () {
        $(".lightbox3").hide();
    });
    
    
    

    $(".lightbox4").hide();
    $(".big4").click(function () {
        $(".lightbox4").show();
    });
    $(".lightboxImgX4").click(function () {
        $(".lightbox4").hide();
    });




    

        $(".w-f").rotate({
            bind: {
                mouseover: function () {
                    $(this).rotate({animateTo: 360})
                },
                mouseout: function () {
                    $(this).rotate({animateTo: 0})
                }
            }

        });

        $(".w-tw").rotate({
            bind: {
                mouseover: function () {
                    $(this).rotate({animateTo: 360})
                },
                mouseout: function () {
                    $(this).rotate({animateTo: 0})
                }
            }

        });
        $(".w-in").rotate({
            bind: {
                mouseover: function () {
                    $(this).rotate({animateTo: 360})
                },
                mouseout: function () {
                    $(this).rotate({animateTo: 0})
                }
            }

        });
		
		 var x=0;
		
		$(".buttonPlus1").click(function(){
			 if(x==0){
			$(".OpenClose3").css("display","none")
        $(".OpenClose1").css("display","block")
		x=1;
			 }
		});
			 
			 $(".buttonPlus2").click(function(){
			if(x==1){
			$(".OpenClose1").css("display","none")
        $(".OpenClose2").css("display","block")
		x=2;
			 }
			 	});
		
		 $(".buttonPlus3").click(function(){
			if(x==2){
			$(".OpenClose2").css("display","none")
        $(".OpenClose3").css("display","block")
		x=3;
			 }
			 	});
		
		 $(".buttonPlus4").click(function(){
			if(x==3){
			$(".OpenClose3").css("display","none")
        $(".OpenClose4").css("display","block")
		x=4;
			 }
			 	});
		
    
});
