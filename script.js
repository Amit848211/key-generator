var insert = document.getElementById("press1");
var codeValue=document.getElementById("keycode");
var head=document.getElementById("heading");
window.addEventListener("keydown",(e) => {
    head.style.display="none"
    insert.innerHTML=`<div class="key">
     ${e.key}
    
     </div>`
    console.log(e.key);
    codeValue.innerHTML=e.keyCode;
    var clt=e.ctrlKey;
    var sft=e.shiftKey;
    var alt=e.altKey;
    var tune=document.getElementById("tone");
    if(clt || sft || alt){
        
        tune.play();
       
    }
    else{
       
        tune.pause();
    }
   
});
