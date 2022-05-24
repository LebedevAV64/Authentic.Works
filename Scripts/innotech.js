'use strict';
function innoTechCalculate(){
    let result = document.getElementById("showInnoTechResult");
    result.innerHTML = '';
    let x = document.getElementById("innoTechWidth").value;
    let y = document.getElementById("innoTechLength").value;
    let z = document.getElementById("innoTechHeight").value;
    if(x == '' || y == '' || z == ''){
        alert("Укажите все параметры!");
    }else{
        let backWall = document.createElement("li");
        let bottom = document.createElement("li");
        bottom.innerHTML = (+y + 10) + " x " + (x - 109) + "мм - дно ящика";
        switch(z){
            case '70':
                backWall.innerHTML = (x - 120) + "x" + "65.5 мм - задняя стенка";
                break;
            case '144':
                backWall.innerHTML = (x - 120) + "x" + "144 мм - задняя стенка";
                break;
            case '176':
                backWall.innerHTML = (x - 120) + "x" + "176 мм - задняя стенка";
                break;
        }
        result.appendChild(backWall);
        result.appendChild(bottom);
    }
}

function removeInnoTechResult(){
    document.getElementById("showInnoTechResult").innerHTML = "";
    document.getElementById("innoTechWidth").value = "";
    document.getElementById("innoTechLength").value = "";
    document.getElementById("innoTechHeight").value = "";
}