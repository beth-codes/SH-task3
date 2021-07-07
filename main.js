var cta1EL = document.getElementById("cta1");
var cta2EL = document.getElementById("cta2");
var counterEl = document.getElementById("ct");

var count = 7;
finalDisplay();
 
cta1EL.addEventListener("click", ()=>{
    count--;
    if (count<0) {
        count = 0
    };
    finalDisplay();
    
});

cta2EL.addEventListener("click", ()=>{
    count++;
    if (count>50) {
        count = 50
    };
    finalDisplay();

});
function finalDisplay(){
    counterEl.innerHTML = count;
};



