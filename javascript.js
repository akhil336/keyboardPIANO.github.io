document.addEventListener("keydown",function(e){
    var aud=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(aud);
    if(!aud){return;}
    aud.currentTime = 0;
    aud.play();
    var x = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(x.classList.contains('lightgrey')){
    x.classList.add('pressed');
    console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
    }
    else{
        x.classList.add('pressed2');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed2'); }, 100);
    } 
})

document.querySelector('#A').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="65"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="65"]`);
    x.classList.add('pressed');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
});

document.querySelector('#S').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="83"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="83"]`);
    x.classList.add('pressed2');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed2'); }, 100);
});

document.querySelector('#D').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="68"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="68"]`);
    x.classList.add('pressed');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
});

document.querySelector('#F').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="70"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="70"]`);
    x.classList.add('pressed2');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed2'); }, 100);
});

document.querySelector('#G').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="71"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="71"]`);
    x.classList.add('pressed');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
});

document.querySelector('#H').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="72"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="72"]`);
    x.classList.add('pressed2');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed2'); }, 100);
});

document.querySelector('#J').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="74"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="74"]`);
    x.classList.add('pressed');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
});

document.querySelector('#K').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="75"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="75"]`);
    x.classList.add('pressed2');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed2'); }, 100);
});

document.querySelector('#L').addEventListener("click",()=>{
    var music=document.querySelector('audio[data-key="76"]');
    music.currentTime=0;
    music.play();
    var x = document.querySelector(`div[data-key="76"]`);
    x.classList.add('pressed');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
});
 
