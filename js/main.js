let pager = document.getElementById("pagerNumber")
let phone = document.getElementById("phoneNumber")



function buttonOne(){
    phone.textContent+=1
}

function buttonTwo(){
    phone.textContent+=2
}

function buttonThree(){
    phone.textContent+=3
}

function buttonReset(){
    phone.textContent= "" 
    pager.textContent= ""
}


function buttonFour(){
    phone.innerText+= 4
}


function buttonFive(){
    phone.innerText+= 5
}


function buttonSix(){
    phone.innerText+= 6
}

function buttonSeven(){
    phone.innerText+= 7
}

function buttonEight(){
    phone.innerText+= 8
}

function buttonNine(){
    phone.innerText+= 9
}

function buttonAsterisk(){
    phone.innerText+= "*"
}


function buttonZero(){
    phone.innerText+= 0
}

function buttonLedders(){
    phone.innerText+= "#"
}

function buttonSend (){
 
   pager.innerText= phone.innerText
}



