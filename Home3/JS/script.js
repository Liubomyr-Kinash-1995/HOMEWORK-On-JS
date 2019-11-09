////Порівняння строк
function compareStr(strr_1, strr_2) {
    res =(strr_1.length > strr_2.length) ? strr_1 : strr_2;
    return res;
}
console.log(compareStr('lorem', 'mndmdmndmnd'));

///Варіант_1
var str = ['lorem','ipsum','is','simply', 'dummy'];

var str_1 = str.toString();

console.log(str_1.replace(/\b\w/g, l => l.toUpperCase())); //кожне слово з великої літери

///Варіант_2
var str_2 =  ['lorem', 'ipsum', 'is', 'simply',  'dummy'];
var str_3="";
for (var i=0; i<str_2.length; i++) {
    str_3+=str_2[i].charAt(0).toUpperCase() + str_2[i].slice(1);
}
alert(str_3);
 
