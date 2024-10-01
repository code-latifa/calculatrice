const display=document.getElementById('display');
function appendToDisplay(value){
    display.value+=value;
}
function cleardisplay(){
    display.value='';
}
function deletelast(){
    display.value=display.value.slice(0,-1);
}
const buttons=document.querySelectorAll('button');
function calculate(){
    try{
        display.value=eval(display.value)
    }catch(error){
        display.value="error";
    }

}
buttons.forEach(button => {
    button.addEventListener('click',function(){
            const value =button.textContent;
            if(value==='AC'){
                cleardisplay();
            }
            else if(value==='DEL'){
                deletelast();
            }
            else if(value==='='){
                 calculate();
            }
            else if(value==='%'){
                display.value+='/100';
            }
            else{
                appendToDisplay(value)
            }


 })
})