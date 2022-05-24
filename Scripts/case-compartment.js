'use strict';
function calculate() {
    document.getElementById("showResult").innerHTML = "";
    let p = document.getElementById("paragraph");
    if(p != null){
        document.getElementById("resultDiv").removeChild(p);
    }
    let x = document. getElementById ( "shrn" ).value;
    let y = document. getElementById ( "vst" ).value;
    let z = document. getElementById ( "kdvr" ).value;
    let per = document. getElementById ( "per" ).value;
    if(x == "" || y == "" || z == ""){//если поля не заполненны
        alert("Заполните все поля");
    }else {
        if (per == ""){// без поперечки
            let handle = y - 45;
            let handleLabel = document.createElement("li");
            let handleLabelText = document.createTextNode("Ручка : " + handle + " мм - " + (z*2) + " шт.");
            handleLabel.appendChild(handleLabelText);
            
            let up = x - 2;
            let upLabel = document.createElement("li");
            let upLabelText = document.createTextNode("Верхняя направляющая: " + up + " мм - " + "1 шт.");
            upLabel.appendChild(upLabelText);

            let downLabel = document.createElement("li");
            let downLabelText = document.createTextNode("Нижняя направляющая: " + up + " мм - " + "1 шт.");
            downLabel.appendChild(downLabelText);
            
            let upbar = Math.round(((+x+(26*(+z-1)))/+z)-50);
            let upbarLabel =document.createElement("li");
            let upbarLabelText =document.createTextNode("Верхняя планка: " + upbar + "мм - " + z + " шт.");
            upbarLabel.appendChild(upbarLabelText);

            let downbarLabel = document.createElement("li");
            let downbarLabelText = document.createTextNode("Нижняя планка: " + upbar + " мм - " + "1 шт.");
            downbarLabel.appendChild(downbarLabelText);

            let stoperLabel = document.createElement("li");
            let stoperLabelText = document.createTextNode("Cтопор: " + z + " шт.");
            stoperLabel.appendChild(stoperLabelText);

            
            let shlegel = Math.ceil(((handle*2)*z)/1000);
            let shlegelLabel = document.createElement("li");
            let shlegelLabelText = document.createTextNode("Шлегель: " + shlegel + " м.п.");
            shlegelLabel.appendChild(shlegelLabelText);

            let shrnLDSP = upbar + 13;
            let vstLDSP = handle - 59;
            let ldspLabel = document.createElement("li");
            let ldspLabelText = document.createTextNode("ЛДСП: " + vstLDSP + " x " + shrnLDSP + " мм");
            ldspLabel.appendChild(ldspLabelText);
            
            let shrnMirror = shrnLDSP - 3;
            let vstMirror = vstLDSP - 3;
            let MirrorLabel = document.createElement("li");
            let MirrorLabelText = document.createTextNode("Зеркало: " + vstMirror + " x " + shrnMirror + " мм");
            MirrorLabel.appendChild(MirrorLabelText);

            let yplotnitel = Math.ceil(((shrnMirror * 2) + (vstMirror * 2)) / 1000);
            let yplotnitelLabel = document.createElement("li");
            let yplotnitelLabelText = document.createTextNode("Уплотнитель: " + yplotnitel + " м.п." + "(колличество уплотнителя на одну вставку)");
            yplotnitelLabel.appendChild(yplotnitelLabelText);

            let result = document.getElementById("showResult");
            result.appendChild(handleLabel);
            result.appendChild(upLabel);
            result.appendChild(downLabel);
            result.appendChild(upbarLabel);
            result.appendChild(downbarLabel);
            result.appendChild(stoperLabel);
            result.appendChild(shlegelLabel);
            result.appendChild(ldspLabel);
            result.appendChild(MirrorLabel);
            result.appendChild(yplotnitelLabel);

            let resultDiv = document.getElementById("resultDiv");
            let paragraph = document.createElement("p");
            paragraph.id = "paragraph";
            let paragraphText = document.createTextNode("Нужно учесть то, что уплотнитель на вставку считается с округлением в большую сторону. Соответственно, чем больше вставок, тем больше остаток уплотнителя.");
            paragraph.appendChild(paragraphText);
            resultDiv.appendChild(paragraph);

        }else{//с поперечками--------------------------------------------------------------------
            let handle = y - 45;
            let handleLabel = document.createElement("li");
            let handleLabelText = document.createTextNode("Ручка : " + handle + " мм - " + (z*2) + "шт.");
            handleLabel.appendChild(handleLabelText);

            let up = x - 2;
            let upLabel = document.createElement("li");
            let upLabelText = document.createTextNode("Верхняя направляющая : " + up + " мм - " + "1 шт.");
            upLabel.appendChild(upLabelText);

            let downLabel = document.createElement("li");
            let downLabelText = document.createTextNode("Нижняя направляющая : " + up + " мм - " + "1 шт.");
            downLabel.appendChild(downLabelText);

            let upbar = Math.round(((+x+(26*(+z-1)))/+z)-50);
            let upbarLabel =document.createElement("li");
            let upbarLabelText =document.createTextNode("Верхняя планка: " + upbar + "мм - " + z + " шт.");
            upbarLabel.appendChild(upbarLabelText);

            let downbarLabel = document.createElement("li");
            let downbarLabelText = document.createTextNode("Нижняя планка: " + upbar + " мм - " + "1 шт.");
            downbarLabel.appendChild(downbarLabelText);

            let crossbarLabel = document.createElement("li");
            let crossbarLabelText = document.createTextNode("Поперечка: " + upbar + " мм - " + (per * z) + " шт.");
            crossbarLabel.appendChild(crossbarLabelText);

            let stoperLabel = document.createElement("li");
            let stoperLabelText = document.createTextNode("Cтопор: " + z + " шт.");
            stoperLabel.appendChild(stoperLabelText);

            let shlegel = Math.ceil(((handle * 2) * z ) / 1000);
            let shlegelLabel = document.createElement("li");
            let shlegelLabelText = document.createTextNode("Шлегель: " + shlegel + " м.п.");
            shlegelLabel.appendChild(shlegelLabelText);


            let shrnLDSP = upbar + 13;
            let kolvoVstavok = +per + 1;
            let vstLDSP = Math.round((handle - 59 - ( 2 * per)) / kolvoVstavok);
            let ldspLabel = document.createElement("li");
            let ldspLabelText = document.createTextNode("ЛДСП: " + vstLDSP + " x " + shrnLDSP + " мм");
            ldspLabel.appendChild(ldspLabelText);

            let shrnMirror = shrnLDSP - 3;
            let vstMirror = vstLDSP - 3;
            let MirrorLabel = document.createElement("li");
            let MirrorLabelText = document.createTextNode("Зеркало: " + vstMirror + " x " + shrnMirror + " мм");
            MirrorLabel.appendChild(MirrorLabelText);

            let yplotnitel = Math.ceil(((shrnMirror * 2) + (vstMirror * 2))/ 1000);
            let yplotnitelLabel = document.createElement("li");
            let yplotnitelLabelText = document.createTextNode("Уплотнитель: " + yplotnitel + " м.п." + "(колличество уплотнителя на одну вставку)");
            yplotnitelLabel.appendChild(yplotnitelLabelText);

            let result = document.getElementById("showResult");
            result.appendChild(handleLabel);
            result.appendChild(upLabel);
            result.appendChild(downLabel);
            result.appendChild(upbarLabel);
            result.appendChild(downbarLabel);
            result.appendChild(crossbarLabel);
            result.appendChild(stoperLabel);
            result.appendChild(shlegelLabel);
            result.appendChild(ldspLabel);
            result.appendChild(MirrorLabel);
            result.appendChild(yplotnitelLabel);

            let resultDiv = document.getElementById("resultDiv");
            let paragraph = document.createElement("p");
            paragraph.id = "paragraph";
            let paragraphText = document.createTextNode("Нужно учесть то, что уплотнитель на вставку считается с округлением в большую сторону. Соответственно, чем больше вставок, тем больше остаток уплотнителя.");
            paragraph.appendChild(paragraphText);
            resultDiv.appendChild(paragraph);
        }
    }
}

function removeAll(){
    document.getElementById("showResult").innerHTML = "";
    document.getElementById("shrn").value = "";
    document.getElementById("vst").value = "";
    document.getElementById("kdvr").value = "";
    document.getElementById("per").value = "";
    let resultDiv = document.getElementById("resultDiv");
    let paragraph = document.getElementById("paragraph");
    resultDiv.removeChild(paragraph);
    
}