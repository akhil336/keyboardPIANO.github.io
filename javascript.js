document.addEventListener("keydown",function(e){
    var aud=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(aud);
    if(!aud){return;}
    aud.currentTime = 0;
    aud.play();
    var x = document.querySelector(`div[data-key="${e.keyCode}"]`);
    x.classList.add('pressed');
    //console.log(x);
    setTimeout(function() { x.classList.remove('pressed'); }, 100);
    
   
})