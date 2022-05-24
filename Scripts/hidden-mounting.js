'use strict';
function hiddenMountingCalculate(){
    let result = document.getElementById("showHiddenMountingResult");
    result.innerHTML = "";
    let width = document.getElementById("hiddenMountingWidth").value;
    let railLength = document.getElementById("hiddenMountingLength").value;
    let boxVolume = document.getElementById("hiddenMountingVolume").value;
    let bottomType = document.getElementById("hiddenMountingType").value;
    if(width == "" || railLength == "" || boxVolume == "" || bottomType == ""){
        alert("Укажите все параметры");
    }else if(boxVolume < 100 || boxVolume > 300){
        alert("Глубина ящика не может быть меньше 100мм и больше 300мм");
    }else{
        let depthBox = document.createElement("li");
        let faceBox = document.createElement("li");
        let bottomBox = document.createElement("li");
        switch(bottomType){
            case '16':
                depthBox.innerHTML = (railLength - 10) + " x " + (+boxVolume + 16 + 12) + " (2шт) - бока ящика";
                faceBox.innerHTML = (width - 32 - 42) + " x " + boxVolume + " (2шт) - лица ящика";
                bottomBox.innerHTML = (width - 32 - 42) + " x " + (railLength - 10) + " - дно ящика";
                break;
            case '10':
                depthBox.innerHTML = (railLength - 10) + " x " + (+boxVolume + 10 + 12) + " (2шт) - бока ящика";
                faceBox.innerHTML = (width - 32 - 42) + " x " + boxVolume + " (2шт) - лица ящика";
                bottomBox.innerHTML = (width - 32 - 42) + " x " + (railLength - 10) + " - дно ящика"; 
                break;
            case '3':
                depthBox.innerHTML = (railLength - 10) + " x " + (+boxVolume + 3 + 12) + " (2шт) - бока ящика";
                faceBox.innerHTML = (width - 32 - 42) + " x " + boxVolume + " (2шт) - лица ящика";
                bottomBox.innerHTML = (width - 28 - 38) + " x " + (railLength - 15) + " - дно ящика"; 
                break;
        }
        result.appendChild(depthBox);
        result.appendChild(faceBox);
        result.appendChild(bottomBox);
    }
}

function removeHiddenMountingResult(){
    document.getElementById("showHiddenMountingResult").innerHTML = "";
    document.getElementById("hiddenMountingWidth").value = "";
    document.getElementById("hiddenMountingLength").value = "";
    document.getElementById("hiddenMountingVolume").value = "";
    document.getElementById("hiddenMountingType").value = "";
}