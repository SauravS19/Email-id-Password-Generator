
document.getElementById("re1").style.visibility="hidden";
document.getElementById("re2").style.visibility="hidden";
document.getElementById("checkbox").style.visibility="hidden";
const generatetn = document.querySelector(".generateButton");

let aa=document.querySelector("[data-indicator]")
aa.style.backgroundColor="#ccc";

generatetn.addEventListener(("click"),()=>{
    document.getElementById("re1").style.visibility="visible";
    document.getElementById("re2").style.visibility="visible";
    
  
})

function getvalue(){
 let fname=document.getElementById('ffname').value;
 this.inner=function(){
let lname=document.getElementById('llname').value;
if((fname.length>0)&&(lname.length>0))
{
document.getElementById("re1").style.visibility="hidden";
document.getElementById("re2").style.visibility="hidden";
let brr=[fname,lname];
brr.push(fname+lname);
brr.push(lname+fname);

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const emaildisplay= document.querySelector("[data-email]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const ecopyBtn = document.querySelector("[data-ecopy]");
const ecopyMsg = document.querySelector("[data-ecopyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
let Emessage = [];
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");


function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


function setIndicator(color) {
    indicator.style.backgroundColor = color;

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}
function randomarr(){
        let aa= getRndInteger(0,brr.length);
        return brr[aa];
 }
function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied"
        setTimeout(() => {
            copyMsg.style.visibility="hidden"
         }, 1000);
    } 
    catch(e) {
        copyMsg.innerText = "Failed";
        setTimeout(() => {
            copyMsg.style.visibility="hidden"
         }, 1000);
    }
  
    

}

function shufflePassword(array) {

    for (let i = array.length - 2; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

  
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

async function ecopycontent(){
    try{
        await navigator.clipboard.writeText(emaildisplay.value);
        ecopyMsg.innerText="copied";
        setTimeout(() => {
            ecopyMsg.style.visibility="hidden"
         }, 1000);
    }
    catch(e){
        ecopyMsg.innerText="failed";
        setTimeout(() => {
            ecopyMsg.style.visibility="hidden"
         }, 1000);
    }


}
ecopyBtn.addEventListener("click",()=>{
    if(emaildisplay.value){
        ecopycontent();
    }
})

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    
 
    if((fname.length>0)&&(lname.length>0))
    {
    document.getElementById("re1").style.visibility="hidden";
    document.getElementById("re2").style.visibility="hidden";
    }

    if(checkCount == 0) {  

        document.getElementById("checkbox").style.visibility="visible";
        return;
    }
       
    else{
        document.getElementById("checkbox").style.visibility="hidden";
    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }


    Emessage=[];
    for(let i=0;i<1;i++){
         let num=randomarr();
       
         Emessage.push(num);
        }
        for(let i=0;i<4;i++){
            let num2=getRndInteger(0,9);
           
            Emessage.push(num2);
           }
           Emessage.push("@gmail.com");

          
          Emessage = shufflePassword(Array.from(Emessage));
      emaildisplay.value = Emessage;
        

    password = "";

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
   

    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
      
        password += funcArr[randIndex]();
    }
 

    password = shufflePassword(Array.from(password));

    passwordDisplay.value = password;
  
   
    calcStrength();
}
});
}
else{
    document.getElementById("re1").style.visibility="visible";
    document.getElementById("re2").style.visibility="visible";
}

 }}

























   










