<?php
// api/send-contact.php

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    $input = $_POST; // Fallback for form-data
}

$firstName = $input['firstName'] ?? '';
$lastName = $input['lastName'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';
$inquiryType = $input['inquiryType'] ?? '';
$message = $input['message'] ?? '';

// Validate required fields
if (empty($firstName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'First name, email, and message are required']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit();
}

// Prepare email content
$to = "parikshitwagh555@gmail.com";
$subject = "New Contact Form Submission from $firstName $lastName";
$headers = [
    "From: EpiVerse <noreply@epiverse.in>",
    "Reply-To: $email",
    "X-Mailer: PHP/" . phpversion(),
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8"
];

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission from EpiVerse</h2>
    <p><strong>Name:</strong> $firstName $lastName</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone:</strong> " . ($phone ?: 'Not provided') . "</p>
    <p><strong>Inquiry Type:</strong> " . ($inquiryType ?: 'Not specified') . "</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
</body>
</html>
";

// Send email using PHP's mail() function
$mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
