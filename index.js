let inputEle = document.getElementById("input");
let saveBtnEle = document.getElementById("saveBtn");
let clearBtnEle = document.getElementById("clearBtn");
let storageKey = 'userInput';

let storageVal = localStorage.getItem(storageKey);

if(storageVal === null){
    localStorage.setItem(storageKey,"Hello");
}

inputEle.value = localStorage.getItem(storageKey);

saveBtnEle.onclick = function(){
    let inputValue = inputEle.value;
    localStorage.setItem(storageKey,inputValue);

};

clearBtnEle.onclick = function(){
    inputEle.value = "";
    localStorage.removeItem(storageKey);
}