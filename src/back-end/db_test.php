<?php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);



try {
    $conn = new mysqli($host, $user, $pass, $db);
    $conn->set_charset("utf8mb4");

    $res = $conn->query("SELECT 1 as ok");
    echo "DB OK: " . $res->fetch_assoc()['ok'];
} catch (Throwable $e) {
    http_response_code(500);
    echo "DB FAIL: " . $e->getMessage();
}
