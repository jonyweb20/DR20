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
    let arr = [];
    let userValue7 = document.getElementById(`n7`).value;
    let userValue8 = document.getElementById(`n8`).value;
    arr.push(userValue7,userValue8);
    
    let out4 = document.querySelector(`#out4`);
}
function squareAreaClear() {
    document.getElementById(`n5`).value = "";
    document.getElementById(`n6`).value = "";
    document.getElementById(`out3`).innerHTML = '';
}
function perfectNumber(){
    let i = 1, num = 0;
    let arr = [];
    let out5 = document.querySelector(`#out5`);
    let userValue9 = document.getElementById(`n9`).value;
    while (i < userValue9){
    num = userValue9 % i;
    num === 0 ? arr[i-1] = num && i++ : i++;
    }
    document.getElementById(`out5`).innerHTML += arr;
    }
       /* let digits = userValue9.toString().split(``).map(Number).reverse().join(``);*/


function perfectNumberClear() {
    document.getElementById(`n9`).value = "";
    document.getElementById(`out5`).innerHTML = '';
}



/*function sumRow(){
    let out5 = document.querySelector(`#out5`);
    let userValue4 = [document.getElementById(`n5`).value];
    let digits = userValue4.toString().split(``).map(Number).map(i=>x+=i, x = 0).reverse()[0];
    document.getElementById(`out5`).innerHTML += digits;
}*/
/*function sumRowClear(){
    document.getElementById("n5").value = "";
    document.getElementById(`out5`).innerHTML = '';
}*/

/*function roundBracket(){
    let out6 = document.querySelector(`#out6`);
    let userValue4 = [document.getElementById(`n6`).value];
    if (userValue4 >= 1){
for (i=1; i <= userValue4; i++) {
    let Bracket = [`(`,`)`];
    let digits = Bracket.splice(i,0,`(`,`)`)
}
        document.getElementById(`out6`).innerHTML += digits;
        }
        }*/
/*function roundBracketClear(){
    document.getElementById("n6").value = "";
    document.getElementById(`out6`).innerHTML = '';

}*/






