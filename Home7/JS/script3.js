document.getElementsByTagName('input')[0].classList.add('cheked');

for (i = 0; i < document.getElementsByTagName('p').length; i ++){
    document.getElementsByTagName('p')[i].classList.toggle('text');
}


/////////////////////////////////Task 4///////////////////////////
for (var i = 1 ; i < 6; i++){
var newLi = document.createElement('li');
newLi.innerHTML = [i];
list.appendChild(newLi);
}

