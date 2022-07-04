let input = document.getElementById('input')
let x1 = document.getElementById('x1')
let score = document.getElementById('score')

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
        
        if(langages.includes(input.value) === true){
            x1.style.color = 'var(--mainBlue)'

            

            console.log(newArray);

        }
       
       
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