const dino = document.querySelector(".dino"),
    cactus = document.querySelector(".cactus");
    points = document.querySelector(".points"); 
    record = document.querySelector(".record");

let speed = 1.5;
let play;
let point = 0;
let records =[];

document.addEventListener("keydown", ()=>{
    if (dino.classList != 'jump'){
         dino.classList.add('jump')
    }  setTimeout(()=>{
        dino.classList.remove('jump')
    },200) ;  
});

setInterval(()=>{
    cactus.style.animation = `cactusMov ${speed = speed - 0.005}s infinite linear `;
},300);

setInterval(()=>{
    points.innerHTML =  `your points: ${point}`;
    point = point + 1;
},100);

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 41.5 && cactusLeft > 0 && dinoTop>=140){
        cactus.classList.remove('cactus');
        cactus.style.animation = 'none'
        play = confirm(`Play again?`);
        
        records.push(point);
        records.sort(nwe);

        function nwe (a,b){
            return b-a;
        }
        
        if (play ) {
            cactus.classList.add('cactus');
            speed = 1.5;
            point = 0;
            setInterval(()=>{
                cactus.style.animation = `cactusMov ${speed = speed - 0.001}s infinite linear `;
            },1000);
            record.innerHTML =  `your record: ${records[0]-1}`;
        }  
    }
}, 1);

 
       