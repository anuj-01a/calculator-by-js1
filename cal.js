const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars=["%","*","/","+",".","="];
let output="";

const calculate=(btnValue)=>{
    if (btnValue==="="&&output !==""){
//if output has % , replace it with /100 before evaluating
        output=eval(output.replace("%","/100"));

    }else if(btnValue==="AC"){
        output="";
    }else if(btnValue==="DEL"){
        // if del button is clicked reomeve last Element
        output=output.toString().slice(0,-1);
    }else{
        // if output is empty and button is special chars then return 
        if (output==="" && specialChars.includes(btnValue))return;
        output +=btnValue;
    }
    display.value=output;

};
//add event listner

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=> calculate(e.target.dataset.value));
});
document.addEventListener("keydown",(e)=>{
    const key =e.key;
    //define key
    const  keyMappings ={
    "Enter": "=",
    "Delete":"AC",
    "Backspace":"DEL",
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9",
    "0":"0",
    ".":".",
    "+":"+",
    "*":"*",
    "-":"-",
    "%":"%",
    "/":"/",
};
const btnValue=keyMappings[key];
if (btnValue !=undefined){
    calculate(btnValue);
}
});


