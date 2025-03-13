// Simulação de uma função de backend para autenticação
async function login(credentials) {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validar formato dos dados
    if (!credentials.user || !credentials.password) {
        return {
            success: false,
            message: 'Usuário e senha são obrigatórios'
        };
    }

    // Credenciais válidas para teste
    const validCredentials = {
        user: 'admin',
        password: '1234'
    };

    // Verificar credenciais
    if (credentials.user === validCredentials.user && 
        credentials.password === validCredentials.password) {
        return {
            success: true,
            message: 'Login realizado com sucesso',
            user: {
                username: credentials.user,
                role: 'admin'
            }
        };
    }

    // Credenciais inválidas
    return {
        success: false,
        message: 'Usuário ou senha incorretos'
    };
} 