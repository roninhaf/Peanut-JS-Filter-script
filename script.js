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

    /*Declaring array holding all the added attributes*/ 
    var arrayValue = [];

    $('.filter-button').click(function(){

        /*Declaring value that will hold an attribute per click*/
		var value = $(this).attr('data-filter');
        
        /**Specific case for value all */
        if (value=='all') {
            $('.filter').show();
            $('.filter-button').css('color','black').removeClass('buttonactive');
            arrayValue = [];
            return;
        }

        /*If button not already active, add value to array, otherwise remove the value from array*/
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
        
        /*Start by hiding everything*/
        $('.filter').hide();		
        
        /*Initialize empty final value that will hold what the array contained. */
        var finalValue = '';

        /**Adding all the values of the array to the final value */
        for (index=0;index<arrayValue.length;index++) {
			
			finalValue += '.'+arrayValue[index];
			
        }
        
        /**Show final result */
        if (! finalValue == '') {
            $('.filter').filter(finalValue).show(500);
        } else {
            $('.filter').show();
        }
    });

    
    /*if ($('.filter-button').removeClass('active')) {
$(this).removeClass("active");
}
$(this).addClass("active");*/

});
