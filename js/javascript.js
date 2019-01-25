/* put active class and remove from the others */

// Get links
let links = Array.from(document.querySelectorAll('.nav-link'));

// Add event listener
links.forEach(link => link.addEventListener('click', handlClick));

// Build function
function handlClick(e) {
    links.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');
    e.preventDefault();
}






/*Adjust height for images*/

// Get window outer height
let winH   = window.outerHeight;

// Get upper Bar height
let upperH = document.querySelector('.upper-bar').clientHeight;

// Get nav bar height
let navH   = document.querySelector('.navbar').clientHeight;

// Get carousel items
let carousel_items = document.querySelectorAll('.slider .carousel-item');

// Calculate height from upper bar height and nav bar height
let sliderH = winH - (upperH + navH);

// Turn nodes to array
let nodes = Array.from(carousel_items);

// Set height into each carousel item
nodes.forEach(node => node.style.height = `${sliderH}px`);

