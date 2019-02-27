const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');

const bg = new Image();
const one = new Image();
const two = new Image();

bg.src = 'bg.jpg';
one.src = 'one.jpg';
two.src = 'two.jpg';

let oneX = 0;
let oneY = 200;

let twoX = 200;
let twoY = 0;

let stepX = 5;
let stepY = 2;

let pause = false;

function draw() {
    requestID = requestAnimationFrame(draw);

    ctx.clearRect(0,0,500,500);

    if(oneX < 0 || oneX > 400) {
        stepX = -stepX;
    }

    if(twoY < 0 || twoY > 400) {
        stepY = -stepY;
    }
    
    oneX += stepX;
    twoY += stepY;

    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(one,oneX,oneY);
    ctx.drawImage(two,twoX,twoY);


}

startBtn.addEventListener('click',function(){
    pause = false;
    if (pause === false){
        requestAnimationFrame(draw);
    }
});

stopBtn.addEventListener('click',function(){

    cancelAnimationFrame(requestID);
    pause = true;

});
