let slider = document.getElementById('range')
let output = document.querySelector('.output')
let reset = document.querySelector('.reset')
let randomColor = document.querySelector('.random')
let grid = document.querySelector(".grid");
let colorPicker = document.querySelector('#colorPicker');
let black = document.querySelector('.black');
let eraser = document.querySelector('.eraser');
let pick = document.querySelector('.pick');
let n = 16; // default dimension n x n (16 x 16)

function createGrid(){ // function that creates grid according to slider value. 
 grid.innerHTML = '';   // clears board once grid dimension changes
    grid.setAttribute('style', `grid-template-columns: repeat(${n}, 2fr); grid-template-rows: repeat(${n}, 2fr);`);
    for (let i = 1; i <= n*n; i++ ) {;
        let div = document.createElement('div')
        div.classList.add('square');
        div.addEventListener('mouseover', () => { 
        div.style.backgroundColor = colorPicker.value;
})
        grid.appendChild(div) 
}
}
createGrid();//default is 16x16

// function that creates grid according to slider value. 
slider.addEventListener('input',() => {
    colorPicker.value = '#000000';
    grid.innerHTML = '';   // clears board once grid dimension changes
    let sliderValue = document.querySelector('.slider').value;
    grid.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 2fr); grid-template-rows: repeat(${sliderValue}, 2fr);`);
    output.innerHTML = +sliderValue+'x'+sliderValue;
    for (let i = 1; i <= sliderValue*sliderValue; i++ ) {;
        let div = document.createElement('div')
        div.classList.add('square');
        div.addEventListener('mouseover', () => { 
            div.style.backgroundColor = colorPicker.value;
})
        grid.appendChild(div) 
}
}
 )
 //RESET BOARD 
 reset.addEventListener('click',() => {
    colorPicker.value = '#000000';
    grid.innerHTML = '';
    let sliderValue = document.querySelector('.slider').value;
    grid.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 2fr); grid-template-rows: repeat(${sliderValue}, 2fr);`);
    for (let i = 1; i <= sliderValue*sliderValue; i++ ) {;
        let div = document.createElement('div')
        div.classList.add('square');
        div.addEventListener('mouseover', () => {   
            div.style.backgroundColor = colorPicker.value;
})
        grid.appendChild(div) 
}
}
 )

// RANDOM COLOR FUNCTION
 function random() {
    return '#'+(Math.floor(Math.random()*16777215).toString(16));
}
 
// RANDOM COLOR BUTTON
randomColor.addEventListener('click', () => {
    let sliderValue = document.querySelector('.slider').value;
  
    for (let i = 0; i < sliderValue*sliderValue; i++) {
        grid.children[i].addEventListener('mouseover', (element) =>{
            element.target.style.backgroundColor = random();
        })
    }
 })

   
 // BLACK BUTTON
 black.addEventListener('click', () => {
    colorPicker.value = '#000000'
    let sliderValue = document.querySelector('.slider').value;
    for (let i = 0; i < sliderValue*sliderValue; i++) {
        grid.children[i].addEventListener('mouseover', (element) =>{
            element.target.style.backgroundColor = colorPicker.value;
        })
    }
 })

 // ERASER BUTTON
 eraser.addEventListener('click', () => {
    let sliderValue = document.querySelector('.slider').value;
    for (let i = 0; i < sliderValue*sliderValue; i++) {
        grid.children[i].addEventListener('mouseover', (element) =>{
            element.target.style.backgroundColor = 'white';
        })
    }
 })


 // PICK COLOR
 pick.addEventListener('click', () => {
    colorPicker.value = '#000000'
    let sliderValue = document.querySelector('.slider').value;
    for (let i = 0; i < sliderValue*sliderValue; i++) {
        grid.children[i].addEventListener('mouseover', (element) =>{
            element.target.style.backgroundColor = colorPicker.value;
        })
    }
 })




