const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Limpar mensagens de erro
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validação do Nome
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'O nome é obrigatório.';
        isValid = false;
    }

    // Validação do E-mail
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'O e-mail é obrigatório.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'O e-mail não é válido.';
        isValid = false;
    }

    // Validação da Senha
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'A senha é obrigatória.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 6 caracteres.';
        isValid = false;
    }

    // Validação da Confirmação de Senha
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'As senhas não coincidem.';
        isValid = false;
    }

    // Se todos os campos forem válidos
    if (isValid) {
        alert('Cadastro realizado com sucesso!');
        form.reset();
    }
});

