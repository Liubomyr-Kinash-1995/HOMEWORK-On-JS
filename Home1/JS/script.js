///true
var a=5; b=3;
c=a>b;
console.log(c);

//////true
var a=3; b=3;
c=a==b;
console.log(c);

///true
var a=3; b=6;
c=a!=b;
console.log(c);

///false
var a=1; b="";
c=a===b;
console.log(c);

///true
var a=false; b=0;
c=a>=b;
console.log(c);

/////not
c=('2'=== 2) ?'ok':'not';
console.log(c);

////////
var a=5; b=3;
r= (a>b) && (a === b);//false
d= true && 0 && ('a'<'Z');//0
e= (a>b) || true || ('2'== 2) || (false == '');//true
f= (a<b) && (0 == false);//false
g= ! ( 2 == 2 ) || ( true && '');///nothing
console.log(r);
console.log(d);
console.log(e);
console.log(f);
console.log(g);