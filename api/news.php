<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(["error"=>"Method not allowed"], JSON_UNESCAPED_UNICODE);
  exit();
}

$host = "mysql104.1gb.ru";
$user = "gb_gbpss2";
$pass = "B-h9TzRRESXR";
$db   = "gb_gbpss2";

// ВАЖНО: пароль уже светился — смени его в панели 1gb.
mysqli_report(MYSQLI_REPORT_OFF);

try {
  $conn = new mysqli($host, $user, $pass, $db);
  $conn->set_charset("utf8mb4");

  $id = $_GET['id'] ?? 'all';

  if ($id === 'all') {
    $res = $conn->query("SELECT * FROM news");
    $rows = [];
    while ($row = $res->fetch_assoc()) $rows[] = $row;
    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
    exit();
  }

  $idInt = (int)$id;

  // prepared statement без get_result()
  $stmt = $conn->prepare("SELECT news_id, timedate, news, header, news_short FROM news WHERE news_id = ?");
  $stmt->bind_param("i", $idInt);
  $stmt->execute();

  $stmt->bind_result($news_id, $timedate, $news, $header, $news_short);

  $rows = [];
  while ($stmt->fetch()) {
    $rows[] = [
      "news_id" => $news_id,
      "timedate" => $timedate,
      "news" => $news,
      "header" => $header,
      "news_short" => $news_short
    ];
  }

  echo json_encode($rows, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(["error" => $e->getMessage()], JSON_UNESCAPED_UNICODE);
} finally {
  if (isset($stmt) && $stmt instanceof mysqli_stmt) $stmt->close();
  if (isset($conn) && $conn instanceof mysqli) $conn->close();
}
