let slider = document.getElementById('range')
let output = document.querySelector('.dimensions')
let n; // default dimension n x n (16 x 16)
let reset = document.querySelector('.reset')
let randomColor = document.querySelector('.random')
let container = document.querySelector(".container");
let colorPicker = document.querySelector('#colorPicker')

function update () {  // functions that changes values once slider.value is altered
    output.innerHTML = + slider.value + 'x' +slider.value;
    grid(slider.value);
}

slider.addEventListener('input', update); // Every time the slider changes, it runs the update function




function grid(n){ // function that creates grid according to slider value. 
   
 container.innerHTML = '';   // clears board once grid dimension changes
    container.setAttribute('style', `grid-template-columns: repeat(${n}, 2fr); grid-template-rows: repeat(${n}, 2fr);`);
    for (let i = 1; i <= n*n; i++ ) {;
        let div = document.createElement('div')
        container.appendChild(div)
        
            div.addEventListener('mouseover', () => { 
            div.classList.add('paint');
            div.style.backgroundColor = colorPicker.value;
         
        })
        reset.addEventListener('click', () =>
        div.style.backgroundColor = 'white');
        
            randomColor.addEventListener('click', () => {
                div.classList.add('paint');
                div.style.backgroundColor = random();
        })

    
    }
}

function random() {
    return '#'+(Math.floor(Math.random()*16777215).toString(16));
}


grid(16); //default is 16x16

