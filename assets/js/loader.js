var pan = document.getElementById('loadingScreen')
var loaded = document.getElementById('loadedScreen')
var game = document.getElementById('game')
let closeFooter = document.getElementById('closeModalFooter')
let modalFooter = document.getElementById('modalFooter')
let legales = document.getElementById('legales')


/* setTimeout(() =>{
    pan.classList.add('none')
  
}, 3000)

setTimeout(() =>{
    loaded.classList.remove('none')
}, 3000)    */
 
window.addEventListener('load', function(){
    pan.style.display ='none'
    loaded.classList.remove('none')

    legales.addEventListener('click', ()=>{
        modalFooter.classList.remove('none')
    })
    
    closeFooter.addEventListener('click', () =>{
        modalFooter.classList.add('none')
    })

})

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const obj = document.getElementById("value");
animateValue(obj, 0, 27, 1500);



