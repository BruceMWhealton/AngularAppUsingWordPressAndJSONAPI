<?php 
$url = "http://futurewavewebdevelopment.com/wp/tech-news/?json=1&count=20";

$result = file_get_contents($url);
echo $result; 
die;

//http://futurewavewebdevelopment.com/wp/api/get_post/?post_id=32939
