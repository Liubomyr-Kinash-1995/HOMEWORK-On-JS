///////////////////////////////////////////////TASK 1/////////////////////////////////////////////

// var MyName = function  (name) {
//     setName= function() {
//         return this.name =name;
//     } ,
//      getName = function () {
//         return this.name;
//     }

// };

// var ChangeName = MyName( prompt ('Your Name:'));
// console.log(ChangeName());


///////////////////////////////////////////////Task2//////////////////////////////////////////////////////////////

var calculator_1 = {
    num_1: 2,
    num_2: 3
}
 function sum() {
     return this.num_1 + this.num_2;
    
 }

 function mul() {
    return this.num_1 * this.num_2;
}

calculator_1.sum = sum;
calculator_1.mul = mul;
console.log(calculator_1.sum());
console.log (calculator_1.mul());

////////////////////////////////////////////////TASK 3////////////////////////////////////////////////////////////////


function Calculator_2(num_1, num_2) {
    this.num_1 = num_1;
    this.num_2 = num_2;
    this.sum = function() {
        return this.num_1 + this.num_2;
    };

    this.mul = function() {
        return this.num_1 * this.num_2;
    };
    
}

var calculator_2 = new Calculator_2(2, 3); 
console.log("Сума = " + calculator_2.sum());
console.log("Добуток = " + calculator_2.mul());

//////////////////////////////////////////////////Task 4//////////////////////////////////////////////////////////
var calculator_3 = {

    numm_1 :2,
    numm_2 :3,
}
function summ() {
    return this.numm_1 + this.numm_2;
   
}

function mmul() {
   return this.numm_1 * this.numm_2;
}
console.log(summ.call(calculator_3));
console.log(mmul.call(calculator_3));
console.log(summ.apply(calculator_3,['numm_1', 'numm_2']));



