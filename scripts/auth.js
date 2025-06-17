const USERS_DATA = [
    {
        "email": "joaov@gmail.com",
        "senha": "123456"
    }
];

function validateLogin(email, password) {
    return USERS_DATA.find(user => user.email === email && user.senha === password);
}

function performLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const user = validateLogin(email, password);
    
    if (user) {
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        
        window.location.href = 'painel-principal.html';
    } else {
        
        alert('Email ou senha incorretos. Tente novamente.');
    }
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    if (isLoggedIn === 'true' && currentPage === 'index.html') {
        
        window.location.href = 'painel-principal.html';
    } else if (isLoggedIn !== 'true' && currentPage !== 'index.html' && currentPage !== 'cadastro.html' && currentPage !== 'redefinir-senha.html') {
        
        window.location.href = 'index.html';
    }
}


function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
}


function updateUserInterface() {
    const userEmail = localStorage.getItem('userEmail');
    const userSpan = document.querySelector('.user-profile span');
    
    if (userSpan && userEmail) {
        userSpan.textContent = `Olá, ${userEmail.split('@')[0]}`;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    
    const loginForm = document.querySelector('.form');
    if (loginForm) {
        loginForm.addEventListener('submit', performLogin);
    }
    
    if (localStorage.getItem('isLoggedIn') === 'true') {
        updateUserInterface();
    }
    
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            if (confirm('Deseja fazer logout?')) {
                logout();
            }
        });
    }
});

