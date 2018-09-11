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
$(document).ready(function(){

    var arrayValue = [];

    $('.filter-button').click(function(){
        
		var value = $(this).attr('data-filter');
        
        if (! $(this).hasClass('buttonactive')){
			$(this).css('color','red').addClass('buttonactive');
            arrayValue.push(value);
        } else {
            $(this).css('color','black').removeClass('buttonactive');
            var i = arrayValue.indexOf(value);
            if(i != -1) {
            arrayValue.splice(i, 1);
            }
        }
        
        $('.filter').hide();		
        
        var finalValue = '';

        for (index=0;index<arrayValue.length;index++) {
			
			finalValue += '.'+arrayValue[index];
			
        }

        alert(finalValue);
        
        if (! finalValue == '') {
            $('.filter').filter(finalValue).show(500);
        } else {
            $('.filter').show();
        }

        if (value=='all') {
            arrayValue = [];
            finalValue = '';
			$('.filter').show();
			$('.filter-button').css('color','black');
        }
    });

    
    /*if ($('.filter-button').removeClass('active')) {
$(this).removeClass("active");
}
$(this).addClass("active");*/

});
