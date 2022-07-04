var pan = document.getElementById('loadingScreen')
var loaded = document.getElementById('loadedScreen')
var game = document.getElementById('game')

console.log(game);
/* setTimeout(() =>{
    pan.classList.add('none')
  
}, 3000)

setTimeout(() =>{
    loaded.classList.remove('none')
}, 3000)    */
 
window.addEventListener('load', function(){
    pan.style.display ='none'
    loaded.classList.remove('none')
    game.classList.remove('none')
})

