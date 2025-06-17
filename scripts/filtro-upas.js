// Função para filtrar e exibir UPAs com base na pesquisa
function filterUpas(query) {
    const container = document.getElementById('upas-list');
    container.innerHTML = '';

    const resultados = upasData.filter(upa => 
        upa.nome.toLowerCase().includes(query.toLowerCase()) ||
        upa.endereco.toLowerCase().includes(query.toLowerCase())
    );

    if (resultados.length === 0) {
        container.innerHTML = '<p>Nenhuma UPA encontrada.</p>';
    } else {
        resultados.forEach(upa => {
            const card = document.createElement('div');
            card.className = 'upa-card';

            let imageSrc = upa.imagem;
            const img = new Image();
            img.onerror = function() {
                imageSrc = 'images/upa_default.jpg';
            };
            img.src = imageSrc;

            const servicosHTML = upa.servicos.slice(0, 5).map(servico => 
                `<li>${servico}</li>`
            ).join('');

            card.innerHTML = `
                <div class="upa-image">
                    <img src="${imageSrc}" alt="${upa.nome}">
                </div>
                <div class="upa-info">
                    <h3 class="upa-name">${upa.nome}</h3>
                    <div class="upa-address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${upa.endereco}</span>
                    </div>
                    ${upa.telefone ? `
                    <div class="upa-phone">
                        <i class="fas fa-phone"></i>
                        <span>${upa.telefone}</span>
                    </div>` : ''}
                    <div class="upa-hours">
                        <i class="fas fa-clock"></i>
                        <span>${upa.horario}</span>
                    </div>
                    <div class="upa-services">
                        <h4>Serviços Oferecidos:</h4>
                        <ul>
                            ${servicosHTML}
                        </ul>
                    </div>
                    <div class="upa-actions">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${upa.coordenadas.lat},${upa.coordenadas.lng}" target="_blank" class="upa-button">Como Chegar</a>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }
}

// Escuta o que o usuário digita
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const query = this.value.trim();
        if (query === '') {
            createUpaCards();
        } else {
            filterUpas(query);
        }
    });
});
