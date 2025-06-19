<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "All fields are required.";
        exit();
    }

    $to = "e.peterkong@gmail.com";
    $subject = "New Contact Form Submission";

    $body = "Name: $name\r\n";
    $body .= "Email: $email\r\n";
    $body .= "Message:\r\n$message\r\n";

    $from = "noreply@econoagency.org";
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        http_response_code(500);
        echo "Message failed to send.";
    }
} else {
    http_response_code(405);
    echo "Invalid request.";
}
?>
