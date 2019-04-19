<?php

	$result = mail("acidburn1983z@gmail.com","Order Pizza","On the site received orders\nName: $_POST[name]\nPhone: $_POST[phone]\nEmail: $_POST[email]\nWish: $_POST[more]\n");

	if ($result) {
		echo "<p>Order send successfully</p>";
	} else {
		echo "<p>Order dont send. Fail</p>";
	}

?> 

