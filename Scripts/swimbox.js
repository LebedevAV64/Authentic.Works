'use strict';
function swimBoxCalculate(){
    let result = document.getElementById("showSwimBoxResult");
    result.innerHTML = '';
    let x = document.getElementById("swimBoxWidth").value;
    let y = document.getElementById("swimBoxLength").value;
    if (x == '' || y == '') {
        alert("Укажите все параметры!");
    } else {
        let backWallLabel = document.createElement("li");
        let backWallLabelTExt = document.createTextNode((x - 87 - 32) + " - ширина задней стенки ящика (минимальная высота указывается в документации к направляющим)");
        backWallLabel.appendChild(backWallLabelTExt);
        let bottomLabel = document.createElement("li");
        let bottomLabelTExt = document.createTextNode((x - 75 - 32) + " x " + (y - 24) + " - дно ящика");
        bottomLabel.appendChild(bottomLabelTExt);    
        result.appendChild(backWallLabel);
        result.appendChild(bottomLabel);
    }
}

function removeSwimBoxResult(){
    document.getElementById("showSwimBoxResult").innerHTML = "";
    document.getElementById("swimBoxWidth").value = "";
    document.getElementById("swimBoxLength").value = "";
}