const form = document.getElementById('login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    if (response.ok) {
        // Store the access token in local storage
        localStorage.setItem('access_token', data.access_token);
        console.log(data.datas)
        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        alert(data.message);
    }
});
