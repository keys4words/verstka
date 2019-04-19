function print_object(obj){
	var res = '<ul>';
	
	for(i in obj)
		res += '<li><b>' + i + '</b>:' + obj[i] + '</li>';
	
	res += '</ul>';
	document.write(res);
	
}





var text = document.querySelector('#text');
print_object(text.style);
text.onclick = function(){
	text.style.color = 'red';
	text.style.fontsize = '30px';
	text.innerHTML += ' hurra';
	text.className = 'test';
}