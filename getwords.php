<?php
$Question = 10;
$FILENAME= "words.txt";
header("Content-type:application/json");
$myfile = fopen($FILENAME, "r") or die("Unable to open file!");
$var = fread($myfile,filesize($FILENAME));
$arr = json_decode($var, true);
$array = array();

for ($i=0; $i < $Question; $i++) { 
    $rand = rand(0, sizeof($arr)-1);
    array_push($array, $arr[$rand]);
    
}

echo json_encode($array);

fclose($myfile);

?>

