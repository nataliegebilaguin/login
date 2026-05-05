document.querySelector('.loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    const message = document.querySelector('.message');

    message.textContent = "";

    if (!username && !password){
        showMessage("Please enter your username and password", "orange");
        return;
    }

    if (!username) {
        showMessage("Username is required.", "orange");
        return;
    }

    if (!password) {
        showMessage("Password is required.", "orange");
        return;
    }

    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }

    function showMessage(text, color) {
        message.style.color = color;
        message.textContent = text;
    }
});