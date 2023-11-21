<?php
//Принимаем постовые данные
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$phone=$_POST['phone'];
$country=$_POST['country'];
$email=$_POST['email'];
$message=$_POST['message'];
//Тут указываем на какой ящик посылать письмо
$to = "vip@crystalgenics.com";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Form site";
// Сообщение письма
$message = "
First Name: ".htmlspecialchars($firstName)."<br />
Last Name: ".htmlspecialchars($lastName)."<br />
Phone: <a href='tel:$phone'>".htmlspecialchars($phone)."<br />
Country: ".htmlspecialchars($country)."<br />
Email: <a href='mailto:$email'>".htmlspecialchars($email)."</a><br />
Message: <a href='tel:$phone'>".htmlspecialchars($message);
// Отправляем письмо при помощи функции mail();
$headers = "From: CrystalGenics <vip@crystalgenics.com>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
exit();
?>