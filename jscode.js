function faCon() {
    let userValue1, userValue2;
    let out1 = document.querySelector(`#out1`);
    userValue1 = document.getElementById(`n1`).value;
    userValue2 = document.getElementById(`n2`).value;
    if (userValue1 === userValue2){
        document.getElementById(`out1`).innerHTML = `0`;
       } 
    else
    (userValue1 > userValue2) ? document.getElementById(`out1`).innerHTML += 1 : 
       document.getElementById(`out1`).innerHTML = `-1`;
}
function faConClear() {
    document.getElementById(`n1`).value = "";
    document.getElementById(`n2`).value = "";
    document.getElementById(`out1`).innerHTML = '';
}

    function factoryS() {
        let i = 1, userValue, sim = 1;
        let out2 = document.querySelector(`#out2`);
        userValue = document.getElementById(`n3`).value;
        while (i <= userValue) {
            sim *= i;
            i++;
            document.getElementById(`out2`).innerHTML = sim;
        }
    }
    function factorySClear() {
        document.getElementById(`n3`).value = "";
        document.getElementById(`out2`).innerHTML = '';
    }

  function numberComb (){
    let userValue4, userValue5, userValue6;
    let arr =[];
    let out3 = document.querySelector(`#out3`);
    userValue4 = document.getElementById(`n4`).value;
     userValue5 = document.getElementById(`n5`).value;
      userValue6 = document.getElementById(`n6`).value;
    arr[0] = userValue4;
    arr[1] = userValue5;
      arr[2] = userValue6;
      let array = arr.join(``);
    document.getElementById(`out3`).innerHTML += array;
}
function numberCombClear() {
    document.getElementById(`n4`).value = "";
    document.getElementById(`n5`).value = "";
    document.getElementById(`n6`).value = "";
    document.getElementById(`out3`).innerHTML = '';
}


function squareArea () {
    let sqares = 0;
    let userValue7 = document.getElementById(`n7`).value;
    let userValue8 = document.getElementById(`n8`).value;
    let out4 = document.querySelector(`#out4`);
    if (userValue7 === 0 || userValue8 === 0){
        userValue7 === 0 ? sqares = Math.pow (userValue8, 2) : sqares = Math.pow (userValue7, 2);
    }
    else sqares = userValue7 * userValue8
    document.getElementById(`out4`).innerHTML += sqares;

}
function squareAreaClear() {
    document.getElementById(`n7`).value = "";
    document.getElementById(`n8`).value = "";
    document.getElementById(`out4`).innerHTML = '';
}


function perfectNumber(uV10) {
    let out5 = document.querySelector(`#out5`);
    let userValue9 = +(document.getElementById(`n9`).value);
    if (uV10 !== 0 && userValue9 === 0){
        userValue9 = Number(uV10);
    }
    let i = 0, sum = 0;
    let arr = [];
    while (i < userValue9) {
        userValue9 % (i) === 0 ? arr[i] = userValue9 / (i) && i++ : i++
    }
    let arr2 = arr.filter(element => element !== null);
    console.log(arr2)
    function sumArr(arr){
    for(let i = 0; i < arr.length; i++) {
           sum += arr[i];
        }
        console.log(sum)
       return sum;
    }
    if (sumArr(arr2)  === userValue9) {
        if (uV10 === undefined) {document.getElementById(`out5`).innerHTML += `Число совершенное`}
        else return userValue9;
    }
    else
        if (uV10 === undefined){document.getElementById(`out5`).innerHTML += `Число несовершенное`;}
        else return -1;
}
function perfectNumberClear() {
    document.getElementById(`n9`).value = "";
    document.getElementById(`out5`).innerHTML = '';
}

