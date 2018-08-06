<?php

function debug($data){
	echo '<pre style="box-shadow: 0 0 10px grey;padding: 10px;margin: 10px;border-radius: 10px;">';
	print_r($data);
	echo '</pre>';
}