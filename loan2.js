let inputBox=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");

let string='';
let vishnu=Array.from(buttons);
vishnu.forEach(buttons=>{
    buttons.addEventListener("click",function(event){
        if(event.target.innerHTML==="="){
            string=eval(string);
            inputBox.value=string;
        }
        else if(event.target.innerHTML==="AC"){
            string='';
            inputBox.value=string;
        }
        else if(event.target.innerHTML==="DEL"){
            string=string.substring(0,string.length-1);
            inputBox.value=string;
        }
        else{
            string=string+event.target.innerHTML;
            inputBox.value=string;
        }
    })
})