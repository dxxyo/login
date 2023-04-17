  const form = document.querySelector('#register-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const birthdate = document.querySelector('#birthdate').value;
    const gender = document.querySelector('#gender').value;
    const customGender = document.querySelector('#customGender').value;
    const pronouns = document.querySelector('#pronouns').value;

    // Make a POST request to the API to register the user
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        birthdate,
        gender,
        customGender,
        pronouns,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registration successful!');
      // Redirect to login page
      window.location.href = '/login.html';
    } else {
      alert(data.message);
    }
  });

  function showCustomGenderInput() {
    const customGenderInput = document.querySelector('#customGenderInput');
    const pronounInput = document.querySelector('#pronounInput');
    const genderSelect = document.querySelector('#gender');

    if (genderSelect.value === 'custom') {
      customGenderInput.classList.remove('hidden');
      pronounInput.classList.remove('hidden');
    } else {
      customGenderInput.classList.add('hidden');
      pronounInput.classList.add('hidden');

    }
  }