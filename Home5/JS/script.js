var skill = {
    name : "HTML",
    level: 5,
    task_1 :function () { /// метод
        return this.name + "-" + this.level;
        
    }
};
console.log(skill.task_1());//виклик метода через обєкт


//////////TASK 2/////


String.prototype.newString = function() {
return this.charAt(0).toUpperCase() + this.substring(1, this.length - 1) +
 this.charAt(this.length - 1).toLocaleUpperCase();///перша та остання літера з великої Літери
 }
 console.log("orem ipsum dolor sit amet".newString());
 
 ///////////////////Task 3//////////////////////////////
 function Kalc(a, b) {
     this.a = a;
     this.b = b;
         
 }
Kalc.prototype.add = function () {
    return this.a + this.b;
 };
 Kalc.prototype.mul =function () {
     return this.a * this.b;
 };
 var c = +prompt('Enter a');
 var d = +prompt('Enter b');
 var calc = new Kalc(c, d);
 console.log(calc.add());
 console.log(calc.mul());

