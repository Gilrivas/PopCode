let input = document.getElementById('input')
let langages = [
    'javascript',
    'html' ,
    'css',
    'sql',
    'python',
    'java',
    'c#',
    'php',
    'c++',
    'typescript',]
window.addEventListener('keydown', function(event){
    key = event.key 
    if(key === event.key){
        input.focus()
        input.classList.remove('opacity')
    }
})
input.addEventListener("keyup", function(event){   
    if(event.key === "Enter"){
        input.classList.add('opacity')
        input.value = ''
       
    }
})

input.addEventListener("keyup", function(event){
    if(event.key === "Escape"){
        input.classList.add('opacity')
        input.value = '' 
    }   
})

/* XXX */
let badAnwers = []
let x = document.querySelectorAll('.x')

/* find answers */
let score = document.getElementById('score')
let goodAnswers = []
let langagesTrouve = document.getElementById('langagesTrouve')
let gameOver = document.getElementById('gameOver')
let win = document.getElementById('win')
let lowerCaseAnswer = goodAnswers.map(name => name.toLowerCase())


input.addEventListener("keydown", function(event){
    let res = input.value
    let string = res,
    regex = /\b[A-z]{1,}\b/g;
    let modified = string.replace(regex, function(match) {
        return match.toLowerCase();
    });

    if(event.key === "Enter"){  
        
        if(langages.includes(modified)){
            
            goodAnswers.push(modified)
            /* langagesTrouve.innerHTML += '<p>' + goodAnswers.slice(-1) + '</p>' */
            createElement(goodAnswers)
            let lowerCaseAnswer = goodAnswers.map(name => name.toLowerCase())
            langages = langages.filter((val) => !lowerCaseAnswer.includes(val));

    
        }else  if(goodAnswers.includes(modified)){
            
            alert('tu fais quoi bb')
        }else{
            badAnwers.push(res)
            for(let i = 0; i < badAnwers.length; i++){
                x[i].style = 'color: var(--mainBlue);'         
            }     
        }
    }   

    if(badAnwers.length == 3){
        gameOver.classList.remove('none')
        input.classList.add("none")   
    }
    if(goodAnswers.length == 27){
        win.classList.remove('none')
        input.classList.add("none")   
    }
    
    for(let i = 0; i < goodAnswers.length; i++){
        score.innerHTML = '0'+goodAnswers.length
        if(goodAnswers.length >= 10){
            score.innerHTML = goodAnswers.length
        }
    }
    
    function createElement(element){
        element = document.createElement('p')
        element.textContent = goodAnswers.slice(-1)
        element.classList.add('allLangues')
        langagesTrouve.appendChild(element)
        let obj = [
            javascript = 'javascript',
            javascriptDes = 'coucoucou'
        ]

        console.log(obj.javascript);

        for (let i = 0; i < goodAnswers.length; i++) {
            let p = document.querySelectorAll('.allLangues')
            p[i].addEventListener('click', () => {
               
                if(p[i].textContent === obj.javascript){
                    this.classList.add('red')
                    console.log(p[i]);
                }
            })
           
            
        }
    }
})









let buttonTrouve = document.getElementById('buttonTrouve')
let modal = document.getElementById('modal')
let closeModal = document.getElementById('closeModal')
buttonTrouve.addEventListener('click', ()=>{
    modal.classList.remove('none')
})
closeModal.addEventListener('click', ()=> {
    modal.classList.add('none')
})







