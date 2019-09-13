/* document.getElementById('first');
document.querySelector('#first');
document.getElementsByClassName('special');
document.querySelector('.special');
document.querySelectorAll('.special');
document.getElementsByTagName('p')[0];
document.querySelector('p');
document.querySelectorAll('p');
document.querySelectorAll("h1+p"); */

var tag = document.getElementById('highlight');
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";
tag.classList.add("another-class");

var tag1 = document.querySelector("#last");
tag1.textContent = 'new value of paragraph by JS';

var h1 = document.querySelector('h1');
h1.addEventListener("click", function(){
    h1.style.background="orange";
});

document.querySelector("ul").addEventListener("click", function(){
    console.log('ul was clicked');
});

var lis = document.querySelectorAll('li');
for(var i=0;i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "red";
    });
}