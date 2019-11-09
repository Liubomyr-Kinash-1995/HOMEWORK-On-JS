/////////////////////////////////////////////////TASK_1
var arr = [];
var elemArr;
do {
    elemArr = prompt("Введіть елемент масива(для закінчення введення елементів натисніть  Cancle):");
    arr.push(parseFloat(elemArr));
} while(elemArr);
arr.pop();
console.log(arr);///вивід масива

var sum=0;
//додавання масива
for (i=0; i < arr.length; i++) {
    sum = sum + arr[i];}
    console.log ('Сума масива:' +sum);///вивід  суми масива

////////////////////////////////////////////TASK_2/////////////

var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
var arr = str.split(' ');
for (var i=0; i<arr.length; i++) {
  if (arr[i].length>5) console.log(arr[i]);
}

//////////////////////////////////////////Task 3/////////////////////////
var arr_1 = [1 ,9 ,22 ,7 ,6];
arr_1.splice(3,0, '8');
alert(arr_1);

/////////////////////////////////////////Task 4///////////////////////////////

var userNumber = prompt("Enter your number");
function randomNumber(val,max){
    var arr = [], 
        number = 4, 
        pos = Math.floor(Math.random()*(number+1));
    while(number--){
        var rnd = Math.floor(Math.random()*max);
        arr.push(rnd >= val ? ++rnd : rnd);
    }
    arr.splice(pos,0,val);
    return arr;
}

console.log(randomNumber(0,100));
 
if (arr.indexOf(userNumber) === userNumber) {
    console.log("yes");}
    else{
        console.log("Oh NOOOoooo");  
    }

    //////////////////////////////////Task 5/////////////////////////////////////
    
    let arr_3 = [8, 6, 12, 10];
    square = arr_3.map(function(item) {
        return item*item;
            });
    console.log( square);
////////////////////////////////////////////// TAsk 6/////////////////////////////////////////////
var str = 'Loremmmmmmmmmmmmmm ipsum dolor sit amet consectetur adipisicing elit';
var arr_4 = str.split(' ');
var longword = 0;
var word;
arr_4.forEach(function (arr_4) {
   if ( longword < arr_4.length){
       longword = arr_4.length;
       word = arr_4;
   }
    });
  console.log(word);


