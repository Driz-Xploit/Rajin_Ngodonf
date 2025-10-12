<html>
<head>
<title>PHP Training</title>
</head>
<body>
<?php
function br() {
	echo '<br>';
}
if ((bool) $_GET['status'] and is_numeric($_GET['status']) and $_GET['status'] >= 0) {
	echo 'status: ' . $_GET['status'];
	br();
	$status = 1;
} else {
	$status = 0;
}
setcookie('status', $status, 
	[
		'expires' => time()+60, # only 1 minute...
		'path' => '/', # cookie for all of my dir!
		'secure' => true, # https or http, idc. but i want a safer place
		'httponly' => true, # i dont want js touch my cookie
		'samesite' => 'strict' # directly to my page
	]
); # set cookie of status with 0 and expired after 1 minute
define("mywaifu", 'Igusa Haruka');
if ($_GET['waifu']) {
	echo 'So, ' . htmlspecialchars($_GET['waifu']) . ' is your waifu hah?...'; # I hate XSS
	br();
	if ($_GET['waifu'] == mywaifu) {
		echo 'She\'s my!, Get out from my web >:(';
	} else {
		echo "My is " . mywaifu;
	}
} else {
	echo "Who's Your \$waifu?<br>";
}
if (is_numeric($_GET['num1']) and is_numeric($_GET['num2'])) {
	br();
	echo $_GET['num1'] + $_GET['num2'];
}
?>
</body>
</html>
