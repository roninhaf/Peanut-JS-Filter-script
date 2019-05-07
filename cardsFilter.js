'use strict';

document.addEventListener("DOMContentLoaded", function startScript() {

    const page = document.getElementsByTagName("article")[0].id;
    const actorOrModelCards = Array.from(document.getElementsByClassName(page)); 
    const allCards = Array.from(document.getElementsByClassName('filter'));
    const buttons = Array.from(document.getElementsByClassName('filter-button'));
    var classSelected = [];

    function displayDefault() {
        
        allCards.map(elem => elem.style.display = 'none');
        actorOrModelCards.map(elem => elem.style.display = 'initial');
    
    }
    
    function addRemoveSelectedClass(event) {
        
        let selected = event.target.getAttribute('data-filter');
        
        if (selected == 'all') {
            classSelected = [];
            buttons.map(elem => elem.style.color = 'black');
            displayDefault();
            return;
        }
        
        classSelected.includes(selected) ? (function () {
            classSelected.splice(classSelected.indexOf(selected), 1);
            event.target.style.color = 'black';})()
            :
            (function () {
                classSelected.push(selected);
                event.target.style.color = 'red';})();
        
        if (classSelected.length == 0) {
            displayDefault();
            return;
        }
        
        actorOrModelCards.map(function (elem)  {

            let containsClass = true;
            
            classSelected.map(thatClass => {if (! elem.classList.contains(thatClass)) containsClass = false});
            containsClass ? elem.style.display = 'initial' : elem.style.display = 'none';
        });
        
    }

    displayDefault();
    
    buttons.map(elem => elem.addEventListener('click', addRemoveSelectedClass));

  });

