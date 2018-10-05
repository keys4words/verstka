<?php
	$done = false;
	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		//пытается заказать звонок
		
		$dt = date("Y-m-d H:i:s");
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		
		//валидация введенных в форму данных
		if($name == "" || $phone == ""){
			$msg = 'Заполните все поля';
		}
		else if(mb_strlen($name, 'UTF-8') < 2){
			$msg = 'Имя не короче 2 символов';
		}
		else if(!ctype_digit($phone)){
			$msg = 'Телефон только из цифр';
		}
		else{
			file_put_contents('apps.txt', "$dt $name $phone", FILE_APPEND);
			mail('admin@localhost.ru', 'New order', "$dt $name $phone");
			
			$done = true;
			$msg = 'Заявка принята! Ждите!!!';
		}
		
	}else{
		//просто зашел на страничку
		$name = '';
		$phone = '';
		$msg = 'Введите данные и мы перезвоним';
	}


?>

<?php 
	if(!$done) {?>
<form method="post" action="">
	Имя<br>
	<input type="text" name="name" value="<?php echo $name; ?>"><br>
	Телефон<br>
	<input type="text" name="phone" value="<?php echo $phone; ?>"><br>
	<button>Заказать звонок</button>

</form>
	<?php }?>

<div>
	<?php echo $msg; ?>
</div>