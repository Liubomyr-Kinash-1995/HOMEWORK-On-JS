 /////// Homework-2 part one
 var x = prompt ("Введи перше  число", 0);
 
if (x>0){
    console.log("1");}
    else if (x<0) {
        console.log("-1");}
else {
    console.log("0");
}
    
 /////// Homework-2 part two
 var a = prompt ("Введи  друге число", 0);
 //var a = 2;
 var n;
 var x = a > 1 ? n = true : n = false;
 console.log(x);


 /////// Homework-2 part three
var a = prompt ("Введи  третє число", 0);
 switch (a) {
    case "1":
            console.log("A");
         break;
    case "2" :
            console.log("B");
        break;    
    case "3" :
            console.log("C");
        break; 

     default:
         console.log("Z");
         break;
 }
  /////// Homework-2 part four
  var x;
  for ( var i = 1; i < 10; i++){
    x=i*i;
      console.log(x);
  }
  ///////не знаююю
  var i = 1;
  do{
      i++;
      i**=i;
  }
  while (i < 10) {
      
    console.log(i);
      
  }
//////// Bigger number можна попробувати через switch
  function isBigger(a =3 ,b = 3) {
    if ( typeof(a) == "number" && typeof(b) == "number") {
        res = (a>b) ? a : b;
    }
    else if (a = b) { 
        break;
        res = "GOOD";
    }
       else{
        res = NaN;
    }
    return res;
   }
   console.log(res);



  