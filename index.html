<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Authentication</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
        }
        .form-container {
            background-color: rgba(255, 255, 255, 0.9);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            width: 300px;
            transition: transform 0.3s, opacity 0.3s;
        }
        .form-container h3, .form-container h2 {
            margin-bottom: 20px;
            color: #333;
            text-align: center;
        }
        .form-container label {
            display: block;
            margin-bottom: 5px;
            color: #555;
        }
        .form-container input {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .form-container button {
            width: 100%;
            padding: 10px;
            background-color: #6a11cb;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .form-container button:hover {
            background-color: #5a0fb1;
        }
        .form-container a {
            display: block;
            text-align: center;
            margin-top: 10px;
            color: #007bff;
            text-decoration: none;
        }
        .form-container a:hover {
            text-decoration: underline;
        }
        #signup-form {
            display: none;
        }
        .bg-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            overflow: hidden;
        }
        .bg-animation span {
            position: absolute;
            display: block;
            width: 25px;
            height: 25px;
            background: rgba(255, 255, 255, 0.15);
            animation: animate 10s linear infinite;
            bottom: -150px;
        }
        .bg-animation span:nth-child(1) {
            left: 20%;
            width: 80px;
            height: 80px;
            animation-delay: 0s;
        }
        .bg-animation span:nth-child(2) {
            left: 70%;
            width: 50px;
            height: 50px;
            animation-delay: 2s;
            animation-duration: 12s;
        }
        .bg-animation span:nth-child(3) {
            left: 45%;
            width: 20px;
            height: 20px;
            animation-delay: 4s;
        }
        .bg-animation span:nth-child(4) {
            left: 85%;
            width: 150px;
            height: 150px;
            animation-delay: 0s;
            animation-duration: 8s;
        }
        .bg-animation span:nth-child(5) {
            left: 15%;
            width: 120px;
            height: 120px;
            animation-delay: 3s;
            animation-duration: 10s;
        }
        .bg-animation span:nth-child(6) {
            left: 35%;
            width: 25px;
            height: 25px;
            animation-delay: 7s;
            animation-duration: 8s;
        }
        @keyframes animate {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
                border-radius: 0;
            }
            100% {
                transform: translateY(-1000px) rotate(720deg);
                opacity: 0;
                border-radius: 50%;
            }
        }
    </style>
</head>
<body>
    <div class="bg-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="container">
        <div class="form-container" id="login-form">
            <h3>Login</h3>
            <form onsubmit="checker_valid(event)">
                <input type="text" id="login-email" placeholder="Enter email" required>
                <input type="password" id="login-password" placeholder="Enter password" required>
                <button type="submit">Login</button>
                <a href="#" onclick="showSignupForm()">Sign up</a>
            </form>
        </div>
        <div class="form-container" id="signup-form">
            <h2>Signup Form</h2>
            <form action="/submit_signup" method="post" onsubmit="validateSignup(event)">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email</label>
                <input type="email" id="signup-email" name="email" required>
                
                <label for="password">Password</label>
                <input type="password" id="signup-password" name="password" required>
                
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required>
                
                <label for="address">Address</label>
                <input type="text" id="address" name="address" required>
                
                <button type="submit">Sign Up</button>
                <a href="#" onclick="showLoginForm()">Back to Login</a>
            </form>
        </div>
    </div>

    <script>
        function checker_valid(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Implement further validation and login logic here
            
            alert('Login successful!');
        }

        function validateSignup(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;

            // Basic validation
            if (!name || !email || !password || !phone || !address) {
                alert('Please fill in all fields');
                return;
            }

            // Implement further validation and signup logic here

            alert('Signup successful!');
        }

        function showSignupForm() {
            document.getElementById('login-form').style.transform = 'scale(0)';
            document.getElementById('signup-form').style.display = 'block';
            setTimeout(() => {
                document.getElementById('login-form').style.display = 'none';
                document.getElementById('signup-form').style.transform = 'scale(1)';
            }, 300);
        }

        function showLoginForm() {
            document.getElementById('signup-form').style.transform = 'scale(0)';
            document.getElementById('login-form').style.display = 'block';
            setTimeout(() => {
                document.getElementById('signup-form').style.display = 'none';
                document.getElementById('login-form').style.transform = 'scale(1)';
            }, 300);
        }
    </script>
</body>
</html>
