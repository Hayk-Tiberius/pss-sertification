<?php
// Включаем подробные ошибки mysqli
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// === НАСТРОЙКИ БД ===
$host = "mysql104.1gb.ru";   // хост БД
$user = "gb_gbpss2";           // логин БД
$pass = "B-h9TzRRESXR"; // пароль БД
$db   = "gb_gbpss2";           // имя БД

try {
    // Подключение
    $conn = new mysqli($host, $user, $pass, $db);

    // Кодировка
    $conn->set_charset("utf8mb4");

    // Простой тестовый запрос
    $result = $conn->query("SELECT 1 AS ok");
    $row = $result->fetch_assoc();

    echo "DB OK: " . $row['ok'];

} catch (Throwable $e) {
    http_response_code(500);
    echo "DB FAIL: " . $e->getMessage();
}
