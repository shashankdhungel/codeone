let colors = ['red','green','blue','skyblue','orange','grey'];

let btn = document.getElementById('button')

btn.addEventListener('click',function(){

    let randomColor = colors[Math.floor(Math.random()*10)];
    
    let change = document.getElementById('demo');
    
    change.style.background = randomColor;

}
)
