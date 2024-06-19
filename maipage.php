<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <div class="login-form">
            <h2>Welcome Back</h2>
            <p>Please login to your account</p>
            <form id="loginForm">
                <div class="input-group">
                    <input type="email" id="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" id="password" required>
                    <label for="password">Password</label>
                </div>
                <button type="submit">Login</button>
                <div class="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
