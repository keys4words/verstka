<?php
	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		//пытается заказать звонок
		
		$dt = date("Y-m-d H:i:s");
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		
		//валидация введенных в форму данных
		if(false){
			
		}
		else if(false){
			
			//$msg = 'Ошибка ввода';
		}
		else{
			file_put_contents('apps.txt', "$dt $name $phone", FILE_APPEND);
			mail('admin@localhost.ru', 'New order', "$dt $name $phone");
			$msg = 'Заявка принята! Ждите!!!';
		}
		
		
		
	}else{
		//просто зашел на страничку
		$msg = 'Введите данные и мы перезвоним';
	}


?>


<form method="post" action="">
	Имя<br>
	<input type="text" name="name"><br>
	Телефон<br>
	<input type="text" name="phone"><br>
	<button>Заказать звонок</button>

</form>

<div>
	<?php echo $msg; ?>
</div>