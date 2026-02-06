<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { http_response_code(405); echo json_encode(["error"=>"Method not allowed"], JSON_UNESCAPED_UNICODE); exit(); }

$host = "mysql104.1gb.ru";
$user = "gb_gbpss2";
$pass = "B-h9TzRRESXR";
$db   = "gb_gbpss2";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
  $conn = new mysqli($host, $user, $pass, $db);
  $conn->set_charset("utf8mb4");

  $id = $_GET['id'] ?? 'all';

  if ($id === 'all') {
    $result = $conn->query("SELECT * FROM news");
  } else {
    $idInt = (int)$id;
    $stmt = $conn->prepare("SELECT * FROM news WHERE news_id = ?");
    $stmt->bind_param("i", $idInt);
    $stmt->execute();
    $result = $stmt->get_result();
  }

  $rows = $result->fetch_all(MYSQLI_ASSOC);
  echo json_encode($rows, JSON_UNESCAPED_UNICODE);

} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(["error" => $e->getMessage()], JSON_UNESCAPED_UNICODE);
} finally {
  if (isset($conn) && $conn instanceof mysqli) $conn->close();
}
