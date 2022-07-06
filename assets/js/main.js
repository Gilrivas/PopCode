let input = document.getElementById('input')
let x = document.querySelectorAll('.x')
let score = document.getElementById('score')

console.log(x.length);

let langages = ['JavaScript',
    'Html' ,
    'Css',
    'Sql',
    'Python',
    'Java',
    'C#',
    'Php',
    
    'C++',
    'TypeScript',]

    
window.addEventListener('keydown', function(event){
    
    key = event.key 
    
    if(key === event.key){
        input.focus()
        input.classList.remove('opacity')
    }
   
})

input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
        if(langages.includes(input.value) === false){
            
            x[0].classList.add('color') 
           
          
    }
    }
})

input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
       if(x[0].classList.contains('color') === true){
            
            x[1].classList.add('color') 
            
    
           
          
    }
    }
})


function gameAnswer2(){
        if(langages.includes(input.value) === false && event.key === 'Enter'){
            
            x[1].classList.add('color') 
            
    }
}
function gameAnswer3(){
        if(langages.includes(input.value) === false){
            
            x[1].classList.add('color') 
           
    }
}





input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
       
        setTimeout(() => {
            input.classList.add('opacity')
            input.value = ''
        }, 0)
    }
    
})

input.addEventListener("keyup", function(event){
    
    if(event.key === "Escape"){
       
        setTimeout(() => {
            input.classList.add('opacity')
            input.value = ''
        }, 0)
    }
    
})
