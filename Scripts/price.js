'use strict';
function result(){
    let w = document.getElementById("width").value;
    let v = document.getElementById("volume").value;
    if(v == "" || w == ""){
        document.getElementById("result").innerHTML = "Заполните все поля ввода для расчета";
    }else{
        if(v != 1){
            let sum = Math.ceil((w * v) / 1000 * 13);
            document.getElementById("result").innerHTML = "Минимальная стоимость Вашей кухни составляет " + sum + " рублей";
            document.getElementById("width").value = "";
            document.getElementById("volume").value = "";
        }else{
            let sum = Math.ceil(w * v * 13);
            document.getElementById("result").innerHTML = "Минимальная стоимость Вашей кухни составляет " + sum + " рублей";
            document.getElementById("width").value = "";
            document.getElementById("volume").value = "";
        }
    }
}