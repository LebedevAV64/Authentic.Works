'use strict';
function kitchenCalculate(){
    let result = document.getElementById("showKitchenResult");
    result.innerHTML = "";
    let x = document. getElementById ( "kitchenWidth" ).value;
    let y = document. getElementById ( "kitchenHeight" ).value;
    let z = document. getElementById ( "kitchenVolume" ).value;
    let fasad;
    if (x == '' || y == '' || z == '') {
        alert("Укажите все параметры!");
    } else {
        if (z <= 300) {
            if (x <= 400) {
                fasad = document.createElement("li");
                fasad.innerHTML = "Фасад: " + (x - 3) + " x " + (y - 3) + " - 1 шт";
            } else {
                fasad = document.createElement("li");
                fasad.innerHTML = "Фасады: " + (x / 2 - 3) + " x " + (y - 3) + " - 2 шт";
            }
            let bok = document.createElement("li");
            bok.innerHTML = "Бок: " + y + " x " + z + " - 2 шт";
            let vyazka = document.createElement("li");
            vyazka.innerHTML = "Вязка: " + (x - 32) + "x" + z + " - 2 шт";
            let hdf = document.createElement("li");
            hdf.innerHTML = "Хдф: " + (x - 5) + "x" + (y - 5) + " - 1 шт";
            let polka = document.createElement("li");
            polka.innerHTML = "Полка: " + (x - 34) + "x" + (z - 30) + " - 2 шт";
            result.appendChild(fasad);
            result.appendChild(bok);
            result.appendChild(vyazka);
            result.appendChild(hdf);
            result.appendChild(polka);
        } else {
            y = 710;
            if (x <= 400){
                fasad = document.createElement("li");
                fasad.innerHTML = "Фасад: " + (x - 3) + " x " + (y - 3) + " - 1 шт";
            } else {
                fasad = document.createElement("li");
                fasad.innerHTML = "Фасады: " + (x / 2 - 3) + " x " + (y - 3) + " - 2 шт";
            }
            let dno = document.createElement("li");
            dno.innerHTML = "Дно: " + x + " x " + z + " - 1 шт";
            let bok = document.createElement("li");
            bok.innerHTML = "Бок: " + (y - 16) + " x " + z + " - 2 шт";
            let planka = document.createElement("li");
            planka.innerHTML = "Планка: " + (x - 32) + "x 80 - 2 шт";
            let hdf = document.createElement("li");
            hdf.innerHTML = "Хдф: " + (x - 5) + "x" + (y - 5) + " - 1 шт";
            let polka = document.createElement("li");
            polka.innerHTML = "Полка: " + (x - 34) + "x" + (z - 30) + " - 1 шт";
            let vyazka = document.createElement("li");
            vyazka.innerHTML = "Вязка: " + (x - 32) + "x" + z + " - 2 шт";
            let faceBox = document.createElement("li");
            faceBox.innerHTML = "Ширина лица ящика: " + (x - 90);
            result.appendChild(fasad);
            result.appendChild(dno);
            result.appendChild(bok);
            result.appendChild(planka);
            result.appendChild(hdf);
            result.appendChild(polka);
            result.appendChild(vyazka);
            result.appendChild(faceBox);
        }
    }
}

function deleteAll(){
    document.getElementById("showKitchenResult").innerHTML = "";
    document.getElementById("kitchenWidth").value = "";
    document.getElementById("kitchenHeight").value = "";
    document.getElementById("kitchenVolume").value = "";
}