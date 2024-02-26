

const passwordInputElem = document.querySelector("#password")
const warningElem = document.querySelector("#warning")


passwordInputElem.addEventListener("keyup", (event)=>{
boolCapsLock = event.getModifierState("CapsLock")
console.log(boolCapsLock);
    if(event.getModifierState("CapsLock")){
        warningElem.style.display = 'block'
    }else{
        warningElem.style.display = 'none'

    }
})


