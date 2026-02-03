<?php
header('Content-Type: application/json; charset=utf-8');

// CORS (если фронт на том же домене — можно оставить, не мешает)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Разрешаем только GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"], JSON_UNESCAPED_UNICODE);
    exit();
}

// ====== ДАННЫЕ ПОДКЛЮЧЕНИЯ ======
$host = "mysql104.1gb.ru";   // хост БД
$user = "gb_gbpss2";           // логин БД
$pass = "B-h9TzRRESXR"; // пароль БД
$db   = "gb_gbpss2";           // имя БД

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($host, $user, $pass, $db);
    $conn->set_charset("utf8mb4");

    $id = isset($_GET['id']) ? $_GET['id'] : "all";

    if ($id === "all") {
        $sql = "SELECT * FROM news";
        $result = $conn->query($sql);
    } else {
        $idInt = intval($id);
        $stmt = $conn->prepare("SELECT * FROM news WHERE news_id = ?");
        $stmt->bind_param("i", $idInt);
        $stmt->execute();
        $result = $stmt->get_result();
    }

    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    echo json_encode($rows, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()], JSON_UNESCAPED_UNICODE);
} finally {
    if (isset($conn) && $conn instanceof mysqli) {
        $conn->close();
    }
}