function perfectNumberRange(){
    let out6 = document.querySelector(`#out6`);
    let userValue10 = +(document.getElementById(`n10`).value);
    let userValue11 = +(document.getElementById(`n11`).value);
    while(0 < userValue10 && userValue10 < userValue11){
        perfectNumber(userValue10);
        if (perfectNumber(userValue10) !== -1){
            document.getElementById(`out6`).innerHTML += `${perfectNumber(userValue10)} ; ` ;
            document.getElementById(`out5`).innerHTML = '';
            userValue10++;
        }
        else
        userValue10++;
    }
}
function perfectNumberRangeClear(){
    document.getElementById("n10").value = "";
    document.getElementById("n11").value = "";
    document.getElementById(`out6`).innerHTML = '';
}

function timeEnter(){
    let userValue12 = +(document.getElementById(`n12`).value);
    let userValue13 = +(document.getElementById(`n13`).value);
    let userValue14 = +(document.getElementById(`n14`).value);
    let currentTime = new Date(0, 0, 0, userValue12, userValue13, userValue14);
    let out7 = document.querySelector(`#out7`);
    let arrS = [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()].map(y => y > 10 ? y : "0" + y).join(` : `)
    document.getElementById(`out7`).innerHTML += arrS;
}

function timeEnterClear(){
    document.getElementById("n12").value = "";
    document.getElementById("n13").value = "";
    document.getElementById("n14").value = "";
    document.getElementById(`out7`).innerHTML = '';
}

function timeOutSec(){
    let userValue15 = +(document.getElementById(`n15`).value);
    let userValue16 = +(document.getElementById(`n16`).value);
    let userValue17 = +(document.getElementById(`n17`).value);
    let out8 = document.querySelector(`#out8`);
    let currentTime = new Date(0, 0, 0, userValue15, userValue16, userValue17);
    let arrS = [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()];
    arrS[0] *= 3600
    arrS[1] *= 60
    let arrS2 = arrS.reduce(function(a, b) {
        return a + b;
    });
    document.getElementById(`out8`).innerHTML += arrS2;
}

function timeOutSecClear(){
    document.getElementById("n15").value = "";
    document.getElementById("n16").value = "";
    document.getElementById("n17").value = "";
    document.getElementById(`out8`).innerHTML = '';
}

function timeOutAll(sec){
    debugger;
    let userValue18 = +(document.getElementById(`n18`).value);
    let out9 = document.querySelector(`#out9`);
    if (sec !== 0 && userValue18 === 0){
        userValue18 = Number(sec);}
    let userHour = Math.trunc(userValue18 / 3600);
    let userMinute = Math.trunc((userValue18 - (userHour * 3600)) / 60);
    let userSec = Math.trunc((userValue18 - (userHour * 3600) - (userMinute* 60)));
    let arrSs = [userHour, userMinute, userSec].map(y => y >= 10 ? y : "0" + y).join(` : `);
    if (sec === undefined) {document.getElementById(`out9`).innerHTML += arrSs;
    }
    else return arrSs;
}

function timeOutAllClear(){
    document.getElementById("n18").value = "";
    document.getElementById(`out9`).innerHTML = '';
}

function timeOutRangeAll(){
    debugger;
    let userYear = +(document.getElementById(`n19`).value);
    let userMonth = +(document.getElementById(`n20`).value);
    let userDay = +(document.getElementById(`n21`).value);
    let userYearEnd = +(document.getElementById(`n22`).value);
    let userMonthEnd = +(document.getElementById(`n23`).value);
    let userDayEnd = +(document.getElementById(`n24`).value);
    let out10 = document.querySelector(`#out10`);
    let startTime = new Date(userYear, userMonth, userDay, 0, 0, 0);
    let endTime = new Date(userYearEnd, userMonthEnd, userDayEnd, 0, 0, 0);
    let seconds = (endTime - startTime) / 1000;
    timeOutAll(seconds)
    document.getElementById(`out10`).innerHTML += `${timeOutAll(seconds)}`;
}

function timeOutRangeAllClear(){
    document.getElementById("n19").value = "";
    document.getElementById("n20").value = "";
    document.getElementById("n21").value = "";
    document.getElementById("n22").value = "";
    document.getElementById("n23").value = "";
    document.getElementById("n24").value = "";
    document.getElementById(`out10`).innerHTML = '';
}


