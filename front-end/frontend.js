document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Limpar mensagem de erro anterior
        errorMessage.textContent = '';

        try {
            // Criar objeto com os dados do formulário
            const loginData = {
                user: username,
                password: password
            };

            // Simular chamada à API (será substituída pela chamada real)
            const response = await login(loginData);

            if (response.success) {
                errorMessage.style.color = '#4CAF50';
                errorMessage.textContent = 'Login realizado com sucesso!';
                // Aqui você pode redirecionar o usuário ou executar outras ações após o login
            } else {
                errorMessage.textContent = response.message || 'Erro ao fazer login. Tente novamente.';
            }
        } catch (error) {
            console.error('Erro durante o login:', error);
            errorMessage.textContent = 'Erro ao conectar com o servidor. Tente novamente mais tarde.';
        }
    });
}); 