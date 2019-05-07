$(function(){
        $('#button-mobile').on('click touch', function(e){
			//$('.div_logo').css('opacity','0');
			//$('.div_logo').css('z-index','-1');
			//$('#button-mobile').css('display','none');
			//$('#button-mobile-x').css('display','block');
            $('#mobile').toggle();
			
        });
    });

function myFunction(x) {
    x.classList.toggle("change");
}