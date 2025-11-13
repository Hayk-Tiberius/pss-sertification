<?php
header('Content-Type: application/json; charset=utf-8');

// Данные подключения к старой базе
$host = "mysql59.1gb.ru";
$user = "gb_pss";
$password = "5e675505aui";
$dbname = "gb_pss";

// Создаем подключение
$conn = new mysqli($host, $user, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Ошибка подключения: " . $conn->connect_error]);
    exit();
}

// Получаем id из запроса
$id = isset($_GET['id']) ? $_GET['id'] : "all";

// Формируем SQL
if ($id === "all") {
    $sql = "SELECT * FROM news"; // замените news на вашу таблицу
} else {
    $id = intval($id);
    $sql = "SELECT * FROM news WHERE id = $id"; // замените news на вашу таблицу
}

// Выполняем запрос
$result = $conn->query($sql);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => $conn->error]);
    $conn->close();
    exit();
}

// Сбор данных
$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

// Отправка JSON
echo json_encode($rows, JSON_UNESCAPED_UNICODE);

// Закрытие соединения
$conn->close();
?>


