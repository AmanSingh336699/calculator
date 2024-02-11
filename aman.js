appendTodisplay = (value) =>{
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculate(){
    var display=document.getElementById('display');
    var result=eval(display.value);
    display.value = result;
}
function factorial(){
    var display=document.getElementById('display');
    var number =parseInt(display.value);
    var result=1;
    for(var i=2;i<=number;i++){
        result*=i;
    }
    display.value=result;
}
function cancel(){
    var display=document.getElementById('display');
    var currentval=display.value;
    if(currentval.length > 0){
        display.value=currentval.slice(0,-1);
    }
}
function showerr(){
    alert("Dont use this button");
}