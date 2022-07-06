let input = document.getElementById('input')



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

/* XXX */

let wAnswer = 0
let badAnwers = []
let x = document.querySelectorAll('.x')



/* find answers */
let score = document.getElementById('score')
let goodAnswers = []

console.log(x[0]);
input.addEventListener("keydown", function(event){
    
    if(event.key === "Enter"){  
        if(langages.includes(input.value)){
            res = input.value
            goodAnswers.push(res)
            console.log(goodAnswers);
           
        }else{
           
            res = input.value
            badAnwers.push(res)
            
            for(let i = 0; i < badAnwers.length; i++){
                x[i].style = 'color: var(--mainBlue);'
              
            }
           
        }
    }
    
    for(let i = 0; i < goodAnswers.length; i++){
        score.innerHTML = '0'+goodAnswers.length
    }
})





