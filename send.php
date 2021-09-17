<?php

$to = "takututu95@gmail.com" . "\r\n";
$text = $_POST['text'] . "\r\n";
$tel = $_POST['tel'] . "\r\n";
$checkbox = $_POST['checkbox'] . "\r\n";

mail ($to, $text, $tel, $checkbox);
?>
<script>
    setTimeout(function(){
        location.repalce("/");
    },2000);
</script>