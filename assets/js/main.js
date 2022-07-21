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
    'typescript',
    'c',
    'ruby',
    'go',
    'assembly',
    'swift',
    'kotlin',
    'r',
    'vba',
    'objective-c',
    'scala',
    'rust',
    'dart',
    'elirir',
    'clojure',
    'webassembly',
    'bash',
    'elixir',
    'powershell']


window.addEventListener('keydown', function(event){
    key = event.key 
    if(key){
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
let buttonTrouve = document.getElementById('buttonTrouve')
let modal = document.getElementById('modal')
let closeModal = document.getElementById('closeModal')
const langueLink = 'assets/js/languages.json'
let checkEp = document.getElementById('checkEp')
let checked = document.getElementById('checked')
let fermer = document.getElementById('fermer')
let closeFooter = document.getElementById('closeModalFooter')
let modalFooter = document.getElementById('modalFooter')
let legales = document.getElementById('legales')

legales.addEventListener('click', ()=>{
    modalFooter.classList.remove('none')
})

closeFooter.addEventListener('click', () =>{
    modalFooter.classList.add('none')
})
buttonTrouve.addEventListener('click', ()=>{
    modal.classList.remove('none')
})
closeModal.addEventListener('click', ()=> {
    modal.classList.add('none')
})

function check(){
    if(checkEp.classList.contains('none')){
        setTimeout(() =>{modalLangue.classList.add('none')},2000)

       }   
}
checkEp.addEventListener('click', () => {
    checkEp.classList.add('none')
    checked.classList.remove('none')
    
    check()
})
checked.addEventListener('click', () => {
    checkEp.classList.remove('none')
    checked.classList.add('none')
})





async function openFirstModal(element){
    let modalLangue = document.getElementById('modalLangue')
    let modalTitle = document.getElementById('modalTitle')
    let modalDesc = document.getElementById('modalDesc')
    let modalImg = document.getElementById('imgModal')
    const response = await fetch(langueLink);
    if (response.ok) {
        const data = await response.json();
        var names = data.languages.langage


        for (let i = 0; i < names.length; i++) {
            if(names[i].name === element){
                modalImg.src = names[i].picture
                modalLangue.classList.remove('none')
                modalTitle.textContent = names[i].name
                modalDesc.textContent = names[i].description
                fermer.classList.remove('none')
            }

           
        }
        check()
    }
}


function inputAndCheck(){
    let res = input.value
    let string = res,
    regex = /\b[A-z]{1,}\b/g;
    let modified = string.replace(regex, function(match) {
        return match.toLowerCase();
    });
    
    if(langages.includes(modified)){
            
        goodAnswers.push(modified)
        /* langagesTrouve.innerHTML += '<p>' + goodAnswers.slice(-1) + '</p>' */
        createElement(goodAnswers)
        let lowerCaseAnswer = goodAnswers.map(name => name.toLowerCase())
        langages = langages.filter((val) => !lowerCaseAnswer.includes(val));

        openFirstModal(modified)

        


    }else  if(goodAnswers.includes(modified)){
        
        alert('tu fais quoi bb')
    }else{
        badAnwers.push(res)
        for(let i = 0; i < badAnwers.length; i++){
            x[i].style = 'color: var(--mainBlue);'         
        }     
    }
}

async function createElement(element){
    element = document.createElement('p')
    element.textContent = goodAnswers.slice(-1)
    element.classList.add('allLangues')
    langagesTrouve.appendChild(element)
    let namesLangue = document.querySelectorAll('.allLangues')
    let modalLangue = document.getElementById('modalLangue')
    let modalTitle = document.getElementById('modalTitle')
    let modalDesc = document.getElementById('modalDesc')
    let modalImg = document.getElementById('imgModal')
   

    const response = await fetch(langueLink);
    if (response.ok) {
        const data = await response.json();
        var names = data.languages.langage
        
        function proNames(){
            for (let i = 0; i < namesLangue.length; i++) {
                namesLangue[i].addEventListener('click', ()=>{
                    for (let o = 0; o < names.length; o++) {
                        if(namesLangue[i].textContent == names[o].name){
                            modalImg.src = names[o].picture
                            fermer.classList.add('none')
                            modalLangue.classList.remove('none')
                            modalTitle.textContent = names[o].name
                            modalDesc.textContent = names[o].description
                            modal.classList.add('none')
                        }
                    }
                }) 
            }
        }

       
        let closeModalLangue = document.getElementById('closeModalLangue')
        closeModalLangue.addEventListener('click', ()=>{
            modalLangue.classList.add('none')
        })
        proNames()
        
    }
}



function winOrLose(){
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
}

input.addEventListener("keydown", function(event){   

    if(event.key === "Enter"){  
        inputAndCheck()     
    }   

    winOrLose()

})













