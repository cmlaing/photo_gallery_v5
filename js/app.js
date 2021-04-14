/**
 * app.js
 * uses baquetteBox as the lightbox plugin from https://github.com/feimosi/baguetteBox.js/
 * 
 * A real-time search function for filtering images with specific search items.
 * 
 * 
 **/

baguetteBox.run('.gallery-grid');


/* Custom Search Function */

function search_thumbNails() {
   
   // define search term and change all to lowercase
    let searchTerm = document.getElementById('search').value;
    searchTerm = searchTerm.toLowerCase(); 

    // search anchor tags that link to image locations
    let images = document.getElementsByTagName('a'); 

    // cycles through each data-caption and sees if it includes the searchTerm
    for (i = 0; i < images.length; i++) { 
        /* if searchTerm and data-caption do not match, hide image */
        if (!images[i].getAttribute('data-caption').toLowerCase().includes(searchTerm)) { 
            images[i].style.display="none"; 
        } 
        else { // display if searchTerm and data-caption match
            images[i].style.display="";				 
            } 
        } 

}

 // keep track of keystrokes
search.addEventListener('keyup', search_thumbNails);



