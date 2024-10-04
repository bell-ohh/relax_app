const container = document.getElementById('container');
const text = document.getElementById('text');



//the time it takes to breathe in, hold, and breathe out
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


breatheAnimation();



function breatheAnimation() {
    text.innerText = 'Breathe in!';
container.className = 'container grow';


    setTimeout(() => {
        text.innerText = 'Hold';



        setTimeout(() => {
            text.innerText = 'Breathe out!'
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}


setInterval(breatheAnimation, totalTime);