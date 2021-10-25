document.addEventListener("keydown",function(e){
    var aud=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!aud){return;}
    aud.currentTime = 0;
    aud.play();
    var x = document.querySelector(`.key div[data-key="${e.keyCode}"]`);
    
    change_class(x);
})

document.querySelectorAll('.key').forEach((domEle) => {
    domEle.addEventListener("click",(e)=>{
        var music=document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
        music.currentTime=0;
        music.play();
        var x = document.querySelector(`.key div[data-key="${e.target.getAttribute('data-key')}"]`);
        
        change_class(x);
    });
});

function change_class(x){
    if(x.classList.contains('lightgrey')){
        x.classList.add('pressed');
        setTimeout(function() { x.classList.remove('pressed'); }, 100);
        }
        else{
            x.classList.add('pressed2');
        setTimeout(function() { x.classList.remove('pressed2'); }, 100);
        } 
}
