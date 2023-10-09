let result = "";
function isValid(e){
    if(e=="+" || e=="-" || e=="*" || e=="/" || e=="Enter" ||e=="Escape" || e=="Backspace"){
        console.log("Valid !!");
        return true;
    }
    let i;
    for(i=0;i<=9;i++){
        if(i==e){
            console.log("Valid !!");
            return true;
        }
    }
    return false;
}
document.addEventListener("keydown", (e)=>{
    // console.log(e.key);
    if(isValid(e.key)){
        if(e.key=="Backspace"){
            removeLastCharacter();
            appendToResult();
            return;
        }
        if(e.key=="Enter"){
            calculateResult()
            return;
        }
        if(e.key=="Escape"){
            clearResult();
            return;
        }
        // console.log(e.key);
        appendToResult((e.key));
    }  
});

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}
// function myScript(){
//     console.log()
// }
function removeLastCharacter(){
    result = result.slice(0, -1);
    console.log(result);
}
function calculateResult() {
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}