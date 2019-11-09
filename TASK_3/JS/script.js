var table = document.querySelector(('table.wtable tr td'));
table.addEventListener("mouseover", function () {
    this.style.backgroundColor="blue"; 
});
table.addEventListener("mouseout", function () {
    this.style.backgroundColor="red"; 
});
// wtable.onmouseover = function(event){
//     var target = event.target;
//     target.style.background = 'green';
// }
// wtable.onmouseout = function(event){
//     var target = event.target;
//     target.style.background = '';
// }