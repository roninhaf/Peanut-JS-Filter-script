/* $(function(){
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
}  */

// faire disparaitre toutes les cartes
// afficher tous les acteurs ou mannequins selon si page est acteur ou mannequins


document.addEventListener("DOMContentLoaded", function startScript() {

    const page = document.getElementsByTagName("article")[0].id;
    const actorOrModelCards = Array.from(document.getElementsByClassName(page)); 
    const allCards = Array.from(document.getElementsByClassName('filter'));
    const buttons = Array.from(document.getElementsByClassName('filter-button'));
    const classSelected = [];
    
    function displayDefault() {
        
        allCards.map(elem => elem.style.display = 'none');
        actorOrModelCards.map(elem => elem.style.display = 'initial');
    
    }
    
    function displaySelected(event) {
        
        classSelected.push(event.target.getAttribute('data-filter'));
        console.log(classSelected);
    }

    displayDefault();
    
    buttons.map(elem => elem.addEventListener('click', displaySelected));

  });

