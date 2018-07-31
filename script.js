var row = document.querySelector('div.row');

var i, j;
var div = [];
var weaks;
var Obj = {};

var radio = document.getElementsByName('gender');
for (j = 0; j < radio.length; j++) {
   radio[j].onchange = testRadio;
}


for (i = 0; i < 3470; i++) {
        div[i] = document.createElement('div');
        div[i].className = "col";
        row.insertBefore(div[i], null);

    }
testRadio();
// муж 3470 жен 4017 данные за 2016
/*-----------делаем количество недель согласно полу-----------*/
function testRadio() {

    if (this.value == "female") {
        Obj.gender = "female";
        if (div.length == 3470) {
            for (i = 3470; i < 4017; i++) {
                div[i] = document.createElement('div');
                div[i].className = "col";
                row.appendChild(div[i]);

            }
            console.log(div.length);
        }
        //console.log(div.length);

    }
    if (this.value == "male" || this.value == undefined) {
        Obj.gender = "male";
        if (div.length == 4017) {
                for (i = 4016; i > 3469; i--) {
                row.removeChild(div[i]);
            }
            div.splice(3470, 547);
        }
        //console.log(div.length);
    }

}

/*-----------считаем время жизни-----------*/
document.getElementById("data").addEventListener("change", function() {
    var input = this.value;
    var dateEntered = new Date(input);
    var dataToDay = new Date();

    console.log(input);
    console.log((dateEntered.getTime())/(1000*60*60*24*7)); //от 70го до рождения
    console.log((dataToDay.getTime())/(1000*60*60*24*7)); //от 70го до сегодня
    var lifeTime = ((dataToDay.getTime())/(1000*60*60*24*7)) - ((dateEntered.getTime())/(1000*60*60*24*7))
    console.log(lifeTime);
    Obj.life = lifeTime;
});


var col = document.querySelectorAll(".col");

var button = document.getElementById('button');
/*-----------стилизация кнопки-----------*/
button.onmousedown = function() {
    this.style.background = "-webkit-linear-gradient(top, #C77966, #7E827A)";
    this.style.color = 'white';
}
button.onmouseup = function() {
    this.style.background = '';
    this.style.color = '';
}
button.onmouseout = function() {
    this.style.background = '';
     this.style.color = '';
}
/*-----------смена цвета недель-----------*/
var access = 1; // переменная доступа
button.onclick = function() {
    if (access == 1){
    erase();
    var j = 0;
    var life = Math.floor(Obj.life);
    console.log(life);
    console.log(Obj.gender);
    /*-----------проверка импута и вывод текста-----------*/
    if (isNaN(life)) {
       alert("Введите дату рождения");
    }
    if (life < 0) alert("Вы еще не родились KEK");
    if (life>3470 && Obj.gender == "male") {
        document.querySelector('.message').innerHTML = "Вы прожили много лет, больше чем большинство";
    }
    if (life<3470 && Obj.gender == "male") {
        document.querySelector('.message').innerHTML = "";
    }
    if (life>4017 && Obj.gender == "female") {
        document.querySelector('.message').innerHTML = "Вы прожили много лет, больше чем большинство";
    }
    if (life<4017 && Obj.gender == "female") {
        document.querySelector('.message').innerHTML = "";
    }

    drowDelay();

    function drowDelay(){

        if (j <= life) {
            access = 0; //блокируем кнопку
            if (j >= div.length) {
                access = 1;
                return;
            }

        div[j].className = "col wasted";

        j++;

        setTimeout(drowDelay, 5);
        }
        else if (j > life) {
            access = 1;
        }
        else return;
        }
        //console.log(col.length);
    }
}
/*-----------очистка календаря-----------*/
function erase() {

    i = 0;
    while (div[i].className == "col wasted") {
        div[i].className = "col";
        i++;
        if (i>=div.length) return;
    }

}

