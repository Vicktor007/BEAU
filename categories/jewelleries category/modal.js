// Variables

// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn');



// Event Listeners 

// openBtn.addEventListener('click', function(){

//     modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {

//     modalContainer.style.display = 'none';
// });

// window.addEventListener('click', function(e) {

//     if (e.target === modalContainer) {
//         modalContainer.style.display = 'none';
//     }
// });


// Variables

// let openBtn2 = document.getElementById('open-btn2');
// let modalContainer2 = document.getElementById('modal-container2');
// let closeBtn2 = document.getElementById('close-btn2');



// Event Listeners 

// openBtn2.addEventListener('click', function(){

//     modalContainer2.style.display = 'block';
// });

// closeBtn2.addEventListener('click', function() {

//     modalContainer2.style.display = 'none';
// });

// window.addEventListener('click', function(e) {

//     if (e.target === modalContainer2) {
//         modalContainer2.style.display = 'none';
//     }
// });

// Variables

// let openBtn3 = document.getElementById('open-btn3');
// let modalContainer3 = document.getElementById('modal-container3');
// let closeBtn3 = document.getElementById('close-btn3');



// Event Listeners 

// openBtn3.addEventListener('click', function(){

//     modalContainer3.style.display = 'block';
// });

// closeBtn3.addEventListener('click', function() {

//     modalContainer3.style.display = 'none';
// });

// window.addEventListener('click', function(e) {

//     if (e.target === modalContainer3) {
//         modalContainer3.style.display = 'none';
//     }
// });


// Variables

// let openBtn4 = document.getElementById('open-btn4');
// let modalContainer4 = document.getElementById('modal-container4');
// let closeBtn4 = document.getElementById('close-btn4');



// Event Listeners 

// openBtn4.addEventListener('click', function(){

//     modalContainer4.style.display = 'block';
// });

// closeBtn4.addEventListener('click', function() {

//     modalContainer4.style.display = 'none';
// });

// window.addEventListener('click', function(e) {

//     if (e.target === modalContainer4) {
//         modalContainer4.style.display = 'none';
//     }
// });

// Variables

// let openBtn5 = document.getElementById('open-btn5');
// let modalContainer5 = document.getElementById('modal-container5');
// let closeBtn5 = document.getElementById('close-btn5');



// Event Listeners 

// openBtn5.addEventListener('click', function(){

//     modalContainer5.style.display = 'block';
// });

// closeBtn5.addEventListener('click', function() {

//     modalContainer5.style.display = 'none';
// });

// window.addEventListener('click', function(e) {

//     if (e.target === modalContainer5) {
//         modalContainer5.style.display = 'none';
//     }
// });


let modalContainers = document.querySelectorAll('#modal-container');

for(let mod of modalContainers) {
    mod.addEventListener('click', none2);
}

function none2(e) {
    if(e.target === this) {
        this.style.display = 'none';
    }
}

let closeBtns = document.querySelectorAll('#close-btn');

for(let cl of closeBtns) {
    cl.addEventListener('click', none);
}

function none() {
    for(let mod of modalContainers) {
        mod.style.display = "none";
    }
}

const openBtns = document.querySelectorAll("#open-btn");

for(let op of openBtns) {
    op.addEventListener('click', block);
}

function block() {
    for(let mod of modalContainers) {
        mod.style.display = 'block';
    }
}