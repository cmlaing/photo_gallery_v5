/**
 * app.js
 * uses baquetteBox as the lightbox plugin from https://github.com/feimosi/baguetteBox.js/
 * 
 **/

baguetteBox.run('.gallery');
const search = new Filter('search', 'data-caption'); // from searchFilter.js 