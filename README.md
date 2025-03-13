# Sistema de Login Colaborativo

Este projeto demonstra a implementação de um sistema de login usando JavaScript Vanilla, desenvolvido de forma colaborativa entre equipes de front-end e back-end.

## Estrutura do Projeto

```
.
├── index.html      # Página de login
├── styles.css      # Estilos CSS
├── frontend.js     # Lógica do front-end
└── backend.js      # Lógica do back-end (simulado)
```

## Equipes

### Equipe Front-end
- Responsável pela interface do usuário
- Implementação do formulário de login
- Integração com o back-end via fetch API

### Equipe Back-end
- Responsável pela lógica de autenticação
- Validação de credenciais
- Simulação de API de login

## Credenciais de Teste
- Usuário: admin
- Senha: 1234

## Como Executar
1. Clone o repositório
2. Abra o arquivo index.html em um navegador web
3. Use as credenciais de teste para fazer login

## Problemas Comuns e Soluções
- CORS: Utilizar um servidor local para desenvolvimento
- Formato JSON: Garantir que o formato seja { "user": "admin", "password": "1234" }
- Validação: Implementar validação tanto no front-end quanto no back-end 