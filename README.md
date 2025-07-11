
<h1 align="center">⏳ Tempo é Vida</h1>

<p align="center"><em>🚧 Este projeto ainda está em desenvolvimento. Algumas funcionalidades podem estar incompletas ou em fase de testes.</em></p>

<p align="center">
  <strong>Gerenciamento e visualização de dados de unidades de saúde (UPAs).</strong>
</p>

---

<h2>🧩 Funcionalidades</h2>
<ul>
  <li><strong>Autenticação de Usuário:</strong> Login e cadastro para controle de acesso.</li>
  <li><strong>Redefinição de Senha:</strong> Permite recuperar o acesso facilmente.</li>
  <li><strong>Painel Principal:</strong> Dashboard com cards informativos e navegação lateral.</li>
  <li><strong>Visualização de UPAs:</strong> Lista de unidades com filtros e imagens.</li>
  <li><strong>Estrutura Modular:</strong> Separação por páginas, estilos e scripts para manutenção eficiente.</li>
</ul>

---

<h2>📁 Estrutura do Projeto</h2>
<pre><code>tempo-e-vida/
├── index.html
├── cadastro.html
├── redefinir-senha.html
├── painel-principal.html
├── upas.html
├── imgs/
│   ├── logo-tev.jpeg
│   ├── sus-sistema-unico-de-saude-logo-png_seeklogo-173547.png
│   ├── user-tev.jpeg
│   └── user.png
├── imgs-upas/
│   ├── sao_cristovao.webp
│   ├── upa_brotas_1.jpeg
│   ├── upa_cabula_1.png
│   ├── upa_helio_machado.jpeg
│   ├── upa_paripe_1.jpeg
│   ├── upa_periperi.png
│   ├── upa_piraja_santo_inacio_1.jpeg
│   ├── upa_santo_antonio_1.jpeg
│   ├── upa_san_marthis.jpg
│   ├── upa_valeria_1.jpeg
│   └── upa_vale_barris_1.jpeg
├── scripts/
│   ├── auth.js
│   ├── filtro-upas.js
│   ├── menu-dropdown.js
│   └── unidades-upas.js
├── styles/
│   ├── login.css
│   ├── cadastro.css
│   ├── redefinir-senha.css
│   └── upas.css
└── styles-painel-principal/
    ├── painel-principal-cabecalho.css
    ├── painel-principal-cards.css
    ├── painel-principal-footer.css
    └── painel-principal-sidebar.css
</code></pre>

---

<h2>▶️ Como Usar</h2>

<h3>🌐 Requisitos</h3>
<p>Basta um navegador moderno como <strong>Chrome, Firefox, Edge</strong> ou similar. Não é necessário servidor web local.</p>

<h3>🖥️ Execução</h3>
<ol>
  <li>Abra o arquivo <code>index.html</code> diretamente no navegador.</li>
  <li>Use os links para navegar pelas páginas: cadastro, redefinir senha, painel e UPAs.</li>
</ol>

---

<h2>🔍 Detalhes Técnicos</h2>

<h3>📄 HTML</h3>
<ul>
  <li><code>index.html</code>: Tela de login.</li>
  <li><code>cadastro.html</code>: Tela para novos cadastros.</li>
  <li><code>redefinir-senha.html</code>: Página para redefinir senha.</li>
  <li><code>painel-principal.html</code>: Dashboard principal com cards e menu lateral.</li>
  <li><code>upas.html</code>: Lista de unidades de saúde (UPAs).</li>
</ul>

<h3>🧠 JavaScript</h3>
<ul>
  <li><code>auth.js</code>: Lida com login e cadastro.</li>
  <li><code>filtro-upas.js</code>: Permite filtrar unidades de saúde.</li>
  <li><code>menu-dropdown.js</code>: Controla menus suspensos no painel.</li>
  <li><code>unidades-upas.js</code>: Gera dinamicamente os dados de UPAs na página.</li>
</ul>

<h3>🎨 CSS</h3>
<ul>
  <li><strong>Estilos gerais:</strong> <code>login.css</code>, <code>cadastro.css</code>, <code>redefinir-senha.css</code>, <code>upas.css</code></li>
  <li><strong>Painel Principal:</strong>
    <ul>
      <li><code>painel-principal-cabecalho.css</code></li>
      <li><code>painel-principal-cards.css</code></li>
      <li><code>painel-principal-footer.css</code></li>
      <li><code>painel-principal-sidebar.css</code></li>
    </ul>
  </li>
</ul>
